import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "@/styles/carouselStyle.css";
import Image from "next/image";
import Link from "next/link";

export const LatestProjects = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex w-full h-[500px]">
        <CarouselItem className="h-full basis-[100%] md:basis-3/4 xl:basis-1/2">
          <Link
            href={"/project/gini"}
            className="h-full w-full flex items-center justify-center"
          >
            <div
              className="projectCard relative h-full w-full"
              onMouseEnter={() =>
                document.querySelector(".cursor")?.classList.add("cursor-alt")
              }
              onMouseLeave={() =>
                document
                  .querySelector(".cursor")
                  ?.classList.remove("cursor-alt")
              }
            >
              <Image
                src={"/portfolio/Assets/GiniHome.png"}
                alt="Gini Home"
                height={500}
                width={400}
                className="border-2 w-[320px] lg:w-[450px] rotate-6 bottom-6 lg:left-10 border-white rounded-md absolute z-20"
              />
              <Image
                src={"/portfolio/Assets/GiniFeatures.png"}
                alt="Gini Features"
                height={500}
                width={500}
                className="border-2 w-[320px] lg:w-[450px] -rotate-12 top-12 lg:right-28 2xl:right-32 border-white rounded-md absolute"
              />
              <Image
                src={"/portfolio/Assets/GiniFaq.png"}
                alt="Gini Faq"
                height={600}
                width={600}
                className="border-2 w-[200px] lg:w-[260px] -rotate-3 bottom-4 right-20 border-white rounded-md absolute z-10"
              />
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem className="h-full basis-[100%] md:basis-3/4 xl:basis-1/2">
          <Link
            href={"/project/braindo"}
            className="h-full w-full flex items-center justify-center"
          >
            <div
              className="projectCard relative h-full w-full"
              onMouseEnter={() =>
                document.querySelector(".cursor")?.classList.add("cursor-alt")
              }
              onMouseLeave={() =>
                document
                  .querySelector(".cursor")
                  ?.classList.remove("cursor-alt")
              }
            >
              <Image
                src={"/portfolio/Assets/BrainDo.png"}
                alt="BrainDo Home"
                height={500}
                width={500}
                className="border-2 bottom-6 rotate-6 border-white rounded-md absolute z-20"
              />
              <Image
                src={"/portfolio/Assets/BrainDoFeatures.png"}
                alt="BrainDo Features"
                height={500}
                width={400}
                className="border-2 -rotate-6 lg:left-20 top-6 border-white rounded-md absolute z-10"
              />
              <Image
                src={"/portfolio/Assets/BrainDoMobile.png"}
                alt="BrainDo Mobile"
                height={500}
                width={400}
                className="border-2 w-[260px] right-6 top-1/4 -rotate-12 border-white rounded-md absolute"
              />
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem className="h-full basis-[100%] md:basis-3/4 xl:basis-1/2">
          <Link
            href={"/project/korpo"}
            className="h-full w-full flex items-center justify-center"
          >
            <div
              className="projectCard relative h-full w-full"
              onMouseEnter={() =>
                document.querySelector(".cursor")?.classList.add("cursor-alt")
              }
              onMouseLeave={() =>
                document
                  .querySelector(".cursor")
                  ?.classList.remove("cursor-alt")
              }
            >
              <Image
                src={"/portfolio/Assets/Korpo.png"}
                alt="Korpo Home"
                height={500}
                width={480}
                className="border-2 rotate-6 bottom-12 lg:bottom-6 lg:right-20 border-white rounded-md absolute z-20"
              />
              <Image
                src={"/portfolio/Assets/KorpoFeatures.png"}
                alt="Korpo Features"
                height={500}
                width={400}
                className="border-2 -rotate-6 top-6 lg:left-32 border-white rounded-md absolute"
              />
              <Image
                src={"/portfolio/Assets/KorpoMobile.png"}
                alt="Korpo Mobile"
                height={500}
                width={400}
                className="border-2 w-[200px] lg:w-[260px] right-0 lg:right-6 border-white rounded-md absolute z-10"
              />
            </div>
          </Link>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer" />
      <CarouselNext className="cursor-pointer" />
    </Carousel>
  );
};
