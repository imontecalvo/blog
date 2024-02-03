import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Scene } from "./Script";

const ThreeJSScene = (props) => {
  const scene = new Scene(props.scene, props.camera, props.target);

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
        height: "50vh",
        marginBottom: 10,
        // backgroundColor:"black"
      }}
    />
  );
};

export default ThreeJSScene;
