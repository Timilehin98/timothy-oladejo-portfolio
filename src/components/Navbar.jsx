import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = ["Home", "About", "Work", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">Timothy Oladejo</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
