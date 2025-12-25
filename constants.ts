
export const CAROUSEL_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ0Y6u7A8aaomvAi28lGaNItZI6riPYw95k1t-XSLKziYVhqpNV9s-GLv8iUbHoYUqVVDTRip1p2WuB3Qccz1DAJwMpq9CREQBcDAeRpnLwcFHyrtSmGJTJQEjiXccBXl1Q2-qHMVwldsZEo5cE2CPFA3cK2DNTi2unGBysFzdW6Zaw9INlJHDZg_wZvH4cYzFT7LFiIVu0jYXlGFK-FzVv4sUwFhAhNp4NqWZYfW7An_uBtyEU4LYLyo7P3XUKO_osye7cGMO2Gos',
    alt: 'Luxury tropical resort'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFGmHlG1nQzvgCUo9Pi3rz3OS_XMlIGzABjiOg34hLcnSlRfF7AvDw6Iq0W3MUMKN61J89SdXiJ9ZW4_8Ouq9e212zJ7n8kAEHGonvXlAnzZB-31jSX-bfvgyR1Oyv2clOtm2uz-GU0TggVhdY0XZqUmuJI6_GvyDJyKq-NF9U-_ibntT4ppcSBiu-ssc95gG6sjziw-qjLb06C-3IiGXLJEQU8xblhq9IMpQXPPgXAu3bMwNoiZwHpSGuSqndgQGEfIVaySV8LeTg',
    alt: 'Mountain landscape'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD1X_4ggaxmZmEJKYJl1kjIi9nxNn4Oe5ALWORpvrj0mFmHNBDzw4uRsY9jJ4P3m4MK6K2_vZnJxaTSNPgPBkYwN2tKAAITq457ASnLl2UwxIFF_CwdFQ9ePeo-S3RY_12PleeUOFnpEqYjjhYDKDXvkMAOfHGqfbKDovUwKQt8HTnVtM9xP93ZMpWIjdyFXLgV-aN2dMpwmu0-3nEgtQxekqMYluhgnawwX5s9OJWRBT-32tMqHZgnjYRdbAxJgpVBLkLOD1Yaquk',
    alt: 'City skyline'
  }
];

export const NAV_LINKS = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Destinations', href: '#popular-packages' },
  { name: 'Services', href: '#services' },
  { name: 'Visa Process', href: '#visa-process' },
  { name: 'Expert Advice', href: '#team-videos' },
  { name: 'Locations', href: '#our-presence' }
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpnZLhOM-IbQX37o7xFuBXeKJWGT8nIckpdYJMscwYc2ffc39vVWBQgTqmYS1_IGK25bt5nMEzwq-ewVHe1PrnG68l3FOyAf8GzU3sHojlz88yRI05lRszd8CBQKgNdjo6ybasIsxvUazN3KO3asqSAWqLDy8Ve_VD_DKj-Nm6qJgBgM67k48jSYwzHO3bdZJhWuM0UrP2tgMbl5rls-IgobvxFxuD8dbSY50oWXang8_WmaHXlA4MZjv2QmDKKlEUtEpJTVDCHEAe',
    description: 'Experience ultimate luxury in the desert with exclusive skyline views, private safaris, and fine dining under the stars.',
    price: '$1,499',
    priceValue: 1499
  },
  {
    id: 'turkey',
    title: 'Turkey Discovery',
    category: 'City',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACYZJofhXxCfQ6nGt63fZMbGNls2nHpQjo5yKYOMWFRropMcxMdJY7RmxlXtWKB10Tmn1l4iy1B-gASNBA84TpElSScOPYKUxs0O4jH0ZFCrnGJYhdfhl4lXrNZIthiwWk1XgdnTxgGNEOyPBXB6Y-jMzQahW5_23wJmNgXVElCbo9S3eVgGdcR66E_I8iDlZyB9QWiFaPWEAW_mttseYSfdm9d6ombz97V0M-cpbUuByfBQOWZkdFPjuCom70HNUMyFhPER2eTPIy',
    description: 'Watch hot air balloons rise over Cappadocia at dawn and explore ancient historical wonders in Istanbul.',
    price: '$1,199',
    priceValue: 1199
  },
  {
    id: 'europe',
    title: 'European Classic',
    category: 'City',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv-mEesXkDigS9ARddOzpPtciR2F1vinfA7M95sz9cuvanRwy4vc4OqH6nimHr_x6zLXDYUxfdsiU7GS7VZz74RHrh2BEy5eoIwcZNEuIsKFugZwEsy-qA81p4y8CCKiwRo_TwkDfPi-8sqwWW40iSMSSvFEb8XukOUzHxEmGRkZWv_kbnaSMNDu_T2Popu0HdfEw6s-QrwtxpLEtdsgWk3gKAUO9Azoj0ccKuVetuPsmZqbSGncaoJpLatphR0Lii4WypAhzQ05Ej',
    description: 'A timeless journey through the history, romance, and culinary delights of Paris, Rome, and Barcelona.',
    price: '$2,299',
    priceValue: 2299
  },
  {
    id: 'maldives',
    title: 'Maldives Paradise',
    category: 'Beach',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC08wXV2xV5lEAtGwpVEwEEl4oMSbeJSVOpGxy8IF10KcLVTTipcyIivtPyb9vhXkEgdE2H8upmos4jCojv2hVkwaqoKXdERPtuGXslfT4YFYx7FhF-BkZgJCf7a0l1DukBYMZAye9nzfO4vtayrfytQ3hmGF103jNjfVWTZBC2w0e-gHoQ4SviXnn2JVcgfCvRW3Y4rA9U6x0lgmwVcGHZLVWZ1O-bcsbGJvOb7_8pAPRcbRY9yCXbKq4NNk4OOMDQSe7NF6U0wSjw',
    description: 'Escape to an island haven with crystal clear waters, pristine white sands, and luxurious overwater villas.',
    price: '$3,500',
    priceValue: 3500
  },
  {
    id: 'japan',
    title: 'Japan Zenith',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    description: 'Immerse yourself in the blend of ancient traditions and futuristic neon lights across Tokyo and Kyoto.',
    price: '$2,899',
    priceValue: 2899
  },
  {
    id: 'swiss',
    title: 'Alpine Serenity',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800',
    description: 'Experience the breathtaking Swiss Alps with luxury chalet stays and scenic rail journeys through snow-capped peaks.',
    price: '$3,100',
    priceValue: 3100
  },
  {
    id: 'safari',
    title: 'Serengeti Safari',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    description: 'An elite wildlife adventure through the heart of Tanzania with private guides and luxury bush camps.',
    price: '$4,200',
    priceValue: 4200
  }
];

export const SERVICES = [
  {
    id: 'visa',
    title: 'Visa Assistance',
    icon: 'flight_takeoff',
    description: 'Streamlined processing for all your travel documents. We navigate the complexities of embassy requirements for you.',
    bgImage: 'https://tse4.mm.bing.net/th/id/OIP.GISLPh8eMTn83uSG48ckEAHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 'tour',
    title: 'Tour Packages',
    icon: 'backpack',
    description: 'Curated luxury itineraries for unforgettable experiences. From hidden gems to iconic landmarks, we plan it all.',
    bgImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'hotel',
    title: 'Hotel Booking',
    icon: 'hotel',
    description: "Exclusive stays at the world's finest properties. We secure the best rates and premium amenities for your comfort.",
    bgImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'flight',
    title: 'Flight Reservations',
    icon: 'airplane_ticket',
    description: 'Premium cabin booking and itinerary management. Travel with ease knowing your connections are secure.',
    bgImage: 'https://th.bing.com/th/id/OIP.Iuyu1rL7FIu-eFRcULIX9wHaE8?w=254&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: 'description',
    description: 'Comprehensive handling of all legal requirements. From translations to notarizations, we handle the paperwork.',
    bgImage: 'https://img.freepik.com/free-photo/side-view-lawyer-working-with-documents_23-2151202420.jpg'
  },
  {
    id: 'support',
    title: '24/7 Support',
    icon: 'support_agent',
    description: 'Always-on assistance wherever you are in the world. Our global team is just a call or message away.',
    bgImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200'
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
    title: 'Welcome from CEO',
    expert: 'John Doe — Chief Executive Officer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcP2YBTSwLYdqs7DBu-ZKvHvCuJUO6agLVOuBmhXq16hdvRTfvbBa1OHB3BXmce4vceAb3TAtzwo10m0aFU5JGjXbWhqD8x_Z1lWnCMALTVl8FMpa4xUR0KJEaxqrwaA00sv6eH3j7761C_NN_M6uEYwmjvwgLA9-Ta3ysb9eSRVs-Wdt5w1vbsfts570LHvlf3GhBukQJGAZ8e72GZM5KoEWB0P1u0-d5k8ewknLYsdgm8mkeLgflS270sHGnWUBxktLIzk1JAzrX'
  },
  {
    id: 2,
    title: 'Visa Expert Insights',
    expert: 'Sarah Smith — Senior Consultant',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTWr1f-HrHBuP6KUvsZs04glbqiA9HCIc0HwjgfImHJlgEDg8ThWZJdA5MRK3GpHLCceCv8g8Se0xkocz3QyzjlU1mis8WkxG6e15wrC9SHVQ7e8vZK0g0x_rv_o58slJtG-XXsPJGyez3Fm-kjU9E1C_mBUW-iLWuaKR6phjsmlM0kseIXgJwQ8xT30gdPKV-98HxsaQX4HNDNrcDAJDLuDxaYiR6oKubFogUs46aFthmzhIEtAtWI3QRnhLxogiNkkRiI_eLLe5a'
  },
  {
    id: 3,
    title: 'Customer Success Stories',
    expert: 'David Lee — Client Relations',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_TKSgdCvyZ3OSoqY6B8o8JvU__KVOKNKklkdUhQij_GbwQMPUwQMXokIjdFXrlinfs_5EGDxmO1c-5lZopxI2B_bkjT4CMaMVWS4IEx63olTFQefXge8eaqQUwoP87I3ZeXUkPwkZ0CInvBWL7vnIiqDEIYoK16hOV7a7l8zl3oo47BK2e0YTPLFrO-kB0dnWAStJSmWOLORrevr0Qb0RHGImCMIXBAQhYg9a4zD8Q2ByKBNeyTQtiUKgOB5aXeCOmleiWuce112L'
  },
  {
    id: 4,
    title: 'Our Commitment to You',
    expert: 'UNF Global Team',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOqNgm4WiwRNxUqiIM3iYmnVUygooPQmJ-62BqBG9kTonc5TVxTmh_ODDCtHvtBOgKHmfW0hjy3kN_inEomJsSfF2189ypqZ1_TuV0_E89QetFU34Wv8w7uC9Hxadus4JXZZ2QBJxwXqA0t2ZU2XBefELYBQfhu4LvIBu8mq4RMVMKpSFbtQIWD7bHixspQHDZaHnAui4Yy9vGu9wfxqHzP66vnYdsgin0YjIkx-VunLkpqLhnLtx8lSy11IxcDHwMY6k36x-5OC3k'
  }
];

export const DESTINATIONS = [
  { value: 'europe', label: 'Europe (France, Italy, Spain)' },
  { value: 'asia', label: 'Asia (Japan, Thailand, Bali)' },
  { value: 'caribbean', label: 'Caribbean & Mexico' },
  { value: 'safari', label: 'African Safari' },
  { value: 'custom', label: 'Other / Multi-City' }
];
