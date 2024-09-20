import { Description } from "./Description";
import { Picture } from "./Picture";
import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import { Quote } from "./fonts/Quote";
import Image from "next/image";

export const School = () => {
  return (
    <div className="flex gap-10 sm:gap-16 lg:gap-20 items-center">
      <div className="h-full w-1/2 flex flex-col items-center relative">
        <div data-aos="flip-left" data-aos-duration="1000">
          <Picture
            image="/Assets/poolphoto.png"
            caption="Benguerir - 2021"
            objPos="object-bottom"
            className="self-center"
          />
        </div>
        <Image
          src="/Vectors/SchoolArrow.svg"
          alt="i am there"
          height={255}
          width={103}
          className="w-[100px] h-[150px] md:w-[150px] md:h-[180px] lg:w-[175px] lg:h-[200px] xl:w-[200px] xl:h-[220px] absolute bottom-8 left-10 lg:left-14 xl:left-24 2xl:left-80"
        />
        <Quote
          content="I'm somewhere here."
          className="self-end mt-20 bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent 2xl:self-center 2xl:ml-44"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <BigTitle
          content="1337 School"
          className="bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent"
        />
        <Body content="On 2021 summer, i attended 1337 pool, met new people and made my first real steps into coding world." />
        <div className="flex gap-5 lg:gap-10 mt-10 lg:mt-20">
          <Description content="I learned C, it was a bit hard but it went from hello world to dealing with data structures pretty fast." />
          <Description content="Had the opportunity to meet some amazing people from whom i learned new stuff." />
        </div>
      </div>
    </div>
  );
};
