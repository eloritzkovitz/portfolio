import { Typewriter } from "react-simple-typewriter";
import SocialLinkIcon from "../socials/SocialLinkIcon";
import socialLinks from "../../data/socialLinksData";
import { useTranslation } from "react-i18next";

const bannerSocials = socialLinks.filter(
  (link) =>
    typeof link.iconKey === "string" &&
    ["linkedin", "github", "cv"].includes(link.iconKey)
);

function Banner() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  return (
    <div
      className="banner h-auto min-h-[60vh] md:h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-2 sm:px-0"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className={`relative z-10 w-full max-w-screen-xl mx-auto px-2 sm:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center ${
          isRTL ? "md:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`flex-1 w-full ${
            isRTL ? "text-right md:text-right" : "text-center md:text-left"
          }`}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold mb-4 text-gray-900">
            <Typewriter
              key={i18n.language}
              words={[t("banner.name")]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={120}
              delaySpeed={5000}
            />
          </h1>
          <h2 className="text-xl sm:text-xl md:text-4xl font-bold mb-4 text-gray-900">
            {t("banner.title")}
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl text-gray-900 mb-8">
            {t("banner.description")}
          </p>
          {/* Social Links */}
          <div
            className={`hidden md:inline-flex gap-8 mb-6 ${
              isRTL ? "justify-end" : "justify-start"
            }`}
            style={{ width: "auto" }}
          >
            {bannerSocials.map((link) => (
              <SocialLinkIcon key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
