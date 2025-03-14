import {SkillCard}  from "./SkillCard";

export const SkillSection = ({ title, skills }) => {
    return (
      <div className="relative max-w-[95vw] md:max-w-5xl m-auto 50 overflow-clip p-2">
        
   <div class="absolute left-0 inset-y-0 w-8 md:w-16 bg-gradient-to-r from-neutral-900 dark:from-neutral-900 to-transparent z-10"></div>
    <div class="absolute right-0 inset-y-0 w-8 md:w-16 bg-gradient-to-l from-neutral-900 dark:from-neutral-900 to-transparent z-10"></div>
    <div className="flex justify-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="skills flex justify-center gap-2 md:gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} logo={skill.logo} alt={skill.alt} name={skill.name} />
          ))}
        </div>
      </div>
    );
  };