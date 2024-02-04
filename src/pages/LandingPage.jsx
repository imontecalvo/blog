import ThreeJSScene from "../components/3DScene/Scene";
import Cover from "../components/Cover";
import SDEjemplo1 from "../components/SDEjemplo1";
import { useTheme } from "../ThemeProvider";

import "./landing_style.css";

const LandingPage = () => {
  const { theme } = useTheme();
  const cover = Cover(theme);

  return (
    <div className="landing-background">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <ThreeJSScene
          scene={cover.scene}
          camera={cover.camera}
          target={cover.target}
          timeAnimation={cover.timeAnimation}
          height="30vh"
        />
        <div className="container">
          <div className="retro-border">
            <p>Textoo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
