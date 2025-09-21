import { useTranslation } from "react-i18next";
import socialLinks from "../../data/socialLinksData";
import iconMap from "../socials/SocialIconMap";

const footerSocials = socialLinks.filter(link =>
  typeof link.iconKey === "string" && ["linkedin", "github", "npm"].includes(link.iconKey)
);

const portfolioLink = socialLinks.find(link => link.iconKey === "portfolio");

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Socials Row */}
        <div className="flex justify-center gap-10 mb-8">
          {footerSocials.map(({ url, text, iconKey }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125 text-gray-500 text-4xl"
              aria-label={t(text ?? "")}
            >
              {iconKey && iconMap[iconKey as keyof typeof iconMap]}
            </a>
          ))}
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} {t("footer.text")}
          <br />
          {portfolioLink && (
            <a
              href={portfolioLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-700 underline"
            >
              {t(portfolioLink.text ?? "")}
            </a>
          )}
        </p>
      </div>
    </footer>
  );
}

export default Footer;