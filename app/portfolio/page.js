"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Portfolio() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const anim = useRef();

  const tl = gsap.timeline();
  const tl02 = gsap.timeline({ scrollTrigger: ".slowhead02" });

  useGSAP(
    () => {
      tl.set(".hello", { opacity: 1, stagger: 0.3 });

      tl.from(".elemnt", {
        x: 500,
        opacity: 0,
        rotation: 360,
        duration: 1,
      });

      tl.from(".slowhead", { x: -500, opacity: 0, duration: 1.5, stagger: 1 });

      tl.to(".evv", { backgroundColor: "#ff96f9", color: "black" });
      tl.to(".evv02", { backgroundColor: "#ff005d", color: "black" });
      tl.from(".slideup", { bottom: -50, opacity: 0 });

      tl.to(".elemnt", {
        rotation: 360,
        repeat: -1,
        duration: 2,
        delay: 3,
        repeatDelay: 3,
      });

      // tl02.from(".spinz", {
      //   x: 500,
      //   opacity: 0,
      //   rotation: 360,
      //   duration: 1,
      // });

      tl02.from(".slowhead02", {
        x: -500,
        opacity: 0,
        duration: 1.5,
        stagger: 1,
      });

      tl02.to(".bgth", { backgroundColor: "#40fff2", color: "black" });

      // tl02.to(".spinz", {
      //   rotation: 360,
      //   repeat: -1,
      //   duration: 2,
      //   delay: 3,
      //   repeatDelay: 3,
      // });
    },
    { scope: anim }
  );
  return (
    <div ref={anim} className=" flex flex-col ">
      <div className=" flex flex-col lg:flex-row justify-around items-center h-screen overflow-hidden ">
        <div>
          <h1 className=" font-bold text-[75px] lg:text-[100px] text-center lg:text-left ">
            <span className=" hello opacity-0 ">H</span>
            <span className=" hello opacity-0 ">e</span>
            <span className=" hello opacity-0 ">l</span>
            <span className=" hello opacity-0 ">l</span>
            <span className=" hello opacity-0 ">o</span>
            <span className=" hello opacity-0 ">,</span>
          </h1>
          <h2 className=" slowhead text-[50px] font-bold text-center lg:text-left ">
            Welcome to <span className=" evv px-[10px] rounded-xl ">evo</span>{" "}
            Studio's{" "}
            <span className=" evv02 px-[10px] rounded-xl ">portfolio</span>
          </h2>
          <p className=" slowhead text-[25px] lg:text-[30px] text-center lg:text-left ">
            Here we explained briefly about our thoughts and creativity !
          </p>
        </div>
        <div className=" elemnt ">
          <span>
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
                  <stop offset=".152" stop-color="#ff96f9"></stop>
                  <stop offset=".855" stop-color="#ff005d"></stop>
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
        </div>
      </div>
      <hr className=" border-gray-400 w-[250px] mb-[25px] self-center lg:w-[500px] "></hr>

      {/* 01 */}

      <div className=" lg:p-[50px] p-[10px] ">
        <div>
          <h1 className=" lg:text-[75px] text-[45px] font-bold ">
            01. Clothing brand store platform{" "}
            <span className=" font-thin text-[20px] text-nowrap lg:text-[25px] text-red-600 ">
              (Developing)
            </span>
          </h1>
          <p className=" text-[18px] lg:w-[75%] text-justify flex flex-col ">
            <span>
              The platform includes a website and application (Android and iOS)
              in the field of B2C e-commerce. The interface design and user
              experience is inspired by the Zara & Pullandbear online store. In
              the next phase, a dashboard panel with different accesses is
              designed to manage different parts of the website. (such as
              storage system, sending and tracking products, purchases,
              customers, etc.).
            </span>
            <span>
              The front-end and state management part is implemented with React
              and Next libraries. The back-end part, APIs and data management
              are implemented on the Node JS platform and with the Express
              library. Also, some sections are written in Django and Python
              language. The application is built on React Native platform.
            </span>
          </p>
        </div>
        <div className=" mt-[75px] flex flex-col justify-center lg:px-[100px] ">
          <Image
            className=" w-[250px] lg:w-[300px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/cloth-brand-images/01.png"
            width={400}
            height={900}
          />
          <Image
            className=" w-[250px] lg:w-[300px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px] self-center "
            src="/cloth-brand-images/02.png"
            width={400}
            height={900}
          />
          <Image
            className=" w-[250px] lg:w-[300px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px] self-end  "
            src="/cloth-brand-images/03.png"
            width={400}
            height={900}
          />
        </div>
        <div className=" mt-[75px] flex flex-col justify-center gap-[25px] ">
          <Image
            className=" w-[750px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/cloth-brand-images/04.png"
            width={2000}
            height={1000}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-center border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/cloth-brand-images/05.png"
            width={2000}
            height={1000}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-end border-[1px] border-gray-2000 rounded-3xl sticky top-[25px] "
            src="/cloth-brand-images/06.png"
            width={2000}
            height={1000}
          />
        </div>
      </div>
      <hr className=" border-gray-400 w-[250px] mb-[25px] self-center lg:w-[500px] "></hr>

      {/* 02 */}

      <div className=" lg:p-[50px] p-[10px] ">
        <div>
          <h1 className=" text-[45px] lg:text-[75px] font-bold ">
            02. Alarm and focus application{" "}
            <span className=" font-thin text-[20px] text-nowrap lg:text-[25px] text-orange-600 ">
              (Developed / Unpublished)
            </span>
          </h1>
          <p className=" text-[18px] lg:w-[75%] text-justify ">
            Focus and routine application, with in-app payment It is implemented
            in two versions, free and premium. Different accesses are defined
            for different user roles in the app, according to the user role, the
            access to the app features is different. The application is built on
            React Native platform. (such as the powerful applications of
            Spotify, Pinterest, etc.)
          </p>
        </div>

        <div className=" mt-[75px] flex flex-col justify-center gap-[25px] ">
          <Image
            className=" w-[250px] lg:w-[350px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/alarm/time01.png"
            width={2000}
            height={4000}
          />
          <Image
            className=" w-[250px] lg:w-[350px] lg:mx-[50px] self-center border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/alarm/time02.png"
            width={2000}
            height={4000}
          />
          <Image
            className=" w-[250px] lg:w-[350px] lg:mx-[50px] self-end border-[1px] border-gray-2000 rounded-3xl sticky top-[25px] "
            src="/alarm/time03.png"
            width={2000}
            height={4000}
          />
        </div>
        <div className=" mt-[75px] flex flex-col justify-center gap-[25px] ">
          <Image
            className=" w-[250px] lg:w-[350px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/alarm/time04.png"
            width={2000}
            height={4000}
          />
          <Image
            className=" w-[250px] lg:w-[350px] lg:mx-[50px] self-center border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/alarm/time05.png"
            width={2000}
            height={4000}
          />
          <Image
            className=" w-[250px] lg:w-[350px] lg:mx-[50px] self-end border-[1px] border-gray-2000 rounded-3xl sticky top-[25px] "
            src="/alarm/time06.png"
            width={2000}
            height={4000}
          />
        </div>
      </div>

      <hr className=" border-gray-400 w-[250px] mb-[25px] self-center lg:w-[500px] "></hr>

      {/* 03 */}

      <div className=" lg:p-[50px] p-[10px]  ">
        <div>
          <h1 className=" text-[45px] lg:text-[75px] font-bold ">
            03. Dashboard panel{" "}
            <span className=" font-thin text-[20px] text-nowrap lg:text-[25px] text-green-600 ">
              (Published)
            </span>
          </h1>
          <p className=" text-[18px] lg:w-[75%] text-justify ">
            Focus and routine application, with in-app payment It is implemented
            in two versions, free and premium. Different accesses are defined
            for different user roles in the app, according to the user role, the
            access to the app features is different. The application is built on
            React Native platform. (such as the powerful applications of
            Spotify, Pinterest, etc.)
          </p>
        </div>

        <div className=" mt-[75px] flex flex-col justify-center gap-[25px] ">
          <Image
            className=" w-[750px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/dashboard-panel/dashboard.png"
            width={1080}
            height={1080}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-end border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/dashboard-panel/panel.png"
            width={1080}
            height={1080}
          />
        </div>
      </div>

      <hr className=" border-gray-400 w-[250px] mb-[25px] self-center lg:w-[500px] "></hr>

      {/* 04 */}

      <div className=" lg:p-[50px] p-[10px] ">
        <div>
          <h1 className=" text-[45px] lg:text-[75px] font-bold ">
            04. evo design and creativity studio{" "}
            <span className=" font-thin text-[20px] text-nowrap lg:text-[25px] text-green-600 ">
              (Published)
            </span>
          </h1>
          <p className=" text-[18px] lg:w-[75%] text-justify ">
            It has been tried to make a special design with moving elements on
            Evo's website in order to inspire a new and fresh view to the
            audience. Our goal is a short and clear explanation of the services
            we provide. The website has been completed with the inspiration of
            today's trend designs and various colors and animations have been
            used in it.
          </p>
        </div>

        <div className=" mt-[75px] flex flex-col justify-center gap-[25px] ">
          <Image
            className=" w-[750px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/evostudio/01.png"
            width={2000}
            height={1080}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-center border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/evostudio/03.png"
            width={2000}
            height={1080}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-end border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/evostudio/05.png"
            width={2000}
            height={1080}
          />
        </div>
      </div>

      <hr className=" border-gray-400 w-[250px] mb-[25px] self-center lg:w-[500px] "></hr>

      {/* 05 */}

      <div className=" lg:p-[50px] p-[10px] ">
        <div>
          <h1 className=" text-[45px] lg:text-[75px] font-bold ">
            05. Weather forecast application{" "}
            <span className=" font-thin text-[20px] text-nowrap lg:text-[25px] text-orange-600 ">
              (Developed / Unpublished)
            </span>
          </h1>
          <p className=" text-[18px] lg:w-[75%] text-justify ">
            Weather forecast application implemented with React Native library
            in which Google APIs are used.
          </p>
        </div>

        <div className=" mt-[75px] flex flex-col justify-center gap-[25px] lg:px-[250px] ">
          <Image
            className=" w-[200px] lg:w-[300px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/Weather-forecast/01.png"
            width={400}
            height={800}
          />
          <Image
            className=" w-[200px] lg:w-[300px] lg:mx-[50px] self-end border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/Weather-forecast/02.png"
            width={400}
            height={800}
          />
        </div>
      </div>

      <hr className=" border-gray-400 w-[250px] mb-[25px] self-center lg:w-[500px] "></hr>

      {/* 06 */}

      <div className=" lg:p-[50px] p-[10px] ">
        <div>
          <h1 className=" text-[45px] lg:text-[75px] font-bold ">
            06. Websites of nakhl zeytoon azaran and Pars Pak Kimiya factories{" "}
            <span className=" font-thin text-[20px] text-nowrap lg:text-[25px] text-green-600 ">
              (Published)
            </span>
          </h1>
          <p className=" text-[18px] lg:w-[75%] text-justify ">
            We designed and implemented a functional and fast website for nakhl
            zeytoon azaran and pars Pak kimiya companies and factories to
            introduce their products. It has been designed for the introduction,
            blog, events, products with table, contact and automation sections
            for the website. The project has been completed on the WordPress
            platform with the latest methods and plugins.
          </p>
        </div>

        <div className=" mt-[75px] flex flex-col justify-center gap-[25px] ">
          <Image
            className=" w-[750px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/pars-nakhl/01.png"
            width={2000}
            height={1000}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-center border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/pars-nakhl/02.png"
            width={2000}
            height={1000}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-end border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/pars-nakhl/03.png"
            width={2000}
            height={1000}
          />
        </div>
        <div className=" mt-[75px] flex flex-col justify-center gap-[25px] ">
          <Image
            className=" w-[750px] lg:mx-[50px] border-[1px] border-gray-400 rounded-3xl sticky top-[25px]  "
            src="/pars-nakhl/04.png"
            width={2000}
            height={1000}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-center border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/pars-nakhl/05.png"
            width={2000}
            height={1000}
          />
          <Image
            className=" w-[750px] lg:mx-[50px] self-end border-[1px] border-gray-400 rounded-3xl sticky top-[25px] "
            src="/pars-nakhl/06.png"
            width={2000}
            height={1000}
          />
        </div>
      </div>

      {/* finall */}

      <div className=" flex flex-col-reverse lg:flex-row justify-around items-center h-[75vh] p-[10px] lg:p-[0px] ">
        <div>
          <h1 className=" slowhead02 font-bold text-[65px] lg:text-[100px] ">
            <span className=" bgth px-[10px] rounded-xl ">Thanks</span> for
            watching.
          </h1>
          <h2 className=" slowhead02 text-[25px] lg:text-[35px]  ">
            We know how excited you were and how much you enjoyed it :)
          </h2>
        </div>
        {/* <div className=" spinz ">
          <span>
            <svg
              className=" w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] "
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
        </div> */}
      </div>
      <div className=" slideup flex gap-[10px] justify-center p-[10px]  bg-zinc-700 bg-opacity-90 w-fit self-center rounded-xl sticky bottom-[10px] ">
        <div className="lg:flex justify-center items-center hidden ">
          <Image
            className=" w-[25px] lg:w-[55px] "
            src="/evo-favicon.png"
            width={100}
            height={100}
          />
        </div>
        <div className=" flex justify-center items-center bg-zinc-800 p-[10px] gap-[10px] rounded-xl ">
          <p className=" text-[15px] lg:text-[17px] font-bold ">evoStudio ©</p>
          <Link
            target="_blank"
            href="https://t.me/evostudiio"
            scroll={false}
            className=" cursor-fancy text-[14px] lg:text-[16px] capitalize bg-zinc-700 hover:bg-zinc-900 transition border-[1px] border-zinc-500 py-[10px] px-[15px] rounded-xl "
          >
            telegram
          </Link>
          <Link
            href="https://wa.me/message/BTYS2T3GCEFFK1"
            target="_blank"
            scroll={false}
            className=" cursor-fancy text-[14px] lg:text-[16px] capitalize bg-zinc-700 hover:bg-zinc-900 transition border-[1px] border-zinc-500 py-[10px] px-[15px] rounded-xl "
          >
            whatsapp
          </Link>
        </div>
        <div className=" bg-orange-600 flex rounded-xl px-[13px] lg:px-[15px] justify-center items-center hover:bg-orange-700 transition ">
          <Link
            href="/"
            scroll={false}
            className=" cursor-fancy w-full h-full content-center text-[14px] lg:text-[16px] font-bold text-black capitalize "
          >
            visit us
          </Link>
        </div>
      </div>
    </div>
  );
}
