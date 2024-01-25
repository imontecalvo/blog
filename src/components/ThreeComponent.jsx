import React, { useEffect } from 'react';
import { BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const ThreeComponent = () => {
  useEffect(() => {
    // Configuración de la escena Three.js
    const scene = new Scene();

    // Ajusta el tamaño del renderizador para que no ocupe toda la pantalla
    const renderer = new WebGLRenderer();
    // renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    const container = document.getElementById('canvas-container');
    container.appendChild(renderer.domElement);

    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Ajusta el tamaño del renderizador al cambiar el tamaño de la ventana
    const handleWindowResize = () => {
      const newWidth = window.innerWidth / 2;
      const newHeight = window.innerHeight / 2;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleWindowResize);

    // Limpia los recursos cuando el componente se desmonta
    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();

      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return <div id="canvas-container"></div>;
};

export default ThreeComponent;
