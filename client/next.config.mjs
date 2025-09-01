// client/next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.getinteviewconfidence.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;