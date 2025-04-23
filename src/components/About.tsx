import React from 'react';
import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">About the Creator</h2>
        <div className="border border-gray-200 p-8 md:p-12" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
              <img 
                src="/5.jpg" 
                alt="Diego Hidalgo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">Diego Armando Hidalgo Chinchilla</h3>
              <p className="text-gray-600">Full Stack Developer & Digital Craftsman</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As the founder of DHC Atelier, I bring together technical expertise and artistic vision to create digital experiences that are both beautiful and functional. With a background in both development and design, I approach each project as a unique opportunity to blend form and function.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
              <Code2 className="w-6 h-6 text-gray-600" />
              <div>
                <h4 className="font-medium">Technical Excellence</h4>
                <p className="text-sm text-gray-600">Modern tech stack mastery</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
              <Palette className="w-6 h-6 text-gray-600" />
              <div>
                <h4 className="font-medium">Design Focus</h4>
                <p className="text-sm text-gray-600">Aesthetic precision</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
              <Zap className="w-6 h-6 text-gray-600" />
              <div>
                <h4 className="font-medium">Performance</h4>
                <p className="text-sm text-gray-600">Optimized experiences</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="https://diegoarmandohidalgo.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
            >
              View My Portfolio
            </a>
            <a 
              href="https://www.instagram.com/im.diego_hidalgo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              Instagram Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;