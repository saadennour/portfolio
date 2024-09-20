import { Quote } from "./fonts/Quote";
import { Title } from "./fonts/Title";
import { Caption } from "./fonts/Caption";
import Image from "next/image";

export default function Journey() {
  return (
    <div className="w-full flex flex-col items-center gap-10 sm:gap-20">
      <div className="flex flex-col items-center w-1/2 gap-2 2xl:w-1/3">
        <div className="flex self-end gap-8 max-sm:gap-4">
          <Image
            src="/Vectors/Star.svg"
            alt="BigStar"
            height={92}
            width={69}
            className="animate-flashy max-lg:w-[42px] max-lg:h-[52px]"
          />
          <Image
            src="/Vectors/Star.svg"
            alt="MinStar"
            height={56}
            width={42}
            className="animate-rflashy self-end max-lg:h-[36px] max-lg:w-[18px]"
          />
        </div>
        <h2 className="xs:debug text-3xl lg:text-4xl leading-9 lg:leading-10">
          My Journey
        </h2>
      </div>
      <div className="w-full flex items-center justify-between gap-10">
        <Quote
          content="it all started on summer 2021"
          className="bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent text-center w-[30%]"
        />
        <div className="flex">
          <Image
            src="/Vectors/CurvedLine.svg"
            alt="CurvedLine"
            height={423}
            width={169}
            className="h-[250px] w-[100px] lg:h-[300px] lg:w-[120px] xl:h-[350px] xl:w-[140px]"
          />
          <Image
            src="/Vectors/DashLine.svg"
            alt="DashedLine"
            height={124}
            width={166}
            className="h-[62px] mt-24 max-md:w-[100px] md:w-[75px] lg:h-[175px] lg:w-[110px] xl:h-[250px] xl:w-[150px]"
          />
        </div>
        <div className="self-end w-1/3 flex flex-col gap-20 max-sm:gap-10 justify-between">
          <Caption
            content="My first intention to learn coding started while playing video games.
          Since i was a kid, i always wanted to make my own games and characters."
            className="bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent"
          />
          <Quote
            content="n.b: i draw as well."
            className="bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent"
          />
        </div>
      </div>
    </div>
  );
}
