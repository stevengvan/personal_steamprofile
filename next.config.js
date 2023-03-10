/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.akamai.steamstatic.com", "media.steampowered.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
