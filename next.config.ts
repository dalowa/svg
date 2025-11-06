import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-9d2abfa175714e64aed33b90722a9fd5.r2.dev',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
