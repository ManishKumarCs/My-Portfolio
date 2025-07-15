"use client"; // Ensures animations work
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SkillSection from "./SkillSection";
import ChromaGrid from "app/ui/ChromaGrid";

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
    <section id="achievements" className="bg-[#0a0a0a] text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Skills Section */}
      <div className="my-10">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <SkillSection />
      </div>

      {/* Projects Section */}
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <div className="relative w-full h-56 overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-md hover:opacity-80 transition-transform transform hover:scale-105"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div> */}
      <ChromaGrid/>
{/* EDUCATION & EXPERIENCE SECTION */}
      <section className="relative bg-[#0a0a0a] text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Glow Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            maskImage:
              "radial-gradient(circle 400px at 50% 30%, rgba(255,255,255,0.9) 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle 400px at 50% 30%, rgba(255,255,255,0.9) 0%, transparent 100%)",
            background:
              "radial-gradient(ellipse at 50% 30%, #ec4899, #4f46e5, #000)",
            filter: "blur(140px)",
            opacity: 0.3,
          }}
        />

        <div className="relative z-10 grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-pink-500 mb-6">EDUCATION</h2>
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
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm">{edu.duration}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold text-pink-500 mb-6">EXPERIENCE</h2>
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
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     <section className="relative bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
  {/* Global Glow Background */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      maskImage:
        "radial-gradient(circle 400px at 60% 40%, rgba(255,255,255,0.9) 0%, transparent 100%)",
      WebkitMaskImage:
        "radial-gradient(circle 400px at 60% 40%, rgba(255,255,255,0.9) 0%, transparent 100%)",
      background: "radial-gradient(ellipse at 60% 40%, #10b981, #000)",
      filter: "blur(120px)",
      opacity: 0.25,
    }}
  />

  <div className="relative z-10">
    <h2 className="text-4xl font-bold text-center mb-12">My Certifications</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="relative group bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md hover:bg-white/20 transition-all border border-white/10 overflow-hidden"
        >
          {/* Card Glow */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              mixBlendMode: "overlay",
            }}
          />

          {/* Card Content */}
          <div className="relative z-10">
            <div className="relative w-[300px] h-[200px] overflow-hidden flex items-center justify-center">
              <Image
                src={cert.image}
                alt={cert.title}
                width={300}
                height={200}
                className="rounded-md object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
            <p className="text-gray-400 mt-2">{cert.provider}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </section>
  );
}

// const projects = [
//   {
//     title: "SwiftKart",
//     description: "An e-commerce platform for seamless shopping experience.",
//     image: "/images/swiftkart.png",
//     link: "https://swiftkart.netlify.app",
//   },
//   {
//     title: "GitHub Explorer",
//     description: "A powerful tool to search and explore GitHub repositories and user profiles with ease.",
//     image: "/images/githubexplorer.png",
//     link: "https://githubbexplorer.netlify.app",
//   },
//   {
//     title: "Medical Insurance Cost Prediction",
//     description: "ML-powered tool to predict medical insurance costs based on user details.",
//     image: "/images/insurance.png",
//     link: "https://medical-insurance-prediction-wvgfsrfxnhmkjca3gdvrn7.streamlit.app/",
//   },
// ];

const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science & Engineering",
      duration: "2023 - Present",
      description: "Pursuing a Bachelor's degree in Computer Science, focusing on software development, machine learning, and full-stack web development. Actively working on projects and gaining hands-on experience in modern technologies",
    },
    {
      degree: "Diploma in Computer Science & Engineering with HONORS",
      duration: "2020 - 2023",
      description: "Pursued a Diploma in Computer Science with a strong foundation in Mathematics, Programming, and Software Development. Gained expertise in algorithms, data structures, and problem-solving, laying the groundwork for advanced computing concepts",
    },
  ];
  
  const experienceData = [
    {
      role: "Software Engineer Intern",
      company: "Bluestock Fintech",
      duration: "Jan 2025 - Mar 2025",
      description: "Led the development of the Admin Panel Analytics section, integrating real-time stock market data. Implemented data visualization dashboards using Chart and Bootstrap 5, improving data insights"
    },
    {
      role: "Full Stack Developer Trainee",
      company: "Devslane Pvt. Ltd",
      duration: "Oct 2024 - Dec 2024",
      description: "Developed and maintained SwiftKart, a dynamic e-commerce platform, enhancing user experience and functionality. Gained hands-on experience in full-stack development using React, Node.js, and MongoDB, focusing on performance optimization and seamless user interactions",
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
