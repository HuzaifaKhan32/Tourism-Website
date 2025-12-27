'use client';

import React from 'react';
import HeroContent from '../components/HeroContent';
import StatsOverlay from '../components/StatsOverlay';
import FeaturedIn from '../components/FeaturedIn';
import AboutUs from '../components/AboutUs';
import PopularPackages from '../components/PopularPackages';
import Services from '../components/Services';
import VisaProcess from '../components/VisaProcess';
import Testimonials from '../components/Testimonials';
import TeamVideos from '../components/TeamVideos';
import FAQ from '../components/FAQ';
import BookingSection from '../components/BookingSection';
import OurPresence from '../components/OurPresence';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section Wrapper to simulate App.tsx structure */}
      <div className="flex flex-col min-h-[calc(100vh-100px)]">
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

      {/* FAQ */}
      <FAQ />

      {/* 8. Contact Form */}
      <BookingSection />

      {/* 9. Our Presence */}
      <OurPresence />
    </>
  );
}
