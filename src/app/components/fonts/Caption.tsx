import { DM_Sans } from "next/font/google";
import { TextProps } from "./BigTitle";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export const Caption: React.FC<TextProps> = ({ content, color, className }) => {
  return (
    <p
      className={`${dm_sans.className} ${color} ${className} max-sm:text-[7px] text-[10px] leading-5 md:text-sm xl:text-lg md:leading-7 xl:leading-9`}
    >
      {content}
    </p>
  );
};
