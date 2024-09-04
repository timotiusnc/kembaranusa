/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Because "/projects" is still empty, redirect to /projects/sumba-2024 for temporary
        // permanent: false as we might need to change this decision in the future
        source: '/projects',
        destination: '/projects/sumba-2024',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
