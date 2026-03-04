/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build standalone para Azure Static Web Apps (SSR + recursos dinâmicos)
  output: 'standalone',

  // Otimização de imagens habilitada para build dinâmico
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig
