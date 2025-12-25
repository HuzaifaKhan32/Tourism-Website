
import React from 'react';
import { motion } from 'framer-motion';

const ChatWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[70]">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="group relative size-16 bg-brand-blue rounded-full shadow-2xl flex items-center justify-center text-white"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
        <div className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat with Concierge
        </div>
        <div className="absolute top-0 right-0 size-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></div>
      </motion.button>
    </div>
  );
};

export default ChatWidget;
