import Image from "next/image";
import { Quote } from "./fonts/Quote";

export const Internship = () => {
  return (
    <div className="w-full flex flex-col gap-5 md:gap-20 2xl:gap-40">
      <div className="flex items-center max-sm:pl-4">
        <div className="relative">
          <Image
            src="/portfolio/Vectors/PongArrow.svg"
            alt="Arrow"
            height={435}
            width={651}
            className=""
          />
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
      <div></div>
    </div>
  );
};
