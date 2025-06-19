import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-lg fixed bottom-6 right-6 z-40 bg-black   dark:bg-white text-white hover:text-black dark:hover:text-white dark:text-black hover:dark:text-black px-4 py-2 rounded-full shadow hover:bg-white dark:hover:bg-emerald-400 transition"
      title="Back to top"
    >
      ↑
    </button>
  ) : null;
}
