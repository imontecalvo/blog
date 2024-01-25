import * as THREE from "three";

const EscenaPrueba = () => {
  //Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 1000);

  //Camera
  camera.position.z = 5;
  scene.add(camera);

  //Cube
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );

  scene.add(cube);

  //Lights
  const ambientLight = new THREE.AmbientLight(0xff0000, 1);
  const pointLight = new THREE.PointLight(0xffffff, 2);
  pointLight.position.set(0, 2, 0);

  scene.add(ambientLight);
  scene.add(pointLight);

  return { scene, camera };
};

export default EscenaPrueba;
