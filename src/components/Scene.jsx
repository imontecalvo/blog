import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const Scene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    //Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );

    camera.position.z = 5;

    scene.add(camera);

    //Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    //Cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({color: 0xffffff})
    );

    scene.add(cube);

    //Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    //Resize
    const handleResize = () => {
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    //Lights
    // const light = new THREE.PointLight(0xf123df, 1);
    // light.position.set(0, 0, 5);

    const ambientLight = new THREE.AmbientLight(0xff0000, 1);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(0, 2, 0);
    
    
    // scene.add(light);
    scene.add(ambientLight);
    scene.add(pointLight);




    //Render the scene
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    //Clean up the scene
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100%", height: "100vh" }}>
      <h1>Hola mundo</h1>
    </div>
  );
};

export default Scene;
