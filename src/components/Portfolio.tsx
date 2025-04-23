import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DHC Portfolio',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS, showcasing my work and skills.',
    image: '/web.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    live: 'https://diegoarmandohidalgo.vercel.app',
  },
  {
    title: 'Soccer Portfolio Page',
    description: 'A sleek, bilingual portfolio website created with Next.js, Tailwind CSS, and TypeScript. Features smooth scroll, multilingual support, and a clean professional layout to showcase a developer\'s skills and background.',
    image: '/noah.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'i18n'],
    live: 'https://noahcastro.vercel.app/',
  },
  {
    title: 'High School Website Marketing',
    description: 'Official website for the Colegio Cientifico de Puriscal to let them know in the professional/education world and show they are one of the best high schools in Costa Rica.',
    image: '/school.jpg',
    technologies: ['React', 'TS', 'Marketing-Project Management'],
    live: 'https://colegiocientificodepuriscal.com/',
  },
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Selected Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, design, and problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                {project.live !== '#' && (
                  <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;