
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 w-full px-6 py-5 md:px-12 lg:px-20 flex items-center justify-between z-50 bg-background-dark/10 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center gap-3 text-white">
        <div className="flex items-center justify-center size-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <span className="material-symbols-outlined text-white text-[24px]">public</span>
        </div>
        <h2 className="text-white text-xl font-bold tracking-tight drop-shadow-md">UNF Global Tourism</h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            className="text-white/80 text-sm font-semibold hover:text-white transition-colors duration-200 drop-shadow-sm"
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Header CTA & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center justify-center h-11 px-8 bg-brand-blue hover:bg-[#204a63] text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-900/20 active:scale-95">
          Contact Us
        </button>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-xl md:hidden border-t border-white/10 animate-fade-in py-6 px-6">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                className="text-white text-lg font-medium hover:text-light-blue transition-colors"
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full h-12 bg-brand-blue text-white font-bold rounded-full">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
