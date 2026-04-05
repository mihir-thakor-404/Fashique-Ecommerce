import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  basePath: '/Fashique-Ecommerce',   
  assetPrefix: '/Fashique-Ecommerce', 
  images: {
    unoptimized: true,        
  },
  trailingSlash: true,
};

export default nextConfig;
