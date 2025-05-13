import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.seeklogo.com", // ✅ Exact hostname
      },
      {
        protocol: "https",
        hostname: "**", // This is still not supported
      },
    ],
  },
};

export default nextConfig;
