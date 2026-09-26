/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig
