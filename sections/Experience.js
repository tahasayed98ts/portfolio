import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400", // أو '700' للعرض الغامق
});

export default function Experience() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  // نحدد الكلاس المناسب لمحاذاة النصوص على الشاشات الكبيرة حسب اللغة
  const lgTextAlignmentClass =
    locale === "ar" ? "lg:text-right" : "lg:text-left";

  const [activeTab, setActiveTab] = useState(0);

  // الوظائف المترجمة
  const jobs = [
    {
      id: 0,
      company: t("jobs.engosoft.company"),
      role: t("jobs.engosoft.role"),
      website: "https://www.engosoft.com/",
      period: t("jobs.engosoft.period"),
      details: Array.isArray(
        t("jobs.engosoft.details", { returnObjects: true })
      )
        ? t("jobs.engosoft.details", { returnObjects: true })
        : [], // التأكد من أن details هي مصفوفة
    },
    {
      id: 1,
      company: t("jobs.rayaAcademy.company"),
      role: t("jobs.rayaAcademy.role"),
      website: "https://www.linkedin.com/company/raya-academy2023/",
      period: t("jobs.rayaAcademy.period"),
      details: Array.isArray(
        t("jobs.rayaAcademy.details", { returnObjects: true })
      )
        ? t("jobs.rayaAcademy.details", { returnObjects: true })
        : [], // التأكد من أن details هي مصفوفة
    },
    // أضف وظائف أخرى هنا بنفس الطريقة...
  ];

  return (
    <section
      id="experience"
      className={`mx-auto px-6 py-20 bg-white dark:bg-gradient-to-r from-gray-900 to-gray-800 text-black dark:text-white`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2
          className={`${firaCode.className} numbered-heading text-4xl font-semibold mb-12`}
          style={{ fontFamily: "Fira Code" }}
        >
          <span className="text-[#1e3a8a] dark:text-emerald-400">02. </span>
          {t("exp")}
        </h2>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Job tabs"
          className="flex space-x-4 border-b border-gray-300 dark:border-gray-700 mb-8 overflow-x-auto"
        >
          {jobs.map(({ company, id }) => (
            <button
              key={id}
              role="tab"
              id={`tab-${id}`}
              aria-selected={activeTab === id}
              aria-controls={`panel-${id}`}
              tabIndex={activeTab === id ? 0 : -1}
              className={`pb-3 px-4 whitespace-nowrap font-medium border-b-4 ${
                activeTab === id
                  ? "border-[#1e3a8a] dark:border-emerald-400 text-[#1e3a8a] dark:text-emerald-400"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-[#1e3a8a] dark:hover:text-emerald-400 hover:border-[#1e3a8a] dark:hover:border-emerald-400"
              } focus:outline-none`}
              onClick={() => setActiveTab(id)}
            >
              {company}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div>
          {jobs.map(({ id, role, company, website, period, details }) => (
            <div
              key={id}
              id={`panel-${id}`}
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`tab-${id}`}
              hidden={activeTab !== id}
              className="focus:outline-none"
            >
              <h3 className="text-xl font-semibold mb-2">
                <span>{role}</span>
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  &nbsp;@&nbsp;
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link underline"
                  >
                    {company}
                  </a>
                </span>
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">{period}</p>

              <ul className="list-disc pl-5 space-y-5 text-gray-700 dark:text-gray-300">
                {details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
