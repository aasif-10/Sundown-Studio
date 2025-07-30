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

const Page2 = () => {
  return (
    <>
      <div className="page2 w-full pt-30 pb-30 bg-[#eeeae2]">
        <div className="marquee w-full  mt-10  overflow-x-hidden">
          <motion.div
            className="flex items-center gap-10"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            <div className="marq1 flex items-center gap-5">
              <div className="flex items-center gap-10 mr-15 ">
                <h1 className="uppercase font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[110px]">
                  experiences
                </h1>
                <img className="w-10" src="icon1.png" alt="" />
              </div>
              <div className="flex items-center gap-10 mr-15">
                <h1 className="uppercase font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[110px]">
                  contents
                </h1>
                <img className="w-10" src="icon1.png" alt="" />
              </div>
              <div className="flex items-center gap-10 mr-15">
                <h1 className="uppercase font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[110px]">
                  environments
                </h1>
                <img className="w-10" src="icon1.png" alt="" />
              </div>
            </div>
            <div className="marq2 flex items-center gap-5">
              <div className="flex items-center gap-10 mr-15 ">
                <h1 className="uppercase font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[110px]">
                  experiences
                </h1>
                <img className="w-10" src="icon1.png" alt="" />
              </div>
              <div className="flex items-center gap-10 mr-15">
                <h1 className="uppercase font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[110px]">
                  contents
                </h1>
                <img className="w-10" src="icon1.png" alt="" />
              </div>
              <div className="flex items-center gap-10 mr-15">
                <h1 className="uppercase font-bold font-['Neue_Haas_Grotesk_Display_Pro'] text-[110px]">
                  environments
                </h1>
                <img className="w-10" src="icon1.png" alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page2;
