import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa"; // Import React Icons

const Project = () => {
  return (
    <div className="text-white min-h-screen bg-black py-12">
      <h1 className="text-center text-4xl font-bold mb-12">My Projects</h1>
      <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-12">
        {/* Amazon Clone Project */}
        <div className="bg-black border border-red-500 rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Amazon Clone</h1>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/ivpankaj/clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mb-6 flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                <FaGithub className="mr-2" /> Github
              </button>
            </a>
            <a
              href="https://amazeclone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                <FaGlobe className="mr-2" /> Live Demo
              </button>
            </a>
          </div>
        </div>

        {/* Shortler Project */}
        <div className="bg-black border border-yellow-500 rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Shortler</h1>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/ivpankaj/Shortler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mb-6 flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                <FaGithub className="mr-2" /> Github
              </button>
            </a>
            <a
              href="https://shortler.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                <FaGlobe className="mr-2" /> Live Demo
              </button>
            </a>
          </div>
        </div>

        {/* Cartler Project */}
        <div className="bg-black border border-green-500 rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Cartler</h1>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/ivpankaj/cartler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mb-6 flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                <FaGithub className="mr-2" /> Github
              </button>
            </a>
            <a
              href="https://cartler.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                <FaGlobe className="mr-2" /> Live Demo
              </button>
            </a>
          </div>
        </div>

        {/* Doordesh Project */}
        <div className="bg-black border border-blue-500 to-red-500 rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Doordesh</h1>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/ivpankaj/Doordesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mb-6 flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                <FaGithub className="mr-2" /> Github
              </button>
            </a>
            <a
              href="https://doordesh.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                <FaGlobe className="mr-2" /> Live Demo
              </button>
            </a>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="bg-black border border-pink-500 rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Cheet</h1>
          <div className="flex justify-center">
            <button className="flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
              Upcoming
            </button>
          </div>
        </div>

        <div className="bg-black border border-gradient-to-r from-orange-400 to-yellow-500 rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Paspost</h1>
          <div className="flex justify-center">
            <button className="flex items-center justify-center bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
              Upcoming
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
