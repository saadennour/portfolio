import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import { Quote } from "./fonts/Quote";
import Image from "next/image";

export default function Sketches() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center max-sm:py-5">
        <Quote
          content="It was time to learn something new."
          className="bg-gradient-to-r from-Grass to-Peach bg-clip-text text-transparent"
        />
        <div className="relative">
          <Image
            src="/Logos/C_Plus.png"
            alt="C++ Logo"
            width={100}
            height={100}
            className="absolute top-1/2 left-20 rotate-12 max-sm:w-[50px] max-sm:h-[50px] max-sm:left-10"
          />
          <Image
            src="/Vectors/SketchArrow.svg"
            alt="Arrow"
            height={534}
            width={375}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/3 overflow-hidden">
          <div className="" data-aos="fade-right">
            <Image
              src="/Sketches/Monicca.jpeg"
              alt="Monicca Drawing"
              height={300}
              width={300}
              className="object-cover rotate-12 h-[300px] w-[300px] 2xl:h-[500px] 2xl:w-[500px] max-xl:h-[250px] max-xl:w-[250px] max-sm:h-[100px] max-sm:w-[100px]"
            />
          </div>
          <div className="flex">
            <Image
              src="/Sketches/Paper.png"
              alt="Paper"
              height={200}
              width={200}
              className="max-sm:w-[50px] max-sm:h-[50px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
            <Image
              src="/Sketches/Pencil.png"
              alt="Pencil"
              width={200}
              height={200}
              className="rotate-180 max-sm:w-[50px] max-sm:h-[50px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center gap-5 max-sm:gap-1">
          <BigTitle
            content="Sketches"
            className="bg-gradient-to-r from-Grass to-Peach bg-clip-text text-transparent"
          />
          <Body content="Hobby" className="text-Peach" />
          <Body
            content="Besides, i still make time for drawing."
            className="text-center"
          />
        </div>
        <div className="w-1/3 overflow-hidden">
          <div className="flex">
            <Image
              src="/Sketches/Paper.png"
              alt="Paper"
              height={200}
              width={200}
              className="max-sm:w-[50px] max-sm:h-[50px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
            <Image
              src="/Sketches/Pencil.png"
              alt="Pencil"
              width={200}
              height={200}
              className="max-sm:w-[50px] max-sm:h-[50px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
          </div>
          <div className="" data-aos="fade-left">
            <Image
              src="/Sketches/Dragon.jpeg"
              alt="Monicca Drawing"
              height={200}
              width={300}
              className="object-cover -rotate-12 h-[350px] w-[350px] 2xl:h-[500px] 2xl:w-[500px] max-xl:h-[250px] max-xl:w-[250px] ml-auto max-sm:h-[100px] max-sm:w-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
