import { FaceOutlined, VerticalShades } from "@mui/icons-material";
import * as THREE from "three";
import vertexShader from "../glsl/main.vert";
import fragmentShader from "../glsl/main.frag";
import { randFloat } from "three/src/math/MathUtils";
import gsap from "gsap";


const Cover = () => {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x09090b);

  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const factor = 20;
  const nColumns = 16 * factor;
  const nRows = 9 * factor;
  const points = [];
  const initPoints = [];

  for (let i = 0; i < nRows; i++) {
    for (let j = 0; j < nColumns; j++) {
      points.push(...[j, i, 0]);
      initPoints.push(...[j-nColumns/2, i-nRows/2, randFloat(60,200)]);
    }
  }

  var vertices = new Float32Array(points);
  var initPositions = new Float32Array(initPoints);

  var geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute(
    "initPosition",
    new THREE.BufferAttribute(initPositions, 3)
  );
  geometry.center();

  const material = new THREE.ShaderMaterial({
    fragmentShader: fragShader,
    vertexShader: vertShader,
    uniforms: {
      uPointSize: { value: 2.5 },
      uTexture: { value: new THREE.TextureLoader().load("cover.png") },
      uNLines: { value: nRows },
      uNColumns: { value: nColumns },
      uProgress: { value: 0 },
    },
    transparent: true,
    depthTest: false,
    deptjWrite: false,
  });

  const element = new THREE.Points(geometry, material);
  scene.add(element);

  var axesHelper = new THREE.AxesHelper(10);
  scene.add(axesHelper);

  camera.position.set(0, 0, 70);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  const target = new THREE.Vector3(0, 0, 0);

  gsap.fromTo(
    material.uniforms.uProgress,
    { value: 0 },
    { value: 1, duration: 2.5, ease: "Power4.easeOut" }
  );

  return { scene, camera, target };
};

export default Cover;

const fragShader = `
uniform sampler2D uTexture;
uniform float uNLines;
uniform float uNColumns;
uniform float uProgress;
varying vec2 vTextureCoord;

float circle(vec2 uv, float border){
    float radius = 0.5;
    float dist = radius - length(uv - vec2(0.5));
    return smoothstep(0.0, border, dist);
}

void main(){
    vec2 uv = gl_PointCoord;
    uv.y *= 1.;
    uv /= vec2(uNColumns, uNLines);

    float texOffsetU = vTextureCoord.x / uNColumns;
    float texOffsetV = vTextureCoord.y / uNLines;

    uv += vec2(texOffsetU, texOffsetV);
    uv += vec2(0.5);

    vec4 texture = texture2D(uTexture, uv);
    gl_FragColor = texture;

    if (gl_FragColor.r < 0.8 ) discard;
    gl_FragColor.rgb = vec3(1.0);

    gl_FragColor.a *= circle(gl_PointCoord, 0.2);

    gl_FragColor.a *= uProgress;
}

`;

const vertShader = `
uniform float uPointSize;
uniform float uProgress;

varying vec2 vTextureCoord;

attribute vec3 initPosition;

void main(){
    #include <begin_vertex>
    transformed = initPosition + ((position - initPosition) * uProgress);

    #include <project_vertex>
    gl_PointSize = uPointSize;
    vTextureCoord = position.xy;
}
`;
