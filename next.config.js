/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HOST_SERVER: process.env.NEXT_PUBLIC_HOST_SERVER,
    GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API,
  },
};

module.exports = nextConfig;
