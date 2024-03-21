import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const aelert = () => {
    alert("Resume will be available soon");
  };
  return (
    <>
      <div className="home">
        {/* <div className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/" className="navt">
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navt">
                  About
                </Link>
              </li>
              <li>
                <Link to="/project" className="navt">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="navt">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div> */}

        <div className="img">
          <img
            src="https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-6/432061966_1714606289033424_4451406793968797842_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=etgO4X1owSEAX9btBL5&_nc_ht=scontent.fdel3-2.fna&oh=00_AfAC4ftB8haoaP53mwHI4LkFhuvMJtj9pH4zH8mDI0S5Jg&oe=65FED75C"
            width="98%"
            height="98%"
            
            alt=""
          />
        </div>

        <div className="front">
          <h1>Hello Everyone! </h1>
          <h2>
            This is <span>Pankaj</span>
          </h2>
          <p>
            A Computer Science engineer driven by my passion for <br />
            technology and innovation. With a solid foundation in computer{" "}
            <br />
            science, I thrive on tackling challenging problems and creating{" "}
            <br />
            forward-thinking solutions. My expertise encompasses diverse areas{" "}
            <br />
            within the field, including software development, algorithms, and{" "}
            <br />
            system architecture. I am deeply committed to ongoing learning and{" "}
            <br />
            staying abreast of the latest advancements in technology. <br />
          </p>

          <div className="social-media">
            <button onClick={aelert} className="follow-me">
              Download Resume
            </button>

            <p>Follow me on social medias!</p>
            <div className="links">
              <a href="https://www.instagram.com/ivpankaj?igsh=ejF1eHhyNHhmdjln">
                <button className="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/ivpankaj15?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <button className="Linkdin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </a>
              <a href="https://github.com/ivpankaj">
                <button className="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
