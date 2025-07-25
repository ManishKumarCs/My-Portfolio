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
  className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#0a0a0a] text-white px-6 py-20 overflow-hidden "
>
  {/* 🌟 Soft Background Glow Elements */}
  <div className="absolute top-[-100px] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-pink-500/10 blur-[80px] rounded-full pointer-events-none" />
  <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

  {/* Content */}
  <motion.div
    className="max-w-3xl relative z-10"
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2 className="text-4xl font-bold text-pink-500 mb-12">About Me</h2>

    <p className="mt-4 text-lg leading-relaxed">
      I&apos;m <span className="text-pink-400 font-semibold">Manish Kumar</span>, a passionate{" "}
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
      I&apos;ve also built <span className="text-pink-400 font-semibold">SwiftKart</span> (e-commerce),{" "}
      <span className="text-pink-400 font-semibold">GitHub Explorer</span>, and a{" "}
      <span className="text-pink-400 font-semibold">Medical Insurance Predictor</span> using ML.
    </p>

    <p className="mt-3 text-lg leading-relaxed">
      I work with <span className="text-pink-400 font-semibold">React, Next.js, Node.js, MongoDB</span>, and{" "}
      <span className="text-pink-400 font-semibold">AI tools</span> to create fast and scalable apps.
    </p>

    <p className="mt-3 text-lg leading-relaxed">
      Let&apos;s collaborate and build something impactful together. 🚀
    </p>
  </motion.div>

  {/* CV Button */}
  <motion.div
    className="mt-6 flex gap-4 relative z-10"
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  >
    <a
      href="/resume/ManishKumar_Resume.pdf"
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
