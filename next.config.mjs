/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
     formats: ['image/avif', 'image/webp'],
    domains: ['images.unsplash.com',"public/images/", "api.microlink.io"], // Agrega el dominio directamente en "domains"

      remotePatterns: [
        {
          
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          
        },
      ],
    },
  }
  


export default nextConfig;
