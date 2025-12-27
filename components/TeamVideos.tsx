// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_VIDEOS } from '../constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useUI } from './Providers';

const TeamVideos: React.FC = () => {
  const router = useRouter();
  const { triggerNavTransition } = useUI();

  const handleNavigate = () => {
    triggerNavTransition();
    setTimeout(() => {
        router.push('/team');
    }, 400);
  }

  return (
    <section id="team-videos" className="relative w-full py-24 lg:py-32 z-20 bg-white dark:bg-[#1B4965] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/5 via-white dark:via-[#1B4965] to-white dark:to-[#0f2a3d] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col gap-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-900 dark:text-white text-4xl md:text-[54px] font-black leading-tight tracking-tighter uppercase"
          >
            Insights from <span className="text-brand-blue">Our Experts</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-2 bg-brand-blue mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_VIDEOS.map((video) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-white dark:bg-[#14364b] border border-slate-100 dark:border-white/5 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  src={video.image} 
                  alt={video.title} 
                  fill
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white">
                    <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-6 gap-2">
                <h3 className="text-slate-900 dark:text-white text-base font-black uppercase tracking-tight leading-tight transition-colors group-hover:text-brand-blue">
                  {video.title}
                </h3>
                <p className="text-slate-400 dark:text-[#8ecdf8] text-[9px] font-black uppercase tracking-widest opacity-80">
                  {video.expert}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button 
            onClick={handleNavigate}
            className="group flex items-center gap-2 text-brand-blue dark:text-white font-black text-[12px] uppercase tracking-[0.3em] hover:opacity-70 transition-all border-b-2 border-brand-blue dark:border-white pb-1"
          >
            <span>Archive View All Videos</span>
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamVideos;
