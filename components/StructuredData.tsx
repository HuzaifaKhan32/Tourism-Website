'use client';

import { PACKAGES } from '../constants';

const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'UNF Global Tourism',
    legalName: 'UNF Global Tourism LLC',
    description: 'Leading Dubai-based travel agency specializing in luxury tours, visa consultancy, and personalized travel experiences worldwide.',
    url: 'https://yourwebsite.com',
    logo: 'https://yourwebsite.com/logo.png',
    image: 'https://yourwebsite.com/hero-image.jpg',
    sameAs: [
      'https://facebook.com/unfglobaltourism',
      'https://instagram.com/unfglobaltourism',
      'https://twitter.com/unfglobaltourism',
      'https://www.linkedin.com/company/unfglobaltourism'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office 123, Business Bay',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '12345',
      addressCountry: 'AE'
    },
    telephone: '+971 4 123 4567',
    email: 'info@unfglobaltourism.com',
    faxNumber: '+971 4 123 4568',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00'
      }
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
        alternateName: 'UAE'
      },
      {
        '@type': 'Country',
        name: 'Worldwide'
      }
    ],
    availableLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en'
      },
      {
        '@type': 'Language',
        name: 'Arabic',
        alternateName: 'ar'
      },
      {
        '@type': 'Language',
        name: 'Hindi',
        alternateName: 'hi'
      }
    ],
    serviceType: ['Travel Arrangements', 'Visa Assistance', 'Tour Packages', 'Travel Consultation'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2500',
      bestRating: '5',
      worstRating: '1'
    },
    brand: 'UNF Global Tourism',
    foundingDate: '2020',
    numberOfEmployees: 50,
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 25.2048,
        longitude: 55.2708
      },
      geoRadius: 50000
    },
    makesOffer: PACKAGES.map(pkg => ({
      '@type': 'Offer',
      name: pkg.title,
      description: pkg.description,
      price: pkg.priceValue,
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'TravelAgency',
        name: 'UNF Global Tourism'
      }
    })),
    areaServed: [
      {
        '@type': 'Place',
        name: 'Dubai'
      },
      {
        '@type': 'Place',
        name: 'UAE'
      },
      {
        '@type': 'Place',
        name: 'Worldwide'
      }
    ],
    award: 'Best Tourism Agency Dubai 2023',
    paymentAccepted: ['Cash', 'Check', 'Credit Card'],
    priceRange: '$$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;