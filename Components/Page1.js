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
import Navbar from "./Navbar";

const page1 = () => {
  const navLinks = { head1: "Work", head2: "Studio", head3: "Contact" };

  return (
    <>
      <div className="page1 px-10 w-full min-h-screen bg-[#eeeae2]">
        <Navbar navLinks={navLinks}></Navbar>

        <div className="hero flex justify-between pb-10  items-baseline-last mt-30 border-b-1 border-[#aea7a7]">
          <div className="hero-left w-[22%] leading-[22px]">
            <p className="font-bold text-[22px] font-['Neue_Haas_Grotesk_Display_Pro'] ">
              Sundown is a multi-disciplinary studio focused on creating unique,
              end-to-end experiences and environments.
            </p>
          </div>
          <div className="hero-right pr-5 flex flex-col items-end leading-[120px]">
            <div>
              <h1 className="uppercase text-[9.5vw]  font-[600] font-['Neue_Haas_Grotesk_Display_Pro']">
                spaces
              </h1>
            </div>
            <div>
              <h1 className="uppercase text-[9.5vw]  font-bold font-['Neue_Haas_Grotesk_Display_Pro']">
                that
              </h1>
            </div>
            <div>
              <h1 className="uppercase text-[9.5vw]  font-bold font-['Neue_Haas_Grotesk_Display_Pro']">
                inspire
              </h1>
            </div>
          </div>
        </div>

        <div className=" h-[90vh] video overflow-hidden rounded-[20px] mt-15 ">
          <video autoPlay muted loop src="video.mp4"></video>
        </div>
      </div>
    </>
  );
};

export default page1;
