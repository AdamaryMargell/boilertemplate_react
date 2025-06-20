import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Optimizaciones
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false, // Mantener viewBox para responsividad
                    },
                  },
                },
              ],
            },
            // Props por defecto
            replaceAttrValues: {
              "#686868": "currentColor", // Usar color actual
            },
          },
        },
      ],
    });
    return config;
  }
};

export default nextConfig;
