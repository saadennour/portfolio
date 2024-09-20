import React from "react";
import { DM_Sans } from "next/font/google";

interface SkillTagProps {
  name: string;
}

const dm_sans = DM_Sans({ subsets: ["latin"] });

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <div
      className={`${dm_sans.className} max-sm:border-2 border-4 border-Grape rounded-[32px] max-sm:text-xs lg:text-xl xl:text-2xl max-sm:py-1 max-sm:px-2 py-2 px-4 md:px-6 bg-gradient-to-r from-Lime to-Citron bg-clip-text text-transparent`}
    >
      {name}
    </div>
  );
};

export default SkillTag;
