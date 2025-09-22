"use client";
import { useMouseAxis } from "@/hooks/useMouseAxis";
import { motion } from "framer-motion";
import "@/styles/cursorStyle.css";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { x, y } = useMouseAxis();

  return (
    <>
      <motion.div
        className="cursor pointer-events-none debug"
        animate={{
          WebkitMaskPosition: `${x - 20}px ${y - 20}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      ></motion.div>
      {children}
    </>
  );
}
