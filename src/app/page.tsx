"use client";
import Home from "../components/Home";
import Journey from "../components/Journey";
import Minishell from "../components/Minishell";
import { School } from "../components/School";
import Sketches from "../components/Sketches";
import Skills from "../components/Skills";
import Webserver from "../components/Webserver";
import Pong from "../components/Pong";
import Footer from "../components/Footer";
import { Scroll } from "../components/Scroll";
import "./globals.css";
import { Projects } from "@/components/Projects";
import { useMouseAxis } from "../hooks/useMouseAxis";
import { motion } from "framer-motion";
import "@/styles/cursorStyle.css";

export default function App() {
  const { x, y } = useMouseAxis();

  return (
    <>
      <Scroll />
      <motion.div
        className="cursor pointer-events-none"
        animate={{
          WebkitMaskPosition: `${x - 20}px ${y - 20}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      />
      <main className="min-w-[375px] min-h-screen flex flex-col items-center gap-20 p-20 max-sm:p-5 overflow-x-hidden">
        <Home />
        <Skills />
        <Projects />
        <Journey />
        <School />
        <Minishell />
        <Sketches />
        <Webserver />
        <Pong />
        <Footer />
      </main>
    </>
  );
}
