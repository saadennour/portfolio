import { Space_Mono } from "next/font/google";
import { TextProps } from "./BigTitle";

const space_mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export const Title: React.FC<TextProps> = ({ content, color }) => {
  return (
    <h3
      className={`${space_mono.className} text-[48px] leading-[64px] max-sm:text-[24px] max-sm:leading-8 2xl:text-[56px] 2xl:leading-[72px] ${color}`}
    >
      {content}
    </h3>
  );
};
