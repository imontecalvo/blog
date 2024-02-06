import { useState } from "react";
import { Sun, MoonStar, Home, Github } from "lucide-react";
import { useTheme } from "../../ThemeProvider";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./navbar-style.css";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  const DARK_COLOR = "rgba(9, 9, 11, 0.8)";
  const LIGHT_COLOR = "rgba(240, 240, 240, 0.8)";

  const [fgColor, setFgColor] = useState(
    theme === "dark" ? LIGHT_COLOR : DARK_COLOR
  );

  const changeTheme = () => {
    if (theme === "light") {
      setFgColor(LIGHT_COLOR);
    } else {
      setFgColor(DARK_COLOR);
    }

    toggleTheme();
  };

  const navigateToGithub = () => {
    window.open("https://github.com/imontecalvo", "_blank");
  };

  const buttonStyle = {
    border: "0px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    color: fgColor,
    backgroundColor: "rgba(0,0,0,0)",
  };

  return (
    <div className="navbar">
      <nav style={{ marginLeft: "10px" }}>
        <a
          href="/"
          style={{ display: "flex", alignItems: "center", color: fgColor }}
        >
          <Home size={24} />
        </a>
      </nav>
      <div style={{display:"flex", gap:"25px"}}>
        <button onClick={navigateToGithub} style={buttonStyle}>
          <GitHubIcon />
        </button>
        <button
          onClick={changeTheme}
          style={{
            ...buttonStyle,
            marginRight: "20px",
          }}
        >
          {theme === "light" ? <MoonStar size={24} /> : <Sun size={24} />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
