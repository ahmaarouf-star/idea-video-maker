/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'storage.googleapis.com'],
    unoptimized: process.env.NEXT_PUBLIC_ENV === 'development'
  }
}

module.exports = nextConfig
