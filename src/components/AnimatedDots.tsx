import { motion } from "framer-motion";
import { memo, useMemo } from "react";

const AnimatedDots = memo(() => {
  const dots = useMemo(() => {
    return [...Array(1000)].map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 80 + Math.random() * 100;

      return {
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 3,
        moveRange: 50 + Math.random() * 30,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {dots.map(dot => (
        <motion.div
          key={dot.id}
          className="absolute bg-white rounded-full"
          style={{ width: dot.size, height: dot.size }}
          initial={{ x: dot.x, y: dot.y, opacity: 0.3 }}
          animate={{
            x: [
              dot.x,
              dot.x + (Math.random() - 0.5) * dot.moveRange,
              dot.x,
            ],
            y: [
              dot.y,
              dot.y + (Math.random() - 0.5) * dot.moveRange,
              dot.y,
            ],
            opacity: [0.6, 0.7, 0.3],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export default AnimatedDots;
