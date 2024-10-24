import React from "react";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaCode, 
  FaUniversity, 
  FaBriefcase, 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaJava, 
  FaDatabase, 
  FaCuttlefish, 
  FaCss3Alt 
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  return (
    <div className="about min-h-screen text-white px-5 md:px-20 py-10 bg-black">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">About Me</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        {/* Left Section */}
        <div className="img2 w-full md:w-1/3 border-2 border-white rounded-3xl p-8 mb-10 md:mb-0">
          <h2 className="text-center text-3xl md:text-4xl mb-6 font-semibold">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <FaLaptopCode className="mr-2 text-blue-500" /> Full-Stack Development
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-lg">
                <li><FaReact className="inline mr-2 text-cyan-400" />React Js</li>
                <li><FaDatabase className="inline mr-2 text-green-500" />Mongo DB</li>
                <li><FaJs className="inline mr-2 text-yellow-500" />Express Js</li>
                <li><TbBrandNextjs className="inline mr-2 text-white" />Next Js</li>
                <li><FaNodeJs className="inline mr-2 text-green-500" />Node Js</li>
                <li><FaCss3Alt className="inline mr-2 text-blue-500" />Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <FaMobileAlt className="mr-2 text-purple-500" /> App Development
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-lg">
                <li><FaReact className="inline mr-2 text-cyan-400" />React Native</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold flex items-center">
                <FaCode className="mr-2 text-yellow-400" /> Programming Languages
              </h3>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-lg">
                <li><FaJs className="inline mr-2 text-yellow-300" />Javascript</li>
                <li><FaCuttlefish className="inline mr-2 text-blue-500" />C++</li>
                <li><FaJava className="inline mr-2 text-red-500" />Java</li>
                <li><FaJs className="inline mr-2 text-blue-400" />Typescript</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="intro w-full md:w-2/3 border-2 border-white rounded-3xl p-8 ml-4">
          <p className="text-lg mb-6 leading-relaxed">
            Born in Kushinagar, I came from a decent and cultural family.
            I was brought up in Greater Noida. Apart from having a deep interest
            in technology, I also love to watch movies in my free time.
          </p>

          <div className="education mb-8">
            <h2 className="text-3xl md:text-4xl mb-4 font-semibold flex items-center">
              <FaUniversity className="mr-2 text-red-500" /> Education
            </h2>
            <ul className="list-none space-y-3">
              <li className="text-xl">
                <span className="font-bold">Dr. A.P.J Abdul Kalam Technical University</span> -
                <span className="text-red-500"> B.Tech in Computer Science Engineering</span>
              </li>
              <li className="text-xl">
                <span className="font-bold">Shaiffali Public School, Dadri</span> -
                <span className="text-red-500"> Senior Secondary School</span>
              </li>
              <li className="text-xl">
                <span className="font-bold">Uma Public School, Greater Noida</span> -
                <span className="text-red-500"> High School</span>
              </li>
            </ul>
          </div>

          <div className="education2">
            <h2 className="text-3xl md:text-4xl mb-4 font-semibold flex items-center">
              <FaBriefcase className="mr-2 text-yellow-400" /> Experience
            </h2>
            <ul className="list-none space-y-3">
              <li className="text-xl">DSA Trainee at IIMT College Of Engineering</li>
              <li className="text-xl">Advance Research Programmer at Cheet Tech Group By IIMT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
