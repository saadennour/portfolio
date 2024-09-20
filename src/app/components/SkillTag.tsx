import React from "react";
import { DM_Sans } from "next/font/google";

interface SkillTagProps {
  name: string;
}

const dm_sans = DM_Sans({ subsets: ["latin"] });

const SkillTag: React.FC<SkillTagProps> = ({ name }) => {
  return (
    <div
      className={`${dm_sans.className} border-4 border-Grape rounded-[32px] lg:text-xl xl:text-2xl px-4 md:px-6 py-2 bg-gradient-to-r from-Lime to-Citron bg-clip-text text-transparent`}
    >
      {name}
    </div>
  );
};

export default SkillTag;
