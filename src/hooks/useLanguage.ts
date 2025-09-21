import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const setLanguage = (lng: string) => i18n.changeLanguage(lng);

  // Toggle between 'en' and 'he'
  const toggleLanguage = () =>
    setLanguage(language === "en" ? "he" : "en");

  return { language, setLanguage, toggleLanguage };
}