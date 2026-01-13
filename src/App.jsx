
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages import karo
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* About page route */}
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
};

export default App;








