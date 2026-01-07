/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'i.ibb.co',
      'tse4.mm.bing.net',
      'th.bing.net',
      'img.freepik.com'
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
      // Caching headers for better performance
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Sitemap and robots.txt generation
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
        permanent: true,
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;