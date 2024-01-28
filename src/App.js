import React from "react";
import "./background.css";
import Post from "./components/Post/Post.jsx";
import NavBar from "./components/NavBar.jsx";
import "./App.css";


function App() {
  return (
    <div className="background-container">
      <NavBar />
      <Post />/
    </div>
  );
}

export default App;
