import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Scene } from "./Script";

const ThreeJSScene = (props) => {
  const heigth = props.height ?? "50vh";

  const scene = new Scene(props.scene, props.camera, props.target, props.timeAnimation);

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
      }}
    />
  );
};

export default ThreeJSScene;
