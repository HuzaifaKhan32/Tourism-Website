// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useUI } from './Providers';

const HeroContent: React.FC = () => {
  const { initialLoading: isInitialVisit } = useUI();

  return (
    <main className="relative flex-grow flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto z-20 pt-12 sm:pt-20 pb-20 sm:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase"
        >
          Dubai's Premier Tourism Experts
        </motion.div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-black leading-[1.1] tracking-tight mb-6 sm:mb-8 drop-shadow-2xl max-w-5xl uppercase">
          Your Dream Journey <br className="hidden sm:block"/> Starts Here
        </h1>

        <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-[1.15rem] font-medium leading-relaxed max-w-3xl mb-10 sm:mb-14 drop-shadow-lg mx-auto">
          UNF Global Tourism - Dubai's leading travel agency offering luxury tours, visa assistance, and personalized travel experiences worldwide. Expert travel planning in UAE.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={!isInitialVisit ? {
              scale: [1, 1.05, 1],
              transition: { duration: 1.5, repeat: 0, delay: 1 }
            } : {}}
            onClick={() => {
              const element = document.getElementById('popular-packages');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group w-full sm:w-auto min-w-[200px] sm:min-w-[240px] h-14 sm:h-16 px-8 sm:px-10 bg-brand-blue hover:bg-white hover:text-brand-blue text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 shadow-2xl shadow-blue-900/40 flex items-center justify-center gap-3 relative overflow-hidden"
          >
            {/* Inner pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-white/20 rounded-full"
            />
            <span className="relative z-10">Explore Destinations</span>
            <span className="relative z-10 material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
};

export default HeroContent;
