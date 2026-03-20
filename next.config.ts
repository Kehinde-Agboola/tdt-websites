import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin tracing to this app when a parent directory has another lockfile (fixes wrong
  // workspace root + "Cannot find module for page" during `next build`).
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
