import React from "react";
import "./background.css";
import ThreeComponent from "./components/ThreeComponent";
import Scene from "./components/Scene";
import Scene2 from "./components/Scene2";
import EscenaPrueba from "./components/EscenaPrueba";
import LorenzScene from "./components/Lorenz";
import LineChart from "./components/LineChart";
import SDEjemplo1 from "./components/SDEjemplo1";
import SDEjemplo2 from "./components/SDEjemplo2";

function App() {
  // const escena = EscenaPrueba()
  const escena = LorenzScene();
  const escena2 = SDEjemplo1();
  // const data = [
  //   { x: 10, y: 10 },
  //   { x: 20, y: 20 },
  //   { x: 15, y: 15 },
  //   { x: 25, y: 25 },
  //   { x: 30, y: 30 },
  //   { x: 18, y: 18 },
  //   { x: 24, y: 24 },
  // ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <nav>
          <a href="#">Inicio</a>
        </nav>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "30px" }}
      >
        <h1 className="top-title">Entre Equilibrios y Transformaciones: </h1>
        <h1 className="title">Una inmersión en los </h1>
        <h1 className="title" style={{ marginLeft: "5%", fontWeight: 900 }}>
          Sistemas Dinámicos
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Scene2
          scene={escena.scene}
          camera={escena.camera}
          target={escena.target}
        />
        <h1>Texitooo</h1>
        {/* /* <ThreeComponent />
      <LineChart data={data} /> */}
        <Scene2
          scene={escena2.scene}
          camera={escena2.camera}
          target={escena2.target}
        />
      </div>
    </>
  );
}

export default App;
