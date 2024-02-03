import { FaceOutlined, VerticalShades } from "@mui/icons-material";
import * as THREE from "three";
import vertexShader from "../glsl/main.vert";
import fragmentShader from "../glsl/main.frag";
import { randFloat } from "three/src/math/MathUtils";
import gsap from "gsap";
import { useEffect } from "react";


const Cover = () => {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x09090b);

  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const factor = 35;
  const nColumns = 16 * factor;
  const nRows = 9 * factor;
  const points = [];
  const initPoints = [];

  for (let i = 0; i < nRows; i++) {
    for (let j = 0; j < nColumns; j++) {
      points.push(...[j, i, 0]);
      initPoints.push(...[j-nColumns/2, i-nRows/2, randFloat(120,400)]);
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
      uPointSize: { value: 2. },
      uTexture: { value: new THREE.TextureLoader().load("cover.png") },
      uNLines: { value: nRows },
      uNColumns: { value: nColumns },
      uProgress: { value: 0 },
      uTime : { value: 0},
      uCursorPos: { value: new THREE.Vector2(0, 0) },
    },
    transparent: true,
    depthTest: false,
    deptjWrite: false,
  });

  const element = new THREE.Points(geometry, material);
  scene.add(element);

  var axesHelper = new THREE.AxesHelper(10);
  scene.add(axesHelper);

  camera.position.set(0, 0, 120);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  const target = new THREE.Vector3(0, 0, 0);

  gsap.fromTo(
    material.uniforms.uProgress,
    { value: 0 },
    { value: 1, duration: 2.5, ease: "Power4.easeOut" }
  );


  const timeAnimation = ()=>{
    material.uniforms.uTime.value += 1;
  }

  const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(0.,0.);
const prevMouse = new THREE.Vector2(0.,0.);

// Agrega un listener para el evento de movimiento del ratón
window.addEventListener('mousemove', onMouseMove);

// Función que se ejecuta cuando se mueve el ratón
function onMouseMove(event) {
    prevMouse.x = mouse.x;
    prevMouse.y = mouse.y;

    // Calcula las coordenadas normalizadas del ratón
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // console.log(mouse.x, mouse.y)

    // Actualiza el raycaster con las coordenadas del ratón y la cámara
    raycaster.setFromCamera(mouse, camera);

    // Obtiene la intersección entre el rayo y los objetos en la escena
    const intersects = raycaster.intersectObject(element);

    if (intersects.length > 0) {
        // La posición del cursor en el espacio 3D es la posición de la intersección
        const cursorPosition = intersects[0].point;

        // Actualiza la uniforme con la nueva posición del cursor
        material.uniforms.uCursorPos.value.copy(cursorPosition);
        // material.uniforms.uCursorPosPrev.value.copy(cursorPosition);
    }
}
  return { scene, camera, target, timeAnimation};
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
#define EULER 2.71828

uniform float uPointSize;
uniform float uProgress;
uniform float uTime;
uniform vec3 uCursorPos;

varying vec2 vTextureCoord;

attribute vec3 initPosition;

void main() {
  #include <begin_vertex>
  transformed = initPosition + ((position - initPosition) * uProgress);


  transformed.z += sin(transformed.x *0.1 + uTime*0.03) * 1.;
  transformed.z += sin(transformed.y *0.1 + uTime*0.03) * 1.;

  float a = 2.4 / 150.0;
  float b = 1.7 / 150.0;

  float exp = -a * pow(transformed.x - uCursorPos.x, 2.0) - b * pow(transformed.y - uCursorPos.y, 2.0);
  float extrusionAmount = 5.0 * pow(EULER, exp);

  // Apply decay to extrusionAmount
  float extrusionDecay = 1.01;  // Add a decay factor

  // extrusionAmount *= pow(extrusionDecay, sin(0.03*uTime)*200.);
  extrusionAmount *= sin(0.03*uTime)*10.;

  transformed.z += extrusionAmount;

  #include <project_vertex>
  gl_PointSize = uPointSize;
  vTextureCoord = position.xy;
}


`;


// posActual = e^...
// posActual = max (posActual, posAnterior-f)