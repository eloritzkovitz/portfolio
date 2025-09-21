import { FaIdBadge } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface CVButtonProps {
  url: string;
  rtl?: boolean;
  textKey?: string;
}

const CVButton: React.FC<CVButtonProps> = ({
  url,
  rtl = false,
  textKey = "about.cv",
}) => {
  const { t } = useTranslation();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="submit-button inline-flex items-center justify-center px-5 py-2 text-white rounded-lg font-semibold gap-2"
      style={{
        flexDirection: rtl ? "row-reverse" : "row",
      }}
    >
      <FaIdBadge className="text-xl" />
      {t(textKey)}
    </a>
  );
};

export default CVButton;
