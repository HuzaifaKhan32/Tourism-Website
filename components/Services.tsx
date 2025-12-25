
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  // Container variants for staggered entrance
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Card variants for visibility and smooth motion
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
      } 
    },
  };

  return (
    <section id="services" className="relative w-full py-24 lg:py-32 z-20 bg-white dark:bg-background-dark overflow-hidden transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 z-10 relative">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-brand-blue dark:text-light-blue font-bold tracking-[0.2em] text-[10px] uppercase bg-brand-blue/10 px-4 py-1.5 rounded-full mb-6"
          >
            Elite Travel Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight uppercase"
          >
            Our Services
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-brand-blue rounded-full mt-4"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className="group relative flex flex-col h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-3"
            >
              {/* High Quality Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 z-0"
                style={{ backgroundImage: `url('${service.bgImage}')` }}
              />

              {/* 
                Unified Dark Overlay:
                Applied to both light and dark themes to maintain a consistent premium aesthetic.
                Provides high contrast for the white text regardless of the image brightness.
              */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-colors duration-500 z-10" />
              
              {/* Extra Depth Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-15" />

              {/* Content Container */}
              <div className="relative h-full flex flex-col p-9 z-20 justify-end">
                {/* Floating Icon Circle */}
                <div className="mb-6 flex items-center justify-center size-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500 shadow-xl group-hover:scale-110">
                  <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                    {service.icon}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white text-2xl font-black uppercase tracking-tight drop-shadow-xl">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium leading-relaxed line-clamp-3 transition-colors group-hover:text-white">
                    {service.description}
                  </p>
                </div>

                {/* Animated Interactive Link */}
                <div className="mt-8 flex items-center gap-3 text-white font-black text-[11px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span>Discover more</span>
                  <div className="size-6 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm leading-none">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow on Hover */}
              <div className="absolute -top-24 -right-24 size-48 bg-brand-blue/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
