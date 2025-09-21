import { useState } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { t } = useTranslation();

  return (
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
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} />
      <input
        type="text"
        name="name"
        placeholder={t("contact.yourName")}
        required
        className="flex justify-between items-center bg-white border-none p-4 rounded-lg shadow-sm text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <input
        type="email"
        name="email"
        placeholder={t("contact.yourEmail")}
        required
        className="flex justify-between items-center bg-white border-none p-4 rounded-lg shadow-sm text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <textarea
        name="message"
        placeholder={t("contact.yourMessage")}
        required
        rows={10}
        className="flex justify-between items-center bg-white border-none p-4 rounded-lg shadow-sm text-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
      />
      <button
        type="submit"
        className="submit-button px-6 py-3 rounded-lg font-semibold text-lg shadow flex items-center justify-center gap-2"
      >
        <FaEnvelopeOpen className="text-xl" />
        {t("contact.sendMessage")}
      </button>
      {status === "success" && (
        <p className="text-green-600 font-semibold mt-2 text-center">
          {t("contact.successMessage")}
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-semibold mt-2 text-center">
          {t("contact.errorMessage")}
        </p>
      )}
    </form>
  );
};

export default ContactForm;