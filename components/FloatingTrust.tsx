
import React from 'react';
import { motion } from 'framer-motion';

const FloatingTrust: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-24 right-6 z-[60] hidden md:block"
    >
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 flex items-center gap-3 relative group">
        <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 animate-pulse">
          <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">Verified & Trusted</p>
          <p className="text-[8px] font-bold uppercase text-slate-400">99.8% Success Rate</p>
        </div>
        <button className="absolute -top-2 -right-2 size-5 bg-slate-200 dark:bg-slate-700 rounded-full text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">×</button>
      </div>
    </motion.div>
  );
};

export default FloatingTrust;
