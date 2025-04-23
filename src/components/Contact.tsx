import React from 'react';
import { Send, Mail, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] opacity-5" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Let's Build Something Timeless
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Share your vision with us, and we'll help bring it to life with elegance and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="border-l-2 border-black pl-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5" />
                <h3 className="font-serif text-xl">Email</h3>
              </div>
              <a href="mailto:hello@dhcatelier.com" className="text-gray-600 hover:text-black transition-colors">
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

          <form
            action="https://formsubmit.io/send/DHC_atelier@outlook.com"
            method="POST"
            className="space-y-6 bg-white p-8 border border-gray-200"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {/* Anti-spam hidden field */}
            <input type="text" name="_formsubmit_id" style={{ display: 'none' }} />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-b-2 border-gray-200 py-3 focus:border-black transition-colors bg-transparent outline-none"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-b-2 border-gray-200 py-3 focus:border-black transition-colors bg-transparent outline-none"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border-b-2 border-gray-200 py-3 focus:border-black transition-colors bg-transparent outline-none resize-none"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-4 flex items-center justify-center space-x-2 hover:bg-gray-900 transition-colors group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
