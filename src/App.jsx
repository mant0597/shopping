import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import MensSection from './MensSection';
import WomensSection from './WomensSection';
import Contact from './Contact';
import Careers from './Careers';
import Reviews from './Reviews';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <Navbar showNavbar={showNavbar} />
      <main className="pt-16">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="mens">
          <MensSection />
        </section>
        <section id="womens">
          <WomensSection />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="careers">
          <Careers />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
      </main>
    </div>
  );
}

export default App;
