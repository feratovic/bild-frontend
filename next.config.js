module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    DEVELOPMENT_URL: process.env.DEVELOPMENT_URL,
    PRODUCTION_URL: process.env.PRODUCTION_URL,
    SITE_KEY_RECAPTCHA: process.env.SITE_KEY_RECAPTCHA,
    SECRET_KEY_RECAPTCHA: process.env.SECRET_KEY_RECAPTCHA,
  },
};
