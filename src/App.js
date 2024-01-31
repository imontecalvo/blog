import React from "react";
import "./background.css";
import Post from "./components/Post/Post.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import { useTheme } from "./ThemeProvider.jsx";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="background-container">
        <NavBar />
        <Post />
      </div>
    </div>
  );
}

export default App;
