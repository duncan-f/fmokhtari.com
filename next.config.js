/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.hcaptcha.com/:path*",
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: {
      allowedOrigins: [
        "payhip.com",
        "*.payhip.com",
        "paypal.com",
        "*.paypal.com",
      ],
    },
  },
};

module.exports = nextConfig;
