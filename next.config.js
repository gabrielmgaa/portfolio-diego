/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
    ],
  },
}

module.exports = nextConfig
