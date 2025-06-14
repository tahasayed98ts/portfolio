export default function Socials() {
  return (
    <div className="fixed bottom-0 left-6 hidden md:flex flex-col items-center space-y-4 z-40">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-emerald-400 transition"
      >
        <i className="fab fa-github text-xl"></i>
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-emerald-400 transition"
      >
        <i className="fab fa-linkedin text-xl"></i>
      </a>
      <div className="w-px h-24 bg-gray-400 dark:bg-gray-600 mt-2"></div>
    </div>
  );
}
