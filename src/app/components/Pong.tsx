"use client";
import Image from "next/image";
import { Quote } from "./fonts/Quote";
import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import { Picture } from "./Picture";
import { Ticket } from "./Ticket";
import { Description } from "./Description";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Pong() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex items-center max-sm:pl-4">
        <div ref={ref} className="relative">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="651"
            height="435"
            viewBox="0 0 651 435"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              stroke="url(#paint0_linear_1005_16685)"
              strokeWidth={3}
              strokeDasharray="0 1"
              d="M380.437 249.658L380.536 248.161L380.437 249.658ZM7.69012 434.1C8.09378 434.823 9.00746 435.083 9.73089 434.679L21.5199 428.101C22.2433 427.697 22.5025 426.784 22.0988 426.06C21.6952 425.337 20.7815 425.078 20.0581 425.481L9.57899 431.328L3.73186 420.849C3.32819 420.126 2.41451 419.867 1.69108 420.27C0.967649 420.674 0.708426 421.588 1.11209 422.311L7.69012 434.1ZM647.507 0.220813C644.095 34.5615 628.455 99.98 588.092 155.084C547.786 210.109 482.828 254.873 380.536 248.161L380.339 251.154C483.796 257.943 549.689 212.589 590.512 156.857C631.277 101.204 647.043 35.2278 650.493 0.517469L647.507 0.220813ZM380.536 248.161C298.444 242.774 217.643 245.222 151.143 270.888C84.5362 296.596 32.3502 345.571 7.55695 432.96L10.443 433.779C34.9688 347.333 86.4607 299.069 152.223 273.687C218.091 248.265 298.349 245.774 380.339 251.154L380.536 248.161Z"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1005_16685"
                x1="573.011"
                y1="216.869"
                x2="9"
                y2="216.869"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF4646" />
                <stop offset="1" stopColor="#FF9486" />
              </linearGradient>
            </defs>
          </motion.svg>
          <Image
            src="/portfolio/Logos/React.png"
            alt="React Logo"
            height={100}
            width={100}
            className="absolute bottom-[20%] left-1/4 rotate-12 max-xl:bottom-4 max-xl:scale-90 max-sm:scale-50 max-sm:bottom-0 max-sm:left-10"
          />
        </div>
        <Quote
          content="from now on im obsessed with web Development."
          className="bg-gradient-to-r from-Berry to-Red bg-clip-text text-transparent"
        />
      </div>
      <div className="flex gap-20 max-sm:gap-5">
        <div className="w-1/2 flex flex-col gap-10 max-sm:gap-5">
          <div className="bg-gradient-to-r from-Berry to-Red bg-clip-text text-transparent">
            <BigTitle content="Pong Game" />
            <Body content="Web App" />
          </div>
          <Body content="My first web app, our goal was to build a platform where you can play real time with other players." />
          <Body content="The main idea was to offer some thrilling ping pong games, connect with friends, engage in lively chats and build a community by adding friends." />
          <Body content="Achieve milestones and earn cool achievements that showcase your progress." />
          <div className="flex gap-3">
            <Description content="My first project as Front-end Developer, a project that i really enjoyed, and the one behind my obsession with web development." />
            <Description content="Working with new frameworks and tools like next.js, tailwind and figma. The project was done after 2 months of hard work and challenges." />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-20 max-sm:gap-10">
          <div className="w-full flex max-sm:flex-col max-xl:flex-col items-center justify-center">
            <div data-aos="flip-left" data-aos-duration="1000">
              <Picture
                image="/portfolio/Assets/Match.jpeg"
                caption="3anakib"
                objPos="object-top"
                className="ml-6 rotate-12 max-sm:ml-0 2xl:scale-150"
              />
            </div>
            <Ticket content="Next.js" color="bg-Peach rotate-6" />
            <Ticket
              content="Design Patterns"
              color="bg-Pink -rotate-12 self-end mr-2 pl-1 max-sm:mr-0"
            />
          </div>
          <Image
            src="/portfolio/Assets/App.png"
            alt="Pong App"
            width={500}
            height={500}
            className="2xl:scale-125"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
}
