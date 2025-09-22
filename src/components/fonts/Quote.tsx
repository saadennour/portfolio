import { TextProps } from "./BigTitle";
import { Nanum_Pen_Script } from "next/font/google";

const pen = Nanum_Pen_Script({ subsets: ["latin"], weight: ["400"] });

export const Quote: React.FC<TextProps> = ({ content, color, className }) => {
  return (
    <p
      className={`${pen.className} ${
        color ?? ""
      } ${className} max-sm:text-base text-lg md:text-2xl lg:text-3xl xl:text-4xl uppercase`}
    >
      {content}
    </p>
  );
};
