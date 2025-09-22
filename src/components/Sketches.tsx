"use client";
import { Body } from "./fonts/Body";
import { BigTitle } from "./fonts/BigTitle";
import { Quote } from "./fonts/Quote";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Sketches() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <Quote
          content="It was time to learn something new."
          className="bg-gradient-to-r from-Grass to-Peach bg-clip-text text-transparent"
        />
        <div ref={ref} className="relative">
          <Image
            src="/portfolio/Logos/C_Plus.png"
            alt="C++ Logo"
            width={100}
            height={100}
            className="absolute top-1/2 left-20 rotate-12 max-sm:w-[40px] max-sm:h-[40px] max-md:w-[50px] max-md:h-[50px] max-md:left-10"
          />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="375"
            height="534"
            viewBox="0 0 375 534"
            fill="none"
            className="max-md:w-[200px] max-md:h-[300px]"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
              d="M163.998 409.369L163.052 408.234L163.998 409.369ZM294.998 239.869L294.944 241.441L294.998 239.869ZM13.7274 533.221C14.3883 533.664 15.2698 533.418 15.6961 532.671L22.6441 520.501C23.0704 519.755 22.8802 518.79 22.2193 518.347C21.5583 517.904 20.6769 518.15 20.2505 518.897L14.0746 529.715L4.50046 523.298C3.8395 522.855 2.95801 523.102 2.53169 523.848C2.10531 524.595 2.29549 525.56 2.95645 526.003L13.7274 533.221ZM294.944 241.441C322.62 241.441 341.282 238.093 353.075 232.029C358.997 228.983 363.254 225.22 366.026 220.783C368.805 216.334 370.017 211.326 370.017 205.938C370.017 195.264 365.258 182.963 358.392 169.967C351.503 156.926 342.342 142.918 333.296 128.825C324.228 114.697 315.269 100.472 308.682 86.8839C302.08 73.2646 297.969 60.495 298.39 49.2613C298.805 38.1957 303.625 28.4263 315.385 20.6345C327.247 12.774 346.15 6.95475 374.574 4.1091L374.423 0.977644C345.847 3.83843 326.421 9.71543 313.987 17.9544C301.45 26.262 296.004 36.9953 295.544 49.249C295.091 61.3345 299.496 74.7008 306.159 88.4473C312.838 102.225 321.894 116.595 330.952 130.706C340.031 144.852 349.104 158.728 355.918 171.626C362.755 184.569 367.168 196.264 367.168 206.056C367.168 210.901 366.087 215.243 363.7 219.064C361.306 222.897 357.524 226.322 351.953 229.187C340.762 234.942 322.626 238.297 295.051 238.297L294.944 241.441ZM163.052 408.234C156.729 414.697 148.916 417.209 140.02 417.082C131.089 416.955 121.156 414.166 110.758 410.112C100.367 406.061 89.6314 400.798 79.0714 395.782C68.5431 390.782 58.1851 386.026 48.6602 383.071C39.1622 380.124 30.2864 378.898 22.7851 381.18C15.1542 383.503 9.15663 389.388 5.40088 400.07C1.67965 410.654 0.133597 425.991 1.23369 447.452C2.33527 468.943 6.09923 496.717 13.1072 532.258L15.8915 531.48C8.89989 496.022 5.1675 468.423 4.07748 447.157C2.98598 425.863 4.5531 411.061 8.0513 401.111C11.5149 391.26 16.843 386.219 23.4455 384.21C30.1775 382.161 38.4428 383.198 47.7951 386.1C57.1206 388.994 67.322 393.671 77.8639 398.678C88.3741 403.67 99.2197 408.988 109.721 413.082C120.217 417.173 130.488 420.092 139.877 420.226C149.3 420.36 157.919 417.686 164.944 410.504L163.052 408.234ZM164.944 410.504C179.706 395.414 186.521 377.08 190.67 358.257C192.742 348.856 194.156 339.295 195.554 329.953C196.954 320.588 198.337 311.449 200.347 302.781C204.361 285.472 210.829 270.257 224.713 259.306C238.642 248.32 260.266 241.441 294.944 241.441L295.051 238.297C260.101 238.297 237.766 245.215 223.115 256.771C208.419 268.362 201.688 284.435 197.589 302.11C195.543 310.935 194.141 320.211 192.744 329.555C191.343 338.921 189.945 348.361 187.903 357.623C183.826 376.124 177.212 393.76 163.052 408.234L164.944 410.504Z"
              stroke="url(#paint0_linear_1005_16653)"
              strokeWidth={3}
              strokeDasharray="0 1"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1005_16653"
                x1="233.048"
                y1="329.857"
                x2="113.226"
                y2="174.567"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FEBD81" />
                <stop offset="0.489583" stopColor="#FFE598" />
                <stop offset="1" stopColor="#BFF4A6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/3 overflow-hidden">
          <div className="" data-aos="fade-right">
            <Image
              src="/portfolio/Sketches/Monicca.jpeg"
              alt="Monicca Drawing"
              height={300}
              width={300}
              className="object-cover rotate-12 xl:h-[300px] xl:w-[300px] 2xl:h-[500px] 2xl:w-[500px] max-xl:h-[250px] max-xl:w-[250px] max-sm:h-[100px] sm:h-[175px] max-sm:w-[100px] sm:w-[175px]"
            />
          </div>
          <div className="flex">
            <Image
              src="/portfolio/Sketches/Paper.png"
              alt="Paper"
              height={200}
              width={200}
              className="max-sm:w-[50px] sm:w-[100px] xl:w-[200px] max-sm:h-[50px] sm:h-[100px] xl:h-[200px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
            <Image
              src="/portfolio/Sketches/Pencil.png"
              alt="Pencil"
              width={200}
              height={200}
              className="rotate-180 max-sm:w-[50px] sm:w-[100px] xl:w-[200px] max-sm:h-[50px] sm:h-[100px] xl:h-[200px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center gap-5 max-sm:gap-1">
          <BigTitle
            content="Sketches"
            className="bg-gradient-to-r from-Grass to-Peach bg-clip-text text-transparent"
          />
          <Body content="Hobby" className="text-Peach" />
          <Body
            content="Besides, i still make time for drawing."
            className="text-center"
          />
        </div>
        <div className="w-1/3 overflow-hidden">
          <div className="flex">
            <Image
              src="/portfolio/Sketches/Paper.png"
              alt="Paper"
              height={200}
              width={200}
              className="max-sm:w-[50px] sm:w-[100px] xl:w-[200px] max-sm:h-[50px] sm:h-[100px] xl:h-[200px] 2xl:h-[250px] 2xl:w-[250px] max-xl:h-[150px] max-xl:w-[150px]"
            />
            <Image
              src="/portfolio/Sketches/Pencil.png"
              alt="Pencil"
              width={200}
              height={200}
              className="max-sm:w-[50px] sm:w-[100px] max-xl:w-[150px] xl:w-[200px] max-sm:h-[50px] sm:h-[100px] max-xl:h-[150px] xl:h-[200px] 2xl:h-[250px] 2xl:w-[250px]"
            />
          </div>
          <div className="" data-aos="fade-left">
            <Image
              src="/portfolio/Sketches/Dragon.jpeg"
              alt="Dragon Drawing"
              height={200}
              width={300}
              className="object-cover -rotate-12 h-[350px] w-[350px] 2xl:h-[500px] 2xl:w-[500px] max-xl:h-[250px] max-xl:w-[250px] ml-auto max-sm:h-[100px] sm:h-[175px] xl:h-[300px] max-sm:w-[100px] sm:w-[175px] xl:w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
