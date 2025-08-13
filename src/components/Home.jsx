import React from "react";
import cafe from "../asssets/cafe.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'; // Importing the CSS file

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Hi! am Pritam👋🏻 
            <br />
            <span className="typewriter-container">
              <Typewriter
                words={['Full Stack Developer','Data Science']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
          Currently, am learning data science and Machine Learning.📊<br/>
          Always open to collaboration 🤝.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative w-2/3 md:w-full">
          <img
            src={cafe}
            alt="my profile"
            className="rounded-2xl mx-auto fixed-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;