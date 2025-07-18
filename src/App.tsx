import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplineBackground from './components/SplineBackground';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <SplineBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;