import React from "react";

// TODO 1: Import BrowserRouter, Routes, Route from react-router-dom

import Navbar from "./components/Navbar";

// TODO 2: Import all pages (Home, About, Contact)

function App() {
  return (
    <div>
      {/* TODO 3: Wrap everything inside BrowserRouter */}

      <Navbar />

      {/* TODO 4: Replace this with Routes */}
      {/* 
        Create routes:
        "/" → Home
        "/about" → About
        "/contact" → Contact
      */}

    </div>
  );
}

export default App;
