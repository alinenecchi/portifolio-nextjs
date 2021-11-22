const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['pt-BR','en','es', 'jp'],
    defaultLocale: 'pt-BR',
    localeDetection: true
  },
}