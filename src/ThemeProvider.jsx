import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = (props) => {
  let defaultTheme = localStorage.getItem("theme");
  if (!defaultTheme) {
    defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  const [theme, setTheme] = useState(defaultTheme);
  localStorage.setItem("theme", theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
