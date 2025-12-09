// i18next.config.js
export default {
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'es',
  supportedLngs: ['es', 'en'],
  defaultNS: 'common',
  react: { 
    useSuspense: false 
  }
}