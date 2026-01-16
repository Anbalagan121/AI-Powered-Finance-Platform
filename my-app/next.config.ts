import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: '.',
  },
  images: {
    domains: ['randomuser.me'],
  },
};

export default nextConfig;
