"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      {/* Footer Branding */}
      <h2 className="text-2xl font-bold text-pink-500">Manish Kumar</h2>
      <p className="text-gray-400 mt-2">
        Full Stack Developer | Passionate about building scalable and user-friendly web applications.
      </p>

      {/* Divider */}
      <div className="w-24 border-b-2 border-pink-500 mx-auto my-4"></div>

      

      {/* Social Media Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://github.com/manishkumarcs" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-pink-500 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/manishkumarcs1" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-pink-500 transition">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-pink-500 transition">
          <FaInstagram />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-sm mt-6">
        &copy; {new Date().getFullYear()} Manish Kumar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
