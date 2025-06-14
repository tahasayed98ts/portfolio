import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="py-6 px-6 bg-white dark:bg-gradient-to-r from-gray-900 to-gray-800 text-center text-sm text-black dark:text-gray-400">
      <div className="max-w-4xl mx-auto">
        <p>
          {new Date().getFullYear()} {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
}
