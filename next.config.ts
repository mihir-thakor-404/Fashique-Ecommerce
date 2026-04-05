import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',           // ← Yeh zaroori hai static export ke liye
  // basePath: '/Fashique-Ecommerce',   // ← Tumhare repo ka exact naam (case sensitive)
  // assetPrefix: '/Fashique-Ecommerce', // ← Images aur assets ke liye
  // images: {
  //   unoptimized: true,        // ← GitHub Pages pe next/image ke liye mandatory
  // },
  trailingSlash: true,        // ← Common issue avoid karta hai
};

export default nextConfig;
