/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
