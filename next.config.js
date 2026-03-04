/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático para Azure Static Web Apps
  output: 'export',

  // Desabilitar otimização de imagens para export estático
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
