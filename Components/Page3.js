"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactLenis, useLenis } from "lenis/react";
import { motion } from "framer-motion";

const Page3 = () => {
  return (
    <>
      <div className="page3 w-full h-screen bg-[#eeeae2] px-10">
        <div className="container ml-10  w-full h-[40vw] flex">
          <div className="left w-[60%] h-full  pr-40 pt-30">
            <p className="font-['Neue_Haas_Grotesk_Display_Pro'] text-[3.5vw] font-bold leading-[55px]">
              We are a group of design-driven, goal-focused creators, producers,
              and designers who believe that the details amke all the
              difference.
            </p>
          </div>
          <div className="right w-[40%] h-full  flex flex-col items-end pr-30 pt-50">
            <div className="wrapper w-[280px] h-full flex flex-col items-end gap-10">
              <img
                className="w-full rounded-[10px]"
                src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
                alt=""
              />
              <p className="text-justify font-['Neue_Haas_Grotesk_Display_Pro']">
                We love to create, we love to solve, we love to collaborate, and
                we to turn amazing ideas into reality. We're here to partner
                with you through every step of the process and know that
                relationships are the most important things we build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
