import { Space_Mono } from "next/font/google";

const space_mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export interface TextProps {
  content: string;
  color?: string;
  className?: string;
}

export const BigTitle: React.FC<TextProps> = ({
  content,
  color,
  className,
}) => {
  return (
    <h3
      className={`${space_mono.className} ${color} ${className} text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-10 md:leading-[48px] lg:leading-[56px] xl:leading-[72px] text-nowrap`}
    >
      {content}
    </h3>
  );
};
