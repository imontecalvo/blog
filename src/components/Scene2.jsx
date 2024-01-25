import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Scene} from "./Script";




const Scene2 = (props) => {
  const scene = new Scene(props.scene,props.camera, props.target);

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
  }, []);

  return <div ref={mountRef} style={{ width: "80%", height: "50vh", marginBottom:10, backgroundColor:"blue"}} />;
  //   return <div ref={mountRef} id="canvas-container"></div>;
};

export default Scene2;
