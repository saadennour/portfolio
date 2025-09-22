"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 z-10 h-2 bg-Grape origin-left"
        style={{ scaleX }}
      />
    </>
  );
};
