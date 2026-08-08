import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN access in dev (e.g. http://192.168.1.12:3001)
  allowedDevOrigins: ["192.168.1.12", "localhost", "127.0.0.1"],
  async redirects() {
    return [
      { source: "/calgary", destination: "/alberta/calgary", permanent: true },
      { source: "/edmonton", destination: "/alberta/edmonton", permanent: true },
      {
        source: "/lethbridge",
        destination: "/alberta/lethbridge",
        permanent: true,
      },
      { source: "/red-deer", destination: "/alberta/red-deer", permanent: true },
      {
        source: "/fort-mcmurray",
        destination: "/alberta/fort-mcmurray",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
