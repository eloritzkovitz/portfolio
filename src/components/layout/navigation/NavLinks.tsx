import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const { t } = useTranslation();
  const navLinks = [
    {
      to: "/",
      icon: <FaHome className="text-base md:text-xl" />,
      label: t("navbar.home"),
    },
    {
      to: "/about",
      icon: <FaUser className="text-base md:text-xl" />,
      label: t("navbar.about"),
    },
    {
      to: "/projects",
      icon: <FaProjectDiagram className="text-base md:text-xl" />,
      label: t("navbar.projects"),
    },
    {
      to: "/contact",
      icon: <FaEnvelope className="text-base md:text-xl" />,
      label: t("navbar.contact"),
    },
  ];

  return (
    <ul className="flex list-none space-x-8 p-0 m-0">
      {navLinks.map(({ to, icon, label }) => (
        <li key={to}>
          <Link
            to={to}
            className="flex items-center space-x-2 px-4 py-4"
            onClick={onClick}
          >
            {icon} <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;