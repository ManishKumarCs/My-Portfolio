// components/HeroSection.jsx
import Image from "next/image";
import { motion } from "framer-motion";
import TypingRole from "./TypingRole";

const skills = ["Java", "Node.js", "React.js", "JavaScript", "Next.js"];

export default function HeroSection() {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-[#0a0a0a] text-white relative"
      id="home"
    >
      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left space-y-5 md:ml-10 md:mr-20 mt-10 md:mt-8">
        <motion.h3
          className="text-lg md:text-xl font-semibold text-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, it&apos;s Me
        </motion.h3>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-pink-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MANISH KUMAR
        </motion.h1>

        {/* SEO-safe fallback text */}
        <motion.h2
          className="text-xl md:text-2xl font-medium relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="sr-only">FULL STACK WEB DEVELOPER</span>
          <TypingRole />
        </motion.h2>

        <motion.p
          className="text-gray-400 leading-relaxed"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          I build visually appealing, high-performance web applications that
          combine great design with robust functionality. With strong skills in
          full-stack development (React, Next.js, Node.js) and deep knowledge of
          Data Structures & Algorithms, I engineer solutions that are not just
          scalable but optimized for performance. Whether it&apos;s creating
          seamless user experiences or solving complex coding problems, I bring
          ideas to life with clean, efficient, and impactful code 🚀
        </motion.p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm md:text-base shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-lg font-medium transition-transform transform hover:scale-110 shadow-lg cursor-pointer"
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.75 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let&apos;s Connect and Collaborate!
        </motion.button>
      </div>

      {/* Image */}
      <motion.div
        className="relative mb-8 md:mb-0 flex justify-center md:justify-end md:mr-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl w-[250px] h-[250px] md:w-[350px] md:h-[350px] animate-pulse" />
        <Image
  src="/images/profile.jpeg"
  width={350}
  height={350}
  className="relative rounded-full shadow-lg transition-all mt-20"
  alt="Manish Kumar Profile Image"
  priority
/>

      </motion.div>
    </section>
  );
}
