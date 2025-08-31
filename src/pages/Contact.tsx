import { useState } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <section className="w-full max-w-screen-xl mx-auto px-2 sm:px-12 py-4 sm:py-10">
      {/* Header */}
      <div className="p-6 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Contact Me
        </h1>
      </div>

      {/* Contact Information & Form */}
      <div className="flex flex-col rounded-lg overflow-hidden mb-8">
        <div className="p-8 flex flex-col items-center justify-center">
          <form
            action="https://formspree.io/f/xrbaervw"
            method="POST"
            className="w-full max-w-2xl flex flex-col gap-6 rounded-xl"
            onSubmit={() => {
              setStatus("idle");
              setTimeout(() => {
                setStatus("success");
              }, 1200);
            }}
          >
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
              tabIndex={-1}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex justify-between items-center bg-white border-none p-4 rounded-lg shadow-sm text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="flex justify-between items-center bg-white border-none p-4 rounded-lg shadow-sm text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={10}
              className="flex justify-between items-center bg-white border-none p-4 rounded-lg shadow-sm text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />
            <button
              type="submit"
              className="submit-button px-6 py-3 rounded-lg font-semibold text-lg shadow transform hover:scale-105 flex items-center justify-center"
            >
              <FaEnvelopeOpen className="text-xl mr-2" />
              Send Message
            </button>
            {status === "success" && (
              <p className="text-green-600 font-semibold mt-2 text-center">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-semibold mt-2 text-center">
                Sorry, there was an error sending your message. Please try
                again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
