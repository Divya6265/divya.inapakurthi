import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

export const SkillSection = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-[95vw] md:max-w-5xl m-auto overflow-clip p-2"
    >
      <div className="absolute left-0 inset-y-0 w-8 md:w-16 bg-gradient-to-r from-neutral-900 dark:from-neutral-900 to-transparent z-10"></div>
      <div className="absolute right-0 inset-y-0 w-8 md:w-16 bg-gradient-to-l from-neutral-900 dark:from-neutral-900 to-transparent z-10"></div>
      <div className="flex justify-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="skills flex justify-center gap-2 md:gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} logo={skill.logo} alt={skill.alt} name={skill.name} />
        ))}
      </div>
    </motion.div>
  );
};