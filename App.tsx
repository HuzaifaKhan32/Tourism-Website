
import React from 'react';
import Header from './components/Header';
import BackgroundCarousel from './components/BackgroundCarousel';
import HeroContent from './components/HeroContent';
import StatsOverlay from './components/StatsOverlay';
import PopularPackages from './components/PopularPackages';
import Services from './components/Services';
import VisaProcess from './components/VisaProcess';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background is fixed and covers the entire viewport */}
      <BackgroundCarousel />

      {/* Main Content Scroll Container */}
      <div className="relative z-10 flex flex-col">
        {/* Full Viewport Hero Section */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <HeroContent />
        </div>

        {/* Stats Section */}
        <StatsOverlay />

        {/* Popular Packages Section */}
        <PopularPackages />

        {/* Services Section */}
        <Services />

        {/* Visa Process Section */}
        <VisaProcess />

        {/* Footer Filler for professional finish */}
        <footer className="w-full bg-background-dark py-12 px-6 border-t border-white/5 text-center text-white/30 text-xs font-bold tracking-widest uppercase z-20">
          © {new Date().getFullYear()} UNF Global Tourism. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
