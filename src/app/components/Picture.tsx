import React from "react";
import Image from "next/image";
import { Quote } from "./fonts/Quote";

interface PictureProps {
  image: string;
  caption: string;
  className?: string;
  objPos: string;
  cardSize: string;
  imageSize: string;
}

export const Picture: React.FC<PictureProps> = ({
  image,
  caption,
  className,
  objPos,
  cardSize,
  imageSize,
}) => {
  return (
    <div
      className={`bg-white ${cardSize} ${className} rounded-xl -rotate-6 p-1 2xl:scale-125`}
    >
      <Image
        src={image}
        alt={caption}
        width={350}
        height={250}
        className={`rounded-xl object-cover ${objPos} ${imageSize}`}
      />
      <Quote content={caption} color="text-black" className="text-center" />
    </div>
  );
};
