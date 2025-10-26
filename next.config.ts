/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.pixboost.com',
      },
    ],
  },
}

module.exports = nextConfig