import { LinkType } from "../types/link";

const socialLinks: LinkType[] = [
  { label: "LinkedIn", url: "https://linkedin.com/in/elor-itzkovitz", iconKey: "linkedin", text: "social.linkedin" },
  { label: "GitHub", url: "https://github.com/eloritzkovitz", iconKey: "github", text: "social.github" },
  { label: "Resume", url: "https://drive.google.com/file/d/1g8KKtvotnUHM5wPFEXKCIp44IGpwU0Ry/view?usp=drive_link", iconKey: "cv", text: "social.cv" },
  { label: "npm", url: "https://www.npmjs.com/~eloritzkovitz", iconKey: "npm", text: "social.npm" },
  { label: "Portfolio", url: "https://eloritzkovitz.github.io", iconKey: "portfolio", text: "social.portfolio" },
  { label: "Email", url: "mailto:eloritzkovitz@gmail.com", iconKey: "email", text: "social.email" },
];

export default socialLinks;
