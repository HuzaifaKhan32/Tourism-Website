
// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  const logoUrl = "https://i.ibb.co/tPFyCrMZ/logo.png";

  return (
    <section id="about-us" className="relative w-full py-24 lg:py-32 z-20 bg-white dark:bg-background-dark overflow-hidden transition-colors duration-500">
      {/* Niche Branding: Huge Faded Background Logo */}
      <motion.div 
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
      >
        <Image 
          src={logoUrl} 
          alt="" 
          width={800} 
          height={300}
          className="w-[800px] h-auto grayscale" 
        />
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-brand-blue dark:text-light-blue font-black tracking-[0.3em] text-[10px] uppercase bg-brand-blue/10 px-4 py-2 rounded-full mb-4">
            About UNF Global
          </span>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black uppercase tracking-tight">
            Your Trusted Travel Partner Since 2009
          </h2>
          <div className="h-1 w-20 bg-brand-blue rounded-full mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-black/5 dark:border-white/5">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Our professional team" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-6 bg-brand-blue p-8 rounded-[2rem] text-white z-20 shadow-2xl hidden md:block">
              <span className="text-4xl font-black block">15+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Years of Excellence</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                Established in 2009, UNF Global Tourism has evolved from a boutique agency into a global powerhouse of luxury travel. We specialize in curating journeys that transcend the ordinary, blending local heritage with modern luxury.
              </p>
              <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border-l-4 border-brand-blue">
                <p className="text-slate-900 dark:text-white font-bold italic">
                  "Our mission is to expand horizons through impeccably planned experiences, ensuring every UNF client feels like the most important traveler in the world."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Integrity', desc: 'Transparent & honest', icon: 'check_circle' },
                { title: 'Excellence', desc: 'Premium quality', icon: 'verified' },
                { title: 'Reliability', desc: 'Always dependable', icon: 'history' },
                { title: 'Passion', desc: 'Love what we do', icon: 'favorite' }
              ].map((value) => (
                <div key={value.title} className="flex gap-3">
                  <span className="material-symbols-outlined text-brand-blue text-lg">{value.icon}</span>
                  <div>
                    <h5 className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest">{value.title}</h5>
                    <p className="text-slate-400 text-[10px] font-medium">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Our legacy is built on a foundation of trust. We handle every detail of your journey with the care and precision that has defined our service for over a decade and a half.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
