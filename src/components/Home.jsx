import React from 'react'
import ani from '/Group 36.svg'
import { motion } from "framer-motion"
import { FaAngleRight } from "react-icons/fa6";
import { BouncingSVG, Arrow, Line, Line1, Line2} from './BouncingSVG'
function Home() {

  return (
   <section id="home">
     <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}  className="pt-[50px] w-full flex flex-col justify-center items-center absolute h-dvh top-0 left-0 right-0 overflow-x-hidden">
      <div className='flex flex-col-reverse gap-x-30 relative m-auto md:flex-row justify-center items-center'>
        <div className='text-white mt-10 md:w-500px flex flex-col justify-center max-w-[580px] m-auto  p-4'>
          <h1 className='text-5xl font-semibold tracking-wide'>Divya Inapakurthi</h1>
          <h3 className='text-gray-500  text-3xl font-[300] pt-1'>Software Developer</h3>
          <span className='tracking-wide  font-[300] text-[rgb(229,231,235)] pt-7 '>I am a passionate software developer with a strong background in <p className='relative inline-block'>full-stack development, <Arrow /> </p>  dedicated to building <span className='relative'>responsive, <Line /> </span> <span className='relative'> scalable, <Line1 /> </span>  and <span className='relative'> user-centric <Line2 /> </span> solutions that bridge technology and user needs.</span>
          <div className='flex mt-5 '>
        <button className=' text-white tracking-wider bg-[#C778DD] mt-5 rounded px-8 py-2 font-semibold hover:cursor-pointer hover:bg-[#8d569c] transform transition duration-500 z-60'>
          <a href="#contact">Contact Me</a>
        </button> 
        <a
      href="/Divya Inapakurthi Resume.pdf" // Path to the file in the public folder
      download="DivyaInapakurthi.pdf" // Optional: Specify the downloaded file name
      className="text-white tracking-wider z-60 mt-5 rounded px-8 py-2 font-semibold hover:cursor-pointer flex items-center gap-2 "
    >
      Resume
      <FaAngleRight fill="#fff" size={20} />
    </a>
      </div>
        </div>
        <div className='relative'>
          <div class="my-10 absolute"><div class="w-36 h-36 rounded-full bg-gradient-to-r blur-3xl animate-pulse-slow sm:w-30 sm:h-30 from-purple-500 to-blue-500 "></div></div>
          <img src={ani} className="w-[200px] z-50 md:w-[340px] max-w-full"  alt="not found" />
          <BouncingSVG />
        </div>
      </div>

    </motion.div>
    
   </section>
  )
}

export default Home