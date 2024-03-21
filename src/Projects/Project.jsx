import React from "react";
import "../Projects/Project.css";
const Project = () => {
  return (
    <div className="project">
      <h1>My Projects:</h1>
      <div className="project-section">
        <div className="project-d">
          <h1 className="amaz">Amazone Clone</h1>
          <a href="https://github.com/ivpankaj/clone"><button className="gthu">Github</button> <br /></a>
         <a href="https://amazeclone.netlify.app/"><button className="netlify">Netlify</button></a> 
        </div>
        <div className="project-d">
          <h1>Shortler</h1>
          <a href="https://github.com/ivpankaj/Shortler"><button className="gthu">Github</button> <br /></a>
         <a href="https://shortler.netlify.app/"> <button className="netlify">Netlify</button></a>
        </div>
        <div className="project-d">
          <h1>Cartler</h1>
          <a href="https://github.com/ivpankaj/cartler"><button className="gthu">Github</button> <br /></a>
          <a href="https://cartler.netlify.app/"><button className="netlify">Netlify</button></a>
        </div>
        <div className="project-d">
          <h1>Doordesh</h1>
          <a href="https://github.com/ivpankaj/Doordesh"><button className="gthu">Github</button> <br /> </a>
          <a href="https://doordesh.netlify.app/"><button className="netlify">Netlify</button></a>
        </div>
        <div className="project-d">
          <h1>Cheet</h1>
          <button className="upcoming">Upcoming</button>
        </div>
        <div className="project-d">
          <h1>Paspost</h1>
          <button className="upcoming">Upcoming</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
