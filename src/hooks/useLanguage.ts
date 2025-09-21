import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const LANGUAGE_KEY = "app_language";

export function useLanguage() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  // On mount, set language from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved && saved !== language) {
      i18n.changeLanguage(saved);
    }
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  const setLanguage = (lng: string) => i18n.changeLanguage(lng);

  // Toggle between 'en' and 'he'
  const toggleLanguage = () => setLanguage(language === "en" ? "he" : "en");

  return { language, setLanguage, toggleLanguage };
}