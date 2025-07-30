"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useAnimation } from "framer-motion";

const Navbar = ({ navLinks }) => {
  const [navBtnIsHovered, setnavBtnIsHovered] = useState([false, false, false]);
  const navBtnHover = [useAnimation(), useAnimation(), useAnimation()];
  const navBtnOverlayStart = (index) => {
    if (index == 0) {
      setnavBtnIsHovered([true, false, false]);
    } else if (index == 1) {
      setnavBtnIsHovered([false, true, false]);
    } else {
      setnavBtnIsHovered([false, false, true]);
    }

    navBtnHover[index].start({
      height: "100%",
    });
  };
  const navBtnOverlayEnd = (index) => {
    setnavBtnIsHovered([false, false, false]);
    navBtnHover[index].start({
      height: "0%",
    });
  };
  return (
    <>
      <div className="navbar flex items-center justify-between  pt-10 h-[80px]">
        <div className="img  cursor-pointer">
          <img
            src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
            alt=""
          />
        </div>

        <div className="nav-links flex items-center pr-1 gap-2">
          <motion.div
            className="relative rounded-[30px] overflow-hidden  "
            onHoverStart={() => {
              navBtnOverlayStart(0);
            }}
            onHoverEnd={() => {
              navBtnOverlayEnd(0);
            }}
          >
            <h4
              className={
                "text-[16px] border rounded-[30px] px-5 py-2 font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer"
              }
            >
              {navLinks.head1}
            </h4>
            <motion.h4
              initial={{ height: 0 }}
              animate={navBtnHover[0]}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className={`absolute bottom-0 left-0 text-[16px] w-full  bg-black text-white   rounded-[30px]  font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer  ${
                navBtnIsHovered[0] ? " " : ""
              }    `}
            >
              {/* {navLinks.head1} */}
            </motion.h4>

            <h4
              className={`text-[16px]  font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer z-[999] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white ${
                navBtnIsHovered[0] ? "" : "opacity-0"
              }`}
            >
              {navLinks.head1}
            </h4>
          </motion.div>
          <motion.div
            className="relative rounded-[30px] overflow-hidden  "
            onHoverStart={() => {
              navBtnOverlayStart(1);
            }}
            onHoverEnd={() => {
              navBtnOverlayEnd(1);
            }}
          >
            <h4
              className={
                "text-[16px] border rounded-[30px] px-5 py-2 font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer"
              }
            >
              {navLinks.head2}
            </h4>
            <motion.h4
              initial={{ height: 0 }}
              animate={navBtnHover[1]}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className={`absolute bottom-0 left-0 text-[16px] w-full  bg-black text-white   rounded-[30px]  font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer  ${
                navBtnIsHovered[1] ? " " : ""
              }    `}
            >
              {/* {navLinks.head1} */}
            </motion.h4>

            <h4
              className={`text-[16px]  font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer z-[999] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white ${
                navBtnIsHovered[1] ? "" : "opacity-0"
              }`}
            >
              {navLinks.head2}
            </h4>
          </motion.div>
          <motion.div
            className="relative rounded-[30px] overflow-hidden  "
            onHoverStart={() => {
              navBtnOverlayStart(2);
            }}
            onHoverEnd={() => {
              navBtnOverlayEnd(2);
            }}
          >
            <h4
              className={
                "text-[16px] border rounded-[30px] px-5 py-2 font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer"
              }
            >
              {navLinks.head3}
            </h4>
            <motion.h4
              initial={{ height: 0 }}
              animate={navBtnHover[2]}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className={`absolute bottom-0 left-0 text-[16px] w-full  bg-black text-white   rounded-[30px]  font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer  ${
                navBtnIsHovered[2] ? " " : ""
              }    `}
            >
              {/* {navLinks.head1} */}
            </motion.h4>

            <h4
              className={`text-[16px]  font-['Neue_Haas_Grotesk_Display_Pro'] cursor-pointer z-[999] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white ${
                navBtnIsHovered[2] ? "" : "opacity-0"
              }`}
            >
              {navLinks.head3}
            </h4>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
