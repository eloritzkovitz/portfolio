import { LinkType } from "../types/link";

const socialLinks: LinkType[] = [
  { label: "LinkedIn", url: "https://linkedin.com/in/elor-itzkovitz", iconKey: "linkedin", text: "LinkedIn" },
  { label: "GitHub", url: "https://github.com/eloritzkovitz", iconKey: "github", text: "GitHub" },
  { label: "Resume", url: "https://drive.google.com/file/d/1g8KKtvotnUHM5wPFEXKCIp44IGpwU0Ry/view?usp=drive_link", iconKey: "cv", text: "View My CV" },
  { label: "npm", url: "https://www.npmjs.com/~eloritzkovitz", iconKey: "npm", text: "npm" },
  { label: "Portfolio", url: "https://eloritzkovitz.github.io", iconKey: "portfolio", text: "View this website's source on GitHub" },
  { label: "Email", url: "mailto:eloritzkovitz@gmail.com", iconKey: "email", text: "Email" },
];

export default socialLinks;
