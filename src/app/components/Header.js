"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure you have lucide-react installed

const navItems = ["Home", "Achievements", "About", "Contact"];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = (item) => {
    setActive(item);
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center font-[var(--font-poppins)] px-4">
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4 px-4 py-2 rounded-full 
        bg-black/60 backdrop-blur-lg shadow-xl border border-white/10">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className={`px-5 py-2 text-base font-semibold rounded-full transition-all duration-300 transform tracking-wide
              ${
                active === item
                  ? "bg-pink-500 text-white backdrop-blur-sm scale-105 shadow-md"
                  : "text-white border border-transparent hover:border-pink-500 hover:bg-pink-500 hover:backdrop-blur-sm hover:text-white hover:scale-105"
              }`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10 shadow-xl w-full flex justify-between items-center">
        <span className="text-white font-semibold text-lg">{active}</span>
        <button onClick={handleToggle} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 bg-black/80 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl z-40 md:hidden">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item} className="w-full text-center">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleLinkClick(item)}
                  className={`block w-full py-3 px-6 text-base font-semibold transition-all duration-300 tracking-wide rounded-md
                    ${
                      active === item
                        ? "bg-pink-500 text-white"
                        : "text-white hover:bg-pink-500"
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
