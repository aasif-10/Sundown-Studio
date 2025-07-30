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

const Page5 = () => {
  return (
    <>
      <div className="page5 w-full min-h-screen bg-[#eeeae2] px-10  pb-20">
        <div className="flex items-center gap-3 border-1 w-fit  rounded-[20px] py-1.5 px-4 border-[#958d8d]">
          <h4 className="font-['Neue_Haas_Grotesk_Display_Pro'] ">
            All Projects
          </h4>
          <span>
            <FaArrowRightLong />
          </span>
        </div>

        <div className="p5-container w-full h-[90vh] bg-[#0b0500]  mt-30 rounded-[20px] flex items-center overflow-hidden">
          <div className="p5-left w-[45%] h-full   flex items-center justify-center gap-10 flex-col">
            <div className="p5-title leading-[80px] ">
              <div className="border-l-3 border-[#4f4843] pl-3 ">
                <h2 className="text-[5vw] font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[#4f4843]">
                  Design
                </h2>
              </div>
              <div className="border-l-3 border-[#4f4843] pl-3 ">
                <h2 className="text-[5vw] font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[#4f4843]">
                  Project
                </h2>
              </div>
              <div className="border-l-3 border-[#4f4843] pl-3 ">
                <h2 className="text-[5vw] font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[#4f4843]">
                  Execution
                </h2>
              </div>
            </div>
            <div className="p5-para w-90  ">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro'] text-[#d0cac4]">
                Our team works with our clients to refine an idea and concept
                into an executable design. We create a final design that
                encompasses the brand narrative to bring stories to life and
                provide end-to-end design solutions from concept, design, and
                architectural drawings to 3D renderings.
              </p>
            </div>
          </div>
          <div className="p5-right w-[55%] h-full bg-green-400 rounded-[20px] overflow-hidden">
            <img
              className="w-full h-full object-fit"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0ab8b584110829.5d532697519fb.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
