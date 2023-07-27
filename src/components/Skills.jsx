import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/java-script.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/library.png";
import database from "../assets/database.png";
const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      name: html,
    },
    {
      id: 2,
      src: css,
      name: css,
    },
    {
      id: 3,
      src: javascript,
      name: javascript,
    },
    {
      id: 4,
      src: nodejs,
      name: nodejs,
    },
    {
      id: 5,
      src: reactjs,
      name: reactjs,
    },
    {
      id: 6,
      src: database,
      name: database,
    },
  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-800 to-black  text-white mx-auto w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6 ">Check out some of my skills here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px:0">
          {skills.map(({ id, src}) => (
            <div key={id}className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
