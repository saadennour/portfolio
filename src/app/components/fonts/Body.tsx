import { DM_Sans } from "next/font/google";
import { TextProps } from "./BigTitle";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["700"] });

export const Body: React.FC<TextProps> = ({ content, color, className }) => {
  return (
    <p
      className={`${dm_sans.className} ${color} ${className} text-[12px] md:text-base lg:text-lg xl:text-2xl leading-6 md:leading-8 lg:leading-10 xl:leading-[60px]`}
    >
      {content}
    </p>
  );
};
