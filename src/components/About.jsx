import React from "react";
import profileImage from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
               src={profileImage}
              alt="Timothy Oladejo"
              className="w-72 h-72 object-cover rounded-lg shadow-xl mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Hi, I’m <span className="font-semibold">Timothy Oladejo</span> — a Frontend Developer, Digital Marketer, and Content Writer. I’m passionate about building beautiful and accessible web experiences that communicate clearly and perform seamlessly.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              With a background in content strategy and digital marketing, I bring a unique perspective to frontend development, ensuring every project is not just functional but also drives results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
