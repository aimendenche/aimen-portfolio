import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint checks during builds
  },
  /* other config options here */
};

export default nextConfig;
