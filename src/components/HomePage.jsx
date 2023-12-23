import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import codingpfp from 'D:/Projects/Portfolio/src/assets/test2.gif';
import { motion } from "framer-motion";


import "./SocialMediaIcons.css";

export default function HomePage() {

  const textAnimation={
    hidden:{opacity:0, x:-100}, // Initial state (hidden)
    visible:{opacity:1, x: 0, transition:{duration:0.5}},// Visible state
  };

  const gifAnimation={
    hidden:{opacity:0, x:100 }, // Initial state (hidden)
    visible:{opacity:1, x:0, transition:{duration:0.5}}, // Visible state
};

  return (
    <section id="about" className="flex-grow">
      <div className="bg-white wrapper justify-center flex flex-col items-center py-12">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-center"> {/* Adjusted the alignment for mobile */}
          <motion.div
            className="md:w-1/2 md:ml-10"
            initial="hidden"
            animate="visible"
            variants={gifAnimation}
          >
            <img src={codingpfp} alt="GIF" />
          </motion.div>
          <motion.div
            className=" text-black md:w-1/2 text-center md:text-left ml-6 md:ml-9"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
          >
              <h1 className="title-font sm:text-2xl text-xl mb-2 font-medium " style={{ fontFamily: "Roboto"}}>
                Hello World,
              </h1>
              <h1 className="title-font sm:text-7xl text-2xl mb-4 font-medium " style={{ fontFamily: "Roboto"}}> {/* Reduced the text size */}
                I'm Hamza Siddiqui
              </h1>
              <p className="title-font sm:text-xl text-xl mb-4 font-medium" style={{ fontFamily: "Raleway"}}>{/* Reduced the text size */}
              Passionate and adaptable developer with a strong technical background, I am always eager to embrace new 
              technologies and thrive on the challenges of problem-solving along with enthusiasm for the creative process 
              drive to transform ideas into practical solutions.
              <br/>
              <br/>
              Open to exciting opportunities that allow me to collaborate and grow.
              </p>
              
                <p className="text-xl font-medium mb-2 mt-6" style={{ fontFamily: "Roboto", fontSize:"1.5rem" }}>
                  Connect with me:
                </p>
                <div className="flex justify-center md:justify-start space-x-6"> {/* Adjusted spacing */}
                  <a
                    href="https://www.linkedin.com/in/mhsid99"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="social-icon text-3xl" // Reduced the icon size
                    />
                  </a>

                  <a
                    href="https://github.com/mhsid99"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="social-icon text-3xl" // Reduced the icon size
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/_.hamzasiddiqui/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="social-icon text-3xl" // Reduced the icon size
                    />
                  </a>
                  <a
                    href="mailto:mhsid99@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="social-icon text-3xl" // Reduced the icon size
                    />
                  </a>
                </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}