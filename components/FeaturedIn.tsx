
import React from 'react';
import { motion } from 'framer-motion';

const FeaturedIn: React.FC = () => {
  const logos = [
    { name: 'Travel + Leisure', icon: 'auto_awesome' },
    { name: 'Condé Nast', icon: 'location_city' },
    { name: 'Forbes Travel', icon: 'diamond' },
    { name: 'TripAdvisor', icon: 'stars' },
    { name: 'National Geographic', icon: 'public' },
    { name: 'Bloomberg', icon: 'monitoring' }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Recognized By Industry Leaders</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 group cursor-default">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-blue transition-colors">{logo.icon}</span>
              <span className="font-black text-sm uppercase tracking-tighter text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
