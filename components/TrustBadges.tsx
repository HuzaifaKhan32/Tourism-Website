
import React from 'react';
import { motion } from 'framer-motion';

const TrustBadges: React.FC = () => {
  const certs = [
    { name: 'IATA Certified', icon: 'verified_user', color: 'text-brand-blue', desc: 'Global Standard' },
    { name: 'SSL Secured', icon: 'security', color: 'text-green-500', desc: '256-bit Encryption' },
    { name: 'Secure Payments', icon: 'payments', color: 'text-blue-500', desc: 'PCI-DSS Compliant' },
    { name: 'ISO 9001', icon: 'workspace_premium', color: 'text-purple-500', desc: 'Quality Management' },
    { name: '15+ Awards', icon: 'stars', color: 'text-yellow-500', desc: 'Industry Leader' },
    { name: '24/7 Support', icon: 'support_agent', color: 'text-red-500', desc: 'Global Concierge' }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">Certified & Trusted By Industry Leaders</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">We maintain the highest global standards for safety, luxury, and reliability.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {certs.map((cert) => (
            <motion.div 
              key={cert.name}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10"
            >
              <span className={`material-symbols-outlined text-4xl mb-4 ${cert.color}`}>{cert.icon}</span>
              <h4 className="font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-1">{cert.name}</h4>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">We Accept All Major Payment Methods</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['VISA', 'Mastercard', 'PayPal', 'American Express', 'Apple Pay'].map(method => (
              <span key={method} className="px-6 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase border border-slate-200 dark:border-white/10">{method}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
