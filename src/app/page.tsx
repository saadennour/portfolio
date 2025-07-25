import Home from "./components/Home";
import Journey from "./components/Journey";
import Minishell from "./components/Minishell";
import { School } from "./components/School";
import Sketches from "./components/Sketches";
import Skills from "./components/Skills";
import Webserver from "./components/Webserver";
import Pong from "./components/Pong";
import Footer from "./components/Footer";
import { Scroll } from "./components/Scroll";
import "./globals.css";

export default function App() {
  return (
    <>
      <Scroll />
      <main className="min-w-[375px] h-full flex flex-col items-center gap-20 p-20 max-sm:p-5 overflow-x-hidden no-scrollbar">
        <Home />
        <Skills />
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
