import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enText, arText } from './lang';

const resources = {
  ar: {
    translation: arText,
  },
  en: {
    translation: enText,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
