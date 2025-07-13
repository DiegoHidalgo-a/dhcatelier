import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden pt-16 md:pt-0">
      <div className="w-full max-w-6xl mx-auto grid gap-8 md:gap-16 relative z-10 py-8 md:py-0 px-4" data-aos="fade-up" data-aos-delay="200">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-[2rem] sm:text-4xl md:text-4xl lg:text-6xl font-serif uppercase tracking-wide leading-tight text-black drop-shadow-sm">
              Your idea,<br />
              perfectly framed<br />
              online.
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto font-light drop-shadow-sm">
              Crafting modern websites with elegance, precision, and intention.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full max-w-md mx-auto">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto group inline-flex justify-center border border-black px-6 py-3 md:px-8 md:py-4 uppercase text-sm hover:bg-black hover:text-white transition-all duration-300 items-center space-x-2 bg-white/90 backdrop-blur-sm"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto group inline-flex justify-center border border-gray-300 px-6 py-3 md:px-8 md:py-4 uppercase text-sm hover:border-black transition-all duration-300 items-center space-x-2 bg-white/90 backdrop-blur-sm"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;