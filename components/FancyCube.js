import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function FancyCube() {
  const ref = useRef(null);
  const rotation = useRef({ x: 0, y: 0 });

  useAnimationFrame((t) => {
    const x = (Math.sin(t / 1800) * 25).toFixed(2); // ← سطر جديد هنا
    const y = (t / 80) % 360; // ← وسطر ده كمان

    rotation.current = { x, y };

    if (ref.current) {
      ref.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`; // ← هنا نطبّق الحركة
    }
  });

  return (
    <div className="flex justify-center items-center h-[400px] perspective lg:pr-24">
      <div
        ref={ref}
        className="cube transform-style preserve-3d w-64 h-64 relative"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`face face-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
}
