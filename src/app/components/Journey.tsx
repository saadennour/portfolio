"use client";
import { Quote } from "./fonts/Quote";
import { Caption } from "./fonts/Caption";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Journey() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="w-full flex flex-col items-center gap-10 sm:gap-20">
      <div className="flex flex-col items-center w-1/2 gap-2 2xl:w-1/3">
        <div className="flex self-end gap-8 max-sm:gap-4">
          <Image
            src="/Vectors/Star.svg"
            alt="BigStar"
            height={92}
            width={69}
            className="animate-flashy max-lg:w-[42px] max-lg:h-[52px]"
          />
          <Image
            src="/Vectors/Star.svg"
            alt="MinStar"
            height={56}
            width={42}
            className="animate-rflashy self-end max-lg:h-[36px] max-lg:w-[18px]"
          />
        </div>
        <h2 className="max-sm:text-2xl text-3xl lg:text-4xl leading-9 lg:leading-10 text-nowrap">
          My Journey
        </h2>
      </div>
      <div className="w-full flex items-center justify-between md:gap-10">
        <Quote
          content="it all started on summer 2021"
          className="bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent w-[32%]"
        />
        <div ref={ref} className="flex stroke-Sky">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="169"
            height="423"
            viewBox="0 0 169 440"
            className="h-[150px] w-[50px] md:h-[250px] md:w-[100px] lg:h-[300px] lg:w-[120px] xl:h-[350px] xl:w-[140px]"
          >
            <defs>
              <linearGradient
                id="paint0_linear_1005_16615"
                x1="-23.8176"
                y1="254.808"
                x2="198.315"
                y2="172.449"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BFF0FF" />
                <stop offset="1" stopColor="#82B4FF" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              stroke="url(#paint0_linear_1005_16615)"
              strokeWidth={3}
              strokeDasharray="0 1"
              d={
                "M1.04267 416.815C0.326253 416.498 0.0267777 415.593 0.373766 414.794L6.02793 401.777C6.37489 400.978 7.23693 400.588 7.95333 400.906C8.66973 401.224 8.9692 402.129 8.62225 402.927L3.59632 414.498L13.9736 419.1C14.69 419.417 14.9895 420.322 14.6425 421.121C14.2955 421.92 13.4335 422.31 12.7171 421.992L1.04267 416.815ZM133.902 3.01078C133.627 2.22759 134.01 1.30542 134.757 0.951049C135.505 0.59668 136.333 0.944308 136.608 1.7275L133.902 3.01078ZM1.19793 413.94C98.0343 370.127 144.016 304.292 159.465 231.129C174.945 157.822 159.824 76.9059 133.902 3.01078L136.608 1.7275C162.603 75.8324 177.94 157.417 162.273 231.609C146.576 305.946 99.8076 372.611 2.14389 416.799L1.19793 413.94Z"
              }
            />
          </motion.svg>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="166"
            height="124"
            viewBox="0 0 166 124"
            className="h-[64px] max-sm:mt-12 mt-24 max-sm:w-[50px] max-md:w-[100px] md:w-[75px] lg:h-[175px] lg:w-[110px] xl:h-[250px] xl:w-[150px]"
          >
            <defs>
              <linearGradient
                id="paint0_linear_1005_16614"
                x1="141.98"
                y1="103.738"
                x2="-14.5679"
                y2="45.6956"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BFF0FF" />
                <stop offset="1" stopColor="#82B4FF" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              stroke="url(#paint0_linear_1005_16614)"
              strokeWidth={2.5}
              strokeDasharray="0 1"
              d="M165.059 110.477C165.406 109.732 165.107 108.78 164.391 108.35L152.719 101.341C152.003 100.911 151.141 101.165 150.793 101.91C150.446 102.654 150.745 103.606 151.461 104.036L161.836 110.267L156.805 121.048C156.458 121.792 156.757 122.744 157.473 123.174C158.189 123.604 159.052 123.35 159.399 122.605L165.059 110.477ZM2.86887 2.00362C2.62638 1.16802 1.81518 0.654296 1.05701 0.85617C0.29885 1.05804 -0.119181 1.89908 0.123315 2.73467L2.86887 2.00362ZM1.49609 2.36914C0.123315 2.73467 0.123334 2.73473 0.123353 2.7348C0.123361 2.73482 0.123382 2.7349 0.123398 2.73495C0.123431 2.73506 0.123467 2.73519 0.123509 2.73533C0.123592 2.73562 0.123694 2.73597 0.123815 2.73638C0.124055 2.73721 0.124371 2.7383 0.124761 2.73963C0.125541 2.74231 0.12662 2.74601 0.127998 2.75072C0.130755 2.76014 0.134709 2.77361 0.139867 2.79108C0.150182 2.82603 0.165312 2.87698 0.185301 2.94356C0.22528 3.0767 0.284704 3.27232 0.363945 3.52726C0.522423 4.03711 0.760191 4.7843 1.08023 5.74353L3.78457 4.88029C3.47251 3.94496 3.24212 3.22077 3.09047 2.73288C3.01465 2.48894 2.95851 2.30409 2.9217 2.1815C2.9033 2.1202 2.88972 2.07446 2.88093 2.04468C2.87654 2.02979 2.87334 2.01889 2.87133 2.01203C2.87033 2.0086 2.86962 2.00618 2.86921 2.00478C2.86901 2.00407 2.86888 2.00363 2.86882 2.00343C2.86879 2.00333 2.86878 2.0033 2.86879 2.00333C2.86879 2.00335 2.8688 2.00338 2.86882 2.00343C2.86882 2.00345 2.86884 2.0035 2.86884 2.00351C2.86886 2.00356 2.86887 2.00362 1.49609 2.36914ZM3.23388 11.8019C3.89427 13.5618 4.66438 15.5387 5.54845 17.6968L8.17136 16.6141C7.30123 14.4901 6.54381 12.5457 5.89498 10.8166L3.23388 11.8019ZM8.055 23.5764C8.87682 25.4316 9.76667 27.3742 10.7264 29.3884L13.2701 28.1268C12.3249 26.1431 11.4485 24.2299 10.6392 22.4029L8.055 23.5764ZM13.5501 35.1089C14.4881 36.9443 15.4791 38.8221 16.5246 40.7324L18.9791 39.2964C17.9501 37.4161 16.9744 35.5674 16.0508 33.7602L13.5501 35.1089ZM19.6548 46.2604C20.7046 48.0524 21.8006 49.8636 22.9439 51.6863L25.2938 50.0719C24.1698 48.28 23.0919 46.4988 22.0593 44.736L19.6548 46.2604ZM26.3972 57.0043C27.5615 58.736 28.7685 60.4715 30.0191 62.2043L32.2439 60.4041C31.0164 58.7033 29.8311 56.9992 28.6874 55.298L26.3972 57.0043ZM33.8135 67.2738C35.0956 68.9252 36.4187 70.5685 37.7833 72.198L39.8573 70.2039C38.5204 68.6076 37.2237 66.997 35.9664 65.3776L33.8135 67.2738ZM41.9312 76.9605C43.3315 78.5057 44.7715 80.0328 46.2517 81.5367L48.1445 79.343C46.6974 77.8729 45.289 76.3792 43.9186 74.867L41.9312 76.9605ZM50.7407 85.9051C52.2577 87.3179 53.8135 88.704 55.4084 90.0585L57.0863 87.6651C55.5303 86.3438 54.0119 84.9909 52.5304 83.6112L50.7407 85.9051ZM60.2522 93.9767C61.8861 95.234 63.5581 96.4567 65.2685 97.6402L66.6956 95.0543C65.0302 93.9018 63.4015 92.7108 61.8091 91.4855L60.2522 93.9767ZM70.4225 101.012C72.1528 102.079 73.9196 103.106 75.7233 104.088L76.8684 101.329C75.1143 100.374 73.3957 99.3748 71.7122 98.336L70.4225 101.012ZM81.1661 106.858C82.9875 107.721 84.844 108.539 86.736 109.306L87.5743 106.401C85.7353 105.655 83.9308 104.861 82.1602 104.022L81.1661 106.858ZM92.3643 111.403C94.2398 112.041 96.1479 112.63 98.089 113.167L98.6112 110.154C96.7236 109.632 94.8684 109.059 93.0453 108.439L92.3643 111.403ZM103.908 114.597C105.808 115.006 107.737 115.365 109.697 115.672L109.906 112.592C107.998 112.293 106.12 111.943 104.272 111.545L103.908 114.597ZM115.54 116.422C117.472 116.616 119.432 116.76 121.42 116.851L121.333 113.741C119.394 113.652 117.482 113.512 115.599 113.323L115.54 116.422ZM127.211 116.967C129.136 116.956 131.087 116.896 133.062 116.786L132.706 113.677C130.774 113.785 128.868 113.843 126.987 113.854L127.211 116.967ZM138.802 116.329C140.695 116.133 142.61 115.892 144.547 115.603L143.952 112.518C142.053 112.802 140.176 113.038 138.323 113.229L138.802 116.329ZM150.221 114.632C152.075 114.274 153.949 113.873 155.843 113.428L155.038 110.384C153.177 110.821 151.337 111.215 149.518 111.566L150.221 114.632ZM161.409 112.008C162.346 111.75 163.288 111.481 164.234 111.201L163.29 108.194C162.358 108.469 161.432 108.734 160.51 108.987L161.409 112.008Z"
            />
          </motion.svg>
        </div>
        <div className="self-end w-1/3 flex flex-col gap-20 max-sm:gap-10 justify-between">
          <Caption
            content="My first intention to learn coding started while playing video games.
          Since i was a kid, i always wanted to make my own games and characters."
            className="bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent"
          />
          <Quote
            content="n.b: i draw as well."
            className="bg-gradient-to-r from-Sky to-LightSky bg-clip-text text-transparent"
          />
        </div>
      </div>
    </div>
  );
}
