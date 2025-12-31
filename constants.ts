
export const CAROUSEL_IMAGES = [
  {
    url: '/hero1.png',
    alt: 'Luxury tropical resort'
  },
  {
    url: '/hero2.png',
    alt: 'Mountain landscape'
  },
  {
    url: '/hero3.png',
    alt: 'City skyline'
  }
];

export const NAV_LINKS = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Services', href: '#services' },
  { name: 'Visa Process', href: '#visa-process' },
  { name: 'Expert Advice', href: '#team-videos' }
];

export const STATS = [
  { icon: 'explore', value: '500+', label: 'Global Destinations' },
  { icon: 'public', value: '25k+', label: 'Elite Travelers' },
  { icon: 'verified_user', value: '99.8%', label: 'Visa Approval Rate' },
  { icon: 'workspace_premium', value: '15+', label: 'Industry Awards' }
];

export interface Package {
  id: string;
  title: string;
  image: string;
  description: string;
  price: string;
  priceValue: number;
  category: 'Beach' | 'City' | 'Nature';
}

export const PACKAGES: Package[] = [
  {
    id: 'dubai',
    title: 'Dubai Extravaganza',
    category: 'City',
    image: '/hero3.png',
    description: 'Experience ultimate luxury in the desert with exclusive skyline views, private safaris, and fine dining under the stars.',
    price: 'AED 1,499',
    priceValue: 1499
  },
  {
    id: 'turkey',
    title: 'Turkey Discovery',
    category: 'City',
    image: '/turkey.png',
    description: 'Watch hot air balloons rise over Cappadocia at dawn and explore ancient historical wonders in Istanbul.',
    price: 'AED 1,199',
    priceValue: 1199
  },
  {
    id: 'europe',
    title: 'European Classic',
    category: 'City',
    image: '/paris.png',
    description: 'A timeless journey through the history, romance, and culinary delights of Paris, Rome, and Barcelona.',
    price: 'AED 2,299',
    priceValue: 2299
  },
  {
    id: 'maldives',
    title: 'Maldives Paradise',
    category: 'Beach',
    image: '/maldives.png',
    description: 'Escape to an island haven with crystal clear waters, pristine white sands, and luxurious overwater villas.',
    price: 'AED 3,500',
    priceValue: 3500
  },
  {
    id: 'japan',
    title: 'Japan Zenith',
    category: 'City',
    image: '/japan.png',
    description: 'Immerse yourself in the blend of ancient traditions and futuristic neon lights across Tokyo and Kyoto.',
    price: 'AED 2,899',
    priceValue: 2899
  },
  {
    id: 'swiss',
    title: 'Alpine Serenity',
    category: 'Nature',
    image: '/swiss.png',
    description: 'Experience the breathtaking Swiss Alps with luxury chalet stays and scenic rail journeys through snow-capped peaks.',
    price: 'AED 3,100',
    priceValue: 3100
  },
  {
    id: 'safari',
    title: 'Serengeti Safari',
    category: 'Nature',
    image: 'safari.png',
    description: 'An elite wildlife adventure through the heart of Tanzania with private guides and luxury bush camps.',
    price: 'AED 4,200',
    priceValue: 4200
  }
];

export const SERVICES = [
  {
    id: 'visa',
    title: 'Visa Assistance',
    icon: 'flight_takeoff',
    description: 'Streamlined processing for all your travel documents. We navigate the complexities of embassy requirements for you.',
    bgImage: '/visa.webp'
  },
  {
    id: 'tour',
    title: 'Tour Packages',
    icon: 'backpack',
    description: 'Curated luxury itineraries for unforgettable experiences. From hidden gems to iconic landmarks, we plan it all.',
    bgImage: '/tour.avif'
  },
  {
    id: 'hotel',
    title: 'Hotel Booking',
    icon: 'hotel',
    description: "Exclusive stays at the world's finest properties. We secure the best rates and premium amenities for your comfort.",
    bgImage: '/hotel.avif'
  },
  {
    id: 'flight',
    title: 'Flight Reservations',
    icon: 'airplane_ticket',
    description: 'Premium cabin booking and itinerary management. Travel with ease knowing your connections are secure.',
    bgImage: '/flight_reservation.webp'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: 'description',
    description: 'Comprehensive handling of all legal requirements. From translations to notarizations, we handle the paperwork.',
    bgImage: '/document.avif'
  },
  {
    id: 'support',
    title: '24/7 Support',
    icon: 'support_agent',
    description: 'Always-on assistance wherever you are in the world. Our global team is just a call or message away.',
    bgImage: '/support.avif'
  }
];

export const VISA_STEPS = [
  {
    id: '01',
    title: 'Initial Consultation',
    icon: 'chat',
    description: 'We assess your profile and travel goals to determine the best visa strategy for your specific needs, ensuring a solid foundation for your application.'
  },
  {
    id: '02',
    title: 'Document Preparation',
    icon: 'description',
    description: 'Our experts assist in gathering, verifying, and organizing all necessary paperwork to ensure a flawless application that meets all consular requirements.'
  },
  {
    id: '03',
    title: 'Application Submission',
    icon: 'send',
    description: 'We handle the formal submission to the embassy, managing appointments and ensuring compliance with all regulations to minimize processing time.'
  },
  {
    id: '04',
    title: 'Visa Collection & Delivery',
    icon: 'verified',
    description: 'Once approved, we securely collect your passport with the stamped visa and deliver it directly to your doorstep, making you ready for travel.'
  }
];

export const TEAM_VIDEOS = [
  {
    id: 1,
    title: 'Operational Excellence',
    expert: 'Faizan — Managing Partner',
    youtubeId: 'EkAG2uS0V5k'
  },
  {
    id: 2,
    title: 'Dubai Luxury Insights',
    expert: 'Usama Khan — Global Strategist',
    youtubeId: 'uSrDLdwPoaM'
  },
  {
    id: 3,
    title: 'Global Logistics Update',
    expert: 'Faizan — Managing Partner',
    youtubeId: 'NNXon2Ek5GQ'
  },
  {
    id: 4,
    title: 'Visa Success Secrets',
    expert: 'Usama Khan — Global Strategist',
    youtubeId: 'jgqolZHh9ck'
  }
];

export const DESTINATIONS = [
  { value: 'europe', label: 'Europe (France, Italy, Spain)' },
  { value: 'asia', label: 'Asia (Japan, Thailand, Bali)' },
  { value: 'caribbean', label: 'Caribbean & Mexico' },
  { value: 'safari', label: 'African Safari' },
  { value: 'custom', label: 'Other / Multi-City' }
];
