import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Scrollspy from "react-scrollspy";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: "400", // أو '700' للعرض الغامق
});

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة الـ Menu
  useEffect(() => setMounted(true), []);

  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, asPath } = router;

  const switchLang = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.push(asPath, asPath, { locale: newLocale });
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // إغلاق القائمة
  };

  return (
    <header
      className={` fixed top-0 left-0 w-full h-16 bg-white dark:bg-gradient-to-r from-slate-800 to-slate-800 dark:backdrop-blur-sm text-black dark:text-white shadow z-50`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <motion.svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#2563eb"
                strokeWidth="2"
                fill="none"
                className="stroke-[#284b63] dark:stroke-emerald-400"
              />
            </motion.svg>

            <span className="absolute inset-0 flex items-center justify-center font-bold text-[#0d1b2a] dark:text-emerald-400 text-xs tracking-wider">
              TS
            </span>
          </div>
        </Link>

        {/* إخفاء القوائم على الشاشات الصغيرة */}
        <div
          className={`${firaCode.className} hidden md:flex items-center space-x-6`}
        >
          <Scrollspy
            items={["about", "experience", "projects", "contact"]}
            currentClassName="text-[#1e3a8a] dark:text-emerald-400"
            className="flex space-x-6 text-sm font-medium items-center"
            offset={-100}
          >
            <li className="ml-4">
              <a
                href="#about"
                className="hover:text-[#1e3a8a] dark:hover:text-emerald-400"
              >
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  01.
                </span>{" "}
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-[#1e3a8a] dark:hover:text-emerald-400"
              >
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  02.
                </span>{" "}
                {t("experience")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[#1e3a8a] dark:hover:text-emerald-400"
              >
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  03.
                </span>{" "}
                {t("projects")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#1e3a8a] dark:hover:text-emerald-400"
              >
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  04.
                </span>{" "}
                {t("contact")}
              </a>
            </li>
          </Scrollspy>

          {/* زر التبديل بين الوضع الليلي والنهاري */}
          <div className="flex items-center">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="ml-4 text-lg"
                title="Toggle Theme"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            )}

            {/* زر تغيير اللغة */}
            <button onClick={switchLang} className="ml-4" title={t("toggle")}>
              <img
                src={locale === "en" ? "/flags/eg.webp" : "/flags/uk.webp"}
                alt="Language Switch"
                className="w-6 h-6 rounded-full grayscale hover:grayscale-0 transition"
              />
            </button>
          </div>
        </div>

        <div className="md:hidden lg:hidden flex justify-center items-center gap-2">
          {/* زر التبديل بين الوضع الليلي والنهاري */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-3xl"
              title="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          )}

          {/* زر تغيير اللغة */}
          <button onClick={switchLang} className="" title={t("toggle")}>
            <img
              src={locale === "en" ? "/flags/eg.webp" : "/flags/uk.webp"}
              alt="Language Switch"
              className=" w-6 h-6  rounded-full grayscale hover:grayscale-0 transition"
            />
          </button>
        </div>

        {/* زر Hamburger يظهر على الشاشات الصغيرة */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-4xl hover:text-[#1e3a8a] dark:hover:text-emerald-400"
        >
          ☰
        </button>
      </nav>

      {/* القائمة المنبثقة التي تظهر من اليمين أو اليسار */}
      {isMenuOpen && (
        <div
          className={`md:hidden bg-white dark:bg-gray-800 text-black dark:text-white py-4 space-y-4 fixed top-0 z-50 w-72 transition-transform duration-300 transform ${
            locale === "en" ? "left-0" : "right-0"
          }`}
          style={{
            height: "100vh", // تأكيد أن الـ Sidebar يمتد بطول الصفحة بالكامل
          }}
        >
          {/* زر إغلاق Sidebar */}
          <button
            onClick={closeMenu}
            className={`absolute top-4 dark:hover:text-emerald-400 ${
              locale === "en" ? "right-4" : "left-4"
            } text-2xl text-black dark:text-white hover:text-[#1e3a8a] dark:hover:text-emerald-400`}
          >
            ✕
          </button>

          <Scrollspy
            items={["about", "experience", "projects", "contact"]}
            currentClassName="text-[#1e3a8a] dark:text-emerald-400"
            className="flex flex-col items-start text-sm font-medium space-y-4"
            offset={-100}
          >
            <li className="w-full border-b border-gray-300 dark:border-gray-600">
              <a
                href="#about"
                className="block py-2 px-4 hover:text-[#1e3a8a] dark:hover:text-emerald-400"
              >
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  01.
                </span>{" "}
                {t("about")}
              </a>
            </li>
            <li className="w-full border-b border-gray-300 dark:border-gray-600">
              <a
                href="#experience"
                className="block py-2 px-4 hover:text-[#1e3a8a] dark:hover:text-emerald-400"
              >
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  02.
                </span>{" "}
                {t("experience")}
              </a>
            </li>
            <li className="w-full border-b border-gray-300 dark:border-gray-600">
              <a
                href="#projects"
                className="block py-2 px-4 hover:text-[#1e3a8a] dark:hover:text-emerald-400"
              >
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  03.
                </span>{" "}
                {t("projects")}
              </a>
            </li>
            <li className="w-full border-b border-gray-300 dark:border-gray-600">
              <a
                href="#contact"
                className="block py-2 px-4 hover:text-[#1e3a8a] dark:hover:text-emerald-400"
              >
                <span className="text-[#1e3a8a] dark:text-emerald-400">
                  04.
                </span>{" "}
                {t("contact")}
              </a>
            </li>
          </Scrollspy>

          {/* زر التبديل بين الوضع الليلي والنهاري */}
          <div className="flex justify-start items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="mx-2 text-4xl"
                title="Toggle Theme"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            )}

            {/* زر تغيير اللغة */}
            <button onClick={switchLang} className="" title={t("toggle")}>
              <img
                src={locale === "en" ? "/flags/eg.webp" : "/flags/uk.webp"}
                alt="Language Switch"
                className=" w-7 h-7 a rounded-full grayscale hover:grayscale-0 transition"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
