
import React, { useState, useEffect, useCallback } from 'react';
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
import TeamGallery from './components/TeamGallery';
import AdminDashboard from './components/AdminDashboard';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import OurPresence from './components/OurPresence';
import Footer from './components/Footer';
import FloatingTrust from './components/FloatingTrust';
import ChatWidget from './components/ChatWidget';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [navTransition, setNavTransition] = useState(false);
  const [view, setView] = useState<'landing' | 'team' | 'admin'>('landing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const triggerNavTransition = useCallback(() => {
    setNavTransition(true);
    setTimeout(() => {
      setNavTransition(false);
    }, 800);
  }, []);

  const openView = (newView: 'landing' | 'team' | 'admin') => {
    triggerNavTransition();
    setTimeout(() => {
      setView(newView);
      window.scrollTo(0, 0);
    }, 400);
  };

  return (
    <div className="relative w-full min-h-screen">
      <LoadingScreen isLoading={initialLoading} />
      <LoadingScreen isLoading={navTransition} />

      {view !== 'admin' && <BackgroundCarousel />}

      <div className="relative z-10 flex flex-col">
        {view === 'landing' ? (
          <>
            <div className="min-h-screen flex flex-col">
              <Header onNavClick={triggerNavTransition} onAdminClick={() => openView('admin')} />
              <HeroContent isInitialVisit={initialLoading} />
            </div>
            <StatsOverlay />
            <FeaturedIn />
            <AboutUs />
            <PopularPackages />
            <Services />
            <VisaProcess />
            <Testimonials />
            <TeamVideos onViewAll={() => openView('team')} />
            <FAQ />
            <BookingSection />
            <OurPresence />
          </>
        ) : view === 'team' ? (
          <TeamGallery onBack={() => openView('landing')} />
        ) : (
          <AdminDashboard onBack={() => openView('landing')} />
        )}
        <Footer />
      </div>

      <FloatingTrust />
      <ChatWidget />
    </div>
  );
};

export default App;
