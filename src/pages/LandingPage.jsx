import ThreeJSScene from "../components/3DScene/Scene";
import Cover from "../components/Cover";
import SDEjemplo1 from "../components/SDEjemplo1";
import { useTheme } from "../ThemeProvider";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { SearchInput } from "../components/Mui.jsx";

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
          height="30vh"
          config={{target:cover.target, timeAnimation:cover.timeAnimation, orbitControls:false}}
        />
        <div className="container">
          <div className="retro-border">
            <p>Filtrar</p>
            <Input style={darkModeStyles} placeholder="Buscar"/>
          </div>
          {/* <PaginationBar /> */}
        </div>
      </div>
    </div>
  );
};

const darkModeStyles = {
  color: "white",
  backgroundColor: "#333",
  padding: "0px 10px",
};

export default LandingPage;
