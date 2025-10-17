import React from "react";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-10 lg:ml-20">
      {/* Text section */}
      <div className="text-center lg:text-left">
        <h2 className="text-2xl lg:text-4xl font-semibold">Hi, I'm</h2>

        <h1 className="text-4xl lg:text-6xl font-bold text-primary">
          Pranto Kumar, a
          <span className="text-secondary">
            <Typewriter
              options={{
                strings: ["MERN Stack Developer !!", "Passionate Web Developer !!"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
        </h1>
      </div>

      {/* Image section */}
      <div className="mb-5 lg:mb-0 mr-0 lg:mr-10">
        <img
          className="w-64 sm:w-80 lg:w-[400px]"
          src="https://i.ibb.co.com/0RWm7VBS/profilepic.png"
          alt="Pranto Kumar"
        />
      </div>
    </div>
  );
};

export default Banner;
