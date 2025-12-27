// @ts-nocheck
'use client';

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const logoUrl = "https://i.ibb.co/tPFyCrMZ/logo.png"; 

  return (
    <footer id="footer" className="relative w-full bg-slate-50 dark:bg-[#1B4965] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#2B5F7F] z-20">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Awards */}
          <div className="space-y-8">
            <div className="flex flex-col items-start">
              <div className="bg-white px-3 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <Image 
                  src={logoUrl} 
                  alt="UNF Global Logo" 
                  width={64}
                  height={64}
                  className="h-14 md:h-16 w-auto object-contain"
                />
                <div className="h-8 w-[1px] bg-slate-100"></div>
                <div className="flex flex-col pr-4">
                  <span className="text-[#1B4965] font-black text-sm md:text-base leading-none uppercase tracking-tighter">UNF Global</span>
                  <span className="text-[#2B5F7F]/60 font-bold text-[9px] md:text-[10px] leading-none uppercase tracking-[0.3em] mt-1">Tourism</span>
                </div>
              </div>
              <p className="text-slate-500 dark:text-gray-300 text-sm font-medium leading-relaxed mt-8">
                The global benchmark for bespoke travel and expert visa strategy since 2009.
              </p>
            </div>
            <div className="flex gap-4 opacity-30 grayscale group-hover:grayscale-0 transition-all">
               <span className="material-symbols-outlined text-3xl">workspace_premium</span>
               <span className="material-symbols-outlined text-3xl">stars</span>
               <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[11px] font-black uppercase mb-8 tracking-[0.2em] text-slate-400">Services</h3>
            <ul className="space-y-4">
              {['Visa Strategy', 'Luxury Packages', 'VIP Concierge', 'Estate Bookings', 'Private Aviation'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[11px] font-black uppercase mb-8 tracking-[0.2em] text-slate-400">Governance</h3>
            <ul className="space-y-4">
              {['Privacy Protocol', 'Operational Terms', 'Cookie Policy', 'Audit Disclosures', 'Ethics Charter'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Global Desk</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-blue text-xl">call</span>
                <a href="tel:+971567867420" className="text-xs font-black text-slate-800 dark:text-white tracking-tight uppercase">+971 56 786 7420</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-blue text-xl">chat</span>
                <a href="https://wa.me/971509550820" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-slate-800 dark:text-white tracking-tight">0509550820 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-blue text-xl">mail</span>
                <a href="mailto:Unfglobaltourism@gmail.com" className="text-xs font-black text-slate-800 dark:text-white tracking-tight lowercase">Unfglobaltourism@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials & Centered Copyright */}
        <div className="pt-10 border-t border-slate-200 dark:border-white/5">
          <div className="flex justify-center gap-8 mb-10">
            {[
              { icon: 'public', label: 'Facebook' },
              { icon: 'camera', label: 'Instagram' },
              { icon: 'group', label: 'LinkedIn' }
            ].map(social => (
              <a key={social.label} href="#" className="text-slate-400 hover:text-brand-blue transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">{social.icon}</span>
                <span className="text-[9px] font-black uppercase tracking-widest">{social.label}</span>
              </a>
            ))}
          </div>
          
          <div className="text-center space-y-3">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
              Licensed Worldwide | UAE • PK • UK • TR
            </p>
            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.1em] max-w-2xl mx-auto">
              © {new Date().getFullYear()} UNF GLOBAL TOURISM. ALL RIGHTS RESERVED. 
              ESTABLISHED 2009. WORLD HQ: AL QUSAIS 5, AL MEZAN TOWER, DUBAI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
