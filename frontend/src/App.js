import React, { useEffect, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useGtagPageview } from "./hooks/useGtagPageview";
// Lazy load large page components for code splitting
const Homepage = React.lazy(() => import("./pages/Homepage"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Hiring = React.lazy(() => import("./pages/Hiring"));
const Vision = React.lazy(() => import("./pages/Vision"));
const Preorder = React.lazy(() => import("./pages/Preorder"));
// import EnhancedCursorBackground from "./components/EnhancedCursorBackground";

const ScrollToTop = React.memo(function ScrollToTop() {
  const location = useLocation();
  
  // Track pageviews with Google Analytics
  useGtagPageview();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // No cleanup needed
  }, [location]);
  return null;
});

const App = React.memo(function App() {
  useEffect(() => {
    document.body.classList.add('dark');
    // No cleanup needed for theme
  }, []);

  return (
    <div className="App min-h-screen bg-black">
      {/* <EnhancedCursorBackground /> Removed from global */}
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/preorder" element={<Preorder />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
});

export default App;