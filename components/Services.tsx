
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  // Animation variants for the container to stagger children
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
      } 
    },
  };

  // Internal content staggered variants
  const contentVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  // Specialized variant for the "Learn more" link to appear last
  const linkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 0.7, // Subtle visibility initially
      x: 0,
      transition: { 
        delay: 0.5, // Delay until after card is mostly settled
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  // Function to get a dynamic placeholder if bgImage is missing
  const getBackgroundImage = (service: typeof SERVICES[0]) => {
    if (service.bgImage) return service.bgImage;
    // Fallback to high-quality Unsplash search based on title
    const query = encodeURIComponent(`travel ${service.title}`);
    return `https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800&sig=${service.id}`;
  };

  return (
    <section id="services" className="relative w-full py-24 lg:py-32 z-20 bg-white dark:bg-background-dark overflow-hidden">
      {/* Abstract Background Map Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0 flex items-center justify-center overflow-hidden">
        <svg height="100%" viewBox="0 0 1000 500" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path className="text-brand-blue" d="M156.4,329.6c-4.9-3.3-12.7-3.9-15.5-9.3c-1.3-2.5-0.9-5.7-2.6-8.1c-2.4-3.3-7-4.4-10.4-6.6
                    c-3.8-2.5-7.1-5.7-9.5-9.6c-2.9-4.8-4.5-10.4-4.5-16c0-1.8,0.2-3.6,0.5-5.4c1.1-6.1,4.7-11.6,9.9-14.8c4.6-2.9,10-4.1,15.4-3.6
                    c1.9,0.2,3.8,0.6,5.6,1.4c6.7,2.8,11.8,8.8,13.4,15.9c0.4,1.8,0.6,3.6,0.6,5.4c0,3.1-0.5,6.2-1.6,9.1c-2.1,5.6-6.1,10.2-11.2,13.2
                    c-3.4,2-7.3,3.1-11.2,3.1c-1.7,0-3.4-0.2-5-0.7c-0.6-0.2-1.3-0.3-1.9-0.3c-1.4,0-2.7,0.5-3.8,1.3c-1.6,1.2-2.5,3.2-2.4,5.2
                    c0.1,3.4,2.5,6.3,5.8,7.1c2.1,0.5,4.3,0.1,6.2-1c2.6-1.5,4.6-4,5.6-6.8c1-2.9,0.9-6.1-0.2-9c-1.8-4.7-5.9-8.3-10.7-9.5
                    c-3.1-0.8-6.4-0.6-9.4,0.6c-4.2,1.7-7.4,5.3-8.6,9.7c-0.5,1.7-0.6,3.5-0.3,5.3c0.6,4.6,3.5,8.6,7.6,10.6c3.4,1.6,7.2,1.9,10.8,0.8
                    C152.9,332.3,155.6,331.3,156.4,329.6z M824,198c-3.3,1.3-6.1,3.9-7.7,7.1c-1.2,2.4-1.6,5.2-1.1,7.8c0.8,4.2,3.8,7.7,7.8,9.1
                    c3.2,1.1,6.7,0.7,9.7-1.1c4.3-2.6,6.9-7.3,6.7-12.3c-0.1-2.2-0.7-4.4-1.8-6.3c-2.4-4.2-6.9-6.8-11.7-6.9
                    C825.3,195.4,824.7,196.7,824,198z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-[0.2em] text-[10px] uppercase bg-brand-blue/10 px-4 py-1.5 rounded-full mb-6"
          >
            Explore World Class Service
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
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mt-8 font-medium leading-relaxed"
          >
            Tailored solutions for your global journey. We handle the complexities so you can focus on the experience.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className="group relative flex flex-col items-start gap-6 rounded-3xl bg-white dark:bg-slate-800/40 p-8 shadow-xl hover:shadow-2xl border border-slate-100 dark:border-white/5 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Card Background Image (Always visible, zooms on hover) */}
              <div 
                className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12] group-hover:opacity-[0.12] dark:group-hover:opacity-[0.22] transition-all duration-1000 pointer-events-none bg-cover bg-center scale-100 group-hover:scale-110"
                style={{ backgroundImage: `url('${getBackgroundImage(service)}')` }}
              />

              {/* Icon Container */}
              <motion.div 
                variants={contentVariants}
                className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 z-10 shadow-inner"
              >
                <span className="material-symbols-outlined text-[32px] transition-all duration-300 group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>
                  {service.icon}
                </span>
              </motion.div>

              {/* Content */}
              <div className="relative flex flex-col gap-4 z-10">
                <motion.h3 
                  variants={contentVariants}
                  className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors uppercase tracking-tight"
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  variants={contentVariants}
                  className="text-slate-500 dark:text-slate-300 leading-relaxed font-medium"
                >
                  {service.description}
                </motion.p>
              </div>

              {/* Action Link: Animates in smoothly after content settles */}
              <motion.div 
                variants={linkVariants}
                className="relative mt-auto pt-6 flex items-center text-brand-blue font-black text-xs uppercase tracking-widest group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 z-10"
              >
                Learn more 
                <span className="material-symbols-outlined text-sm ml-2 animate-bounce-x">arrow_forward</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <button className="group flex items-center gap-4 rounded-full bg-brand-blue px-10 py-5 text-white font-black text-lg shadow-2xl shadow-blue-900/40 hover:bg-accent-blue transition-all active:scale-95 uppercase tracking-widest">
            <span>Plan Your Trip Today</span>
            <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-2">
              arrow_right_alt
            </span>
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;
