import Image from "next/image";
import { BigTitle } from "@/components/fonts/BigTitle";
import { Body } from "@/components/fonts/Body";
import { projects } from "@/data/projects";
import { Caption } from "@/components/fonts/Caption";
import SkillTag from "@/components/SkillTag";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen min-w-screen flex max-md:flex-col justify-between max-sm:gap-5 gap-10 lg:gap-20 p-5 md:p-10 xl:p-20">
      <div className="w-full md:w-1/2 max-md:h-screen flex flex-col justify-center gap-10 max-sm:gap-8">
        <div className="bg-gradient-to-r from-Violet to-Peach bg-clip-text text-transparent">
          <BigTitle
            content={project.name}
            className="max-md:text-3xl w-fit bg-gradient-to-r from-Violet to-Peach bg-clip-text text-transparent"
          />
          <Caption
            content={project.duration}
            className="max-sm:text-xs text-white"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <SkillTag
            name="Figma"
            className="max-sm:text-[10px] border-2 md:px-4 md:text-sm py-1 md:py-[6px] px-2 xl:px-5 xl:text-lg"
          />
          <SkillTag
            name="Next.js"
            className="max-sm:text-[10px] border-2 md:px-4 md:text-sm py-1 md:py-[6px] px-2 xl:px-5 xl:text-lg"
          />
          <SkillTag
            name="Tailwind CSS"
            className="max-sm:text-[10px] border-2 md:px-4 md:text-sm py-1 md:py-[6px] px-2 xl:px-5 xl:text-lg"
          />
          <SkillTag
            name="Supabase"
            className="max-sm:text-[10px] border-2 md:px-4 md:text-sm py-1 md:py-[6px] px-2 xl:px-5 xl:text-lg"
          />
        </div>
        <Body content={project.content} className="text-xs" />
        <Link
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-3xl p-2 xl:p-3 w-20 md:w-24 text-sm text-center border-2 border-Green hover:bg-Green cursor-pointer"
        >
          Visit
        </Link>
      </div>
      <div className="max-md:hidden w-full h-screen md:w-1/2 relative flex items-center justify-center">
        <Image
          src={project.images[2]}
          alt="Project Image"
          height={500}
          width={500}
          className="lg:scale-95 max-sm:w-[200px] max-lg:w-[260px] max-xl:w-[300px] border-2 -rotate-6 max-sm:top-32 top-40 border-white rounded-md absolute z-10"
        />
        <Image
          src={project.images[0]}
          alt="Project Image"
          height={500}
          width={600}
          className="lg:scale-95 max-sm:w-[300px] max-lg:w-[450px] border-2 -rotate-6 max-sm:bottom-64 sm:bottom-6 md:bottom-6 lg:-bottom-12 2xl:bottom-12 border-white rounded-md absolute z-20"
        />
        <Image
          src={project.images[1]}
          alt="Project Image"
          height={500}
          width={600}
          className="lg:scale-95 max-sm:w-[300px] max-lg:w-[450px] border-2 rotate-6 top-4 border-white rounded-md absolute z-30"
        />
      </div>
    </div>
  );
}
