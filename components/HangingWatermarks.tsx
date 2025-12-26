
import React from 'react';
import { motion } from 'framer-motion';

const HangingWatermarks: React.FC = () => {
  // Use the direct image link for reliability
  const logoUrl = "https://i.ibb.co/tPFyCrMZ/logo.png"; 

  const watermarks = [
    { left: '10%', height: 120, delay: 0, duration: 4 },
    { left: '40%', height: 180, delay: 1, duration: 5 },
    { left: '70%', height: 140, delay: 0.5, duration: 3.5 },
    { left: '90%', height: 200, delay: 1.5, duration: 4.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {watermarks.map((wm, i) => (
        <motion.div
          key={i}
          className="absolute top-0 flex flex-col items-center"
          style={{ 
            left: wm.left,
            originY: 0,
          }}
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ 
            repeat: Infinity, 
            duration: wm.duration, 
            ease: "easeInOut",
            delay: wm.delay
          }}
        >
          {/* Decorative Hanging String */}
          <div className="w-[1.5px] bg-gradient-to-b from-slate-400/30 to-slate-400/10 dark:from-white/20 dark:to-white/5" style={{ height: wm.height }}></div>
          
          {/* Logo Watermark Badge */}
          <div className="opacity-[0.15] dark:opacity-[0.08] grayscale hover:grayscale-0 transition-all duration-700">
            <div className="bg-white p-2 rounded-xl shadow-xl border border-black/5">
              <img 
                src={logoUrl} 
                alt="Watermark" 
                className="w-12 md:w-16 h-auto object-contain block"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://lh3.googleusercontent.com/gg-dl/ABS2GSkHTaZNSkHtMJtzI6iOjoQcbTr2n7WjEbBBxgTTS1r29-2USGKtZ13xYT2tED2Hfkho6pXjM32LULKUk3LG4-eZxvotkhlCn0Y1En3PHUUIfv5bC-zmOvVFmjWCaj5ppH8BOJSjX6RuiZsW0lADqV443gin7hjseW9BTHYUkghLMIjPGQ=s1024-rj?authuser=2";
                }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HangingWatermarks;
