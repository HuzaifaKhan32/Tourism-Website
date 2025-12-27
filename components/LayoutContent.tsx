'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import BackgroundCarousel from './BackgroundCarousel';
import FloatingTrust from './FloatingTrust';
import ChatWidget from './ChatWidget';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname === '/admin';
  const isTeam = pathname === '/team';
  
  // App.tsx logic:
  // BackgroundCarousel: visible if view !== 'admin'
  // Header: visible if view === 'landing' (and likely others like shop, but NOT team/admin)
  // Footer: visible always
  // FloatingTrust, ChatWidget: visible always

  const showBackground = !isAdmin;
  const showHeader = !isAdmin && !isTeam; // Assuming only hidden on full-screen views

  return (
    <>
      {showBackground && <BackgroundCarousel />}
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {showHeader && <Header />}
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </div>

      <FloatingTrust />
      <ChatWidget />
    </>
  );
}
