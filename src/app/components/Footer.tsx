import Image from "next/image";
import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { Nanum_Pen_Script } from "next/font/google";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const dm_sans = DM_Sans({ subsets: ["latin"] });
const pen = Nanum_Pen_Script({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-20 max-sm:gap-5 2xl:gap-40">
      <div className="flex gap-20 px-10 max-sm:gap-5 max-sm:px-2">
        <div className="w-1/2 flex flex-col gap-10 justify-center max-sm:gap-5">
          <BigTitle
            content="Today"
            className="bg-gradient-to-r from-Violet to-Grape bg-clip-text text-transparent"
          />
          <Body content="My journey didn't end here and i still have the same hunger to learn, grow and achieve more." />
          <Link
            href={"/resume"}
            className={`${dm_sans.className} bg-gradient-to-r from-Lime to-Citron bg-clip-text text-transparent border-4 border-Grape rounded-[32px] px-6 py-2 text-[24px] leading-8 max-sm:border-2 max-sm:px-2 max-sm:py-1 max-sm:text-[12px] max-sm:leading-4 self-center cursor-pointer hover:transition ease-in-out hover:scale-110 delay-150 duration-500`}
          >
            Resume
          </Link>
        </div>
        <div className="w-1/2 relative h-[720px]">
          <div className="flex justify-center gap-4 rotate-12 pl-40">
            <Image
              src="/Vectors/Star.svg"
              alt="BigStar"
              height={92}
              width={69}
              className="animate-flashy max-sm:w-[42px] max-sm:h-[56px]"
            />
            <Image
              src="/Vectors/Star.svg"
              alt="MinStar"
              height={56}
              width={42}
              className="animate-rflashy self-end max-sm:w-[36px] max-sm:[18px]"
            />
          </div>
          <Image
            src="/Assets/bassin.jpeg"
            alt="bassin"
            height={460}
            width={340}
            className="h-[400px] w-[280px] max-xl:scale-90 2xl:h-[550px] 2xl:w-[400px] max-sm:h-[250px] max-sm:w-[180px] border-4 border-white rounded-3xl object-cover rotate-6"
          />
          <Image
            src="/Assets/restroom.jpeg"
            alt="The Boys"
            height={375}
            width={285}
            className="h-[350px] w-[260px] max-xl:scale-90 2xl:h-[500px] 2xl:w-[360px] max-sm:h-[250px] max-sm:w-[160px] max-sm:object-left object-cover border-4 border-white rounded-3xl -rotate-6 absolute top-[45%] left-1/3 max-sm:left-0"
          />
        </div>
      </div>
      <footer className="flex flex-col items-center gap-20">
        <Image
          src="/Vectors/LastOne.svg"
          alt="Doodle"
          height={320}
          width={720}
        />
        <div className="flex w-full">
          <Link
            href={"https://www.linkedin.com/in/saadennourfarhan/"}
            className="w-1/3 flex flex-col gap-8 items-center"
          >
            <a
              className={`${pen.className} text-[40px] leading-10 bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent max-sm:text-[12px] text-center`}
            >
              CONNECT ON LINKENDIN
            </a>
            <FaLinkedin size={64} className="max-sm:h-[30px] max-sm:w-[30px]" />
          </Link>
          <Link
            href={"https://github.com/saadennour"}
            className="w-1/3 flex flex-col gap-8 items-center"
          >
            <a
              className={`${pen.className} text-[40px] leading-10 bg-gradient-to-r from-LightSky to-Lime bg-clip-text text-transparent max-sm:text-[12px] text-center`}
            >
              PAY A VISIT ON GITHUB
            </a>
            <FaGithub size={64} className="max-sm:h-[30px] max-sm:w-[30px]" />
          </Link>
          <Link
            href={"mailto:saadennourfarhan@gmail.com"}
            className="w-1/3 flex flex-col gap-8 items-center"
          >
            <a
              className={`${pen.className} text-[40px] leading-10 bg-gradient-to-r from-Lime to-Citron bg-clip-text text-transparent max-sm:text-[18px] text-center`}
            >
              SEND ME AN EMAIL
            </a>
            <IoMdMail size={64} className="max-sm:h-[30px] max-sm:w-[30px]" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
