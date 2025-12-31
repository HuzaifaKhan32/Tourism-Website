// @ts-nocheck
'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PACKAGES, Package } from '../constants';
import { useUI } from './Providers';

type Category = 'All' | 'Beach' | 'City' | 'Nature';
type SortOrder = 'none' | 'low-to-high' | 'high-to-low';

const PopularPackages: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');
  const { setSelectedPackage } = useUI();

  const handleBookNow = (pkg: Package) => {
    const destinationMapping: Record<string, string> = {
      'dubai': 'custom',
      'turkey': 'custom',
      'europe': 'europe',
      'maldives': 'asia',
      'japan': 'asia',
      'swiss': 'europe',
      'safari': 'safari'
    };

    setSelectedPackage({ 
      title: pkg.title, 
      price: pkg.price, 
      description: pkg.description,
      destination: destinationMapping[pkg.id] || 'custom'
    });
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories: Category[] = ['All', 'Beach', 'City', 'Nature'];

  const filteredAndSortedPackages = useMemo(() => {
    let result = [...PACKAGES];

    // Filter
    if (selectedCategory !== 'All') {
      result = result.filter((pkg) => pkg.category === selectedCategory);
    }

    // Sort
    if (sortOrder === 'low-to-high') {
      result.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortOrder === 'high-to-low') {
      result.sort((a, b) => b.priceValue - a.priceValue);
    }

    return result;
  }, [selectedCategory, sortOrder]);

  return (
    <section id="popular-packages" className="relative w-full py-24 lg:py-32 z-20 bg-background-light dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue dark:text-sky-400 text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 uppercase"
          >
            Popular Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium"
          >
            Explore our most sought-after luxury experiences designed specifically for the discerning traveler.
          </motion.p>
        </div>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-blue-900/20'
                    : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest hidden sm:block">Sort By Price:</span>
            <div className="relative group/sort">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="appearance-none bg-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-2.5 pr-10 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue cursor-pointer transition-all"
              >
                <option value="none">Featured</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/sort:text-slate-600 dark:group-hover/sort:text-white transition-colors text-xl">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="relative group">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 custom-scrollbar scroll-smooth scrollbar-hide min-h-[500px]">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedPackages.map((pkg) => (
                <motion.div 
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="snap-center shrink-0 w-[300px] sm:w-[380px] group/card"
                >
                  <div className="h-full flex flex-col bg-white dark:bg-slate-800 rounded-[20px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(43,94,125,0.3)] dark:hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                    {/* Image Header with Overlay */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110" 
                        style={{ backgroundImage: `url("${pkg.image}")` }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">{pkg.category}</span>
                      </div>

                      {/* Destination Title on Image */}
                      <div className="absolute bottom-0 left-0 w-full p-6">
                        <h3 className="text-white text-2xl font-bold tracking-tight drop-shadow-md">{pkg.title}</h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col grow p-6 pt-5">
                      <div className="flex-grow">
                        <p className="text-slate-500 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                          {pkg.description}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-4">
                        <div className="flex flex-col">
                          <span className="text-brand-blue dark:text-sky-400 text-2xl font-bold tracking-tight">{pkg.price}</span>
                          <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">/person</span>
                        </div>
                        <button 
                          onClick={() => handleBookNow(pkg)}
                          className="flex-shrink-0 bg-brand-blue hover:bg-accent-blue text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {/* Spacer for nice scrolling end */}
            <div className="shrink-0 w-4"></div>
          </div>

          {/* Optional: Scroll Hint Icons for Desktop */}
          <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-brand-blue/10 backdrop-blur-md p-2 rounded-full border border-white/20">
               <span className="material-symbols-outlined text-brand-blue dark:text-sky-400 animate-pulse">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredAndSortedPackages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">search_off</span>
            <p className="text-slate-500 dark:text-slate-400 font-medium">No packages found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PopularPackages;
