import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Test from "./components/Test"; 
/*this is just a page to test the code, if successful, 
the same code is added to the actual components*/
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
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
            <Route path="/portfolio" element={<HomePage />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>

          
        </Router>
      )}
    </div>
  );
}
