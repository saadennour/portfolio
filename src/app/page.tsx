"use client";
import React from "react";
import Home from "./components/Home";
import Journey from "./components/Journey";
import Minishell from "./components/Minishell";
import { School } from "./components/School";
import Sketches from "./components/Sketches";
import Skills from "./components/Skills";
import Webserver from "./components/Webserver";
import Pong from "./components/Pong";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
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
      <main className="h-full flex flex-col items-center gap-20 p-20 max-sm:p-8 overflow-x-hidden">
        <Home />
        <Skills />
        <Journey />
        <School />
        <Minishell />
        <Sketches />
        <Webserver />
        <Pong /> {/* only description left */}
        <Footer />
      </main>
    </>
  );
}
