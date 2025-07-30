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

const Footer = () => {
  return (
    <>
      <div className="footer w-full h-screen bg-[#080400] fixed bottom-0 z-[9] flex flex-col justify-between pt-40 px-8">
        <div className="footer-top flex items-start justify-between pl-20">
          <div className="f-left leading-[32px]">
            <h2 className="text-[#ffe3d6] font-['Neue_Haas_Grotesk_Display_Pro'] font-bold text-[22px]">
              Work
            </h2>
            <h2 className="text-[#ffe3d6] font-['Neue_Haas_Grotesk_Display_Pro'] font-bold text-[22px]">
              Studio
            </h2>
            <h2 className="text-[#ffe3d6] font-['Neue_Haas_Grotesk_Display_Pro'] font-bold text-[22px]">
              Contact
            </h2>
          </div>
          <div className="f-right mr-10  flex flex-col gap-8 border-b-1 border-[#6d6666] pb-3 ">
            <h4 className="w-[250px] mr-10 text-[16px] text-[#ffe3d6] font-['Neue_Haas_Grotesk_Display_Pro']">
              Get industry insights and creative inspiration straight to your
              inbox
            </h4>
            <div className=" flex items-center justify-between">
              <h4 className="text-[#6d6666] font-['Neue_Haas_Grotesk_Display_Pro']">
                Email address
              </h4>
              <span className="text-[#6d6666]">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-bottom leading-none">
          <h1 className="leading-none text-[#c4c1ba] text-[22.5vw] font-['Neue_Haas_Grotesk_Display_Pro'] font-bold">
            Sundown
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
