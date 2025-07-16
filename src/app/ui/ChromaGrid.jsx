"use client";
import React from "react";
import { motion } from "framer-motion";

const ChromaGrid = ({ items, className = "" }) => {
  const demo = [
    {
      image: "/images/onboarding.png",
      title: "Onboarding Management System (OMS)",
      subtitle: "Manage onboarding, tasks, and internal communication.",
      url: "https://omsportal.manishdev.tech",
      tags: ["Next.js", "MongoDB", "Auth"],
    },
    {
      image: "/images/swiftkart.png",
      title: "SwiftKart",
      subtitle: "A modern e-commerce app with full-stack architecture.",
      url: "https://swiftkart.netlify.app",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      image: "/images/githubexplorer.png",
      title: "GitHub Explorer",
      subtitle: "Search and explore GitHub user profiles & repos.",
      url: "https://githubbexplorer.netlify.app",
      tags: ["React", "REST API"],
    },
    {
      image: "/images/insurance.png",
      title: "Medical Insurance Cost Prediction",
      subtitle: "ML-powered tool to predict medical insurance premiums.",
      url: "https://medical-insurance-prediction-wvgfsrfxnhmkjca3gdvrn7.streamlit.app/",
      tags: ["Python", "ML", "Streamlit"],
    },
    {
      image: "/images/job-tracker.png", // Add a placeholder image for now
      title: "Smart Job Application Tracker",
      subtitle: "Track job applications, status, and interviews — all in one place.",
      comingSoon: true,
      tags: ["Next.js", "Firebase", "Dashboard"],
    },
  ];

  const data = items?.length ? items : demo;

  const handleCardClick = (url, comingSoon) => {
    if (comingSoon) return;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 mb-20 ${className}`}>
      {data.map((card, index) => (
        <motion.div
          key={index}
          onClick={() => handleCardClick(card.url, card.comingSoon)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`group cursor-pointer relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl shadow-lg transition-all 
            ${card.comingSoon ? "pointer-events-none grayscale opacity-50" : "hover:shadow-pink-500/30"}
          `}
        >
          {/* Project image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent pointer-events-none" />

          {/* "Coming Soon" badge */}
          {card.comingSoon && (
            <div className="absolute top-2 right-2 bg-red-200 text-black text-xs px-2 py-1 rounded-full font-semibold z-10">
              Coming Soon
            </div>
          )}

          {/* Content */}
          <div className="p-5 relative z-10">
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="text-sm text-gray-400 mt-1 mb-3">{card.subtitle}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {card.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 text-pink-300 px-2 py-1 rounded-full backdrop-blur-sm border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ChromaGrid;
