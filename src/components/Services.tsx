import React, { useState } from 'react';
import { 
  Code2, Palette, Smartphone, 
  Mail, Phone, MessageCircle, X, Check, ArrowRight, Globe, Wrench 
} from 'lucide-react';

const services = [
  {
    title: 'Website Design & Development',
    description: 'We build modern websites that look great on phones and computers, help you get noticed, and make it easy for people to learn about your business.',
    features: [
      'Works on all devices',
      'Clean and simple layout',
      'Easy to navigate'
    ],
    technologies: [],
    icon: Code2,
    highlight: true
  },
  {
    title: 'Branding & Online Presence',
    description: 'We help you look professional online by designing your Instagram, LinkedIn, and more. Everything is made to match your style and make a good impression.',
    features: [
      'Social media graphics',
      'Profile setup help',
      'Simple visual identity'
    ],
    technologies: [],
    icon: Wrench,
  },
  {
    title: 'Support, Domains & Updates',
    description: 'We take care of your domain, fix small problems, and make sure your site stays updated, so you can focus on your work.',
    features: [
      'Domain setup',
      'Ongoing updates',
      'Quick help when needed'
    ],
    technologies: [],
    icon: Globe,
  },
];
const Services = () => {
  const [showContactCard, setShowContactCard] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setShowContactCard(true);
    
    setTimeout(() => {
      const element = document.getElementById('contact-card');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const closeContactCard = () => {
    setShowContactCard(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your specific needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative border border-gray-200 p-8 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer group ${
                  service.highlight ? 'hover:border-primary-500' : 'hover:border-gray-400'
                } ${selectedService === service.title ? 'ring-2 ring-primary-500' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => handleServiceClick(service.title)}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full transition-colors ${
                    service.highlight 
                      ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white' 
                      : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            service.highlight ? 'bg-primary-500' : 'bg-gray-300'
                          }`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs ${
                            service.highlight
                              ? 'bg-primary-100 text-primary-800'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center text-sm font-medium group-hover:text-primary-600 transition-colors">
                  <span>Get started</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Card */}
        {showContactCard && (
          <div 
            id="contact-card" 
            className="mt-16 max-w-2xl mx-auto relative" 
            data-aos="fade-up"
          >
            <button
              onClick={closeContactCard}
              className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
              aria-label="Close contact card"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
              
              <h3 className="text-2xl font-serif mb-2">
                Let's Discuss {selectedService || 'Your Project'}
              </h3>
              <p className="text-gray-600 mb-6">
                Get in touch to start your project or ask any questions
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a 
                      href="mailto:DHC_atelier@outlook.com" 
                      className="text-gray-900 hover:text-primary-600 transition-colors"
                    >
                      DHC_atelier@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a 
                      href="tel:+50685489448" 
                      className="text-gray-900 hover:text-primary-600 transition-colors"
                    >
                      +506 8548-9448
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                    <a 
                      href="https://wa.me/50685489448" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-primary-600 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="text-xs text-gray-400 mt-1">
                      Typically respond within 1 hour
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Or schedule a consultation call at your convenience
                </p>
                <button className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;