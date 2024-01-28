import { useState, useEffect } from "react";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

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
            justifyContent: "center",
            backgroundColor: "rgba(240, 240, 240, 0.8)",
            backdropFilter: "blur(2px)",
            zIndex: '1000',
            position: "fixed",
            width: "100%",
            top: 0,
            transition: "top 0.3s",
            padding: 8,
          }}
        >
          <nav>
            <a href="#">Inicio</a>
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
