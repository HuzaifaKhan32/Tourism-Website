// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DESTINATIONS } from '../constants';
import Image from 'next/image';
import { sendBookingEmail } from '../app/actions/sendEmail';
import { useUI } from './Providers';

const BookingSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [aiSummary, setAiSummary] = useState<string>('');
  const { selectedPackage } = useUI();
  
  // Local state for form fields to handle user edits
  const [message, setMessage] = useState('');
  const [destination, setDestination] = useState('europe');

  useEffect(() => {
    if (selectedPackage) {
      setMessage(`I am interested in booking the ${selectedPackage.title} package for ${selectedPackage.price}. \n\nPackage Description: ${selectedPackage.description}`);
      if (selectedPackage.destination) {
        setDestination(selectedPackage.destination);
      }
    }
  }, [selectedPackage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    const formData = new FormData(e.currentTarget);
    const result = await sendBookingEmail(formData);

    if (result.success) {
      setAiSummary(result.aiSummary || "Your inquiry has been received.");
      setFormStatus('success');
    } else {
      setFormStatus('error');
      console.error("Failed to send email:", result.error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="relative w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 z-20 bg-gradient-to-br from-primary via-[#244c66] to-brand-blue overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1280px] mx-auto bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative border border-white/10"
      >
        {/* Left Decorative Panel */}
        <div className="w-full lg:w-1/3 bg-primary text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1B4965] opacity-20 z-0"></div>
          <Image
            alt="UNF Global Tourism booking consultation desk with travel experts assisting clients"
            fill
            className="object-cover opacity-20 z-0 grayscale mix-blend-overlay"
            src="/booking.avif"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">Consult with Experts</h3>
            <p className="text-blue-100 font-medium opacity-90">Experience the world-class assistance trusted by over 25,000 elite travelers since 2009.</p>

            <div className="space-y-6">
              {[
                { icon: 'verified', text: '99.8% Visa Approval Rate' },
                { icon: 'support_agent', text: '24/7 Priority Support' },
                { icon: 'lock', text: 'Secure Global Payments' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-light-blue">{item.icon}</span>
                  <span className="text-xs font-black uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-2">Speak to Concierge</p>
              <p className="text-xl font-black">+971 56 786 7420</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-blue-300">Available 24/7 for VIP Support</p>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full lg:w-2/3 bg-white dark:bg-slate-900 p-8 md:p-12 lg:p-16">
          <div className="max-w-[800px] mx-auto">
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <div className="size-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
                  </div>
                  <h2 className="text-3xl font-black uppercase mb-4 text-slate-900 dark:text-white">Inquiry Received</h2>
                  <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl italic text-slate-600 dark:text-slate-300 mb-8 border border-slate-100 dark:border-white/5">
                    "{aiSummary}"
                  </div>
                  <button onClick={() => setFormStatus('idle')} className="px-10 h-14 bg-brand-blue text-white font-black rounded-full uppercase tracking-widest">Send Another</button>
                </motion.div>
              ) : formStatus === 'error' ? (
                 <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <div className="size-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-red-600 text-4xl">error</span>
                  </div>
                  <h2 className="text-3xl font-black uppercase mb-4 text-slate-900 dark:text-white">Submission Failed</h2>
                  <p className="text-slate-500 dark:text-slate-300 mb-8">
                    We couldn't send your inquiry at this time. Please try again later or contact us directly.
                  </p>
                  <button onClick={() => setFormStatus('idle')} className="px-10 h-14 bg-brand-blue text-white font-black rounded-full uppercase tracking-widest">Try Again</button>
                </motion.div>
              ) : (
                <motion.div key="form">
                  <div className="mb-10">
                    <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2">Book Your <span className="text-brand-blue">Dream Journey</span></h2>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                      Join 25,000+ satisfied travelers
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 dark:text-slate-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                        <input className="w-full h-14 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-4 text-sm font-bold" placeholder="Your name" required name="fullname" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                        <input className="w-full h-14 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-4 text-sm font-bold" placeholder="your@email.com" required type="email" name="email" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Destination</label>
                        <select 
                          className="w-full h-14 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-4 text-sm font-bold appearance-none" 
                          required 
                          name="destination"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                        >
                          {DESTINATIONS.map(d => <option key={d.value} value={d.value} className="text-slate-900">{d.label}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone</label>
                        <input className="w-full h-14 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl px-4 text-sm font-bold" placeholder="+971 ..." required name="phone" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                      <textarea 
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl p-4 text-sm font-bold h-32" 
                        placeholder="Tell us about your trip..." 
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="pt-6 flex flex-col items-center">
                      <button 
                        disabled={isSubmitting} 
                        className="group w-full md:w-auto min-w-[300px] h-16 bg-brand-blue text-white font-black rounded-full uppercase tracking-[0.2em] px-2 shadow-2xl hover:bg-accent-blue transition-all relative overflow-hidden"
                      >
                        {isSubmitting ? 'Processing...' : 'Secure Inquiry Submission'}
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BookingSection;