import React from "react";
import HeroImage from "../assets/HeroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full justify-center items-center bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg max-auto flex flex-col items-center justify-center h-full
      mx-auto 
      px-4 md:flex-row">
        <div className="flex flex-col my- justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            A versatile developer specializing in MERN stack technology,
            complemented by my expertise in C++ and data structures. Currently
            in my final year, I am dedicated to crafting impactful web solutions
            and pushing the boundaries of my programming capabilities.
          </p>
          <div>
            <Link to="Projects" smooth duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="
              group-
              hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full
            my-6
          "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
