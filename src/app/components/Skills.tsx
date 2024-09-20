"use client";

import SkillTag from "./SkillTag";
import styles from "./Journey.module.css";
import { useState, useEffect } from "react";

export default function Skills() {
  const Skills = [
    "Javascript",
    "C/C++",
    "Typescript",
    "React.js",
    "HTML",
    "CSS & Tailwind",
    "Next.js",
    "UI/UX Design",
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const svgElement = document.getElementById("animated-svg");
      if (
        !isVisible &&
        svgElement &&
        svgElement.getBoundingClientRect().top < window.innerHeight
      ) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div className="flex flex-col items-center gap-20 w-2/3">
      <h2 className="max-sm:text-2xl text-3xl lg:text-5xl leading-9 lg:leading-10">
        Skills
      </h2>
      <div className="flex flex-wrap justify-between max-sm:gap-5 gap-10">
        {Skills.map((skill, index) => (
          <div key={index} data-aos="fade-up">
            <SkillTag name={skill} />
          </div>
        ))}
      </div>
      <svg
        className="max-sm:w-[350px] max-sm:h-[200px] w-[500px] h-[350px] lg:w-[720px] lg:h-[500px]"
        id="animated-svg"
        width="254"
        height="439"
        viewBox="0 0 254 439"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="paint0_linear_1005_16599"
            x1="23.2749"
            y1="253.86"
            x2="282.374"
            y2="202.185"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#AB83FE" />
            <stop offset="1" stopColor="#FBAE96" />
          </linearGradient>
        </defs>
        <path
          className={isVisible ? styles.slidein : styles.hidden}
          d="M58.3878 436.584C58.2794 437.432 57.543 438.091 56.7431 438.056L43.7073 437.476C42.9073 437.441 42.3467 436.724 42.4551 435.876C42.5635 435.027 43.2998 434.368 44.0997 434.404L55.6872 434.919L57.2572 422.631C57.3656 421.783 58.1019 421.124 58.9018 421.159C59.7018 421.195 60.2624 421.911 60.154 422.76L58.3878 436.584ZM55.7764 437.56C18.0722 389.37 2.63821 354.307 1.10509 328.285C0.335538 315.224 3.06778 304.421 8.25307 295.424C13.4272 286.447 20.9786 279.379 29.6926 273.667C47.0652 262.279 69.3785 256.09 87.5494 250.935C96.6969 248.34 104.751 246.02 110.748 243.445C113.744 242.157 116.135 240.844 117.859 239.462C119.579 238.084 120.514 236.738 120.845 235.391L123.672 235.895C123.096 238.242 121.55 240.193 119.489 241.844C117.433 243.492 114.743 244.94 111.632 246.277C105.413 248.948 97.148 251.321 88.0613 253.899C69.7637 259.09 47.951 265.168 31.0673 276.235C22.6533 281.75 15.544 288.456 10.7158 296.834C5.89883 305.192 3.28716 315.325 4.02293 327.814C5.50047 352.892 20.4742 387.386 58.1023 435.479L55.7764 437.56ZM120.845 235.391C121.551 232.514 120.347 229.513 117.012 226.293C113.706 223.101 108.602 219.998 102.355 216.97C89.8694 210.916 73.2876 205.37 58.5602 200.002C51.2226 197.327 44.3471 194.696 38.7332 192.08C33.1699 189.488 28.6557 186.828 26.2081 184.026C24.9752 182.615 24.1262 181.011 24.1109 179.209C24.0951 177.344 24.9722 175.617 26.4874 174.078C27.9767 172.565 30.1639 171.14 33.0345 169.76C35.9218 168.372 39.5904 166.988 44.1171 165.596L44.6917 168.542C40.2514 169.907 36.7388 171.239 34.039 172.537C31.3225 173.843 29.5165 175.072 28.415 176.191C27.3394 177.284 27.0279 178.167 27.0341 178.897C27.0409 179.692 27.4245 180.669 28.4429 181.835C30.4981 184.187 34.5619 186.66 40.1182 189.249C45.6237 191.815 52.4091 194.413 59.74 197.085C74.3495 202.411 91.1348 208.027 103.776 214.156C110.092 217.218 115.491 220.462 119.094 223.941C122.668 227.392 124.779 231.385 123.672 235.895L120.845 235.391ZM44.1171 165.596C80.0751 154.544 154.45 133.479 203.492 105.144C215.736 98.0692 226.332 90.5793 234.332 82.7303C242.339 74.8754 247.646 66.7611 249.513 58.4334C253.208 41.949 243.583 23.3973 210.857 3.25596L212.502 0.564821C245.32 20.7629 256.525 40.2697 252.355 58.8709C250.289 68.0861 244.489 76.7714 236.218 84.8865C227.94 93.0076 217.085 100.658 204.711 107.808C155.277 136.369 80.4691 157.545 44.6917 168.542L44.1171 165.596Z"
          fill="url(#paint0_linear_1005_16599)"
          strokeDasharray="1667"
          strokeDashoffset="1667"
        />
      </svg>
    </div>
  );
}
