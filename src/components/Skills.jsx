import React from 'react'
import {SkillSection} from './SkillSection';
import ani from '/Group 53.svg';
import ani1 from '/Frame 37.svg';
import ani2 from '/quote.svg'

const languages = [
    { logo: "https://vectorwiki.com/images/G9sE3__javascript.svg", alt: "Javascript logo", name: "Javascript" },
    { logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg", alt: "CSS logo", name: "CSS" },
    { logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg", alt: "HTML logo", name: "HTML" },
  ];
  
  const frontend = [
    { logo: "https://brandeps.com/logo-download/R/Redux-logo-vector-01.svg", alt: "Redux logo", name: "Redux" },
    { logo: "https://vectorwiki.com/images/iC6dm__tailwindcss.svg", alt: "Tailwind CSS logo", name: "Tailwind CSS" },
    { logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_reactjs.svg", alt: "React JS logo", name: "React JS" },
  ];
  
  const backend = [
    { logo: "https://raw.githubusercontent.com/bestofjs/bestofjs/master/apps/bestofjs-nextjs/public/logos/nodejs.svg", alt: "Node JS logo", name: "Node JS" },
    { logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", alt: "Express JS logo", name: "Express JS" },
    { logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/mysql-icon.svg", alt: "MySQL logo", name: "MySQL" },
    { logo: "https://raw.githubusercontent.com/NX211/homer-icons/master/svg/mongodb.svg", alt: "MongoDB logo", name: "MongoDB" },
  ];
  
  const tools = [
    { logo: "https://brandeps.com/logo-download/G/GitHub-Icon-logo-vector-01.svg", alt: "Github logo", name: "Github" },
    { logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg", alt: "Git logo", name: "Git" },
    { logo: "https://vectorwiki.com/images/H4D8X__figma.svg", alt: "Figma logo", name: "Figma" },
  ];

  const Skills = () => {
    return (
 <>
 
 <div className='flex pt-10 justify-center w-full items-center'>
        <img src={ani2} alt="" className='w-100' />
      </div>


<section id='skills' className='relative'> 
<div className="  pt-20 space-y-6 bg-neutral-900 text-center text-white">
  <img src={ani1} alt="not found" className='absolute w-10 z-40 md:w-30 top-40 left-0' />
        <h1 className='text-3xl font-semibold m-0 p-0 '> Skills</h1>
        <h1 className='text-xl text-gray-400/50 mt-0 z-100'>What I know and have worked with</h1>
        <SkillSection title="Languages" skills={languages} />
        <SkillSection title="Front-end" skills={frontend} />
        <SkillSection title="Back-end" skills={backend} />
        <SkillSection title="Tools & Utilities" skills={tools} />
      </div>
  <img src={ani} alt="not found"  className='absolute w-30 z-40 md:w-60 bottom-0 right-0'/>
</section>
 </>     
    );
  };
  
  export default Skills;