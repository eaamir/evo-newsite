"use client";

import Link from "next/link";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function SectionThree() {
  gsap.registerPlugin(useGSAP);

  const foot = useRef();

  useGSAP(
    () => {
      gsap.to(".spinin", {
        rotation: -360,
        duration: 3,
        repeat: -1,
        repeatDelay: 2,
      });

      gsap.from(".stck", { scrollTrigger: ".stck", scale: 2, opacity: 0 });
    },
    { scope: foot }
  );

  const [color, setColor] = useState("#67e8f9");

  const [active, setActive] = useState(false);

  const [isBaz, setIsBaz] = useState("hidden");

  return (
    <div ref={foot} id="price" className=" flex flex-col z-20 ">
      <hr className=" border-gray-400 self-center w-[350px] lg:w-[1000px] lg:mb-[50px] mb-[75px] "></hr>

      {/* call to action */}

      <div
        style={{ visibility: `${isBaz}` }}
        className=" w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center fixed top-0 z-50"
      >
        <div className=" bg-black rounded-3xl w-full h-full lg:w-fit lg:h-fit flex flex-col justify-center items-center px-[50px] lg:px-[100px] py-[50px] gap-[25px] relative ">
          <div className=" absolute right-[35px] top-[35px] lg:right-[20px] lg:top-[20px] hover:scale-[1.1] transition ">
            <Link
              className=" cursor-fancy "
              onClick={() => setIsBaz("hidden")}
              href=""
              scroll={false}
            >
              <Image src="/new-close-white.png" width={30} height={30} />
            </Link>
          </div>
          <div className=" w-[300px] lg:w-[500px] flex justify-between items-center border-b-[3px] border-gray-300 hover:border-red-500 transition px-[15px] lg:px-[35px] py-[25px] gap-[75px] lg:gap-[150px] text-[17px] lg:text-[20px] font-bold uppercase ">
            <p className=" text-white ">whatsapp</p>
            <Link
              className=" py-[7px] px-[25px] rounded-xl bg-gradient-to-r  from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition  "
              href="https://wa.me/message/BTYS2T3GCEFFK1"
              target="_blank"
              scroll={false}
            >
              send
            </Link>
          </div>
          <div className=" w-[300px] lg:w-[500px] flex justify-between items-center border-b-[3px] border-gray-300 hover:border-red-500 transition lg:px-[35px] px-[15px] py-[25px] gap-[75px] lg:gap-[150px] text-[17px] lg:text-[20px] font-bold uppercase ">
            <p className=" text-white ">telegram</p>
            <Link
              className=" py-[7px] px-[25px] rounded-xl bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition "
              target="_blank"
              href="https://t.me/evostudiio"
              scroll={false}
            >
              send
            </Link>
          </div>
          <div className=" w-[300px] lg:w-[500px] flex justify-between items-center border-b-[3px] border-gray-300 hover:border-red-500 transition lg:px-[35px] px-[15px] py-[25px] gap-[50px] lg:gap-[100px] text-[17px] lg:text-[20px] font-bold uppercase ">
            <p className=" text-white ">+989051170867</p>
            <Link
              className=" py-[7px] px-[25px] rounded-xl bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 transition  "
              href="tel:+989051170867"
              scroll={false}
            >
              call
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center px-[50px] gap-[15px] ">
        <div>
          <p className=" text-[20px] font-bold ">Dollar</p>
        </div>
        <div className=" w-[125px] p-[5px] border-[2px] rounded-3xl border-gray-400 flex justify-between items-center font-bold text-[21px]  ">
          <a
            onClick={() => {
              if (active == true) {
                setActive(!active);
              }
            }}
          >
            <div
              className={
                active
                  ? " flex justify-center items-center bg-gradient-to-b from-gray-700 to-gray-400 px-[15px] py-[3px] rounded-full text-gray-300  "
                  : " flex justify-center items-center bg-gradient-to-b from-green-800 to-green-400 px-[15px] py-[3px] rounded-full text-white "
              }
            >
              $
            </div>
          </a>
          <a
            onClick={() => {
              if (active == false) {
                setActive(!active);
              }
            }}
          >
            <div
              className={
                active
                  ? " flex justify-center items-center bg-gradient-to-b from-green-800 to-green-400 px-[15px] py-[3px] rounded-full text-white "
                  : " flex justify-center items-center bg-gradient-to-b from-gray-700 to-gray-400 px-[15px] py-[3px] rounded-full text-gray-300 "
              }
            >
              T
            </div>
          </a>
        </div>
        <div>
          <p className=" text-[20px] font-bold ">Toman</p>
        </div>
      </div>
      <div className=" mt-[35px] overflow-hidden lg:overflow-visible flex flex-col lg:flex-row justify-center items-center gap-[50px] lg:gap-[50px] lg:px-[150px] ">
        <div
          onMouseEnter={() => setColor("#86efac")}
          onMouseLeave={() => setColor("#67e8f9")}
          className=" z-20 px-[25px] py-[25px] lg:py-[50px] rounded-[50px] w-[350px]  lg:w-[2000px] border-[5px] border-gray-400 hover:border-green-300 transition flex flex-col gap-[15px] "
        >
          <h1 className=" text-[30px] lg:text-[35px] uppercase text-green-300 font-bold ">
            Basic
          </h1>
          <h1 className=" text-[40px] lg:text-[50px] uppercase font-bold flex flex-row justify-start items-end gap-[25px] p-[5px] text-green-300 ">
            {active ? <span>T 13</span> : <span>$ 199</span>}
            <span className=" text-[17px] font-thin ">/ Contract</span>
          </h1>
          <p className=" text-[20px] w-[200px] tracking-tighter leading-tight text-gray-400 ">
            Simple website design including ready and pre-designed templates.
          </p>
          <hr className=" border-green-300 border-[1px] rounded-full  w-[200px] self-center my-[25px] "></hr>
          <ul className=" flex flex-col gap-[15px] ">
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-green-300 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className=" capitalize "> Fast and flexible</span>
            </li>
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-green-300 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className=" capitalize "> Short delivery time</span>
            </li>
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-green-300 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className=" capitalize "> Basic support</span>
            </li>
          </ul>
          <Link
            className=" cursor-fancy self-center border-green-300 hover:bg-green-300 transition hover:text-black border-[2px] rounded-3xl px-[75px] py-[7px] text-[20px] font-bold capitalize text-white tracking-wide mt-[50px] "
            href=""
            onClick={() => setIsBaz("visible")}
            scroll={false}
          >
            Get Basic
          </Link>
        </div>
        <div
          onMouseEnter={() => setColor("#f9a8d4")}
          onMouseLeave={() => setColor("#67e8f9")}
          className=" z-20 px-[25px] py-[25px] lg:py-[50px] rounded-[50px] w-[350px] lg:w-[2000px] border-[5px] border-gray-400 hover:border-pink-300 transition flex flex-col gap-[15px] "
        >
          <h1 className=" text-[30px] lg:text-[35px] uppercase text-pink-300 font-bold ">
            Pro
          </h1>
          <h1 className=" text-[40px] lg:text-[50px] uppercase font-bold flex flex-row justify-start items-end gap-[25px] p-[5px] text-pink-300 ">
            {active ? <span>T 20</span> : <span>$ 399</span>}
            <span className=" text-[17px] font-thin ">/ Contract</span>
          </h1>
          <p className=" text-[20px] w-[200px] tracking-tighter leading-tight text-gray-400 ">
            Including new and start-up businesses with advanced facilities.{" "}
          </p>
          <hr className=" border-pink-300 border-[1px] rounded-full  w-[200px] self-center my-[25px] "></hr>
          <ul className=" flex flex-col gap-[15px] ">
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-pink-300 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className=" capitalize "> fresh and modern UI design</span>
            </li>
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-pink-300 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className=" capitalize ">
                {" "}
                Implementation with the latest methods and libraries{" "}
              </span>
            </li>
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-pink-300 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className=" capitalize ">
                {" "}
                100% support with advanced tools
              </span>
            </li>
          </ul>
          <Link
            className=" cursor-fancy self-center border-pink-300 hover:bg-pink-300 hover:text-black transition border-[2px] rounded-3xl px-[75px] py-[7px] text-[20px] font-bold capitalize text-white tracking-wide mt-[50px] "
            href="#"
            onClick={() => setIsBaz("visible")}
            scroll={false}
          >
            Get Pro
          </Link>
        </div>
        <div
          onMouseEnter={() => setColor("#c084fc")}
          onMouseLeave={() => setColor("#67e8f9")}
          className=" z-20 relative px-[25px] py-[25px] lg:py-[50px] rounded-[50px] w-[350px] lg:w-[2000px] border-[5px] border-gray-400 hover:border-purple-400 transition  flex flex-col gap-[15px] "
        >
          <div className=" stck absolute top-0 right-0 flex justify-center items-center ">
            <p className=" capitalize text-[14px] lg:text-[15px] font-bold text-black z-10 ">
              most popular
            </p>
            <svg
              className=" lg:w-[125px] w-[100px] h-[100px] lg:h-[125px] absolute z-0 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 105 105"
              aria-hidden="true"
            >
              <path
                fill="url(#paint0_linear_2762_58560)"
                d="m52.5 0 5.518 7.054 7.046-5.528 3.67 8.169 8.164-3.681 1.608 8.81 8.808-1.62-.547 8.938 8.94.535-2.67 8.548 8.551 2.658-4.638 7.661 7.667 4.628L98.28 52.5l6.337 6.328-7.667 4.628 4.638 7.66-8.552 2.659 2.67 8.548-8.94.535.548 8.939-8.808-1.62-1.608 8.81-8.164-3.682-3.67 8.169-7.046-5.528L52.5 105l-5.518-7.054-7.046 5.528-3.67-8.169-8.164 3.681-1.608-8.81-8.808 1.62.547-8.938-8.94-.535 2.67-8.548-8.551-2.658 4.638-7.661-7.667-4.628L6.72 52.5.383 46.172l7.667-4.628-4.638-7.66 8.552-2.659-2.67-8.548 8.94-.535-.548-8.939 8.808 1.62 1.608-8.81 8.164 3.682 3.67-8.17 7.046 5.529L52.5 0Z"
              ></path>
              <path
                fill="url(#pattern-pricing-hero-starred-0)"
                fill-opacity=".6"
                d="m52.5 0 5.518 7.054 7.046-5.528 3.67 8.169 8.164-3.681 1.608 8.81 8.808-1.62-.547 8.938 8.94.535-2.67 8.548 8.551 2.658-4.638 7.661 7.667 4.628L98.28 52.5l6.337 6.328-7.667 4.628 4.638 7.66-8.552 2.659 2.67 8.548-8.94.535.548 8.939-8.808-1.62-1.608 8.81-8.164-3.682-3.67 8.169-7.046-5.528L52.5 105l-5.518-7.054-7.046 5.528-3.67-8.169-8.164 3.681-1.608-8.81-8.808 1.62.547-8.938-8.94-.535 2.67-8.548-8.551-2.658 4.638-7.661-7.667-4.628L6.72 52.5.383 46.172l7.667-4.628-4.638-7.66 8.552-2.659-2.67-8.548 8.94-.535-.548-8.939 8.808 1.62 1.608-8.81 8.164 3.682 3.67-8.17 7.046 5.529L52.5 0Z"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2762_58560"
                  x1="-8.969"
                  x2="94.717"
                  y1="-3.306"
                  y2="139.494"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".27" stop-color="#FEC5FB"></stop>
                  <stop offset=".838" stop-color="#00BAE2"></stop>
                </linearGradient>
                <pattern
                  id="pattern-pricing-hero-starred-0"
                  width="1.905"
                  height="1.905"
                  patternContentUnits="objectBoundingBox"
                >
                  <use transform="scale(.00381)"></use>
                </pattern>
              </defs>
            </svg>
          </div>
          <h1 className=" text-[30px] lg:text-[35px] uppercase text-purple-400 font-bold ">
            vip
          </h1>
          <h1 className=" text-[30px] lg:text-[50px] uppercase font-bold flex flex-row justify-start items-end gap-[25px] p-[5px] text-purple-400 ">
            <span>call to ask</span>
            <span className=" text-[17px] font-thin ">/ Contract</span>
          </h1>
          <p className=" text-[20px] w-[200px] tracking-tighter leading-tight text-gray-400 ">
            For businesses with huge customers and special futures.
          </p>
          <hr className=" border-purple-400 border-[1px] rounded-full  w-[200px] self-center my-[25px] "></hr>
          <ul className=" flex flex-col gap-[15px] ">
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-purple-400 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className=" capitalize "> unique UI/UX designs</span>
            </li>
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-purple-400 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className=" capitalize ">
                {" "}
                technical SEO / Test and check{" "}
              </span>
            </li>
            <li className=" flex flex-row justify-start items-center gap-[15px] text-gray-400 ">
              <span>
                <svg
                  className=" w-[15px] h-[15px] "
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                  class="diamond"
                  aria-hidden="true"
                >
                  <path
                    className=" fill-purple-400 "
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#paint0_linear_2080_57095)"
                  ></path>
                  <path
                    d="M27.1716 1.82843C28.7337 0.266333 31.2663 0.26633 32.8284 1.82843L58.1716 27.1716C59.7337 28.7337 59.7337 31.2663 58.1716 32.8284L32.8284 58.1716C31.2663 59.7337 28.7337 59.7337 27.1716 58.1716L1.82843 32.8284C0.266333 31.2663 0.26633 28.7337 1.82843 27.1716L27.1716 1.82843Z"
                    fill="url(#pattern-home-animate-diamond-0)"
                    fillOpacity="0.6"
                  ></path>
                  <defs>
                    <pattern
                      id="pattern-home-animate-diamond-0"
                      patternContentUnits="objectBoundingBox"
                      width="3.22581"
                      height="3.22581"
                    >
                      <use
                        xlink="#svg-noise"
                        transform="scale(0.00645161)"
                      ></use>
                    </pattern>
                    <linearGradient
                      id="paint0_linear_2080_57095"
                      x1="-35.7015"
                      y1="-8.17164"
                      x2="74.4179"
                      y2="35.0896"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.427083" stopColor="#FF8709"></stop>
                      <stop offset="0.791667" stopColor="#F7BDF8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span> Dedicated panel</span>
            </li>
          </ul>
          <Link
            className=" cursor-fancy self-center border-purple-400 hover:bg-purple-400 transition hover:text-black border-[2px] rounded-3xl px-[75px] py-[7px] text-[20px] font-bold capitalize text-white tracking-wide mt-[50px] "
            href="#"
            onClick={() => setIsBaz("visible")}
            scroll={false}
          >
            Get VIP
          </Link>
        </div>
      </div>
      <div className=" flex justify-center items-center py-[50px] overflow-hidden relative lg:flex-row flex-col-reverse ">
        <h1 className=" text-[40px] lg:text-[75px] font-bold ">
          <span>Pick up your</span>{" "}
          <span className=" bg-orange-200 text-black px-[20px] py-[3px] rounded-lg lg:rounded-xl ">
            plan
          </span>{" "}
          <span>...</span>
        </h1>
        <span className=" hidden lg:flex absolute left-0 -bottom-[50px] ">
          <svg
            className=" w-[250px] h-[250px] transition "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 248 248"
            aria-hidden="true"
          >
            <path
              class="pricing-hero-circle-path"
              fill="url(#pricing-hero-circle-gradient-1)"
              fill-rule="evenodd"
              d="M62 124c34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62Zm0 0c-34.242 0-62 27.758-62 62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62C27.758 0 0 27.758 0 62c0 34.242 27.758 62 62 62Z"
              clip-rule="evenodd"
            ></path>
            <path
              class="pricing-hero-circle-path"
              fill="url(#pricing-hero-circle-gradient-2)"
              fill-rule="evenodd"
              d="M62 124c34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62Zm0 0c-34.242 0-62 27.758-62 62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62C27.758 0 0 27.758 0 62c0 34.242 27.758 62 62 62Z"
              clip-rule="evenodd"
            ></path>
            <path
              class="pricing-hero-circle-path"
              fill="url(#pricing-hero-circle-gradient-3)"
              fill-rule="evenodd"
              d="M62 124c34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62Zm0 0c-34.242 0-62 27.758-62 62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62C27.758 0 0 27.758 0 62c0 34.242 27.758 62 62 62Z"
              clip-rule="evenodd"
            ></path>
            <path
              class="pricing-hero-circle-path"
              fill="url(#pricing-hero-circle-gradient-4)"
              fill-rule="evenodd"
              d="M62 124c34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62Zm0 0c-34.242 0-62 27.758-62 62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62C27.758 0 0 27.758 0 62c0 34.242 27.758 62 62 62Z"
              clip-rule="evenodd"
            ></path>
            <path
              class="pricing-hero-circle-path"
              fill="url(#pricing-hero-circle-gradient-5)"
              fill-rule="evenodd"
              d="M62 124c34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62Zm0 0c-34.242 0-62 27.758-62 62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62C27.758 0 0 27.758 0 62c0 34.242 27.758 62 62 62Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="url(#pattern-pricing-hero-circles-0)"
              fill-opacity=".6"
              fill-rule="evenodd"
              d="M62 124c34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62Zm0 0c-34.242 0-62 27.758-62 62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62-34.242 0-62 27.758-62 62 0-34.242-27.758-62-62-62C27.758 0 0 27.758 0 62c0 34.242 27.758 62 62 62Z"
              clip-rule="evenodd"
            ></path>
            <defs>
              <linearGradient
                id="pricing-hero-circle-gradient-1"
                x1="11.577"
                x2="202.12"
                y1="62.232"
                y2="148.687"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".152" stop-color="#0ae448"></stop>
                <stop offset=".855" stop-color="#abff84"></stop>
              </linearGradient>
              <linearGradient
                id="pricing-hero-circle-gradient-2"
                x1="11.577"
                x2="202.12"
                y1="62.232"
                y2="148.687"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".152" stop-color="#dfdcff"></stop>
                <stop offset=".855" stop-color="#a69eff"></stop>
              </linearGradient>
              <linearGradient
                id="pricing-hero-circle-gradient-3"
                x1="11.577"
                x2="202.12"
                y1="62.232"
                y2="148.687"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".152" stop-color="#ffe9fe"></stop>
                <stop offset=".855" stop-color="#ff96f9"></stop>
              </linearGradient>
              <linearGradient
                id="pricing-hero-circle-gradient-4"
                x1="158.577"
                x2="202.12"
                y1="62.232"
                y2="148.687"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".152" stop-color={color}></stop>
                <stop offset=".855" stop-color="#00bae2"></stop>
              </linearGradient>

              <pattern
                id="pattern-pricing-hero-circles-0"
                width=".806"
                height=".806"
                patternContentUnits="objectBoundingBox"
              >
                <use transform="scale(.00161)"></use>
              </pattern>
            </defs>
          </svg>
        </span>
        <span className=" spinin p-[15px] ">
          <svg
            className=" w-[50px] h-[50px] lg:h-[50px] "
            viewBox="0 0 137 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
              fill="url(#paint0_linear_1655_45397)"
            ></path>
            <path
              d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
              fill="url(#pattern-home-hero-windmill-0)"
              fill-opacity="0.6"
            ></path>
            <defs>
              <pattern
                id="pattern-home-hero-windmill-0"
                patternContentUnits="objectBoundingBox"
                width="1.45985"
                height="1.48148"
              >
                <use transform="scale(0.00291971 0.00296296)"></use>
              </pattern>
              <linearGradient
                id="paint0_linear_1655_45397"
                x1="-76.6791"
                y1="-15.6157"
                x2="165.682"
                y2="81.0082"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.427083" stop-color="#FF8709"></stop>
                <stop offset="0.791667" stop-color="#F7BDF8"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
}
