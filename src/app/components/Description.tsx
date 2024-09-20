import React from "react";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "300"] });

interface DescriptionProps {
  content: string;
  width?: string;
  height?: string;
}

export const Description: React.FC<DescriptionProps> = ({
  content,
  width,
  height,
}) => {
  return (
    <div
      className={`${dm_sans.className} font-light w-1/2 bg-Gray rounded-xl flex justify-center text-[10px] md:text-sm xl:text-base leading-4 md:leading-6 lg:leading-7 xl:leading-8 p-2`}
    >
      {content}
    </div>
  );
};
