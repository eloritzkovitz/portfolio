import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import he from "./locales/he.json";

const LANGUAGE_KEY = "app_language";
const saved = localStorage.getItem(LANGUAGE_KEY);

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      he: { translation: he }
    },
    lng: saved || "en", // Use saved language or fallback to English
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;