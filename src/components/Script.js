import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// var currentMount = null;
// var renderer = new THREE.WebGLRenderer();
// var camera = null;

// export const makeScene = (aScene, aCamera, target = null) => {
//   let scene = aScene;
//   camera = aCamera;

//   //Controls
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableDamping = true;
//   if (target) controls.target = target;

//   //Render the scene
//   const animate = () => {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//   };

//   animate();
// };

// //Resize
// const resize = () => {
//   if (camera) {
//     renderer.setSize(
//       currentMount.clientWidth / 2,
//       currentMount.clientHeight / 2
//     );
//     camera.aspect = currentMount.clientWidth / currentMount.clientHeight;

//     camera.updateProjectionMatrix();
//   }
// };

// //Mount scene
// export const mountScene = (mountRef) => {
//   currentMount = mountRef.current;
//   window.addEventListener("resize", resize);
//   resize();
//   currentMount.appendChild(renderer.domElement);

//   //Center the scene
//   currentMount.style.transform = "translate(25%, 0%)";
// };

// //Unmount scene
// export const unmountScene = () => {
//   console.log("unmounting");
//   renderer.dispose();
//   currentMount.removeChild(renderer.domElement);
//   window.removeEventListener("resize", resize);
// };

export class Scene {
  constructor(aScene, aCamera, target = null) {
    this.currentMount = null;
    this.renderer = new THREE.WebGLRenderer();

    this.scene = aScene;
    this.camera = aCamera;

    //Controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    if (target) controls.target = target;
    //Actualiza el controlador con el nuevo target
    controls.update();

    //Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  resize() {
    if (this.camera) {
      this.renderer.setSize(
        this.currentMount.clientWidth,
        this.currentMount.clientHeight
      );
      this.camera.aspect =
        this.currentMount.clientWidth / this.currentMount.clientHeight;

      this.camera.updateProjectionMatrix();
    }
  }

  mount(mountRef) {
    let scene = this;
    function resize() {
      if (scene.camera) {
        scene.renderer.setSize(
          scene.currentMount.clientWidth,
          scene.currentMount.clientHeight
        );
        scene.camera.aspect =
          scene.currentMount.clientWidth / scene.currentMount.clientHeight;

        scene.camera.updateProjectionMatrix();
      }
    }
    

    console.log("mount", this);
    this.currentMount = mountRef.current;
    window.addEventListener("resize", resize);
    this.resize();
    this.currentMount.appendChild(this.renderer.domElement);

    //Center the scene
    this.currentMount.style.transform = "translate(0%, 0%)";
  }

  unmount() {
    let scene = this;
    function resize() {
      if (scene.camera) {
        scene.renderer.setSize(
          scene.currentMount.clientWidth,
          scene.currentMount.clientHeight
        );
        scene.camera.aspect =
          scene.currentMount.clientWidth / scene.currentMount.clientHeight;

        scene.camera.updateProjectionMatrix();
      }
    }

    this.renderer.dispose();
    this.currentMount.removeChild(this.renderer.domElement);
    window.removeEventListener("resize", resize);
  }
}
