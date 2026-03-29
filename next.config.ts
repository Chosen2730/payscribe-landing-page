import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/invoice",
        destination: "/invoicing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
