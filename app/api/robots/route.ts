import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /
Sitemap: https://yourwebsite.com/api/sitemap

# Prevent crawling of API routes
Disallow: /api/

# Prevent crawling of admin section
Disallow: /admin/

# Prevent crawling of next.js internals
Disallow: /_next/
Disallow: /static/

# Host directive
Host: https://yourwebsite.com`;

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}