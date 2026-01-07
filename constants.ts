
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
  { icon: 'public', value: '25k+', label: 'Satisfied Travelers Worldwide' },
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
    title: 'Dubai Luxury Experience',
    category: 'City',
    image: '/hero3.png',
    description: 'Experience Dubai\'s ultimate luxury with exclusive skyline views, private desert safaris, and world-class fine dining under the stars. Perfect for tourists seeking premium Dubai travel experiences.',
    price: 'AED 1,499',
    priceValue: 1499
  },
  {
    id: 'turkey',
    title: 'Turkey Cultural Tour',
    category: 'City',
    image: '/turkey.png',
    description: 'Hot air balloon rides over Cappadocia at dawn and explore ancient historical wonders in Istanbul. Ideal for cultural tourism enthusiasts visiting Turkey.',
    price: 'AED 1,199',
    priceValue: 1199
  },
  {
    id: 'europe',
    title: 'European Capitals Tour',
    category: 'City',
    image: '/paris.png',
    description: 'A timeless journey through European history, romance, and culinary delights of Paris, Rome, and Barcelona. Perfect for luxury tourism in Europe.',
    price: 'AED 2,299',
    priceValue: 2299
  },
  {
    id: 'maldives',
    title: 'Maldives Beach Getaway',
    category: 'Beach',
    image: '/maldives.png',
    description: 'Escape to a tropical island haven with crystal clear waters, pristine white sands, and luxurious overwater villas. Ideal for beach tourism and relaxation.',
    price: 'AED 3,500',
    priceValue: 3500
  },
  {
    id: 'japan',
    title: 'Japan Cultural Immersion',
    category: 'City',
    image: '/japan.avif',
    description: 'Immerse yourself in the blend of ancient traditions and futuristic neon lights across Tokyo and Kyoto. Perfect for cultural tourism in Japan.',
    price: 'AED 2,899',
    priceValue: 2899
  },
  {
    id: 'swiss',
    title: 'Swiss Alps Adventure',
    category: 'Nature',
    image: '/swiss.avif',
    description: 'Experience the breathtaking Swiss Alps with luxury chalet stays and scenic rail journeys through snow-capped peaks. Ideal for nature tourism enthusiasts.',
    price: 'AED 3,100',
    priceValue: 3100
  },
  {
    id: 'safari',
    title: 'Tanzania Safari Experience',
    category: 'Nature',
    image: 'safari.avif',
    description: 'Elite wildlife adventure through the heart of Tanzania with private guides and luxury bush camps. Perfect for adventure tourism and wildlife enthusiasts.',
    price: 'AED 4,200',
    priceValue: 4200
  }
];

export const SERVICES = [
  {
    id: 'visa',
    title: 'Visa Consultancy Services',
    icon: 'flight_takeoff',
    description: 'Expert visa processing for all your travel documents. Dubai\'s leading visa consultancy services with streamlined processing. We navigate the complexities of embassy requirements for you.',
    bgImage: '/visa.webp'
  },
  {
    id: 'tour',
    title: 'Luxury Tour Packages',
    icon: 'backpack',
    description: 'Curated luxury travel itineraries for unforgettable Dubai and worldwide experiences. From hidden gems to iconic landmarks, we plan it all for premium tourism.',
    bgImage: '/tour.avif'
  },
  {
    id: 'itinerary',
    title: 'Custom Travel Itineraries',
    icon: 'map',
    description: 'Bespoke Dubai travel planning crafted around your unique desires. Expert travel consultants design every detail to match your personal style and rhythm.',
    bgImage: '/map.avif'
  },
  {
    id: 'flight',
    title: 'Flight Reservations',
    icon: 'airplane_ticket',
    description: 'Premium cabin booking and itinerary management for Dubai travelers. Travel with ease knowing your connections are secure with our expert assistance.',
    bgImage: '/flight_reservation.webp'
  },
  {
    id: 'documentation',
    title: 'Travel Documentation',
    icon: 'description',
    description: 'Comprehensive handling of all legal requirements for Dubai tourism. From translations to notarizations, we handle the paperwork for seamless travel experiences.',
    bgImage: '/document.avif'
  },
  {
    id: 'support',
    title: '24/7 Travel Support',
    icon: 'support_agent',
    description: 'Always-on assistance for Dubai travelers wherever you are in the world. Our global team is just a call or message away for premium tourism support.',
    bgImage: '/support.avif'
  }
];

export const VISA_STEPS = [
  {
    id: '01',
    title: 'Visa Consultation & Strategy',
    icon: 'chat',
    description: 'Dubai\'s premier visa consultancy experts assess your profile and travel goals to determine the best visa strategy for your specific needs, ensuring a solid foundation for your application.'
  },
  {
    id: '02',
    title: 'Visa Document Preparation',
    icon: 'description',
    description: 'Our Dubai visa consultancy specialists assist in gathering, verifying, and organizing all necessary paperwork to ensure a flawless application that meets all consular requirements.'
  },
  {
    id: '03',
    title: 'Visa Application Submission',
    icon: 'send',
    description: 'We handle the formal submission to the embassy, managing appointments and ensuring compliance with all regulations to minimize processing time for Dubai travelers.'
  },
  {
    id: '04',
    title: 'Visa Collection & Delivery',
    icon: 'verified',
    description: 'Once approved, we securely collect your passport with the stamped visa and deliver it directly to your doorstep in Dubai, making you ready for travel.'
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
  { value: 'europe', label: 'Europe Tourism (France, Italy, Spain) - Premium European Tours' },
  { value: 'asia', label: 'Asia Tourism (Japan, Thailand, Bali) - Asian Travel Experiences' },
  { value: 'caribbean', label: 'Caribbean & Mexico Tourism - Luxury Island Getaways' },
  { value: 'safari', label: 'African Safari Tourism - Wildlife Adventure Tours' },
  { value: 'custom', label: 'Custom Tourism Packages - Multi-Destination Travel Planning' }
];
