import { useState, useEffect } from "react";
import { Moon, Sun, MoonStar } from "lucide-react";
import { useTheme } from "../../ThemeProvider";
import "./navbar-style.css";

const NavBar = () => {
  const {theme, toggleTheme} = useTheme();

  const DARK_COLOR = "rgba(9, 9, 11, 0.8)";
  const LIGHT_COLOR = "rgba(240, 240, 240, 0.8)";

  // const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  // const [visible, setVisible] = useState(true);
  // const [theme, setTheme] = useState("dark");

  const [bgColor, setBgColor] = useState(LIGHT_COLOR);
  const [fgColor, setFgColor] = useState(DARK_COLOR);

  const changeTheme = () => {
    if (theme === "light") {
      setBgColor(DARK_COLOR);
      setFgColor(LIGHT_COLOR);

    } else {
      setBgColor(LIGHT_COLOR);
      setFgColor(DARK_COLOR);
    }

    toggleTheme();
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     const isVisible = prevScrollPos > currentScrollPos;

  //     setPrevScrollPos(currentScrollPos);
  //     setVisible(isVisible);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  return (
    // <div className={theme === "dark" ? "dark" : "light"}>
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
    // </div>
  );
};

export default NavBar;
