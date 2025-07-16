"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Achievements", "About", "Contact"];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = (item) => {
    setActive(item);
    setIsOpen(false);
  };

  // Scroll logic to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-4 left-0 right-0 z-50 flex justify-center px-4 font-[var(--font-poppins)]`}
    >
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4 px-4 py-2 rounded-full bg-black/60 backdrop-blur-lg shadow-xl border border-white/10">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => handleLinkClick(item)}
            className={`px-5 py-2 text-base font-semibold rounded-full transition-all duration-300 tracking-wide transform
              ${
                active === item
                  ? "bg-pink-500 text-white backdrop-blur-sm scale-105 shadow-md"
                  : "text-white border border-transparent hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:scale-105"
              }`}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden w-full max-w-[95vw] bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10 shadow-xl flex justify-between items-center">
        <span className="text-white font-semibold text-lg">{active}</span>
        <button onClick={handleToggle} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-sm bg-black/80 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl z-40 md:hidden">
          <ul className="flex flex-col items-center py-2 w-full">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleLinkClick(item)}
                  className={`block w-full text-center py-3 px-6 text-base font-semibold rounded-md transition-all duration-300 tracking-wide
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
