import React from "react";

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className }) => {
  return (
    <div
      className={`font-sans font-normal ${className} border-Grape rounded-[32px] bg-gradient-to-r from-Lime to-Citron bg-clip-text text-transparent`}
    >
      {name}
    </div>
  );
};

export default SkillTag;
