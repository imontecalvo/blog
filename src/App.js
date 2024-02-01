import React from "react";
import "./background.css";
import Post from "./components/Post/Post.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import { useTheme } from "./ThemeProvider.jsx";
import PostPage from "./pages/PostPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
