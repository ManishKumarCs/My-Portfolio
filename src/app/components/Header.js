"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { Menu, X } from "lucide-react"; 
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-lg text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="container mx-auto flex justify-between items-center py-1 px-1">
        <Link href="/">
          <div
            className="cursor-pointer"
          >
            <Image
              src="/images/logo1.png"
              alt="Manish.Dev Logo"
              width={150} 
              height={50} 
              priority
            />
          </div>
        </Link>
      </div>

        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <motion.nav
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent shadow-lg md:shadow-none md:flex md:space-x-6 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          {["Home", "About", "Achievements", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block md:inline-block py-3 px-6 text-lg font-medium transition-all hover:text-pink-500 hover:scale-105"
            >
              {item}
            </Link>
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
