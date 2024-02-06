import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Scene } from "./Script";

//Config = {target, timeAnimation, orbitControls}
const ThreeJSScene = (props) => {
  const heigth = props.height ?? "50vh";
  const config = props.config ?? {};

  const scene = new Scene(props.scene, props.camera, config);

  const mountRef = useRef(null);
  // makeScene(props.scene,props.camera, props.target);
  useEffect(() => {
    // mountScene(mountRef);
    scene.mount(mountRef);

    //Clean up the scene
    return () => {
      // unmountScene();
      scene.unmount();
    };
  }, [props.scene, props.camera, props.target]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: heigth,
        marginBottom: 10,
        marginBottom:0,
        // backgroundColor:"violet"
      }}
    />
  );
};

export default ThreeJSScene;
