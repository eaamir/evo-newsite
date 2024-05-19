"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const colors = [
  "#f43f5e",
  "#fda4af",
  "#c084fc",
  "#818cf8",
  "#2dd4bf",
  "#bef264",
  "#fde047",
  "#fb923c",
  "#fca5a5",
  "#f87171",
];

export default function SectionOne() {
  gsap.registerPlugin(useGSAP);

  gsap.registerPlugin(ScrollToPlugin);

  const mainheading = useRef();

  const tl = gsap.timeline({ repeat: -1, yoyo: true });
  const tl02 = gsap.timeline({ repeat: -1, yoyo: true });
  const tl03 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 3 });
  useGSAP(
    () => {
      // or refs...
      tl.to(".sp01", {
        rotate: 15,
        duration: 1,
        ease: "bounce.out",
        delay: 10,
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl02.to(".and", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      tl03.to(".ddesign", {
        x: -25,
        delay: 5,
        duration: 1.5,
        ease: "expo.out",
      });
      tl03.to(".dott", {
        opacity: 1,
        duration: 0.5,
        ease: "expo.out",
      });
      tl03.fromTo(
        ".dott",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "expo.out" }
      );
      tl03.fromTo(
        ".dott",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "expo.out" }
      );
      tl03.fromTo(
        ".dott",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "expo.out" }
      );

      tl03.to(".rot01", { rotation: 360, stagger: 2 });
    },

    { scope: mainheading }
  ); // <-- scope for selector text (optional

  return (
    <div
      ref={mainheading}
      className=" flex flex-col justify-center relative md:px-[75px] lg:px-[0px] "
    >
      <span className=" rot01 absolute left-[25%] top-[25%] lg:top-[40%] ">
        <svg
          className=" lg:w-[65px] w-[45px] lg:h-[75px] h-[45px] "
          width="124"
          height="124"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 124 124"
          aria-hidden="true"
        >
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="url(#paint0_radial_2080_57111)"
            fill-rule="evenodd"
            d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="url(#pattern-home-animate-asterisk-0)"
            fill-rule="evenodd"
            d="m43.184 54.206-35.557.137a7.656 7.656 0 0 0 0 15.313l35.557.138-25.045 25.24a7.657 7.657 0 0 0 10.828 10.827l25.24-25.045.136 35.557a7.657 7.657 0 0 0 15.313 0l.138-35.557 25.24 25.045a7.656 7.656 0 0 0 10.827-10.828l-25.045-25.24 35.557-.137a7.657 7.657 0 0 0 0-15.313l-35.557-.137 25.045-25.24a7.657 7.657 0 0 0-10.828-10.828l-25.24 25.046-.137-35.557a7.657 7.657 0 0 0-15.313 0l-.137 35.557-25.24-25.045a7.657 7.657 0 0 0-10.828 10.828l25.046 25.24Z"
            clip-rule="evenodd"
          ></path>
          <defs>
            <radialGradient
              id="paint0_radial_2080_57111"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(-90 63.541 25.385) scale(97.6761)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFEBE7"></stop>
              <stop offset=".672" stop-color="#9834eb"></stop>
              <stop offset="1" stop-color="#FF9983"></stop>
              <stop offset=".901" stop-color="#343deb"></stop>
            </radialGradient>
            <pattern
              id="pattern-home-animate-asterisk-0"
              width=".806"
              height=".806"
              patternContentUnits="objectBoundingBox"
            >
              <use transform="scale(.00161)"></use>
            </pattern>
          </defs>
        </svg>
      </span>
      <div className=" flex flex-row justify-start lg:mt-[50px] mt-[25px] lg:ml-[75px] ml-[25px]  ">
        <div className=" lg:text-[200px] text-[75px] tracking-wide lg:leading-[100px] leading-[50px] flex  font-bold ">
          <p className="sp01 and -rotate-[15deg] ">C</p>
          <p className=" and ">r</p>
          <p className=" and ">e</p>
          <p className=" and ">a</p>
          <p>t</p>
          <p>i</p>
          <p>v</p>
          <p className="i01">i</p>
          <p>t</p>
          <p>y</p>
        </div>
      </div>
      <div className=" flex flex-row justify-end lg:mr-[125px] mr-[25px] ">
        <div className=" font-bold lg:text-[200px] text-[75px] tracking-wide lg:leading-[200px] leading-[150px] flex text-purple-500 ">
          <p className="and ">A</p>
          <p className="and ">n</p>
          <p className="and ">d</p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row-reverse justify-around px-[35px] lg:px-[75px] ">
        <div className=" flex flex-col lg:flex-row justify-end gap-[50px] w-full ">
          <div className=" lg:text-[200px] text-[75px] tracking-wide lg:leading-[200px] leading-[25px] flex font-bold ">
            <p className=" dott flex flex-col justify-center items-center align-middle h-fit font-bold lg:-translate-x-[10px] -translate-x-[25px] lg:-translate-y-[25px] -translate-y-[10px] opacity-0 ">
              :
            </p>
            <p className="ddesign font-bold ">D</p>
            <p>e</p>
            <p>s</p>
            <p>i</p>
            <p>g</p>
            <p>n</p>
          </div>
          <div className=" font-bold lg:text-[200px] text-[75px] tracking-wide lg:leading-[200px] leading-[100px] flex self-end lg:self-center ">
            <p>S</p>
            <p>t</p>
            <p>u</p>
            <p>d</p>
            <p>i</p>
            <p>o</p>
          </div>
        </div>
        <Link
          onClick={() => {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: "#price", offsetY: 50 },
            });
          }}
          href="#"
          className=" mt-[25px] cursor-fancy lg:mt-0 bg-orange-700 p-[10px] lg:w-[175px] lg:h-[250px] flex flex-col justify-between rounded-3xl text-black border-[5px] border-orange-700 hover:border-white hover:text-white hover:bg-black transition gap-[25px] lg:gap-0 "
        >
          <div>
            <p className="font-bold text-[23px] ">Let's make a Design</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-[23px]">PLANS</p>
            <svg
              className=" w-[35px]"
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 0 43 44"
              fill="none"
            >
              <rect
                x="0.554288"
                y="1.11606"
                width="41.9917"
                height="41.9917"
                rx="20.9958"
                stroke="currentcolor"
                stroke-width="0.608575"
              ></rect>
              <path
                d="M30.6948 16.9333L27.8648 16.914L27.8648 26.4242L13.4069 11.9663L11.4047 13.9686L25.8626 28.4264L16.3524 28.4264L16.3717 31.2564H30.6948V16.9333Z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
        </Link>
      </div>
      <hr className=" border-gray-400 w-[350px] lg:w-[1000px] mt-[100px] self-center "></hr>
    </div>
  );
}
