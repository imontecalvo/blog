import * as THREE from "three";

// const COLOR = 0xffd412

function linspace(start, end, numPoints) {
  const step = (end - start) / (numPoints - 1);
  return Array.from({ length: numPoints }, (_, index) => start + index * step);
}

const SDEjemplo1 = (lineColor) => {
  const COLOR = lineColor;

  function getInitCond() {
    const x = linspace(-5, 5, 15);
    const y = linspace(-5, 5, 15);

    let X_ic = [];
    let Y_ic = [];

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        if (i == 0 || i == x.length - 1 || j == 0 || j == y.length - 1) {
          X_ic.push(x[i]);
          Y_ic.push(y[j]);
        }
      }
    }

    return [X_ic, Y_ic];
  }

  function next(prevX, prevY) {
    const [a, b, c, d] = [0.1, 0.3, -1, 0];
    const x = a * prevX + b * prevY;
    const y = c * prevX + d * prevY;

    return [x, y];
  }

  //A partir de un punto inicial obtiene la trayectoria
  function getTrajectory(x_ic, y_ic) {
    const STEPS = 10; //Cantidad de veces que iteramos para obtener la trayectoria
    let x = x_ic;
    let y = y_ic;
    let t = 0;

    let X = [x_ic];
    let Y = [y_ic];
    let T = [t];

    for (let i = 0; i < STEPS; i++) {
      [x, y] = next(x, y); //Obtenemos el siguiente punto a partir del anterior
      t++;
      X.push(x);
      Y.push(y);
      T.push(t);
    }

    return [X, T, Y];
  }

  //Recibe un punto (x,y) de condicion inicial, calcula la trayectoria y la dibuja
  function drawLines(trajectory) {
    var geometry = new THREE.BufferGeometry();
    const [x_pos, y_pos, t_pos] = trajectory;

    var positions = new Float32Array(x_pos.length * 3);

    for (let i = 0; i < x_pos.length; i++) {
      positions[i * 3] = x_pos[i];
      positions[i * 3 + 1] = y_pos[i];
      positions[i * 3 + 2] = t_pos[i];
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    var material = new THREE.LineBasicMaterial({ color: COLOR });

    return new THREE.Line(geometry, material);
  }

  // Configuración de Three.js
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Calcular la trayectoria del atractor de Lorenz
  let [X_ic, Y_ic] = getInitCond();

  var [centerX, centerY, centerZ] = [0, 3, 0];

  for (let i = 0; i < X_ic.length; i++) {
    const trajectory = getTrajectory(X_ic[i], Y_ic[i]);
    const trajectoryLine = drawLines(trajectory);
    scene.add(trajectoryLine);
  }
  var axesHelper = new THREE.AxesHelper(10);
  scene.add(axesHelper);

  // Posición de la cámara centrada en el atractor
  camera.position.set(centerX, centerY, centerZ + 15);

  // Punto de interés de la cámara en relación con el sistema de coordenadas local
  camera.lookAt(new THREE.Vector3(centerX, centerY, centerZ));
  const target = new THREE.Vector3(centerX, centerY, centerZ);

  return { scene, camera, target };
};

export default SDEjemplo1;
