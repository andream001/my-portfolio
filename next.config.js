/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para Azure, GitHub Pages e exportação estática
  output: process.env.EXPORT === 'true' ? 'export' : undefined,
  
  // Otimizar imagens
  images: {
    unoptimized: process.env.EXPORT === 'true' ? true : false,
  },
}

module.exports = nextConfig
