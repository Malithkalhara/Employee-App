/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination:'/employee/list',
        permanent: true,
        basePath:false
      },
    ]
  },
}

module.exports = nextConfig
