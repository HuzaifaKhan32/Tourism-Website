
import React from 'react';
import Header from './components/Header';
import BackgroundCarousel from './components/BackgroundCarousel';
import HeroContent from './components/HeroContent';
import StatsOverlay from './components/StatsOverlay';
import PopularPackages from './components/PopularPackages';
import Services from './components/Services';
import VisaProcess from './components/VisaProcess';
import TeamVideos from './components/TeamVideos';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

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

        {/* Expert Advice Section */}
        <TeamVideos />

        {/* Booking Section (Contact) */}
        <BookingSection />

        {/* New Premium Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
