/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // Disable turbopack for production build
      enabled: false,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig