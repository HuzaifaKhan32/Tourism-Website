
// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const StatsOverlay: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 z-20 bg-white/60 dark:bg-background-dark/60 backdrop-blur-3xl border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16"
        >
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center lg:items-start group cursor-default"
            >
              <div className="flex items-center justify-center size-12 sm:size-14 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4 sm:mb-6 group-hover:bg-brand-blue/20 group-hover:border-brand-blue/30 transition-all duration-300 overflow-hidden">
                <motion.span 
                  className="material-symbols-outlined text-2xl sm:text-3xl text-brand-blue dark:text-light-blue"
                  whileHover={{ 
                    scale: [1, 1.2, 1],
                    transition: { 
                      duration: 0.8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    } 
                  }}
                >
                  {stat.icon}
                </motion.span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 tabular-nums">
                  {stat.value}
                </span>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-gray-400 font-bold tracking-widest uppercase opacity-70">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsOverlay;
