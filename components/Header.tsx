
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavClick?: () => void;
  onAdminClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick, onAdminClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const logoUrl = "https://i.ibb.co/tPFyCrMZ/logo.png"; 

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 w-full px-6 py-4 md:px-12 lg:px-20 flex items-center justify-between z-[60] bg-white/90 dark:bg-background-dark/95 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 transition-all duration-300">
        {/* Executive Branding Pill */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="flex items-center cursor-pointer group"
          onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
            closeMenu();
          }}
        >
          <div className="bg-white px-2 py-1.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center gap-3">
            <img 
              src={logoUrl} 
              alt="UNF Logo" 
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <div className="flex flex-col pr-3">
              <span className="text-[#1B4965] font-black text-xs md:text-sm tracking-tighter uppercase leading-none">UNF Global</span>
              <span className="text-[#2B5F7F]/60 font-bold text-[8px] md:text-[9px] tracking-[0.3em] uppercase leading-none mt-1">Tourism</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              className="text-slate-600 dark:text-white/70 text-[13px] lg:text-[15px] font-black uppercase tracking-widest hover:text-brand-blue dark:hover:text-white transition-colors duration-200"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="relative flex items-center justify-center size-9 md:size-11 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white transition-all hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.span key="dark" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} className="material-symbols-outlined text-[18px] md:text-[22px]">light_mode</motion.span>
              ) : (
                <motion.span key="light" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} className="material-symbols-outlined text-[18px] md:text-[22px]">dark_mode</motion.span>
              )}
            </AnimatePresence>
          </button>

          <button className="hidden lg:flex items-center justify-center h-10 px-6 bg-brand-blue hover:bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all shadow-lg shadow-blue-900/10">
            Get in Touch
          </button>

          {/* Styled Rounded Hamburger Menu Toggle */}
          <button 
            className="md:hidden flex items-center justify-center size-10 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white transition-all hover:bg-slate-100 dark:hover:bg-white/10 active:scale-90 z-[70] shadow-sm" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl font-medium transition-all duration-300">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Box */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-[calc(100%+12px)] right-6 w-[280px] z-[65] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-sm font-black text-slate-700 dark:text-white/80 uppercase tracking-widest hover:text-brand-blue py-2 border-b border-slate-50 dark:border-white/5 last:border-0"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 w-full h-12 bg-brand-blue text-white font-black text-[10px] uppercase tracking-widest rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                  Get in Touch
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Click-out overlay for mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[59] md:hidden" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Header;
