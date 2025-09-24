import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// @ts-ignore
import Logo from "../../assets/icons/logo.svg?react";

interface BrandLogoProps {
  theme: "light" | "dark";
}

const BrandLogo = ({ theme }: BrandLogoProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Link to="/" className="flex items-center">
        <Logo
          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-4 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        />
      </Link>
      <h2 className="hidden md:block text-3xl font-bold">
        <Link to="/">{t("navbar.name")}</Link>
      </h2>
    </div>
  );
};

export default BrandLogo;
