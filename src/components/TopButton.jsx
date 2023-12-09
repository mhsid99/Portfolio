import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
//import "./TopButton.css"; // Create this CSS file for styling

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the button when scrolling beyond a certain point
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="bg-gray-800 p-2 rounded-full text-white shadow-md focus:outline-none hover:bg-gray-700"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
      </button>
    </div>
  );
}
