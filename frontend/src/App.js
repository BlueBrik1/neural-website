import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Hiring from "./pages/Hiring";
import Vision from "./pages/Vision";
import Preorder from "./pages/Preorder";
// import EnhancedCursorBackground from "./components/EnhancedCursorBackground";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {
  useEffect(() => {
    // Add dark theme to body
    document.body.classList.add('dark');
  }, []);

  return (
    <div className="App min-h-screen bg-black">
      {/* <EnhancedCursorBackground /> Removed from global */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/preorder" element={<Preorder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;