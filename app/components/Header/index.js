"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

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

export default function Header() {
  const tl = gsap.timeline({ repeat: -1, yoyo: false });

  gsap.registerPlugin(useGSAP);

  const studio = useRef();

  useGSAP(
    () => {
      // or refs...

      tl.fromTo(
        ".st01",
        {
          x: -25,
          opacity: 0,
        },
        { x: 0, opacity: 1, ease: "elastic.out(1,0.3)" }
      );

      tl.to(".st01", {
        opacity: 0,
        x: -25,
        ease: "elastic.out(1,0.3)",
        delay: 2,
      });

      tl.fromTo(
        ".st02",
        {
          y: 25,
          opacity: 0,
        },
        { y: 0, opacity: 1, ease: "bounce.out" }
      );

      tl.to(".st02", { opacity: 0, y: 25, ease: "bounce.out", delay: 2 });

      tl.fromTo(
        ".st03",
        {
          x: 25,
          opacity: 0,
        },
        { x: 0, opacity: 1, ease: "power1.out" }
      );

      tl.to(".st03", { opacity: 0, x: 25, ease: "power1.out", delay: 2 });

      tl.fromTo(
        ".st04",
        {
          y: -25,
          opacity: 0,
        },
        { y: 0, opacity: 1, ease: "elastic.inOut(1,0.3)" }
      );

      tl.to(".st04", {
        opacity: 0,
        y: -25,
        ease: "elastic.inOut(1,0.3)",
        delay: 2,
      });
    },

    { scope: studio }
  ); // <-- scope for selector text (optional

  const [isOpen, setIsOpen] = useState("hidden");

  return (
    <header className="flex flex-row justify-between lg:px-[75px] align-middle z-50 sticky lg:static top-0 bg-black ">
      <div className=" flex-col items-start justify-center w-[33%] hidden lg:flex ">
        <Link
          onMouseEnter={() => {
            gsap.to(".email01", {
              color: colors[Math.floor(Math.random() * colors.length)],
            });
          }}
          onMouseLeave={() => {
            gsap.to(".email01", {
              color: "white",
            });
          }}
          href="mailto:hello@theevostudio.com"
          className=" email01 cursor-fancy font-bold uppercase text-[15px] tracking-wide"
        >
          hello@theevostudio.com
        </Link>
      </div>
      <div ref={studio} className="flex flex-col justify-center relative">
        <Image
          className=" w-[115px] "
          src="/logo.png"
          width={500}
          height={500}
          alt="evo-Logo"
        />
        <span className=" st01 absolute right-0 bottom-[25%] uppercase text-[11px] font-bold bg-pink-500 px-[4px] opacity-0 rounded-sm ">
          studio
        </span>
        <span className=" st02 absolute right-0 bottom-[25%] uppercase text-[11px] text-black font-bold bg-yellow-400 px-[4px] opacity-0 rounded-sm ">
          studio
        </span>
        <span className=" st03 absolute right-0 bottom-[25%] uppercase text-[11px] font-bold bg-blue-400 px-[4px] opacity-0 rounded-sm ">
          studio
        </span>
        <span className=" st04 absolute right-0 bottom-[25%] uppercase text-[11px] font-bold text-black bg-orange-400 px-[4px] opacity-0 rounded-sm ">
          studio
        </span>
      </div>
      <div className="hidden flex-col items-end justify-center lg:w-[33%] lg:flex ">
        <ul className="flex flex-row justify-end gap-[25px] font-bold uppercase text-[15px] tracking-wide ">
          <li>
            <Link
              onMouseEnter={() => {
                gsap.fromTo(
                  ".p01",
                  { opacity: 0 },
                  {
                    opacity: 1,
                    duration: 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                  }
                );
              }}
              href="https://wa.me/message/BTYS2T3GCEFFK1"
              target="_blank"
              className="cursor-fancy ease-in duration-300 overflow-hidden flex text-nowrap gap-[15px] w-[75px] hover:w-[200px]"
            >
              <p>whatsapp</p>
              <p className="p01 ">+989051170867</p>
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                gsap.fromTo(
                  ".p01",
                  { opacity: 0 },
                  {
                    opacity: 1,
                    duration: 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                  }
                );
              }}
              className="cursor-fancy ease-in duration-300 overflow-hidden flex text-nowrap gap-[15px] w-[40px] hover:w-[175px]"
              href="https://www.instagram.com/theevostudio/"
              target="_blank"
            >
              <p>insta</p>
              <p className="p01 ">@theevostudio</p>
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                gsap.fromTo(
                  ".p01",
                  { opacity: 0 },
                  {
                    opacity: 1,
                    duration: 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                  }
                );
              }}
              className="cursor-fancy ease-in duration-300 overflow-hidden flex text-nowrap gap-[15px] w-[40px] hover:w-[150px]"
              href="https://www.linkedin.com/company/evostudiio"
              target="_blank"
            >
              <p>linky</p>
              <p className="p01 ">@evostudiio</p>
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                gsap.fromTo(
                  ".p01",
                  { opacity: 0 },
                  {
                    opacity: 1,
                    duration: 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                  }
                );
              }}
              className="cursor-fancy ease-in duration-300 overflow-hidden flex text-nowrap gap-[15px] w-[75px] hover:w-[185px]"
              target="_blank"
              href="https://t.me/evostudiio"
            >
              <p>telegram</p>
              <p className="p01 ">@evostudiio</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className=" flex flex-row justify-center items-center lg:hidden mr-[25px] ">
        <Link href="" onClick={() => setIsOpen("visible")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="15"
            fill="none"
            viewBox="0 0 33 15"
          >
            <path
              fill="#FFFCE1"
              fill-rule="evenodd"
              d="M.834 1.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
              clip-rule="evenodd"
              data-svg-origin="16.834171295166016 1.6459999680519104"
              transform="matrix(1,0,0,1,0,0)"
            ></path>
            <path
              fill="#FFFCE1"
              fill-rule="evenodd"
              d="M.834 7.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
              clip-rule="evenodd"
              data-svg-origin="16.833999633789062 7.645999908447266"
              transform="matrix(1,0,0,1,0,0)"
            ></path>
            <path
              fill="#FFFCE1"
              fill-rule="evenodd"
              d="M.834 13.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
              clip-rule="evenodd"
              data-svg-origin="16.833999633789062 13.645999908447266"
              transform="matrix(1,0,0,1,0,0)"
            ></path>
          </svg>
        </Link>

        <div
          style={{ visibility: `${isOpen}` }}
          className=" absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-95 "
        >
          <div className=" w-full h-full flex flex-col justify-center items-center p-[50px] gap-[50px] ">
            <Link
              className=" w-fit self-end "
              href=""
              onClick={() => setIsOpen("hidden")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="15"
                fill="none"
                viewBox="0 0 33 15"
              >
                <path
                  fill="#FFFCE1"
                  fill-rule="evenodd"
                  d="M.834 1.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                  clip-rule="evenodd"
                  data-svg-origin="16.834171295166016 1.6459999680519104"
                  transform="matrix(0.44194,0.44194,-0.70711,0.70711,14.55838,-0.9576)"
                ></path>
                <path
                  fill="#FFFCE1"
                  fill-rule="evenodd"
                  d="M.834 7.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                  clip-rule="evenodd"
                  data-svg-origin="16.833999633789062 7.645999908447266"
                  transform="matrix(0,0,0,1,20.834,0)"
                ></path>
                <path
                  fill="#FFFCE1"
                  fill-rule="evenodd"
                  d="M.834 13.646a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2h-30a1 1 0 0 1-1-1Z"
                  clip-rule="evenodd"
                  data-svg-origin="16.833999633789062 13.645999908447266"
                  transform="matrix(0.44194,-0.44194,0.70711,0.70711,3.74516,5.43639)"
                ></path>
              </svg>
            </Link>
            <ul className=" text-[30px] font-bold uppercase tracking-wide gap-[25px] flex flex-col justify-center items-center ">
              <li>
                <Link
                  href="https://wa.me/message/BTYS2T3GCEFFK1"
                  target="_blank"
                >
                  whatsapp
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/theevostudio/"
                  target="_blank"
                >
                  insta
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/evostudiio"
                  target="_blank"
                >
                  linky
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://t.me/evostudiio">
                  telegram
                </Link>
              </li>
              <li className=" text-[25px] " >
                <Link target="_blank" href="mailto:hello@theevostudio.com">
                  hello@theevostudio.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
