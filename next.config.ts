import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN access in dev (e.g. http://192.168.1.12:3001)
  allowedDevOrigins: ["192.168.1.12", "localhost", "127.0.0.1"],
};

export default nextConfig;
