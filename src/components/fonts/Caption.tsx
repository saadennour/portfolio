import { TextProps } from "./BigTitle";

export const Caption: React.FC<TextProps> = ({ content, color, className }) => {
  return (
    <p
      className={`font-sans font-normal ${color ?? ""} ${
        className ?? ""
      } max-sm:text-[7px] text-[10px] leading-5 md:text-sm xl:text-lg md:leading-7 xl:leading-9`}
    >
      {content}
    </p>
  );
};
