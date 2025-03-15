import React from "react";
import { motion } from "framer-motion";
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
    <section id="projects" className="pt-20 w-screen">
      <div className="text-white text-center relative w-screen ">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={ani}
          alt="not found"
          className="absolute w-10 z-40 md:w-20 top-20 left-0"
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold m-0 p-0"
        >
          Projects
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-gray-400/50 mt-0"
        >
          What I've been working on
        </motion.h1>

        {/* Project 1: Fashion E-commerce Store */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center my-15 items-center group gap-x-30"
        >
          <div className="relative w-140 h-fit overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={store}
              className="w-140"
              alt="not found"
            />
            <div className="hidden md:flex absolute inset-0 w-full h-full justify-center items-center bg-neutral-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

          <div className="flex flex-col items-center my-3 relative">
            <div className="flex items-center justify-center group w-fit">
              <motion.h1
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center w-75 text-[#C778DD] hover:text-blue-500 font-bold text-2xl gap-2 transform transition duration-500 hover:cursor-pointer"
              >
                <a href="">Fashion E-commerce Store</a>
              </motion.h1>
              <span className="w-2 ml-1">
                <CiShare1 className="md:hidden mt-1 group-hover:text-blue-500 text-[#C778DD] md:group-hover:block" />
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[17px] text-gray-300 my-3 tracking-wider leading-8 md:w-[440px] w-[80%] p-2 text-center"
            >
              A complete fashion e-commerce store with MERN stack from scratch. Includes user auth with JWT, shopping cart with backend inventory management.
            </motion.p>
            <div className="flex justify-center gap-2 w-full">
              {[ReactIcon, NodeIcon, ExpressIcon, MongoIcon, ReduxIcon, TailwindcssIcon].map((Icon, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-fit p-1 bg-neutral-700/30 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
                >
                  <Icon />
                </motion.span>
              ))}
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden ml-20 p-2.5 bg-neutral-700/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2: Leader Board using SSE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap md:flex-row-reverse justify-center my-15 group items-center gap-x-30"
        >
          <div className="relative w-140 h-fit overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={leaderboard}
              className="w-140"
              alt="not found"
            />
            <div className="hidden md:flex absolute inset-0 w-full h-full justify-center items-center bg-neutral-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              src={ani1}
              alt="not found"
              className="absolute w-10 z-40 md:w-15 top-50 right-0"
            />
            <div className="flex items-center justify-center group w-fit">
              <motion.h1
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center w-70 text-[#C778DD] hover:text-blue-500 font-bold text-2xl gap-2 transform transition duration-500 hover:cursor-pointer"
              >
                <a href="">Leader Board using SSE</a>
              </motion.h1>
              <span className="w-2 ml-1">
                <CiShare1 className="md:hidden mt-1 group-hover:text-blue-500 text-[#C778DD] md:group-hover:block" />
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[17px] text-gray-300 my-3 tracking-wider leading-8 w-110 text-center"
            >
              Developed a dynamic leaderboard for a Game of Thrones-themed score tracker using Server-Sent Events (SSE) to enable real-time score updates.
            </motion.p>
            <div className="flex justify-center gap-2 w-full">
              {[ReactIcon, TailwindcssIcon, ExpressIcon, NodeIcon].map((Icon, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-fit p-1 bg-neutral-700/30 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
                >
                  <Icon />
                </motion.span>
              ))}
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden ml-20 p-2.5 bg-neutral-700/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3: Tic Tac Toe using WebSockets */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center my-15 items-center group gap-x-30"
        >
          <div className="relative w-140 h-fit overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={game}
              className="w-140"
              alt="not found"
            />
            <div className="hidden md:flex absolute inset-0 w-full h-full justify-center items-center bg-neutral-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

          <div className="flex flex-col items-center my-3">
            <div className="flex items-center justify-center group w-fit">
              <motion.h1
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="title flex items-center w-85 text-[#C778DD] hover:text-blue-500 font-bold text-2xl gap-2 transform transition duration-500 hover:cursor-pointer"
              >
                <a href="">Tic Tac Toe using WebSockets</a>
              </motion.h1>
              <span className="w-2 ml-1">
                <CiShare1 className="md:hidden mt-1 title:hover:text-blue-500 group-hover:text-[#C778DD] text-[#C778DD] md:group-hover:block" />
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[17px] text-gray-300 my-3 tracking-wider leading-8 w-110 text-center"
            >
              Built a real-time Tic Tac Toe game using WebSockets, React, and Tailwind CSS. It supports multiplayer gameplay, rematch options, and has a responsive design for a smooth user experience.
            </motion.p>
            <div className="flex justify-center gap-2 w-full">
              {[ReactIcon, NodeIcon, ExpressIcon, TailwindcssIcon].map((Icon, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-fit p-1 bg-neutral-700/30 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
                >
                  <Icon />
                </motion.span>
              ))}
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden ml-20 p-2.5 bg-neutral-700/50 rounded-full hover:bg-neutral-700/70 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;