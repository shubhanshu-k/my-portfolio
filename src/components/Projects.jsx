import React from "react";
import Ecommerce from "../assets/Ecommerce.png";
import Todo from "../assets/Todo.jpg";
import Portfolio from "../assets/portfolio.jpg";
import Netflix from "../assets/Netflix.png";
const Projects = () => {
  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="4xl font-bold inline border-b-4 border-gray-500"> Projects</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-2 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={Ecommerce} alt="" className="rounded-md duration-200 hover:scale-105"></img>
            <div className="flex items-center justify-center">
              <h5 className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">heading</h5>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
