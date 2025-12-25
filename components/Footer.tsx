
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative w-full bg-white dark:bg-[#1B4965] text-slate-900 dark:text-white border-t-[4px] border-slate-100 dark:border-[#2B5F7F] z-20">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Awards */}
          <div className="space-y-8">
            <div>
              <h2 className="text-brand-blue dark:text-white tracking-light text-[28px] font-black leading-tight uppercase mb-4">
                UNF Global
              </h2>
              <p className="text-slate-600 dark:text-gray-300 text-sm font-medium leading-relaxed">
                Elite travel & visa consultants serving the global elite since 2009. Recognized for excellence in luxury tourism and bespoke concierge services.
              </p>
            </div>
            <div className="flex gap-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
               <span className="material-symbols-outlined text-4xl">workspace_premium</span>
               <span className="material-symbols-outlined text-4xl">stars</span>
               <span className="material-symbols-outlined text-4xl">verified</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Serving travelers since 2009</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-black uppercase mb-8 tracking-tight">Services</h3>
            <ul className="space-y-4">
              {['Visa Processing', 'Tour Packages', 'VIP Concierge', 'Luxury Stays', 'Flight Bookings'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-black uppercase mb-8 tracking-tight">Legal</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Refund Policy', 'Travel Disclaimers'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-lg font-black uppercase tracking-tight">Global Support</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-blue">call</span>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Main Concierge</p>
                  <a href="tel:+922112345678" className="text-sm font-black text-slate-700 dark:text-white">+92 (21) 1234-5678</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-blue">mail</span>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Official Support</p>
                  <a href="mailto:info@unfglobal.com" className="text-sm font-black text-slate-700 dark:text-white">info@unfglobal.com</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-500">chat</span>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">WhatsApp Business</p>
                  <a href="#" className="text-sm font-black text-slate-700 dark:text-white">+971 50 123 4567</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Socials & Registration */}
        <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            {[
              { icon: 'Facebook', count: '50k+' },
              { icon: 'Instagram', count: '15k+' },
              { icon: 'LinkedIn', count: '10k+' }
            ].map(social => (
              <a key={social.icon} href="#" className="group flex flex-col items-center gap-1">
                <div className="size-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-lg">public</span>
                </div>
                <span className="text-[8px] font-black uppercase text-slate-400">{social.count}</span>
              </a>
            ))}
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Reg No: 12345678-A | Tax ID: 998877-B | License: UNF-2009-GLB</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">© 2024 UNF Global Tourism. World Headquarters: Business Bay, Dubai.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
