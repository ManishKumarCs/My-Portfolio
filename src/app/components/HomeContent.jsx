"use client";

import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomeContent() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
