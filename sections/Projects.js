import { useTranslation } from "next-i18next";

import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400", // أو '700' للعرض الغامق
});

const projects = [
  {
    titleKey: "project_title_portfolio",
    descKey: "project_desc_portfolio",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://tahadev.vercel.app",
    image: "/public/projects-image/react.png", // مسار الصورة
  },
  {
    titleKey: "project_title_lms",
    descKey: "project_desc_lms",
    tech: ["Odoo", "Python", "Owl", "Bootstrap"],
    link: "https://engosoft.com",
    image: "/public/projects-image/react.png", // مسار الصورة
  },
  {
    titleKey: "project_title_ui_library",
    descKey: "project_desc_ui_library",
    tech: ["Next", "Tailwind", "Redux"],
    link: "https://druco-web-app.vercel.app/",
    image: "/public/projects-image/react.png", // مسار الصورة
  },
  {
    titleKey: "project_title_ui_React",
    descKey: "project_desc_ui_React",
    tech: ["React", "Tailwind"],
    link: "https://dataanalytics.surge.sh/",
    image: "/public/projects-image/react.png", // مسار الصورة
  },
];

export default function Projects() {
  const { t } = useTranslation("common");

  return (
    <section
      id="projects"
      className="pt-10 pb-28 lg:pb-36 md:pb-36 px-6 bg-white dark:bg-gradient-to-r from-gray-900 to-gray-800 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className={`${firaCode.className} text-3xl font-bold mb-10`}>
          <span className="text-[#1e3a8a] dark:text-emerald-400">03. </span>
          {t("projects_section_title")}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition group"
            >
              <h3 className="text-xl font-semibold mb-2 relative z-10">
                {t(project.titleKey)}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 relative z-10">
                {t(project.descKey)}
              </p>
              <ul className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-emerald-400 text-sm font-medium underline relative z-10"
              >
                {t("project_view")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
