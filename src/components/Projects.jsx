import React from "react";
import store from "/pic.png";
import leaderboard from "/pic2.png";
import game from "/pic1.png";
import ani from '/Rectangle 25.svg';
import ani1 from '/Frame 37.svg';

import { CiShare1 } from "react-icons/ci";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 
import { ReactIcon, NodeIcon, ExpressIcon, MongoIcon, ReduxIcon, TailwindcssIcon } from "./Icons";
function Projects() {
  return (
    <section id="projects" className="pt-20">
    <div  className="text-white text-center relative">
        <img src={ani} alt="not found" className='absolute w-10 z-40 md:w-20 top-20 left-0' />
      
      <h1 className="text-3xl font-semibold m-0 p-0">Projects</h1>
      <h1 className="text-xl text-gray-400/50 mt-0">What I've been working on</h1>

      <div className="flex flex-wrap justify-center my-15 items-center group gap-x-30 ">
        <div className="relative w-140 h-fit overflow-hidden ">
          <img src={store} className="w-140" alt="not found" />

          <div className=" hidden md:flex absolute inset-0 w-full h-full justify-center items-center bg-neutral-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 p-4 bg-neutral-900/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaGithub size={30} className="text-white" />
            </a>
            <a
              href="https://your-live-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 p-4 bg-neutral-900/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaExternalLinkAlt size={30} className="text-white" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center my-3 relative  ">

          <div className="flex items-center justify-center group w-fit ">
            <h1 className="flex items-center w-75 text-[#C778DD]  hover:text-blue-500 font-bold text-2xl gap-2 transform transition duration-500 hover:cursor-pointer">
              <a href="">Fashion E-commerce Store</a>
            </h1>
            <span className="w-2 ml-1"> <CiShare1 className="md:hidden mt-1 group-hover:text-blue-500  text-[#C778DD] md:group-hover:block" /></span>
          </div>
          <p className="text-[17px] text-gray-300 my-3 tracking-wider leading-8 w-110 text-center">
            A complete fashion e-commerce store with MERN stack from scratch. Includes user auth with JWT, shopping cart with backend inventory management
          </p>
          <div className="flex justify-center gap-2 w-full">
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <ReactIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <NodeIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <ExpressIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <MongoIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <ReduxIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <TailwindcssIcon />
            </span>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className=" md:hidden ml-20 p-2.5 bg-neutral-700/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row-reverse justify-center my-15 group items-center gap-x-30 ">
        
        <div className="relative w-140 h-fit overflow-hidden  ">
          <img src={leaderboard} className="w-140" alt="not found" />

          <div className=" hidden md:flex absolute inset-0 w-full h-full justify-center items-center bg-neutral-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 p-4 bg-neutral-900/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaGithub size={24} className="text-white" />
            </a>
            <a
              href="https://your-live-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 p-4 bg-neutral-900/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaExternalLinkAlt size={24} className="text-white" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center my-3 relative">
        <img src={ani1} alt="not found" className='absolute w-10 z-40 md:w-15 top-50 right-0' />

          <div className="flex items-center justify-center group w-fit ">
            <h1 className="flex items-center w-70 text-[#C778DD] hover:text-blue-500 font-bold text-2xl gap-2 transform transition duration-500 hover:cursor-pointer">
              <a href=""> Leader Board using SSE</a>
            </h1>
            <span className="w-2 ml-1"> <CiShare1 className="md:hidden mt-1 group-hover:text-blue-500  text-[#C778DD] md:group-hover:block" /></span>
          </div>
          <p className="text-[17px] text-gray-300 my-3 tracking-wider leading-8 w-110 text-center">
            Developed a dynamic leaderboard for a Game of Thrones-themed score tracker using Server-Sent Events (SSE) to enable real-time score updates
          </p>
          <div className="flex justify-center gap-2 w-full">
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <ReactIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <TailwindcssIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <ExpressIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <NodeIcon />
            </span>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className=" md:hidden ml-20 p-2.5 bg-neutral-700/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center my-15 items-center group gap-x-30 ">
        <div className="relative w-140 h-fit overflow-hidden ">
          <img src={game} className="w-140" alt="not found" />

          <div className=" hidden md:flex absolute inset-0 w-full h-full justify-center items-center bg-neutral-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 p-4 bg-neutral-900/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaGithub size={24} className="text-white" />
            </a>
            <a
              href="https://your-live-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 p-4 bg-neutral-900/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaExternalLinkAlt size={24} className="text-white" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center my-3  ">
          <div className="flex items-center justify-center group w-fit ">
            <h1 className="title flex items-center w-85 text-[#C778DD]  hover:text-blue-500 font-bold text-2xl gap-2 transform transition duration-500 hover:cursor-pointer">
              <a href="">Tic Tac Toe using WebSockets</a>
            </h1>
            <span className="w-2 ml-1"> <CiShare1 className="md:hidden mt-1 title:hover:text-blue-500 group-hover:text-[#C778DD]  text-[#C778DD] md:group-hover:block" /></span>
          </div>
          <p className="text-[17px] text-gray-300 my-3 tracking-wider leading-8 w-110 text-center">
            Built a real-time Tic Tac Toe game using WebSockets, React, and Tailwind CSS. It supports multiplayer gameplay, rematch options, and has a responsive design for a smooth user experience.
          </p>
          <div className="flex justify-center gap-2 w-full">
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <ReactIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <NodeIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <ExpressIcon />
            </span>
            <span className="w-fit p-1 bg-neutral-700/30  rounded-full hover:bg-neutral-700/70 transition-colors duration-300">
              <TailwindcssIcon />
            </span>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className=" md:hidden ml-20 p-2.5 bg-neutral-700/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>


    </div>
    </section>
  );
}

export default Projects;