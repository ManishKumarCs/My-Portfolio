"use client"
import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Loader from "./components/Loader"; 

export default function Home() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

