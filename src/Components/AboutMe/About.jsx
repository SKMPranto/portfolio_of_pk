import React from "react";

const About = () => {
  return (
    <div className="bg-base-200 lg:w-[80%] p-5 lg:p-20 mx-auto my-15 rounded-2xl border border-base-300">
      <div className="bg-white p-2 lg:p-10 text-center border rounded-2xl">
        <h3 className="text-black text-4xl lg:text-5xl mb-3">About Me</h3>
        <p className="text-gray-500 lg:text-lg">
          Hi, I'm Shovan Kumar Mandol Pranto — a MERN Stack Developer from
          Bangladesh 🇧🇩. I'm passionate about building modern, user-friendly,
          and scalable web applications that make a real impact. I love turning
          ideas into digital experiences using technologies like React, Node.js,
          Express, and MongoDB. Currently, I’m focused on creating full-stack
          projects, improving UI/UX, and learning next-generation web
          technologies. <br /> 💡 Let’s connect to collaborate on something
          amazing!
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          <div>
            <h2 className="text-gray-500">Name :</h2>
            <h1 className="text-sm font-bold ">Shovan Kumar Mandol Pranto</h1>
          </div>
          <div>
            <h2 className="text-gray-500">Email :</h2>
            <h1 className="text-sm font-bold ">prantokumar3463@gmail.com</h1>
          </div>
          <div>
            <h2 className="text-gray-500">Date of Birth :</h2>
            <h1 className="text-sm font-bold ">21 March 2005</h1>
          </div>
          <div>
            <h2 className="text-gray-500">From :</h2>
            <h1 className="text-sm font-bold ">Dhaka, Bangladesh</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
