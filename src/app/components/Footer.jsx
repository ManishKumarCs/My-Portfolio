"use client";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, #ec4899 0%, #0a0a0a 100%)",
          filter: "blur(100px)",
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Branding */}
        <h2 className="text-3xl font-bold text-pink-500">Manish Kumar</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Full Stack Developer | Passionate about building scalable & user-friendly applications.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-pink-500 mx-auto my-6 rounded-full"></div>

        {/* Contact */}
        <div className="flex justify-center items-center gap-4 text-sm text-gray-300 mt-4 flex-wrap">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-pink-500" />
            <span>developer.manish025@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-pink-500" />
            <span>+91 8191994215</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/manishkumarcs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manishkumarcs1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
