// components/TypingRole.jsx
"use client";

import { useEffect, useState } from "react";

const roles = [
  "FULL STACK WEB DEVELOPER",
  "AI INNOVATOR & PROBLEM SOLVER",
  "TECHNOLOGY ENTHUSIAST & CREATOR",
  "MACHINE LEARNING ENTHUSIAST",
];

export default function TypingRole() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100;

  useEffect(() => {
    if (charIndex < roles[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
  }, [charIndex, index]);

  return (
    <span aria-hidden="true">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
