import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import { Quote } from "./fonts/Quote";
import Image from "next/image";

export default function Sketches() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex items-center justify-center">
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
            className="absolute top-1/2 left-20 rotate-12 max-sm:w-[40px] max-sm:h-[40px] max-md:w-[50px] max-md:h-[50px] max-md:left-10"
          />
          <Image
            src="/Vectors/SketchArrow.svg"
            alt="Arrow"
            height={534}
            width={375}
            className="max-md:w-[200px] max-md:h-[300px]"
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
              className="object-cover rotate-12 xl:h-[300px] xl:w-[300px] 2xl:h-[500px] 2xl:w-[500px] max-xl:h-[250px] max-xl:w-[250px] max-sm:h-[100px] sm:h-[175px] max-sm:w-[100px] sm:w-[175px]"
            />
          </div>
          <div className="flex">
            <Image
              src="/Sketches/Paper.png"
              alt="Paper"
              height={200}
              width={200}
              className="max-sm:w-[50px] sm:w-[100px] xl:w-[200px] max-sm:h-[50px] sm:h-[100px] xl:h-[200px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
            <Image
              src="/Sketches/Pencil.png"
              alt="Pencil"
              width={200}
              height={200}
              className="rotate-180 max-sm:w-[50px] sm:w-[100px] xl:w-[200px] max-sm:h-[50px] sm:h-[100px] xl:h-[200px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
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
              className="max-sm:w-[50px] sm:w-[100px] xl:w-[200px] max-sm:h-[50px] sm:h-[100px] xl:h-[200px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
            <Image
              src="/Sketches/Pencil.png"
              alt="Pencil"
              width={200}
              height={200}
              className="max-sm:w-[50px] sm:w-[100px] max-xl:w-[150px] xl:w-[200px] max-sm:h-[50px] sm:h-[100px] max-xl:h-[150px] xl:h-[200px] 2xl:h-[250px] 2xl:w-[250px]"
            />
          </div>
          <div className="" data-aos="fade-left">
            <Image
              src="/Sketches/Dragon.jpeg"
              alt="Dragon Drawing"
              height={200}
              width={300}
              className="object-cover -rotate-12 h-[350px] w-[350px] 2xl:h-[500px] 2xl:w-[500px] max-xl:h-[250px] max-xl:w-[250px] ml-auto max-sm:h-[100px] sm:h-[175px] xl:h-[300px] max-sm:w-[100px] sm:w-[175px] xl:w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
