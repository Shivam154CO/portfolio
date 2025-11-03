/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'zpcjcjqhhswcyaygtmxh.supabase.co',
      'cdn-icons-png.flaticon.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zpcjcjqhhswcyaygtmxh.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig