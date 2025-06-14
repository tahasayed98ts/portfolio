import { useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

export default function PentaCube() {
  const ref = useRef(null);
  const rotation = useRef({ x: 0, y: 0 });

  useAnimationFrame((t) => {
    const x = (Math.sin(t / 1000) * 30).toFixed(2);
    const y = (t / 50) % 360;
    rotation.current = { x, y };

    if (ref.current) {
      ref.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    }
  });

  return (
    <div className="h-[500px] flex items-center justify-center bg-gray-950 text-white">
      <div className="perspective-3d">
        <div
          ref={ref}
          className="relative w-48 h-48 transform-style-3d transition-transform duration-1000"
        >
          {/* الوجه الأمامي */}
          <div className="face front">1</div>
          {/* الوجه الخلفي */}
          <div className="face back">2</div>
          {/* اليمين */}
          <div className="face right">3</div>
          {/* الشمال */}
          <div className="face left">4</div>
          {/* القاعدة أو الوجه الخامس */}
          <div className="face bottom">5</div>
        </div>
      </div>
    </div>
  );
}
