import React from "react";
import { Quote } from "./fonts/Quote";
import Image from "next/image";
import { Picture } from "./Picture";
import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import { Description } from "./Description";

export default function Minishell() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-around">
        <Quote
          content="in each step forward it just kept getting interesting."
          className="w-2/5 bg-gradient-to-r from-LightSky to-Lime bg-clip-text text-transparent"
        />
        <div className="relative">
          <Image
            src="/Vectors/C_Arrow.svg"
            alt="Arrow"
            height={456}
            width={497}
            className="max-md:h-[250px] max-md:w-[270px]"
          />
          <Image
            src="/Logos/C_Logo.png"
            alt="C Logo"
            height={100}
            width={100}
            className="absolute bottom-1/3 left-20 rotate-12 max-md:w-[50px] max-md:h-[50px]"
          />
        </div>
      </div>
      <div className="flex max-sm:gap-5 gap-10">
        <div className="flex flex-col justify-between w-1/2 gap-10 max-sm:gap-5">
          <div className="bg-gradient-to-r from-LightSky to-Lime bg-clip-text text-transparent">
            <BigTitle content="Minishell" />
            <Body content="C Project" />
          </div>
          <Body
            content="It was my first group project, after working couple of C projects where i gained a lot of confidence to learn concepts on my own.
The idea was to build a shell from scratch, parsing the data passed on the prompt, handle the different cases, such as pipes, redirection, simple Bash commands and execute it was my responsibility."
            className=""
          />
          <div className="flex gap-5">
            <Description content="It was a bit of struggle at first sight, but each phase done made me more curious and excited." />
            <Description content="By the end of the project, i was sure that i'm able to create anything using just blocks of code." />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center max-sm:justify-center">
          <div data-aos="flip-left" data-aos-duration="1000">
            <Picture
              image="/Code/Minishell.png"
              caption="a block of code"
              objPos="object-bottom"
            />
          </div>
          <div data-aos="flip-left" data-aos-duration="1000">
            <Picture
              image="/Assets/team.jpeg"
              caption="team project"
              className="rotate-6"
              objPos=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
