import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
