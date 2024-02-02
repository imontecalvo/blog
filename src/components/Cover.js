import { FaceOutlined, VerticalShades } from "@mui/icons-material";
import * as THREE from "three";

const Cover = () => {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const factor = 10;
  const nColumns = 16 * factor;
  const nRows = 9 * factor;
  const points = [];

  for (let i = 0; i < nRows; i++) {
    for (let j = 0; j < nColumns; j++) {
      points.push(...[j, i, 0]);
    }
  }

  var vertices = new Float32Array(points);

  var geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.center();

  const material = new THREE.PointsMaterial({ color: "red" });
  const element = new THREE.Points(geometry, material);
  scene.add(element);

  var axesHelper = new THREE.AxesHelper(10);
  scene.add(axesHelper);

  camera.position.set(0, 0, 30);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  const target = new THREE.Vector3(0, 0, 0);

  return { scene, camera, target };
};

export default Cover;
