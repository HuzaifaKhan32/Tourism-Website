
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does the visa processing take?",
      a: "Typical processing times range from 3-15 working days depending on the destination. For urgent travels, we offer expedited 'Concierge Express' options that can often secure approvals within 48-72 hours."
    },
    {
      q: "What is your cancellation policy?",
      a: "We offer a flexible multi-tier policy: Full refund for cancellations made 30+ days prior to departure. 50% refund for 15-29 days. For cancellations within 14 days, supplier-specific terms apply, though we always advocate for our clients."
    },
    {
      q: "Are your packages customizable?",
      a: "Absolutely. Every package shown is a starting point. Our expert planners work one-on-one with you to tailor every meal, excursion, and hotel room to your specific desires."
    },
    {
      q: "Do you provide travel insurance?",
      a: "Yes, we partner with leading global insurers to provide comprehensive coverage that includes medical emergencies, trip interruptions, and baggage loss. This is highly recommended for all international journeys."
    },
    {
      q: "What happens if my visa application is rejected?",
      a: "UNF maintains a 99.8% approval rate. In the rare event of a rejection, we offer a full refund of our service fees and provide one free re-application attempt after addressing the embassy's concerns."
    },
    {
      q: "Is there 24/7 support during my trip?",
      a: "Yes. Every client is assigned a dedicated concierge available 24/7 via phone, email, and WhatsApp. Whether you need a last-minute dinner reservation or emergency flight change, we are always there."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Everything you need to know about planning your elite journey.</p>
        </div>

        <div className="space-y-4 mb-20">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-tight">{faq.q}</span>
                <span className="material-symbols-outlined text-brand-blue">
                  {openIndex === idx ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium bg-white dark:bg-slate-800/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-blue to-accent-blue p-10 md:p-16 rounded-[3rem] text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 size-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-3xl font-black uppercase tracking-tight mb-4 relative z-10">Still Have Questions?</h3>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto relative z-10">Our luxury travel specialists are available 24/7 to provide immediate assistance for your unique requirements.</p>
          <button className="h-14 px-10 bg-white text-brand-blue font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl relative z-10">
            Contact Us Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
