import { FaChevronDown, FaChevronUp, FaGlobe, FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DropdownOptionButton from "./DropdownOptionButton";
import DropdownPanel from "./DropdownPanel";
import { LANGUAGES, RTL_LANGS } from "../../../data/languages";
import { useLanguage } from "../../../hooks/useLanguage";

export default function LanguageSwitcher({
  onSelect,
}: {
  onSelect?: () => void;
}) {
  const { language, setLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const current = LANGUAGES.find((lng) => lng.code === language);

  return (
    <DropdownPanel
      direction={isRTL ? "rtl" : "ltr"}
      button={({ open, setOpen }) => (
        <DropdownOptionButton
          aria-haspopup="true"
          aria-expanded={open}
          type="button"
          onClick={() => setOpen(!open)}
        >
          <FaGlobe className="text-base md:text-xl" />
          <span className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
            {t("navbar.language")}: {current?.label}
          </span>
          <span
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              isRTL ? "left-4" : "right-4"
            }`}
          >
            {open ? (
              <FaChevronUp className="text-base md:text-lg" />
            ) : (
              <FaChevronDown className="text-base md:text-lg" />
            )}
          </span>
        </DropdownOptionButton>
      )}
    >
      {({ close }) => (
        <>
          {LANGUAGES.map((lng) => {
            const isOptionRTL = RTL_LANGS.includes(lng.code);
            return (
              <DropdownOptionButton
                key={lng.code}
                onClick={() => {
                  setLanguage(lng.code);
                  close();
                  if (onSelect) onSelect();
                }}
                className={lng.code === language ? "font-bold" : ""}
                style={{
                  justifyContent: isOptionRTL ? "flex-end" : "flex-start",
                  direction: isOptionRTL ? "rtl" : "ltr",
                }}
              >
                <span
                  className={`flex-1 ${isOptionRTL ? "text-right" : "text-left"}`}
                >
                  {lng.label}
                </span>
                {lng.code === language && (
                  <FaCheck
                    className={
                      isOptionRTL ? "mr-2 text-green-500" : "ml-2 text-green-500"
                    }
                  />
                )}
              </DropdownOptionButton>
            );
          })}
        </>
      )}
    </DropdownPanel>
  );
}