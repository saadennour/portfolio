import React from "react";
import Image from "next/image";
import { Quote } from "./fonts/Quote";

interface PictureProps {
  image: string;
  caption: string;
  className?: string;
  objPos: string;
}

export const Picture: React.FC<PictureProps> = ({
  image,
  caption,
  className,
  objPos,
}) => {
  return (
    <div
      className={`bg-white w-[150px] h-[125px] sm:w-[200px] sm:h-[160px] md:w-[320px] md:h-[250px] lg:w-[360px] lg:h-[280px] xl:w-[400px] xl:h-[320px] ${className} rounded-xl -rotate-6 p-1 2xl:scale-125`}
    >
      <Image
        src={image}
        alt={caption}
        width={350}
        height={250}
        className={`rounded-xl object-cover ${objPos} w-[150px] h-[100px] sm:w-[200px] sm:h-[132px] md:w-[320px] md:h-[220px] lg:w-[360px] lg:h-[245px] xl:w-[400px] xl:h-[280px]`}
      />
      <Quote content={caption} color="text-black" className="text-center" />
    </div>
  );
};
