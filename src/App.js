import React from "react";
import "./background.css";
import Post from "./components/Post/Post.jsx";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", backgroundColor:"violet" }}>
        <nav>
          <a href="#">Inicio</a>
        </nav>
      </div>
      <Post />
    </>
  );
}

export default App;
