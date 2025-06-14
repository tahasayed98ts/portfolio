import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
        >
          <div className="relative w-60 h-60 flex items-center justify-center">
            <motion.svg
              width="240"
              height="240"
              viewBox="0 0 240 240"
              className="absolute"
            >
              <motion.circle
                cx="120"
                cy="120"
                r="110"
                stroke="#000000"
                strokeWidth="6"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1.5 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="dark:stroke-emerald-400"
              />
            </motion.svg>

            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-widest text-black dark:text-emerald-400"
            >
              TS
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
