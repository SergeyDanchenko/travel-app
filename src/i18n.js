import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const languages = ['en', 'ru', 'ua'];

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem('lang') || 'en',
    debug: true,
    whitelist: languages,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;