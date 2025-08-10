import React, { useState, useEffect, useRef } from "react";
import logo from "/name.png";
import { FiGithub, FiLinkedin, FiInstagram, FiCodepen } from "react-icons/fi"; // Import icons
import {Hash} from './BouncingSVG'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Intersection Observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`bg-neutral-900/50 backdrop-blur-md z-50 fixed p-4 w-full ${
        isOpen ? "h-full" : ""
      } md:h-fit m-auto`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold w-19">
          <img src={logo} alt="not found" />
        </div>
 
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
                <span className="flex flex-row items-center justify-center gap-1 ">
             <Hash/> <span className="">{link.charAt(0).toUpperCase() + link.slice(1) }</span>
              </span>
               {/* {link.charAt(0).toUpperCase() + link.slice(1)} */}
              {activeLink === link && (
                <span className="absolute left-4/7 transform -translate-x-1/2 bottom-0 w-1.5 h-1.5 bg-white rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex space-x-7">
          <a
            href="https://github.com/Divya6265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9ca3af]"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/divya-inapakurthi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9ca3af]"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="https://instagram.com/divya.inapakurthi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9ca3af]"
          >
            <FiInstagram size={18} />
          </a>
          <a
            href="https://codepen.io/divya-inapakurthi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#9ca3af]"
          >
            <FiCodepen size={20} />
          </a>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col text-center space-y-4 pt-20">
          {["home", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`text-[#9ca3af] hover:text-gray-400/50 p-6 text-xl relative ${
                activeLink === link ? "active font-semibold text-white hover:text-white" : ""
              }`}
              onClick={() => {
                handleLinkClick(link);
                toggleMenu();
              }}
            >
              <span className="flex flex-row items-center justify-center gap-1 ">
             <Hash/> <span className="">{link.charAt(0).toUpperCase() + link.slice(1) }</span>
              </span>
              {activeLink === link && (
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1.5 h-1.5 bg-white rounded-full"></span>
              )}
            </a>
          ))}

          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/Divya6265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/divya-inapakurthi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://instagram.com/divya.music_lvr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ca3af]"
            >
              <FiInstagram size={18} />
            </a>
            <a
              href="https://codepen.io/divya-inapakurthi"
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