import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <p className="text-lg text-center mb-8">
        Feel free to reach out to me via email or connect with me on social media.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Email Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center">
          <FaEnvelope className="text-blue-500 text-4xl mb-4" />         
          <a
            href="mailto:eloritzkovitz@gmail.com"
            className="text-blue-500 text-2xl hover:underline"
          >
            eloritzkovitz@gmail.com
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center">
          <FaLinkedin className="text-blue-700 text-4xl mb-4" />          
          <a
            href="https://linkedin.com/in/elor-itzkovitz"
            className="text-blue-500 text-2xl hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elor Itzkovitz
          </a>
        </div>

        {/* GitHub Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center">
          <FaGithub className="text-gray-800 text-4xl mb-4" />         
          <a
            href="https://github.com/Elor-Itz"
            className="text-blue-500 text-2xl hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elor-Itz
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;