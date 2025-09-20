import { FaIdBadge } from "react-icons/fa";

interface CVButtonProps {
  url: string;
  text: string;
}
const CVButton: React.FC<CVButtonProps> = ({ url, text }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="submit-button inline-flex items-center px-5 py-2 text-white rounded-lg font-semibold"
  >
    <FaIdBadge className="text-xl mr-2" />
    {text}
  </a>
);

export default CVButton;