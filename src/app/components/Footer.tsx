"use client";
import Image from "next/image";
import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { Nanum_Pen_Script } from "next/font/google";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const dm_sans = DM_Sans({ subsets: ["latin"] });
const pen = Nanum_Pen_Script({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="w-full flex flex-col gap-20 max-sm:gap-5 2xl:gap-40">
      <div className="flex gap-20 max-sm:gap-5 max-sm:px-2">
        <div className="w-1/2 flex flex-col gap-10 justify-center max-sm:gap-5">
          <BigTitle
            content="Today"
            className="bg-gradient-to-r from-Violet to-Grape bg-clip-text text-transparent"
          />
          <Body content="My journey didn't end here and i still have the same hunger to learn, grow and achieve more." />
          <a
            href={"/portfolio/resume.pdf"}
            download={"SaadEnnour_Resume.pdf"}
            className={`${dm_sans.className} bg-gradient-to-r from-Lime to-Citron bg-clip-text text-transparent border-4 border-Grape rounded-[32px] px-6 py-2 text-[24px] leading-8 max-md:border-2 max-md:px-2 max-md:py-1 max-md:text-[12px] max-md:leading-4 self-center cursor-pointer hover:transition ease-in-out hover:scale-110 delay-150 duration-500`}
          >
            Resume
          </a>
        </div>
        <div className="w-1/2 relative h-[720px]">
          <div className="flex justify-center gap-4 rotate-12 pl-40">
            <Image
              src="/portfolio/Vectors/Star.svg"
              alt="BigStar"
              height={92}
              width={69}
              className="animate-flashy max-sm:w-[42px] max-sm:h-[56px]"
            />
            <Image
              src="/portfolio/Vectors/Star.svg"
              alt="MinStar"
              height={56}
              width={42}
              className="animate-rflashy self-end max-sm:w-[36px] max-sm:[18px]"
            />
          </div>
          <Image
            src="/portfolio/Assets/bassin.jpeg"
            alt="bassin"
            height={460}
            width={340}
            className="h-[400px] w-[280px] max-xl:scale-90 2xl:h-[550px] 2xl:w-[400px] max-lg:h-[250px] max-lg:w-[180px] border-4 border-white rounded-3xl object-cover rotate-6"
          />
          <Image
            src="/portfolio/Assets/restroom.jpeg"
            alt="The Boys"
            height={375}
            width={285}
            className="h-[350px] w-[260px] max-xl:scale-90 2xl:h-[500px] 2xl:w-[360px] max-lg:h-[250px] max-lg:w-[160px] max-sm:object-left object-cover border-4 border-white rounded-3xl -rotate-6 absolute top-[45%] left-1/3 max-sm:left-0"
          />
        </div>
      </div>
      <footer ref={ref} className="flex flex-col items-center gap-20">
        <motion.svg
          width="728"
          height="141"
          viewBox="0 0 728 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: inView ? 1 : 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M2.30859 70.7314C10.6793 44.4646 33.8934 33.4444 61.2302 32.4868C86.7651 31.5922 116.635 39.3044 140.518 47.567C259.358 88.6808 133.856 176.267 141.14 89.3873C142.861 68.852 154.391 53.9368 167.569 39.0164C187.443 16.5145 208.079 13.1324 237.373 11.0325C288.687 7.35397 326.389 23.0768 353.506 73.2189C380.738 123.571 318.025 121.288 318.527 87.2108C318.922 60.3195 351.411 15.8018 379.158 7.45675C403.982 -0.00918674 447.869 -0.953404 472.516 10.7215C495.63 21.6706 512.266 48.9131 524.674 70.4205C532.372 83.7626 535.686 105.096 525.996 118.537C504.238 148.717 460.582 145.788 462.644 105.245C463.417 90.0273 474.646 73.3703 484.409 62.1808C495.089 49.94 505.076 39.678 521.41 29.3775C590.081 -13.928 700.342 35.6385 725.692 67.933"
            stroke="url(#paint0_linear_1005_16745)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1005_16745"
              x1="639.802"
              y1="70.3233"
              x2="2.30859"
              y2="70.3233"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A9FE81" />
              <stop offset="1" stopColor="#C0F0FF" />
            </linearGradient>
          </defs>
        </motion.svg>
        <div
          className={`flex w-full max-sm:text-xs md:text-[24px] lg:text-[32px] xl:text-[40px] leading-10 ${pen.className}`}
        >
          <Link
            href={"https://www.linkedin.com/in/saadennourfarhan/"}
            className={`w-1/3 flex flex-col gap-8 items-center bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent text-nowrap`}
          >
            CONNECT ON LINKENDIN
            <FaLinkedin
              size={64}
              className="max-sm:h-[30px] max-sm:w-[30px]"
              color="white"
            />
          </Link>
          <Link
            href={"https://github.com/saadennour"}
            className={`w-1/3 flex flex-col gap-8 items-center bg-gradient-to-r from-LightSky to-Lime bg-clip-text text-transparent text-nowrap`}
          >
            PAY A VISIT ON GITHUB
            <FaGithub
              size={64}
              className="max-sm:h-[30px] max-sm:w-[30px]"
              color="white"
            />
          </Link>
          <Link
            href={"mailto:saadennourfarhan@gmail.com"}
            className={`w-1/3 flex flex-col gap-8 items-center bg-gradient-to-r from-Lime to-Citron bg-clip-text text-transparent text-nowrap`}
          >
            SEND ME AN EMAIL
            <IoMdMail
              size={64}
              className="max-sm:h-[30px] max-sm:w-[30px]"
              color="white"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}
