"use client";

import React, { useState } from "react";

const navItems = ["Home", "Achievements", "About", "Contact"];

const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center font-[var(--font-poppins)]">
      <nav className="flex gap-4 px-4 py-2 rounded-full 
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
    </header>
  );
};

export default Header;
