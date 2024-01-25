import * as THREE from "three";

function linspace(start, end, numPoints) {
  const step = (end - start) / (numPoints - 1);
  return Array.from({ length: numPoints }, (_, index) => start + index * step);
}

const SDEjemplo2 = () => {
  function calcularTrayectoria(type) {
    if (type == 0) {
      var x = [10, 6, 3, 2, 1];
      var y = [28, 20, 15, 10, 5];
      var z = [10, 5, 3, 1, 0];
    } else {
      var x = [-10, -6, -3, -2, -1];
      var y = [-28, -20, -15, -10, -5];
      var z = [10, 5, 3, 1, 0];
    }

    return { x: x, y: y, z: z };
  }

  // Configuración de Three.js
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Función para crear y añadir una trayectoria a la escena
  function agregarTrayectoria(trayectoria, color) {
    var geometry = new THREE.BufferGeometry();
    var positions = new Float32Array(trayectoria.x.length * 3);

    for (var i = 0; i < trayectoria.x.length; i++) {
      positions[i * 3] = trayectoria.x[i];
      positions[i * 3 + 1] = trayectoria.y[i];
      positions[i * 3 + 2] = trayectoria.z[i];
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    var material = new THREE.LineBasicMaterial({ color: color });

    var line = new THREE.Line(geometry, material);
    scene.add(line);
  }

  // Ejemplo: Crear y añadir múltiples trayectorias
  var trayectoria1 = calcularTrayectoria(0);
  agregarTrayectoria(trayectoria1, 0x00ff00); // Verde

  var trayectoria2 = calcularTrayectoria(1);
  agregarTrayectoria(trayectoria2, 0xff0000); // Rojo

  // Ajustar posición de la cámara
  camera.position.z = 30;

  return { scene, camera };
};

export default SDEjemplo2;
