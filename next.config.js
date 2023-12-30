/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pixner.net","i.pinimg.com", "res.cloudinary.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
