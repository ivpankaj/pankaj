import React from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const showAlert = () => {
    alert("Resume will be available soon");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-12">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl px-6">
        <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
          <img
            src="/pankaj.png"
            alt="Pankaj"
            className="w-72 h-72 rounded-full border-4 border-white shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2 px-4">
          <h1 className="text-5xl text-white font-bold">Hello Everyone!</h1>
          <h2 className="text-3xl text-white font-semibold mt-2">
            I am <span className="text-red-500">Pankaj</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            A Computer Science engineer driven by a passion for technology and
            innovation. I specialize in software development, algorithms, and
            system architecture. I am always eager to learn and stay updated
            with the latest in tech.
          </p>

          <div className="flex flex-col items-center md:items-start mt-6">
            <button
              onClick={showAlert}
              className="bg-red-500 text-white rounded-full px-6 py-3 mb-6 shadow-md hover:bg-red-600 transition-transform transform hover:scale-105"
            >
              Download Resume
            </button>

            <p className="text-white mb-3">Connect with me on:</p>
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/ivpankaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl p-3 rounded-full bg-red-500 hover:bg-red-600 transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/ivpankaj15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/ivpankaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl p-3 rounded-full bg-gray-800 hover:bg-gray-900 transition-transform transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
