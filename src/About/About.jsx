import React from "react";
import "../About/About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <h1> About me </h1>

        <div className="intro">
        <p>
          Born in Kushinagar, I came from a descent and cultural family <br />
         I was brought up in Greater Noida <br />
          Appart having a deep interest in technology, I also love to <br />
          watch movies in my free time <br />
          </p>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li> Dr. A.P.J Abdul kalam Technical University - (<span>B.tech in Computer Science Engineering</span>)</li>
              <li>Shaiffali Public School, Dadri- (<span>Senior Secondary School</span>)</li>
              <li>Uma Public School, Greater Noida- (<span>High School</span>)</li>
            </ul>
          </div>
          <div className="education2">
            <h1>Experience</h1>
            <ul>
              <li>DSA Trainee at IIMT College Of Engineering</li>
              <li>Advance Research Programmer at Cheet Tech Group By IIMT</li>

            </ul>
          </div>

        </div>

        <div className="img2">
           <h1>Skills</h1>
           <ul>  Full-Stack Development
            <li>
              
              <li>React Js</li>
              <li>Mongo DB</li>
              <li>Express Js</li>
              <li>Next Js</li>
              <li>Node Js</li>
              <li>Tailwind CSS</li>
            </li>
           </ul>
           <ul>  App Development
            <li>
              
              <li>React Native</li>

            </li>
           </ul>
           <ul> Programming Languages
            <li>
              
              <li>Javascript</li>
              <li>C++</li>
              <li>Java</li>
              <li>Typescript</li>

            </li>
           </ul>
          </div>


        
      </div>
    </>
  );
};

export default About;
