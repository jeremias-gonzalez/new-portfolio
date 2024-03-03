/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      formats: ['image/avif', 'image/webp'],
      domains: ['images.unsplash.com'], // Agrega el dominio directamente en "domains"
      path: '/public/images/', // Ruta relativa dentro del dominio
      remotePatterns: [
        {
          
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/public/images/',
        },
      ],
    },
  }
  


export default nextConfig;
