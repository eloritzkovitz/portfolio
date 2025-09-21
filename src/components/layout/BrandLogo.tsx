import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface BrandLogoProps {
  theme: "light" | "dark";
}

const BrandLogo = ({ theme }: BrandLogoProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Link to="/" className="flex items-center">
        <img
          key={theme}
          src={
            theme === "dark"
              ? "/icons/logo-white.png"
              : "/icons/logo-black.png"
          }
          alt="Logo"
          className="logo w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-4"          
        />
      </Link>
      <h2 className="hidden md:block text-3xl font-bold">
        <Link to="/">{t("navbar.name")}</Link>
      </h2>
    </div>
  );
};

export default BrandLogo;
