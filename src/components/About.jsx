import React from "react";

 const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xlmt-20">
        I'm a final year Computer Science student at Maharaja Agrasen Institute of Technology, specializing in web development with React.js and Node.js. Proficient in C++ and C, I enjoy solving complex problems using data structures and have completed around 300 problems on LeetCode. Coding is not just a skill for me, it's a passion. I love turning ideas into reality through code and continually strive to learn and adapt to new technologies. Let's connect and build amazing things together! Welcome to my portfolio site.
        </p>
        <br/>
        <p className="text-xlmt-20">
        In addition to my academic journey, I have honed my skills in various technologies, including CSS, HTML, JavaScript, React, Node.js, Express.js, and MongoDB. With a strong foundation in these tools, I have successfully developed projects that showcase my abilities. Notably, I created an Ecommerce dashboard, leveraging the MERN stack, providing seamless admin operations like updating, adding, deleting, and viewing products. Additionally, I built a Netflix clone using React.js and the TMDB API to fetch and display movie data. These projects exemplify my passion for web development and my dedication to crafting practical and innovative solutions.
        </p>
      </div>
    </div>
  );
};
export  default About;