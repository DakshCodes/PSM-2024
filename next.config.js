/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["pixner.net","i.pinimg.com", "res.cloudinary.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
