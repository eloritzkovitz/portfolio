import ContactForm from "../components/ui/ContactForm";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-screen-xl mx-auto px-2 sm:px-12 py-4 sm:py-10">
      {/* Header */}
      <div className="p-6 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          {t("contact.title")}
        </h1>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col rounded-lg overflow-hidden mb-8">
        <div className="p-8 flex flex-col items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;