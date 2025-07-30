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

const Page4 = ({ projectTitle }) => {
  return (
    <>
      <div className="page4 w-full min-h-screen bg-[#eeeae2] pb-20">
        <div className="p4-top ml-10 flex gap-2 items-center">
          <div className="circle w-[10px] h-[10px] rounded-full bg-[#fd3009] "></div>
          <h4 className="uppercase font-['Neue_Haas_Grotesk_Display_Pro']">
            featured projects
          </h4>
        </div>

        <div className="p4-wrapper w-full min-h-[90vh] mt-20 ">
          {projectTitle.map((item, index) => {
            return (
              <motion.div
                whileHover="hover"
                key={index}
                className=" relative overflow-hidden"
              >
                <div className="tile-1 w-full h-[100px]  border-b-1 border-[#8e8585] flex items-center justify-between px-10 py-15">
                  <h1 className="z-[999] font-['Neue_Haas_Grotesk_Display_Pro'] text-[50px] font-bold">
                    {item.pl}
                  </h1>
                  <div className="z-[999] flex flex-col items-end">
                    <h4 className="font-['Neue_Haas_Grotesk_Display_Pro']">
                      NIKE
                    </h4>
                    <h4 className="font-['Neue_Haas_Grotesk_Display_Pro'] text-[#c0bdb4]">
                      {item.pr}
                    </h4>
                  </div>
                </div>
                <motion.div
                  variants={{ initial: { top: "-100%" }, hover: { top: "0%" } }}
                  key={index}
                  className="absolute bg-[#f1902e] left-0 -top-[100%]  tile-1 w-full h-[100px]  border-b-1 border-[#8e8585] flex items-center justify-between px-10 py-15"
                ></motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page4;
