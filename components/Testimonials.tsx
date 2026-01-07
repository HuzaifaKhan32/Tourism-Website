// @ts-nocheck
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah J.',
      location: 'New York, USA',
      package: 'Dubai Extravaganza',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      quote: "Seamless visa processing and exceptional service. The team handled every detail of our Dubai trip with absolute precision. Truly a world-class experience."
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      package: 'European Classic',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      quote: "Outstanding planning, highly recommended for business travelers. They curated an itinerary that was efficient yet incredibly luxurious."
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      package: 'Maldives Paradise',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
      quote: "Our dream honeymoon came true thanks to UNF Global. The overwater villa recommendation was perfect, and the VIP lounge access was a life-saver."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">Trusted by Travelers Worldwide</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Real experiences from our most discerning global clients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-white/5 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium italic mb-6">"{review.quote}"</p>
              
              <div className="flex items-center gap-4 border-t border-slate-50 dark:border-white/5 pt-6">
                <Image
                  src={review.image}
                  alt={`Client testimonial from ${review.name} who traveled to ${review.package}`}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover border-2 border-brand-blue"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h5 className="font-black text-slate-900 dark:text-white text-sm uppercase">{review.name}</h5>
                    <span className="material-symbols-outlined text-green-500 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{review.location} • {review.package}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-slate-200 dark:border-white/10">
          {[
            { label: 'Average Rating', value: '4.9/5' },
            { label: 'Happy Clients', value: '25,000+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Satisfaction', value: '100%' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-brand-blue dark:text-light-blue mb-1">{stat.value}</p>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
