
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
    <header className="sticky top-0 w-full px-6 py-5 md:px-12 lg:px-20 flex items-center justify-between z-50 bg-background-light/80 dark:bg-background-dark/10 backdrop-blur-lg border-b border-black/5 dark:border-white/5 transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center gap-3 text-slate-900 dark:text-white">
        <div className="flex items-center justify-center size-10 rounded-full bg-brand-blue/10 dark:bg-white/10 backdrop-blur-sm border border-brand-blue/20 dark:border-white/20">
          <span className="material-symbols-outlined text-brand-blue dark:text-white text-[24px]">public</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-xl font-black tracking-tight drop-shadow-sm uppercase">UNF Global</h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            className="text-slate-600 dark:text-white/80 text-xs font-black uppercase tracking-widest hover:text-brand-blue dark:hover:text-white transition-colors duration-200"
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Header CTA & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="relative flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white transition-all hover:scale-110 active:scale-95"
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait">
            {isDarkMode ? (
              <motion.span 
                key="dark"
                initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                className="material-symbols-outlined text-[20px]"
              >
                light_mode
              </motion.span>
            ) : (
              <motion.span 
                key="light"
                initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                className="material-symbols-outlined text-[20px]"
              >
                dark_mode
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <button className="hidden md:flex items-center justify-center h-11 px-8 bg-brand-blue hover:bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all shadow-lg shadow-blue-900/20 active:scale-95">
          Get in Touch
        </button>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-slate-900 dark:text-white p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-background-dark/95 backdrop-blur-xl md:hidden border-t border-black/5 dark:border-white/10 py-8 px-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  className="text-slate-900 dark:text-white text-lg font-black uppercase tracking-widest hover:text-brand-blue transition-colors"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full h-14 bg-brand-blue text-white font-black uppercase tracking-widest rounded-full shadow-lg">
                Get in Touch
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
