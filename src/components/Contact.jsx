import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black py-10">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="pb-8 text-center">
          <h2 className="text-4xl text-white font-bold inline border-b-4 border-blue-500">
            Contact
          </h2>
          <p className="py-6 text-white">Have a question or want to work together?</p>
        </div>

        <form
          action="https://formspree.io/f/xdkdwejk" 
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-gray-600">
          <p>Email: <a href="mailto:yourname@example.com" className="text-blue-600">oladejotimothy7@gmail.com</a></p>
          <p>Phone: +234 707 445 9556</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-6 space-x-6 text-2xl text-gray-600">
          <a href="https://www.linkedin.com/in/timothy-oladejo-133033217/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com/Timilehin98" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-800 transition" />
          </a>
          <a href="https://wa.me/2349167728384" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-500 transition" />
          </a>
          <a href="https://www.instagram.com/timzy_b/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
