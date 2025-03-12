import React, { useState } from "react";
import logo from "/name.png";
import { FiGithub, FiLinkedin, FiInstagram, FiCodepen } from "react-icons/fi"; // Import icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={`bg-neutral-900/50 backdrop-blur-md  z-50 sticky p-4 md:max-w-[1000px] w-full ${
      isOpen ? 'h-full':'' }  md:h-fit m-auto`}>
      <div className="container  mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold w-19">
          <img src={logo} alt="not found" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <div className="w-8 h-8 flex flex-col justify-around">
              <div
                className={`h-[0.7px] w-full bg-white transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></div>
              <div
                className={`h-[0.7px] w-full bg-white transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`h-[0.7px] w-full bg-white transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex md:items-center space-x-8">
          {["home", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`text-[#9ca3af] hover:text-gray-400/50 p-3 relative ${
                activeLink === link ? "active font-semibold text-white hover:text-white" : ""
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              {/* Small dot for active link */}
              {activeLink === link && (
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1.5 h-1.5 bg-white rounded-full"></span>
              )}
            </a>
          ))}

        </div>
        
          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex  space-x-7">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiInstagram size={18} />
            </a>
            <a
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiCodepen size={20} />
            </a>
          </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden transition-all duration-500  ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col text-center space-y-4 pt-20">
          {["home", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`text-[#9ca3af] hover:text-gray-400/50 p-4 relative ${
                activeLink === link ? "active font-semibold text-white hover:text-white" : ""
              }`}
              onClick={() => {
                handleLinkClick(link);
                toggleMenu();
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              {/* Small dot for active link */}
              {activeLink === link && (
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1.5 h-1.5 bg-white rounded-full"></span>
              )}
            </a>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiInstagram size={18} />
            </a>
            <a
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiCodepen size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;