import React from "react";

const Project = () => {
  return (
    <div className="text-white min-h-screen bg-black  py-12">
      <h1 className="text-center text-4xl font-bold mb-12">My Projects</h1>
      <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        <div className="bg-black border border-white rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Amazon Clone</h1>
          <div className="space-x-4">
            <a href="https://github.com/ivpankaj/clone" target="_blank" rel="noopener noreferrer">
              <button className="mt-5 mb-6 bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                Github
              </button>
            </a>
            <a href="https://amazeclone.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                Netlify
              </button>
            </a>
          </div>
        </div>

        <div className="bg-black border border-white rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Shortler</h1>
          <div className="space-x-4">
            <a href="https://github.com/ivpankaj/Shortler" target="_blank" rel="noopener noreferrer">
              <button className="mt-5 mb-6 bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                Github
              </button>
            </a>
            <a href="https://shortler.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                Netlify
              </button>
            </a>
          </div>
        </div>

        <div className="bg-black border border-white rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Cartler</h1>
          <div className="space-x-4">
            <a href="https://github.com/ivpankaj/cartler" target="_blank" rel="noopener noreferrer">
              <button className="mt-5 mb-6 bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                Github
              </button>
            </a>
            <a href="https://cartler.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                Netlify
              </button>
            </a>
          </div>
        </div>

        <div className="bg-black border border-white rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Doordesh</h1>
          <div className="space-x-4">
            <a href="https://github.com/ivpankaj/Doordesh" target="_blank" rel="noopener noreferrer">
              <button className="mt-5 mb-6 bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                Github
              </button>
            </a>
            <a href="https://doordesh.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
                Netlify
              </button>
            </a>
          </div>
        </div>

        <div className="bg-black border border-white rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Cheet</h1>
          <button className="mt-5 bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
            Upcoming
          </button>
        </div>

        <div className="bg-black border border-white rounded-3xl text-center p-6 transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-semibold mb-4">Paspost</h1>
          <button className="mt-5 bg-black border-2 border-gray-500 text-white rounded-3xl text-lg px-4 py-2 hover:bg-gray-100 hover:text-black">
            Upcoming
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
