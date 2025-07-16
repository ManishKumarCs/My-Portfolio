"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillSection from "./SkillSection";
import ChromaGrid from "app/ui/ChromaGrid";
import LeetCodeStats from "./LeetCodeStats";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="achievements" className="bg-[#0a0a0a] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Skills Section */}
      <div className="relative my-10">
        <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-[#0ff]/10 blur-[100px] rounded-full pointer-events-none z-0" />
        <SkillSection />
      </div>

      {/* Projects Section */}
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full -z-10" />
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-500 mb-12 relative z-10">My Projects</h2>
        <ChromaGrid />
      </div>

      {/* Education & Experience */}
      <section id="experience" className="relative bg-[#0a0a0a] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            maskImage: "radial-gradient(circle 400px at 50% 30%, rgba(255,255,255,0.7) 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(circle 400px at 50% 30%, rgba(255,255,255,0.7) 0%, transparent 100%)",
            background: "radial-gradient(ellipse at 50% 30%, #ec4899, #1e1e3f, #000)",
            filter: "blur(100px)",
            opacity: 0.2,
          }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-6">EDUCATION</h2>
            <div className="relative border-l-2 border-pink-500 pl-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md hover:bg-white/20 transition-all mb-6 relative border border-white/10"
                >
                  <span className="absolute -left-8 top-5 w-4 h-4 bg-pink-500 rounded-full"></span>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm">{edu.duration}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-6">EXPERIENCE</h2>
            <div className="relative border-l-2 border-pink-500 pl-6">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md hover:bg-white/20 transition-all mb-6 relative border border-white/10"
                >
                  <span className="absolute -left-8 top-5 w-4 h-4 bg-pink-500 rounded-full"></span>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-gray-400 text-sm">{exp.company} • {exp.duration}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeetCodeStats/>

      {/* Certifications */}
      <section className="relative bg-[#0a0a0a] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            maskImage: "radial-gradient(circle 350px at 60% 40%, rgba(255,255,255,0.8) 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(circle 350px at 60% 40%, rgba(255,255,255,0.8) 0%, transparent 100%)",
            background: "radial-gradient(ellipse at 60% 40%, #10b981, #000)",
            filter: "blur(100px)",
            opacity: 0.2,
          }}
        />

        <div className="relative z-10 px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-pink-500">My Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-[#121212] rounded-xl p-6 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 70%)",
                    filter: "blur(50px)",
                    mixBlendMode: "overlay",
                  }}
                />

                <div className="relative z-10">
                  <div className="w-full h-[200px] overflow-hidden flex items-center justify-center bg-black/10 rounded-md">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={300}
                      height={200}
                      className="object-contain w-full h-full rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-4">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{cert.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

const educationData = [
  {
    degree: "Bachelor's Degree in Computer Science & Engineering",
    duration: "2023 - Present",
    description: "Pursuing a Bachelor's degree in Computer Science, focusing on software development, machine learning, and full-stack web development.",
  },
  {
    degree: "Diploma in Computer Science & Engineering with HONORS",
    duration: "2020 - 2023",
    description: "Strong foundation in Programming, Data Structures, and Software Engineering principles with project-based learning.",
  },
];

const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Bluestock Fintech",
    duration: "Jan 2025 - Mar 2025",
    description: "Led Admin Panel Analytics with stock data visualization using Charts & Bootstrap 5.",
  },
  {
    role: "Full Stack Developer Trainee",
    company: "Devslane Pvt. Ltd",
    duration: "Oct 2024 - Dec 2024",
    description: "Built SwiftKart, a full-stack e-commerce platform using React, Node.js, and MongoDB.",
  },
];

const certifications = [
  {
    title: "Software Development Engineer",
    provider: "Bluestock Fintech",
    image: "/images/bluestock-cert.jpg",
  },
  {
    title: "Full Stack Web Development",
    provider: "Devslane Pvt. Ltd",
    image: "/images/devslane_cert.jpg",
  },
  {
    title: "Machine Learning and Data Science",
    provider: "Coding Blocks",
    image: "/images/ml-cert.jpg",
  },
];
