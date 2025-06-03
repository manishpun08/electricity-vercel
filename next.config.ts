import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.vatsalya.com.np",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "electricity.pokharauae.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.126",
        port: "8001",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.97",
        port: "8001",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
