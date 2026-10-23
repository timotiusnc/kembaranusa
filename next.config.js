/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
    agentUpgrade: 'latest',
  },
}

module.exports = nextConfig
