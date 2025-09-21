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
          className="logo w-12 h-12"
          style={{
            height: "50px",
            width: "50px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        />
      </Link>
      <h2 className="hidden md:block text-3xl font-bold">
        <Link to="/">{t("navbar.name")}</Link>
      </h2>
    </div>
  );
};

export default BrandLogo;
