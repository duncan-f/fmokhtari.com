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
};

module.exports = nextConfig;
