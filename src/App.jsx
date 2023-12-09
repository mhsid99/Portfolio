import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/ContactPage";
import TopButton from "./components/TopButton";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PacmanLoader color={"#000000"} loading={true} size={50} />
        </div>
      ) : (
        <Router>
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <TopButton />
          </main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          
        </Router>
      )}
    </div>
  );
}
/*import React from 'react'

const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

export default App*/