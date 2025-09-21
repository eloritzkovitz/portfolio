import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const DirectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";
  }, [i18n.language]);

  return <>{children}</>;
};

export default DirectionProvider;