import Image from "next/image";
import { Quote } from "./fonts/Quote";
import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import { Picture } from "./Picture";
import { Ticket } from "./Ticket";
import { Description } from "./Description";

export default function Pong() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex items-center max-sm:pl-4">
        <div className="relative">
          <Image
            src="/Vectors/PongArrow.svg"
            alt="Arrow"
            height={435}
            width={651}
            className=""
          />
          <Image
            src="/Logos/React.png"
            alt="React Logo"
            height={100}
            width={100}
            className="absolute bottom-[20%] left-1/4 rotate-12 max-xl:bottom-4 max-xl:scale-90 max-sm:scale-50 max-sm:bottom-0 max-sm:left-10"
          />
        </div>
        <Quote
          content="from now on im obsessed with web Development."
          className="bg-gradient-to-r from-Berry to-Red bg-clip-text text-transparent"
        />
      </div>
      <div className="flex gap-20 max-sm:gap-5">
        <div className="w-1/2 flex flex-col gap-10 max-sm:gap-5">
          <div className="bg-gradient-to-r from-Berry to-Red bg-clip-text text-transparent">
            <BigTitle content="Pong Game" />
            <Body content="Web App" />
          </div>
          <Body content="My first web app, our goal was to build a platform where you can play real time with other players." />
          <Body content="The main idea was to offer some thrilling ping pong games, connect with friends, engage in lively chats and build a community by adding friends." />
          <Body content="Achieve milestones and earn cool achievements that showcase your progress." />
          <div className="flex gap-3">
            <Description content="My first project as Front-end Developer, a project that i really enjoyed, and the one behind my obsession with web development." />
            <Description content="Working with new frameworks and tools like next.js, tailwind and figma. The project was done after 2 months of hard work and challenges." />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center gap-20 max-sm:gap-10">
          <div className="w-full flex max-sm:flex-col max-xl:flex-col items-center justify-center">
            <div data-aos="flip-left" data-aos-duration="1000">
              <Picture
                image="/Assets/Match.jpeg"
                caption="3anakib"
                objPos="object-top"
                className="ml-6 rotate-12 max-sm:ml-0 2xl:scale-150"
              />
            </div>
            <Ticket content="Next.js" color="bg-Peach rotate-6" />
            <Ticket
              content="Design Patterns"
              color="bg-Pink -rotate-12 self-end mr-2 pl-1 max-sm:mr-0"
            />
          </div>
          <Image
            src="/Assets/App.png"
            alt="Pong App"
            width={500}
            height={500}
            className="2xl:scale-125"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
}
