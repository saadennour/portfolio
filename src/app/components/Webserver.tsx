import Image from "next/image";
import { Caption } from "./fonts/Caption";
import { Quote } from "./fonts/Quote";
import { BsGithub } from "react-icons/bs";
import { BigTitle } from "./fonts/BigTitle";
import { Body } from "./fonts/Body";
import { Ticket } from "./Ticket";
import { Picture } from "./Picture";
import Link from "next/link";

export default function Webserver() {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex items-center px-20 gap-10 max-sm:px-5 max-sm:gap-1 2xl:gap-20">
        <div className="w-1/3 h-full flex flex-col justify-center gap-10">
          <Link href={"https://github.com/saadennour"}>
            <BsGithub
              size={50}
              className="ml-auto rotate-6 max-sm:h-[30px] max-sm:w-[30px] 2xl:h-[70px] 2xl:w-[70px]"
            />
          </Link>
          <Caption
            content="In addition, i worked on other interesting C projects, Cube3D was a special one, where we built a 3D maze game.
            You can check it on my Github."
            className="bg-gradient-to-r from-Sky to-Grape bg-clip-text text-transparent"
          />
        </div>
        <div className="relative w-2/3">
          <Image
            src="/Vectors/WebservArrow.svg"
            alt="Arrow"
            height={457}
            width={426}
            className=""
          />
          <div className="absolute top-1/3 left-1/3 flex flex-col gap-10">
            <Image
              src="/Logos/Docker.png"
              alt="Docker Logo"
              height={100}
              width={100}
              className="max-sm:w-[50px] max-sm:h-[50px] max-xl:w-[75px] max-xl:h-[75px]"
            />
            <Quote
              content="Meanwhile, i learned about docker !!"
              className="bg-gradient-to-r from-Sky to-Grape bg-clip-text text-transparent ml-4"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-20 max-sm:gap-16 max-sm:p-10 max-xl:p-10">
        <div className="w-1/2">
          <div className="relative">
            <Ticket
              content="Get Method"
              color="bg-[#FBF49A] absolute bottom-0 right-2/4 -rotate-6 2xl:bottom-4 max-xl:-top-4"
            />
            <Ticket
              content="Post Method"
              color="bg-Grape absolute bottom-0 right-1/4 2xl:bottom-8 max-xl:-top-6"
            />
          </div>
          <div className="flex flex-col items-center relative">
            <div data-aos="flip-left" data-aos-duration="1000">
              <Picture
                image="/Code/Webserv.png"
                caption="A Block of Code"
                objPos=""
                imageSize="h-[270px] w-[400px] max-sm:h-[115px] max-sm:w-[170px] max-sm:ml-[5px]"
                cardSize="w-[420px] h-[330px] max-sm:h-[140px] max-sm:w-[180px] max-sm:ml-[5px]"
                className="ml-12"
              />
            </div>
            <div data-aos="flip-left" data-aos-duration="1000">
              <Picture
                image="/Assets/3anakib.jpeg"
                caption="Genei Ryodan"
                objPos=""
                imageSize="h-[270px] w-[400px] max-sm:h-[115px] max-sm:w-[170px] max-sm:ml-[5px]"
                cardSize="w-[420px] h-[330px] max-sm:h-[140px] max-sm:w-[180px] max-sm:ml-[5px]"
                className="rotate-6 2xl:mt-20 max-sm:ml-10"
              />
            </div>
            <div className="w-full h-[85px] mt-8 max-sm:mt-4">
              <Ticket content="Socket" color="bg-[#FF4646] ml-auto rotate-6" />
            </div>
            <Image
              src="/Vectors/Circle.svg"
              alt="Circle"
              height={161}
              width={103}
              className="absolute bottom-1/3 right-[27%] max-xl:w-[80px] 2xl:right-[36%] max-xl:right-[22%] max-sm:hidden"
            />
            <Image
              src="/Vectors/TeamArrow.svg"
              alt="Arrow"
              height={430}
              width={148}
              className="h-[380px] absolute -bottom-16 left-[39%] 2xl:h-[430px] 2xl:w-[200px] max-xl:h-[420px] max-xl:w-[125px] max-sm:hidden 2xl:left-[43%] 2xl:-bottom-[85px] max-xl:left-[33%] max-xl:-bottom-[90px]"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-10 max-sm:gap-5 2xl:gap-16">
          <div className="w-full">
            <BigTitle
              content="Webserver"
              className="bg-gradient-to-r from-Violet to-Grape bg-clip-text text-transparent"
            />
            <Body
              content="C++ Project"
              className="bg-gradient-to-r from-Violet to-Grape bg-clip-text text-transparent"
            />
          </div>
          <Body
            content="One of the most thrilling projects i worked on, a group project where you should build a web server with C++."
            className="max-sm:text-[8px]"
          />
          <Body
            content="I learned a lot about HTTP servers, how the requests are handled, and the appropriate responses for each case of the different request methods."
            className="max-sm:text-[8px]"
          />
        </div>
      </div>
      <Quote
        content="Team project"
        className="bg-gradient-to-r from-Violet to-Grape bg-clip-text text-transparent 2xl:ml-56 max-sm:hidden"
      />
    </div>
  );
}
