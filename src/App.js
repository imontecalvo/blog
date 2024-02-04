import React from "react";
import Post from "./components/Post/Post.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { useTheme } from "./ThemeProvider.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
