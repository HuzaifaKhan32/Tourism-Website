// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OurPresence: React.FC = () => {
  const googleMapUrl = "https://maps.app.goo.gl/gE9Gi11uqWNKAZiS6";

  return (
    <section id="our-presence" className="relative w-full py-24 z-20 bg-gray-50 dark:bg-slate-900/50 transition-colors duration-500">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Office Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-brand-blue font-black text-[10px] uppercase tracking-[0.3em]">Our Headquarters</span>
              <h2 className="text-slate-900 dark:text-white text-4xl font-black uppercase tracking-tight mt-2 mb-6">Our Global Presence</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg font-medium leading-relaxed max-w-lg">
                While we serve clients worldwide, our heart beats in our flagship headquarters. Visit us to discuss your bespoke travel needs with our senior consultants.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-white/5 space-y-6">
              <div className="flex items-start gap-5">
                <div className="size-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase mb-1 tracking-wider">Head Office</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Al qusais 5 muhaisnah 4,<br />
                    Building name al mezan tower.<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="size-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase mb-1 tracking-wider">Direct Line</h4>
                  <a href="tel:+971567867420" className="text-brand-blue dark:text-light-blue text-lg font-black hover:underline tracking-tight">
                    +971 56 786 7420
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="size-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase mb-1 tracking-wider">WhatsApp Concierge</h4>
                  <a href="https://wa.me/971509550820" target="_blank" rel="noopener noreferrer" className="text-brand-blue dark:text-light-blue text-lg font-black hover:underline tracking-tight">
                    0509550820
                  </a>
                </div>
              </div>
            </div>

            <a 
              href={googleMapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 h-14 px-8 bg-brand-blue hover:bg-accent-blue text-white text-[11px] font-black uppercase tracking-widest rounded-full transition-all shadow-xl shadow-blue-900/20 active:scale-95"
            >
              Get Directions on Map
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 group">
              <Image 
                src="/map.avif" 
                alt="Dubai City Skyline" 
                fill
                className="object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500">
                <a 
                  href={googleMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 group/pin"
                >
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="size-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-brand-blue group-hover/pin:bg-brand-blue group-hover/pin:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                  </motion.div>
                  <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20">
                    <p className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest">Open Interactive Map</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurPresence;
