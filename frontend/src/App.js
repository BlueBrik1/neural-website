import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CursorBackground from "./components/CursorBackground";

function App() {
  useEffect(() => {
    // Add dark theme to body
    document.body.classList.add('dark');
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <CursorBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;