import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400", // أو '700' للعرض الغامق
});

export default function About() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  // نحدد الكلاس المناسب لمحاذاة النصوص على الشاشات الكبيرة حسب اللغة
  const lgTextAlignmentClass =
    locale === "ar" ? "lg:text-right" : "lg:text-left";

  return (
    <section
      id="about"
      className="mx-auto px-6 py-20 bg-white dark:bg-gradient-to-r from-gray-900 to-gray-800 text-black dark:text-white"
      data-aos="fade-up"
      dir={locale === "ar" ? "rtl" : "ltr"}
      style={{
        visibility: "visible",
        opacity: 1,
        transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
        transition:
          "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",
      }}
    >
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2
          className={`${firaCode.className} numbered-heading text-4xl font-semibold mb-12`}
        >
          <span className="text-[#1e3a8a] dark:text-emerald-400">01.</span>{" "}
          {t("about_title") || "About Me"}
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* النص */}
          <div className="about-text flex-1 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>{t("about_description")}</p>
            <p className="mt-4">
              {t("about_description_two")}{" "}
              <a
                href="https://engosoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e3a8a] dark:text-emerald-400 underline"
              >
                {t("about_description_company")}
              </a>{" "}
              {t("about_description_clients")}
            </p>

            <p className="mt-6 font-semibold">{t("about_skills_title")}</p>
            <ul className="skills-list grid grid-cols-2 sm:grid-cols-2 gap-x-3 gap-y-1 mt-4 list-disc list-inside text-[#1e3a8a] dark:text-emerald-400">
              <li>JavaScript (ES6+)</li>
              <li>Node.js</li>
              <li>Next</li>
              <li>React</li>
              <li>Odoo</li>
              <li>Python</li>
              <li>Owl</li>
            </ul>
          </div>

          {/* الصورة */}
          <div className="about-pic flex-shrink-0 max-w-sm w-full rounded-md overflow-hidden shadow-xl border-4 border-dotted  p-2 border-sky-500">
            <img
              src="/projects-image/profile-taha.png"
              alt="Headshot"
              className="object-cover w-full h-full grayscale ease-in duration-100 hover:grayscale-0  rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
