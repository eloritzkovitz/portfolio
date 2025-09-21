import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DropdownOptionButton from "./DropdownOptionButton";

export default function ThemeSwitcher({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) {
  const { t } = useTranslation();
  return (
    <DropdownOptionButton onClick={toggleTheme} type="button">
      {theme === "light" ? (
        <FaMoon className="text-lg md:text-xl" />
      ) : (
        <FaSun className="text-lg md:text-xl" />
      )}
      <span>
        {theme === "light" ? t("navbar.dark_mode") : t("navbar.light_mode")}
      </span>
    </DropdownOptionButton>
  );
}