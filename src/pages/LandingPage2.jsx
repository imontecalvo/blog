import ThreeJSScene from "../components/3DScene/Scene";
import Cover from "../components/Cover2";
import { useTheme } from "../ThemeProvider";

import "./landing_style.css";

const LandingPage2 = () => {
  const { theme } = useTheme();
  const cover = Cover(theme);

  return (
    <div className="landing-background">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <ThreeJSScene
          scene={cover.scene}
          camera={cover.camera}
          height="20vh"
          config={{
            target: cover.target,
            timeAnimation: cover.timeAnimation,
            orbitControls: false,
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage2;