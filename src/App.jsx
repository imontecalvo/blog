import React from "react";
import Post from "./components/Post/Post.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { useTheme } from "./ThemeProvider.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage2 from "./pages/LandingPage2.jsx";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/land2" element={<LandingPage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
