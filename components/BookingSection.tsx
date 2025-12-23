
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DESTINATIONS } from '../constants';

const BookingSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real app, you'd send data to an API here
  };

  return (
    <section id="booking" className="relative w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 z-20 bg-gradient-to-br from-primary via-[#244c66] to-brand-blue overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1280px] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative"
      >
        {/* Left Decorative Panel / Contact Info */}
        <div className="w-full lg:w-1/3 bg-primary text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Background Image / Overlay */}
          <div className="absolute inset-0 bg-[#1B4965] opacity-20 mix-blend-multiply z-0"></div>
          <img 
            alt="Scenic travel landscape" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 grayscale mix-blend-overlay scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX5i1Ik38I5YWZZjKCFj6TEGF3pQFK5P3PzZBOBBU96i3WWzTCf3gaGDM80rlLEV2F8gpXJQ96qyGCQ_aO1E0ABOYXlWHYvS2qQ8XChV985-PmcAqTC_QceUgeP05A3clTFegIvywMjjiqZpSZTVAiGy_2Hvg0JDrOuIf_3kdLEDqtMo0jRvVrckkW9JpLyoiTRSZF-aYdtBevNtS_BHzom3xQ0EVGaHqUtntyknl_PXI8vKyUMW1dkxBGS8cGzlcEZS1TxEucN_O2" 
          />
          
          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">Get In Touch</h3>
              <p className="text-blue-100 font-medium opacity-90">Our luxury travel specialists are ready to craft your perfect itinerary.</p>
            </motion.div>

            <div className="space-y-8 mt-12">
              {[
                { icon: 'location_on', label: 'Visit Us', text: '123 Global Plaza, Suite 400\nNew York, NY 10001' },
                { icon: 'mail', label: 'Email Us', text: 'concierge@unfglobal.com' },
                { icon: 'call', label: 'Call Us', text: '+1 (888) 555-0123' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                    <span className="material-symbols-outlined text-white">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 uppercase tracking-[0.2em] font-black mb-1">{item.label}</p>
                    <p className="font-bold leading-relaxed whitespace-pre-line">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative z-10 mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-xs text-blue-200 font-bold uppercase tracking-widest">Monday - Friday: 9am - 6pm EST</p>
          </motion.div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full lg:w-2/3 bg-white dark:bg-slate-900 p-8 md:p-12 lg:p-16">
          <div className="max-w-[800px] mx-auto">
            <div className="mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 uppercase"
              >
                Book Your <span className="text-primary">Dream Journey</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed"
              >
                Start planning your premium travel experience today. Fill out the form below and our specialists will contact you shortly to discuss your bespoke itinerary.
              </motion.p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-primary dark:text-light-blue text-sm font-black uppercase tracking-widest ml-1" htmlFor="fullname">Full Name <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined">person</span>
                  </span>
                  <input 
                    className="flex w-full rounded-2xl text-slate-900 border border-slate-200 bg-slate-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-14 pl-12 pr-4 text-base font-medium placeholder:text-slate-400" 
                    id="fullname" 
                    placeholder="Enter your full name" 
                    required 
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-primary dark:text-light-blue text-sm font-black uppercase tracking-widest ml-1" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined">mail</span>
                    </span>
                    <input 
                      className="flex w-full rounded-2xl text-slate-900 border border-slate-200 bg-slate-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-14 pl-12 pr-4 text-base font-medium placeholder:text-slate-400" 
                      id="email" 
                      placeholder="example@email.com" 
                      required 
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-primary dark:text-light-blue text-sm font-black uppercase tracking-widest ml-1" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined">call</span>
                    </span>
                    <input 
                      className="flex w-full rounded-2xl text-slate-900 border border-slate-200 bg-slate-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-14 pl-12 pr-4 text-base font-medium placeholder:text-slate-400" 
                      id="phone" 
                      placeholder="+1 (555) 000-0000" 
                      required 
                      type="tel"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-primary dark:text-light-blue text-sm font-black uppercase tracking-widest ml-1" htmlFor="destination">Destination</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors z-10 pointer-events-none">
                      <span className="material-symbols-outlined">flight_takeoff</span>
                    </span>
                    <select 
                      className="flex w-full rounded-2xl text-slate-900 border border-slate-200 bg-slate-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-14 pl-12 pr-10 text-base font-medium appearance-none cursor-pointer" 
                      id="destination"
                    >
                      <option disabled selected value="">Select a region</option>
                      {DESTINATIONS.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-primary dark:text-light-blue text-sm font-black uppercase tracking-widest ml-1" htmlFor="dates">Travel Dates</label>
                  <div className="relative group">
                    <input 
                      className="flex w-full rounded-2xl text-slate-900 border border-slate-200 bg-slate-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-14 px-4 text-base font-medium" 
                      id="dates" 
                      type="date"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-primary dark:text-light-blue text-sm font-black uppercase tracking-widest ml-1" htmlFor="message">Special Requirements</label>
                <textarea 
                  className="flex w-full rounded-2xl text-slate-900 border border-slate-200 bg-slate-50 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all p-4 text-base font-medium placeholder:text-slate-400 min-h-[120px]" 
                  id="message" 
                  placeholder="Tell us about your dream trip, preferred activities, or any special requests..." 
                  rows={4}
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col items-center">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full md:w-auto md:min-w-[240px] h-14 bg-primary hover:bg-primary-dark text-white text-lg font-black rounded-full shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 uppercase tracking-widest" 
                  type="submit"
                >
                  <span>Send Inquiry</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </motion.button>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-6">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </div>

              {formSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4 mt-6"
                >
                  <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                  <div>
                    <p className="text-green-800 font-black text-sm uppercase tracking-wider">Request Received!</p>
                    <p className="text-green-700 text-sm font-medium">Thank you for contacting UNF Global Tourism. A luxury travel specialist will be in touch within 24 hours.</p>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BookingSection;
