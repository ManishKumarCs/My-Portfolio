"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-center bg-[#0a0a0a] text-white px-6 pt-20"
    >
      {/* Heading & Content Animation */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-pink-500">About Me</h2>

        <p className="mt-4 text-lg leading-relaxed">
          Hi, I&apos;m <span className="font-semibold text-pink-400">Manish Kumar</span>, a passionate{" "}
          <span className="font-semibold text-pink-400">Full-Stack Developer</span> and{" "}
          <strong>Machine Learning Enthusiast</strong>.
        </p>

        <p className="mt-3 text-lg leading-relaxed">
          I specialize in <span className="font-semibold text-pink-400">building high-performance web applications</span> 
          using <span className="font-semibold text-pink-400">React, Next.js, Node.js, and MongoDB</span>, while also exploring{" "}
          <span className="font-semibold text-pink-400">AI-powered solutions</span>.
        </p>

        <p className="mt-3 text-lg leading-relaxed">
          With a strong foundation in <span className="font-semibold text-pink-400">data structures, algorithms, and problem-solving</span>, 
          I aim to create <span className="font-semibold text-pink-400">scalable, optimized, and user-friendly</span> digital experiences. 
          Currently, I&apos;m working on <span className="font-semibold text-pink-400">SkillUp</span>, an AI-powered personalized learning platform, 
          and have led projects like <span className="font-semibold text-pink-400">SwiftKart (E-commerce)</span> and <span className="font-semibold text-pink-400">GitHub Explorer</span>.
        </p>

        <p className="mt-3 text-lg leading-relaxed">
          I&apos;m always excited to collaborate, innovate, and push the boundaries of{" "}
          <span className="font-semibold text-pink-400">technology & creativity</span>.  
          Let&apos;s connect and build something amazing together! 🚀
        </p>
      </motion.div>

      {/* Buttons with Slide-in Animation */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <a
          href="documents/resume.pdf"
          download="Manish_Kumar_Resume.pdf"
          className="px-6 py-3 text-lg font-semibold bg-pink-500 rounded-lg shadow-lg hover:bg-pink-600 transition"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default About;
