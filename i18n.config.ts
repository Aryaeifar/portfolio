import enLang from "./locales/en.json";
import faLang from './locales/fa.json'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: enLang,
    fa: faLang,
  },
}));

