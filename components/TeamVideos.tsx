
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_VIDEOS } from '../constants';

const TeamVideos: React.FC = () => {
  return (
    <section id="team-videos" className="relative w-full py-24 lg:py-32 z-20 bg-[#1B4965] overflow-hidden">
      {/* Background decorative gradient for luxury feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2ba3ee]/10 via-[#1B4965] to-[#0f2a3d] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-[48px] font-black leading-tight tracking-tight uppercase drop-shadow-[0_0_20px_rgba(43,163,238,0.3)]"
          >
            Message From Our Experts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/80 text-lg md:text-xl font-light"
          >
            Get to know the passionate team dedicated to crafting your premium travel experiences and visa success.
          </motion.p>
        </div>

        {/* Video Grid */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            animate: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {TEAM_VIDEOS.map((video) => (
            <motion.div 
              key={video.id}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group relative flex flex-col bg-[#14364b] border border-white/5 rounded-3xl overflow-hidden hover:border-[#2ba3ee]/50 hover:shadow-[0_0_40px_-10px_rgba(43,163,238,0.4)] transition-all duration-500 cursor-pointer"
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img 
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                  src={video.image} 
                  alt={video.title} 
                />
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-[#1B4965]/30 group-hover:bg-[#1B4965]/10 transition-colors duration-500 mix-blend-multiply"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#2ba3ee] shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2ba3ee] group-hover:text-white">
                    <span className="material-symbols-outlined text-[36px] ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col p-6 sm:p-7 gap-2 bg-gradient-to-b from-[#14364b] to-[#0e2736]">
                <h3 className="text-white text-lg sm:text-xl font-black leading-tight group-hover:text-[#2ba3ee] transition-colors uppercase tracking-tight">
                  {video.title}
                </h3>
                <p className="text-[#8ecdf8] text-sm font-bold uppercase tracking-widest opacity-80">
                  {video.expert}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-4"
        >
          <a href="#" className="group inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.2em] hover:text-[#2ba3ee] transition-all border-b border-transparent hover:border-[#2ba3ee] pb-1">
            View all team videos
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamVideos;
