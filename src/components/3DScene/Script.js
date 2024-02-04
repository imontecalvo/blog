import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class Scene {
  constructor(aScene, aCamera, target = null, timeAnimation = null) {
    this.currentMount = null;
    this.renderer = new THREE.WebGLRenderer({ alpha: true });

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
      if (timeAnimation) {
        timeAnimation();
      }
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

    this.currentMount = mountRef.current;
    window.addEventListener("resize", resize);
    this.resize();
    this.currentMount.appendChild(this.renderer.domElement);
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
