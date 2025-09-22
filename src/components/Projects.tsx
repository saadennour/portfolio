import Image from "next/image";
import { LatestProjects } from "./LatestProjects";

export const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 sm:gap-20">
      <div className="flex flex-col items-center w-1/2 gap-2 2xl:w-1/3">
        <div className="flex self-end gap-8 max-sm:gap-4">
          <Image
            src="/portfolio/Vectors/Star.svg"
            alt="BigStar"
            height={92}
            width={69}
            className="animate-flashy max-lg:w-[42px] max-lg:h-[52px]"
          />
          <Image
            src="/portfolio/Vectors/Star.svg"
            alt="MinStar"
            height={56}
            width={42}
            className="animate-rflashy self-end max-lg:h-[36px] max-lg:w-[18px]"
          />
        </div>
        <h2 className="max-sm:text-2xl text-3xl lg:text-4xl leading-9 lg:leading-10 text-nowrap">
          My Latests Projects
        </h2>
      </div>
      <LatestProjects />
    </div>
  );
};
