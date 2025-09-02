/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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