import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <a href="#" className="font-serif text-xl">
              DHC Atelier
            </a>
          </div>
          <div className="text-center space-x-8">
            <a href="#" className="text-sm hover:text-gray-600 transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/dhcatelier/?next=%2F" className="text-sm hover:text-gray-600 transition-colors">
              Instagram
            </a>
            <a href="DHC_atelier@outlook.com" className="text-sm hover:text-gray-600 transition-colors">
            DHC_atelier@outlook.com
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">© dhc atelier 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;