import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaBootstrap, FaGitAlt, FaMailchimp } from 'react-icons/fa';
import { SiTailwindcss, SiContentful } from 'react-icons/si';
import { FiImage } from 'react-icons/fi';
const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
    { name: 'Figma', icon: <FaFigma size={40} className="text-pink-500" /> },
    { name: 'Photoshop', icon: <FiImage size={40} className="text-blue-600" /> },
    { name: 'Mailchimp', icon: <FaMailchimp size={40} className="text-yellow-600" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-600" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
    { name: 'Content Writing', icon: <SiContentful size={40} className="text-blue-400" /> }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
