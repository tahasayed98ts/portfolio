import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

export default function MouseFollower() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useAnimationFrame(() => {
    const easing = 0.1;
    const dx = mouse.x - smooth.current.x;
    const dy = mouse.y - smooth.current.y;

    smooth.current.x += dx * easing;
    smooth.current.y += dy * easing;

    if (ref.current) {
      ref.current.style.transform = `translate3d(${smooth.current.x}px, ${smooth.current.y}px, 0)`;
    }
  });

  return (
    <motion.div
      ref={ref}
      className="w-5 h-5 bg-yellow-400 dark:bg-emerald-400 rounded-full fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}
