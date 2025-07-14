import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Hiring from "./pages/Hiring";
import Vision from "./pages/Vision";
import CursorBackground from "./components/CursorBackground";

function App() {
  useEffect(() => {
    // Add dark theme to body
    document.body.classList.add('dark');
  }, []);

  return (
    <div className="App min-h-screen bg-black">
      <CursorBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;