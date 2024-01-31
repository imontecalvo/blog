import { useState } from "react";
import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "../../ThemeProvider";
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

  return (
    <div className="navbar">
      <nav style={{ marginLeft: "10px" }}>
        <a href="#">Inicio</a>
      </nav>
      <button
        onClick={changeTheme}
        style={{
          marginRight: "20px",
          border: "0px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "rgba(0,0,0,0)",
          color: fgColor,
        }}
      >
        {theme === "light" ? <MoonStar size={24} /> : <Sun size={24} />}
      </button>
    </div>
  );
};

export default NavBar;
