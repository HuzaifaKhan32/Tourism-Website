
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  onFinished?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onFinished }) => {
  const logoUrl = "https://i.ibb.co/tPFyCrMZ/logo.png"; // Updated logo link

  return (
    <AnimatePresence onExitComplete={onFinished}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-white dark:bg-background-dark flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Background Decor */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute size-[600px] bg-brand-blue rounded-full blur-[120px] -z-10"
          />

          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <img 
                src={logoUrl} 
                alt="UNF Global Loading" 
                className="h-32 md:h-40 w-auto object-contain"
                onError={(e) => {
                  // Fallback for ibb shortlinks if not direct
                  (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/gg-dl/ABS2GSkHTaZNSkHtMJtzI6iOjoQcbTr2n7WjEbBBxgTTS1r29-2USGKtZ13xYT2tED2Hfkho6pXjM32LULKUk3LG4-eZxvotkhlCn0Y1En3PHUUIfv5bC-zmOvVFmjWCaj5ppH8BOJSjX6RuiZsW0lADqV443gin7hjseW9BTHYUkghLMIjPGQ=s1024-rj?authuser=2";
                }}
              />
              {/* Spinning Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border-t-2 border-brand-blue rounded-full opacity-30"
              />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-slate-900 dark:text-white font-black uppercase tracking-[0.3em] text-xs"
              >
                UNF Global Tourism
              </motion.h2>
              <div className="w-32 h-1 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/2 bg-brand-blue"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
