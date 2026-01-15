// src/hooks/useParallaxMouse.js

import { useMotionValue, useTransform } from "framer-motion";

const useParallaxMouse = (strength = 12) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [strength, -strength]);
  const rotateY = useTransform(x, [-100, 100], [-strength, strength]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, reset };
};

export default useParallaxMouse;
