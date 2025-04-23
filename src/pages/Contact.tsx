import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg">
        Feel free to reach out to me via email or connect with me on social media.
      </p>
      <ul className="mt-4 space-y-4">
        <li className="flex items-center space-x-2">
          <FaEnvelope className="text-black-500" />
          <a href="mailto:eloritzkovitz@gmail.com" className="text-blue-500 hover:underline">
            eloritzkovitz@gmail.com
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaLinkedin className="text-black-500" />
          <a href="https://linkedin.com/in/elor-itzkovitz" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Elor Itzkovitz
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <FaGithub className="text-black-500" />
          <a href="https://github.com/Elor-Itz" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Elor-Itz
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;