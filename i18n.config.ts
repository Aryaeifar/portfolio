import enLanguage from "./locales/en.json";
import faLanguage from './locales/fa.json'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: enLanguage,
    fa: faLanguage,
  },
}));

