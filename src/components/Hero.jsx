// src/components/Hero.jsx
import React from "react";
import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-black">
      
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Timothy Oladejo
        </h1>
        <h2 className="text-2xl md:text-3xl text-indigo-600 font-semibold">
          Frontend Developer/ UI Designer/ <br/> Content Writer.
        </h2>
        <p className="text-white max-w-md">
          Blending code, creativity, and strategy to build user-friendly websites and impactful content.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
           href="https://wa.me/2349167728384"
            target="_blank"
            rel="noopener noreferrer"
              >
           <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition">
          Contact Me
          </button>
          </a>

          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition">
            View Work
          </button>

        </div>
      </div>

      
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-indigo-600">
          <img className="w-full h-full object-cover"
            src={profileImage}
            alt="Timothy Oladejo"
            
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
