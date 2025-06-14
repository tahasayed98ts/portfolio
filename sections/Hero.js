import { useTranslation } from "next-i18next";
import FancyCube from "/components/FancyCube";
import { useRouter } from "next/router";

import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400", // أو '700' للعرض الغامق
});

export default function Hero() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  // نحدد الكلاس المناسب لمحاذاة النصوص على الشاشات الكبيرة حسب اللغة
  const lgTextAlignmentClass =
    locale === "ar" ? "lg:text-right" : "lg:text-left";

  return (
    <section
      id="about"
      className={` flex flex-col lg:flex-row items-center bg-white dark:bg-gradient-to-r from-gray-800 to-gray-900 text-black dark:text-white px-6 lg:px-20 pt-24 lg:pt-24`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full h-full" data-aos="fade-up">
        <h1
          className={`${firaCode.className} text-2xl font-bold mb-6 text-[#1e3a8a] dark:text-emerald-400 text-center ${lgTextAlignmentClass}`}
        >
          {t("hero_heading")}
        </h1>

        <h2
          className={`text-4xl sm:text-5xl mb-6 font-bold text-gray-700 dark:text-gray-300 text-center ${lgTextAlignmentClass}`}
        >
          {t("hero_subtitle")}
        </h2>

        <p
          className={`text-md max-w-3xl leading-6 text-gray-700 dark:text-gray-300 text-center ${lgTextAlignmentClass}`}
        >
          {t("hero_subtitle_two")}
        </p>
      </div>

      <div className="mt-10 lg:mt-0 lg:ml-12">
        <FancyCube />
      </div>
    </section>
  );
}
