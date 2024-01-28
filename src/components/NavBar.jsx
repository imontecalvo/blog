import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button"

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {visible ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(240, 240, 240, 0.8)",
            backdropFilter: "blur(2px)",
            zIndex: "1000",
            position: "fixed",
            width: "100%",
            top: 0,
            transition: "top 0.3s",
            padding: 8,
          }}
        >
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
              cursor: "pointer"
            }}
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
