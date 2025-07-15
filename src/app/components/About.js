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
          I'm <span className="text-pink-400 font-semibold">Manish Kumar</span>, a passionate{" "}
          <span className="text-pink-400 font-semibold">Full Stack Developer</span> and{" "}
          <span className="text-pink-400 font-semibold">AI enthusiast</span> focused on real-world solutions.
        </p>

        <p className="mt-3 text-lg leading-relaxed">
          🔐 Built <span className="text-pink-400 font-semibold">Onboarding Management System</span> — a smart HR portal to manage onboarding, tasks, and communication in one place.
        </p>

        <p className="mt-3 text-lg leading-relaxed">
          💡 Developing <span className="text-pink-400 font-semibold">SkillUp</span> — an{" "}
          <span className="text-pink-400 font-semibold">AI-powered learning platform</span> offering personalized learning paths and guidance using GPT tech.
        </p>

        <p className="mt-3 text-lg leading-relaxed">
          I’ve also built <span className="text-pink-400 font-semibold">SwiftKart</span> (e-commerce),{" "}
          <span className="text-pink-400 font-semibold">GitHub Explorer</span>, and a{" "}
          <span className="text-pink-400 font-semibold">Medical Insurance Predictor</span> using ML.
        </p>

        <p className="mt-3 text-lg leading-relaxed">
          I work with <span className="text-pink-400 font-semibold">React, Next.js, Node.js, MongoDB</span>, and{" "}
          <span className="text-pink-400 font-semibold">AI tools</span> to create fast and scalable apps.
        </p>

        <p className="mt-3 text-lg leading-relaxed">
          Let’s collaborate and build something impactful together. 🚀
        </p>
      </motion.div>

      {/* CV Button */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <a
          href="/documents/resume.pdf"
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
