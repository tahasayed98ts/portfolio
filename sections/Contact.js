import { send } from "emailjs-com";
import { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Fira_Code } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  const { t } = useTranslation("common");
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formRef.current.name.value,
          email: formRef.current.email.value,
          message: formRef.current.message.value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      toast.success(t("toast_messga_seccess")),
        
      formRef.current.reset();
    } catch (error) {
      console.error("Caught error:", error);
      toast.error(
        t("toast_messga_failed") +
          (error?.response?.data?.error || error?.message || "خطأ غير معروف")
      )
        
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[100px] py-2 px-6 bg-white dark:bg-gradient-to-r from-gray-900 to-gray-800 text-black dark:text-white"
    >
      {/* Toast Container for React Toastify */}
      <ToastContainer position="top-center" autoClose={4000} />

      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className={`${firaCode.className} text-3xl font-bold mb-6`}>
          <span className="text-[#1e3a8a] dark:text-emerald-400">04. </span>
          {t("contact_title")}
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          {t("contact_description")}
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">{t("form_name")}</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-black dark:text-white"
              placeholder={t("form_name")}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">{t("form_email")}</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-black dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              {t("form_message")}
            </label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-black dark:text-white"
              placeholder={t("form_message")}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded text-white transition ${
              isLoading
                ? "opacity-50 cursor-not-allowed bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700 dark:bg-emerald-600 dark:hover:bg-emerald-800"
            }`}
          >
            {isLoading ? t("form_loading") : t("form_submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
