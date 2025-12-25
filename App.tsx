
import React from 'react';
import Header from './components/Header';
import BackgroundCarousel from './components/BackgroundCarousel';
import HeroContent from './components/HeroContent';
import StatsOverlay from './components/StatsOverlay';
import FeaturedIn from './components/FeaturedIn';
import AboutUs from './components/AboutUs';
import PopularPackages from './components/PopularPackages';
import Services from './components/Services';
import VisaProcess from './components/VisaProcess';
import Testimonials from './components/Testimonials';
import TeamVideos from './components/TeamVideos';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import OurPresence from './components/OurPresence';
import Footer from './components/Footer';
import FloatingTrust from './components/FloatingTrust';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      <BackgroundCarousel />

      <div className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <HeroContent />
        </div>

        {/* Supporting Trust Sections */}
        <StatsOverlay />
        <FeaturedIn />

        {/* 2. About Us */}
        <AboutUs />

        {/* 3. Packages */}
        <PopularPackages />

        {/* 4. Services */}
        <Services />

        {/* 5. Visa Procedure */}
        <VisaProcess />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Experts Videos */}
        <TeamVideos />

        {/* FAQ (Placed for conversion before booking) */}
        <FAQ />

        {/* 8. Contact Form (Booking Section) */}
        <BookingSection />

        {/* 9. Our Presence (Office & Map) */}
        <OurPresence />

        <Footer />
      </div>

      {/* Floating Elements */}
      <FloatingTrust />
      <ChatWidget />
    </div>
  );
};

export default App;
