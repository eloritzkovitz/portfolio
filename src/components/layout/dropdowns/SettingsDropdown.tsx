import {
  FaCog,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DropdownPanel from "./DropdownPanel";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

interface SettingsDropdownProps {
  theme: string;
  toggleTheme: () => void;
}

const SettingsDropdown: React.FC<SettingsDropdownProps> = ({
  theme,
  toggleTheme,
}) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <DropdownPanel
      direction={isRTL ? "rtl" : "ltr"}
      button={({ open, setOpen }) => (
        <button
          onClick={() => setOpen(!open)}
          className="toggle-settings-btn inline-flex items-center gap-x-3 px-4 py-3 text-lg md:text-xl rounded hover:bg-gray-100 transition shadow-sm"
          aria-haspopup="true"
          aria-expanded={open}
          type="button"
        >
          <FaCog className="text-base md:text-xl" />
          {open ? (
            <FaChevronUp className="text-sm md:text-sm" />
          ) : (
            <FaChevronDown className="text-sm md:text-sm" />
          )}
        </button>
      )}
    >
      {({ close }) => (
        <>
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          <LanguageSwitcher onSelect={close} />
        </>
      )}
    </DropdownPanel>
  );
};

export default SettingsDropdown;