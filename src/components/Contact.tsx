import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] opacity-5" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Let’s Connect & Start Your Project
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us through any of the channels below — we usually reply within an hour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="border-l-2 border-black pl-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5" />
                <h3 className="font-serif text-xl">Email</h3>
              </div>
              <a href="mailto:DHC_atelier@outlook.com" className="text-gray-600 hover:text-black transition-colors">
                DHC_atelier@outlook.com
              </a>
            </div>
            <div className="border-l-2 border-black pl-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5" />
                <h3 className="font-serif text-xl">Location</h3>
              </div>
              <p className="text-gray-600">San José, Costa Rica</p>
            </div>
            <div className="border-l-2 border-black pl-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5" />
                <h3 className="font-serif text-xl">WhatsApp</h3>
              </div>
              <a 
                href="https://wa.me/50685489448" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="border-l-2 border-black pl-6">
              <div className="flex items-center gap-3 mb-2">
                <Linkedin className="w-5 h-5" />
                <h3 className="font-serif text-xl">Social</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a 
                  href="https://instagram.com/dhcatelier" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-gray-50 p-8 border border-gray-200" data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-xl font-serif mb-4">Want to get started?</h3>
            <p className="text-gray-700 text-base">
              Reach out via WhatsApp or email. We'll respond quickly and guide you through the next steps. No forms, no waiting — just a real conversation.
            </p>
            <a 
              href="https://wa.me/50685489448" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Message Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// This code defines a React functional component named `Contact` that renders a contact section for a website