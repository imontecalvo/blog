import * as THREE from "three";

const LorenzScene = () => {
  function calcularAtractorLorenz(sigma, rho, beta, dt, pasos) {
    var x = [0];
    var y = [1];
    var z = [1.05];

    for (var i = 0; i < pasos; i++) {
      var dx = sigma * (y[i] - x[i]);
      var dy = x[i] * (rho - z[i]) - y[i];
      var dz = x[i] * y[i] - beta * z[i];

      x.push(x[i] + dt * dx);
      y.push(y[i] + dt * dy);
      z.push(z[i] + dt * dz);
    }

    return { x: x, y: y, z: z };
  }

  // Parámetros del atractor de Lorenz
  var sigma = 10;
  var rho = 28;
  var beta = 8 / 3;
  var dt = 0.01;
  var pasos = 5000;

  // Calcular la trayectoria del atractor de Lorenz
  var atractorLorenz = calcularAtractorLorenz(sigma, rho, beta, dt, pasos);

  // Calcular el centro del atractor
  var centroX =
    (Math.max(...atractorLorenz.x) + Math.min(...atractorLorenz.x)) / 2;
  var centroY =
    (Math.max(...atractorLorenz.y) + Math.min(...atractorLorenz.y)) / 2;
  var centroZ =
    (Math.max(...atractorLorenz.z) + Math.min(...atractorLorenz.z)) / 2;

  // Configuración de Three.js
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Crear la geometría y el material para la línea del atractor
  var geometry = new THREE.BufferGeometry();
  var positions = new Float32Array(atractorLorenz.x.length * 3);

  for (var i = 0; i < atractorLorenz.x.length; i++) {
    positions[i * 3] = atractorLorenz.x[i];
    positions[i * 3 + 1] = atractorLorenz.y[i];
    positions[i * 3 + 2] = atractorLorenz.z[i];
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  var material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

  // Crear la línea del atractor
  var atractorLine = new THREE.Line(geometry, material);
  scene.add(atractorLine);

  // Crear ejes X, Y, Z
  var axesHelper = new THREE.AxesHelper(10);
  scene.add(axesHelper);

  // Posición de la cámara centrada en el atractor
  camera.position.set(centroX, centroY, centroZ + 30);

  // Punto de interés de la cámara en relación con el sistema de coordenadas local
  camera.lookAt(new THREE.Vector3(centroX, centroY, centroZ));
  const target = new THREE.Vector3(centroX, centroY, centroZ);

  return { scene, camera, target };
};

export default LorenzScene;
