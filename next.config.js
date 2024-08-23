const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["pt-BR", "en", "es", "jp"],
    defaultLocale: "pt-BR",
    localeDetection: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/products",
        destination: "https://fullstack-app-mu.vercel.app/api/products", // Proxy para o destino externo
      },
    ];
  },
};
