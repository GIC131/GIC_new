// client/next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This configuration allows the Next.js Image Optimizer to fetch
    // images from your backend, for both www and non-www versions of your domain.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'getinteviewconfidence.com',
        port: '',
        pathname: '/uploads/**',
      },
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