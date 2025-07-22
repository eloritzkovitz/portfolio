import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 sm:px-8 py-4 sm:py-8">
      {/* Intro Card */}
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Contact Me
        </h1>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        {/* Email Card */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
          <FaEnvelope className="text-3xl sm:text-4xl mb-4" />         
          <div className="flex justify-center w-full">
            <a
              href="mailto:eloritzkovitz@gmail.com"
              className="text-xl sm:text-2xl hover:underline truncate max-w-[180px] sm:max-w-xs"
              style={{ display: "inline-block" }}
            >
              eloritzkovitz@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
          <FaLinkedin className="text-3xl sm:text-4xl mb-4" />          
          <a
            href="https://linkedin.com/in/elor-itzkovitz"
            className="text-xl sm:text-2xl hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elor Itzkovitz
          </a>
        </div>

        {/* GitHub Card */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6 sm:p-8 flex flex-col items-center text-center">
          <FaGithub className="text-3xl sm:text-4xl mb-4" />         
          <a
            href="https://github.com/eloritzkovitz"
            className="text-xl sm:text-2xl hover:underline"
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