import React from "react";
import portfolio1 from "../assets/portfolio1.jpg.png";
import portfolio2 from "../assets/portfolio2.jpg.png";

const Portfolio = () => {
  return (
    <section id="work" className="w-full bg-gray-100 py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
            Portfolio
          </h2>
          <p className="py-6">Take a look at some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {/* E-commerce Website */}
          <div className="shadow-md shadow-gray-500 rounded-lg">
            <img
              src={portfolio2}
              alt="E-commerce Website"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
              <p className="text-gray-700 text-sm mb-4">
                A modern and responsive online store built with HTML, CSS and Javascript.
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="https://timilehin98.github.io/e-commerceGroupProject/women.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-2 m-2 bg-blue-500 text-white text-center rounded hover:scale-105 duration-200"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/Timilehin98/e-commerceGroupProject.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-2 m-2 bg-gray-800 text-white text-center rounded hover:scale-105 duration-200"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* WordPress Webpage */}
          <div className="shadow-md shadow-gray-500 rounded-lg">
            <img
              src={portfolio1}
              alt="WordPress Webpage"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">WordPress Webpage</h3>
              <p className="text-gray-700 text-sm mb-4">
                A clean, SEO-friendly landing page created with Elementor on WordPress.
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="https://ensydneycity.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-2 m-2 bg-blue-500 text-white text-center rounded hover:scale-105 duration-200"
                >
                  View
                </a>
                
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
