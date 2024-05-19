"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import SectionOne from "./components/Section01";
import SectionTwo from "./components/Section02";
import SectionThree from "./components/Section03";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [textLoading, setTextLoading] = useState(true);
  const [loadText, setLoadText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTextLoading(false);
    }, 500);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
    if (textLoading === false) {
      if (loadText === "") {
        setLoadText("e");
      }
      setTimeout(() => {
        if (loadText === "e") {
          setLoadText("ev");
        }
      }, 700);
      setTimeout(() => {
        if (loadText === "ev") {
          setLoadText("evo");
        }
      }, 700);
      setTimeout(() => {
        if (loadText === "evo") {
          setLoadText("evo S");
        }
      }, 700);
      setTimeout(() => {
        if (loadText === "evo S") {
          setLoadText("evo St");
        }
      }, 400);
      setTimeout(() => {
        if (loadText === "evo St") {
          setLoadText("evo Stu");
        }
      }, 400);
      setTimeout(() => {
        if (loadText === "evo Stu") {
          setLoadText("evo Stud");
        }
      }, 400);
      setTimeout(() => {
        if (loadText === "evo Stud") {
          setLoadText("evo Studi");
        }
      }, 400);
      setTimeout(() => {
        if (loadText === "evo Studi") {
          setLoadText("evo Studio");
        }
      }, 400);
    }
  }, [loadText, textLoading]);

  gsap.registerPlugin(useGSAP);

  const divdiv = useRef();

  // const timeline = gsap.timeline();

  useGSAP(
    () => {
      // timeline.fromTo(
      //   ".goly",
      //   { x: 500 },
      //   { x: 0, opacity: 1, delay: 6, duration: 1, ease: "elastic.out(1,0.3)" }
      // );

      // timeline.to(".goly", { rotation: 360 });

      gsap.to(".evo", {
        stagger: 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    },

    { scope: divdiv }
  );

  return (
    <div ref={divdiv}>
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center z-50 bg-black text-white ">
          <div className=" flex flex-row justify-center items-center text-[150px] lg:text-[200px] font-bold gap-[50px] relative ">
            {/* <div className=" goly opacity-0 ">
              <Image src="/gol.svg" width={150} height={150} alt="gol" />
            </div> */}
            <p className=" evo "> {loadText}</p>
          </div>
        </div>
      ) : (
        <main className=" min-h-screen ">
          <Header />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </main>
      )}
    </div>
  );
}
