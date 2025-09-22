import React from "react";

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
      className={`font-sans font-light w-1/2 bg-Gray rounded-xl flex justify-center max-sm:text-[8px] text-[10px] md:text-sm xl:text-base leading-4 md:leading-6 lg:leading-7 xl:leading-8 p-2`}
    >
      {content}
    </div>
  );
};
