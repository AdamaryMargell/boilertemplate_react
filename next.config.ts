import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // Configuración importante para importaciones dinámicas
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /asset/, // Evita conflicto con otros loaders
      use: ['next-image-loader'],
    });

    return config;
  },
  // Necesario para importaciones dinámicas de SVG
  images: {
    disableStaticImages: true,
  },
  experimental: {
    optimizeCss: false,
  },
  transpilePackages: ['primereact'],
};

export default nextConfig;
