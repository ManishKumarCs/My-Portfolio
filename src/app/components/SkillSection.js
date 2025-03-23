import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip"; // Ensure you install react-tooltip

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
    <div className="flex justify-center gap-6 flex-wrap mt-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-gray-900 rounded-2xl p-4 w-28 h-28 flex items-center justify-center shadow-lg cursor-pointer relative overflow-hidden"
          whileHover={{ scale: 1.15, boxShadow: "0px 5px 25px rgba(255, 255, 255, 0.6)", rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.02 }}
          data-tooltip-id={`tooltip-${index}`}
        >
          <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain transition-transform duration-300" />
          <Tooltip id={`tooltip-${index}`} place="top" effect="solid" className="bg-white text-black p-2 rounded-lg">
            {skill.name}
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillSection;
