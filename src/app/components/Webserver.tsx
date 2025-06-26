"use client";
import Image from "next/image";
import { Caption } from "./fonts/Caption";
import { Quote } from "./fonts/Quote";
import { BsGithub } from "react-icons/bs";
import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import { Ticket } from "./Ticket";
import { Picture } from "./Picture";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Webserver() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="w-full flex flex-col gap-20">
      <div className="flex items-center gap-10 2xl:gap-20">
        <div className="w-1/3 h-full flex flex-col justify-center gap-10">
          <Link href={"https://github.com/saadennour"}>
            <BsGithub
              size={50}
              className="ml-auto rotate-6 max-sm:h-[30px] max-sm:w-[30px] 2xl:h-[70px] 2xl:w-[70px]"
            />
          </Link>
          <Caption
            content="In addition, i worked on other interesting C projects, Cube3D was a special one, where we built a 3D maze game.
            You can check it on my Github."
            className="bg-gradient-to-r from-Sky to-Grape bg-clip-text text-transparent"
          />
        </div>
        <div ref={ref} className="relative w-2/3">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="426"
            height="457"
            viewBox="0 0 426 457"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              stroke="url(#paint0_linear_1005_16670)"
              strokeWidth={3}
              strokeDasharray="0 1"
              d="M75.0697 452.722C75.1232 453.56 74.5137 454.349 73.7082 454.483L60.5822 456.676C59.7767 456.81 59.0804 456.24 59.0268 455.401C58.9733 454.563 59.5829 453.774 60.3884 453.64L72.0559 451.691L71.2806 439.547C71.2271 438.709 71.8367 437.92 72.6422 437.786C73.4476 437.651 74.144 438.222 74.1975 439.06L75.0697 452.722ZM129 111.869L127.56 111.751L129 111.869ZM72.6485 454.211C28.6806 418.187 7.91613 390.646 2.33997 366.451C-3.2834 342.052 6.59916 321.414 22.6722 299.67C54.8659 256.117 112.186 207.381 127.56 111.751L130.441 111.987C114.893 208.704 56.6308 258.508 24.9169 301.412C9.03616 322.897 -0.116571 342.467 5.18507 365.47C10.5339 388.679 30.6548 415.735 74.574 451.72L72.6485 454.211ZM127.56 111.751C134.971 65.6487 150.507 43.4569 171.864 34.6793C182.441 30.3327 194.273 29.3583 206.929 30.2011C219.587 31.044 233.183 33.7145 247.311 36.7485C275.652 42.8345 306.161 50.3756 336.375 48.0798C366.474 45.7927 396.234 33.7382 423.076 0.535246L425.228 2.39716C397.744 36.3956 367.135 48.8047 336.315 51.1465C305.611 53.4796 274.655 45.815 246.476 39.7639C232.346 36.7294 218.919 34.0984 206.477 33.2699C194.034 32.4413 182.691 33.4256 172.703 37.5306C152.931 45.6562 137.779 66.3393 130.441 111.987L127.56 111.751Z"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1005_16670"
                x1="290.5"
                y1="30.8692"
                x2="9.78406"
                y2="438.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFC787" />
                <stop offset="1" stopColor="#E0A6F4" />
              </linearGradient>
            </defs>
          </motion.svg>
          <div className="absolute top-1/3 left-1/3 flex flex-col gap-10">
            <Image
              src="/portfolio/Logos/Docker.png"
              alt="Docker Logo"
              height={100}
              width={100}
              className="max-sm:w-[50px] max-sm:h-[50px] max-xl:w-[75px] max-xl:h-[75px]"
            />
            <Quote
              content="Meanwhile, i learned about docker !!"
              className="bg-gradient-to-r from-Sky to-Grape bg-clip-text text-transparent ml-4"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center max-sm:gap-10 gap-20">
        <div className="w-1/2">
          <div className="relative">
            <Ticket
              content="Get Method"
              color="bg-[#FBF49A] absolute bottom-0 right-2/4 -rotate-6 2xl:bottom-4 "
            />
            <Ticket
              content="Post Method"
              color="bg-Grape absolute bottom-0 right-1/4 2xl:bottom-8"
            />
          </div>
          <div className="flex flex-col items-center relative">
            <div data-aos="flip-left" data-aos-duration="1000">
              <Picture
                image="/portfolio/Code/Webserv.png"
                caption="A Block of Code"
                objPos=""
                className="ml-12"
              />
            </div>
            <div data-aos="flip-left" data-aos-duration="1000">
              <Picture
                image="/portfolio/Assets/3anakib.jpeg"
                caption="Genei Ryodan"
                objPos=""
                className="rotate-6 2xl:mt-20"
              />
            </div>
            <div className="w-full h-[85px] mt-8 max-sm:mt-4">
              <Ticket content="Socket" color="bg-[#FF4646] ml-auto rotate-6" />
            </div>
            <Image
              src="/portfolio/Vectors/Circle.svg"
              alt="Circle"
              height={161}
              width={103}
              className="max-lg:hidden 2xl:hidden absolute lg:w-[75px] lg:h-[120px] lg:right-[25%] lg:bottom-[37%] xl:w-[100px] xl:h-[140px] xl:right-[27%] xl:bottom-[35%] 2xl:right-[31%]"
            />
            <Image
              src="/portfolio/Vectors/TeamArrow.svg"
              alt="Arrow"
              height={430}
              width={148}
              className="max-lg:hidden 2xl:hidden absolute -bottom-16 lg:w-[120px] lg:h-[375px] xl:h-[420px] xl:-bottom-18 xl:right-[37%] 2xl:w-[130px] 2xl:h-[380px] 2xl:right-[38%] 2xl:-bottom-9"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-10 max-sm:gap-5 2xl:gap-16">
          <div className="w-full">
            <BigTitle
              content="Webserver"
              className="bg-gradient-to-r from-Violet to-Grape bg-clip-text text-transparent"
            />
            <Body
              content="C++ Project"
              className="bg-gradient-to-r from-Violet to-Grape bg-clip-text text-transparent"
            />
          </div>
          <Body
            content="One of the most thrilling projects i worked on, a group project where you should build a web server with C++."
            className=""
          />
          <Body
            content="I learned a lot about HTTP servers, how the requests are handled, and the appropriate responses for each case of the different request methods."
            className=""
          />
        </div>
      </div>
      <Quote
        content="Team project"
        className="bg-gradient-to-r from-Violet to-Grape bg-clip-text text-transparent 2xl:ml-56 max-lg:hidden 2xl:hidden"
      />
    </div>
  );
}
