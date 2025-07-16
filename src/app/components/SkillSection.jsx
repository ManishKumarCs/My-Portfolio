"use client";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const skills = [
  { name: "ReactJS", icon: "https://vectorseek.com/wp-content/uploads/2023/08/React-Logo-Vector.svg-.png" },
  { name: "NextJs", icon: "https://vectorseek.com/wp-content/uploads/2021/12/Next.js-Logo-Vector.jpg" },
  { name: "Node JS", icon: "https://vectorseek.com/wp-content/uploads/2023/09/Node-Node.JS-Logo-Vector.svg-.png" },
  { name: "HTML", icon: "https://vectorseek.com/wp-content/uploads/2023/09/HTML5-without-wordmark-color-Logo-Vector.svg-.png" },
  { name: "CSS", icon: "https://vectorseek.com/wp-content/uploads/2023/04/CSS-Logo-Vector.jpg" },
  { name: "JavaScript", icon: "https://vectorseek.com/wp-content/uploads/2023/09/Javascript-JS-Logo-Vector.svg-.png" },
  { name: "Java", icon: "https://vectorseek.com/wp-content/uploads/2021/12/JAVA-Logo-Vector.jpg" },
  { name: "MySQL", icon: "https://vectorseek.com/wp-content/uploads/2021/12/vectorseek.com-MySQL-Logo-Vector.png" },
  { name: "Python", icon: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" },
  { name: "Git", icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
  { name: "Github", icon: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" },
  { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000" },
];

const SkillSection = () => {
  return (
    <section className="relative z-10 mt-16 mb-32 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-500 mb-20">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center cursor-pointer group transition-all"
              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              data-tooltip-id={`tooltip-${index}`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
              <Tooltip
                id={`tooltip-${index}`}
                place="top"
                className="bg-white text-black px-3 py-2 rounded-md text-sm shadow-md"
              >
                {skill.name}
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
