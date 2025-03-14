import React from 'react';
import ani from '/Group 36.svg';
import { motion } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa6';
import { BouncingSVG, Arrow, Line, Line1, Line2 } from './BouncingSVG';

function Home() {
  return (
    <section id="home">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-[50px] w-full flex flex-col justify-center items-center absolute h-dvh top-0 left-0 right-0 overflow-x-hidden"
      >
        <div className="flex flex-col-reverse gap-x-30 relative m-auto md:flex-row justify-center items-center">
          {/* Text Content */}
          <div className="text-white mt-10 md:w-500px flex flex-col justify-center max-w-[580px] m-auto p-4">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl font-semibold tracking-wide"
            >
              Divya Inapakurthi
            </motion.h1>
            <motion.h3
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-500 text-3xl font-[300] pt-1"
            >
              Software Developer
            </motion.h3>
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="tracking-wide font-[300] text-[rgb(229,231,235)] pt-7"
            >
              I am a passionate software developer with a strong background in{' '}
              <p className="relative inline-block">
                full-stack development, <Arrow />
              </p>{' '}
              dedicated to building{' '}
              <span className="relative">
                responsive, <Line />
              </span>{' '}
              <span className="relative">
                scalable, <Line1 />
              </span>{' '}
              and{' '}
              <span className="relative">
                user-centric <Line2 />
              </span>{' '}
              solutions that bridge technology and user needs.
            </motion.span>
            <div className="flex mt-5">
              {/* Contact Me Button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white tracking-wider bg-[#C778DD] mt-5 rounded px-8 py-2 font-semibold hover:cursor-pointer hover:bg-[#8d569c] transform transition duration-500 z-60"
              >
                <a href="#contact">Contact Me</a>
              </motion.button>
              {/* Resume Download Button */}
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Divya Inapakurthi Resume.pdf"
                download="DivyaInapakurthi.pdf"
                className="text-white tracking-wider z-60 mt-5 rounded px-8 py-2 font-semibold hover:cursor-pointer flex items-center gap-2 bg-[#C778DD] hover:bg-[#8d569c] ml-4"
              >
                Resume
                <FaAngleRight fill="#fff" size={20} />
              </motion.a>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="my-10 absolute">
              <div className="w-36 h-36 rounded-full bg-gradient-to-r blur-3xl animate-pulse-slow sm:w-30 sm:h-30 from-purple-500 to-blue-500"></div>
            </div>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              src={ani}
              className="w-[200px] z-50 md:w-[340px] max-w-full"
              alt="not found"
            />
            <BouncingSVG />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;