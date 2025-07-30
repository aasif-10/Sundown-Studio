"use client";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactLenis, useLenis } from "lenis/react";
import { motion } from "framer-motion";
import Page1 from "@/Components/Page1";
import Page2 from "@/Components/Page2";
import Page3 from "@/Components/Page3";
import Page4 from "@/Components/Page4";
import Page5 from "@/Components/Page5";
import Page6 from "@/Components/Page6";
import Page7 from "@/Components/Page7";
import Footer from "@/Components/Footer";
const page = () => {
  const lenis = useLenis((lenis) => {});

  const projects = [
    { pl: "Air Force 1 2021", pr: "Environment" },
    { pl: "Play New Kidvision", pr: "Environment" },
    { pl: "SOHO NYC", pr: "ARC TERYX" },
    { pl: "SOHO 2023", pr: "CONVERSE" },
    { pl: "NYFW Popup", pr: "AFTERPAY" },
    { pl: "Makers Studio HOI", pr: "Environment" },
    { pl: "50th Anniversay", pr: "Environment" },
  ];

  const [circlePos, setcirclePos] = useState({ x: 0, y: 0 });

  const mouseHandler = (e) => {
    setcirclePos({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <ReactLenis root />

      <div
        className="main w-full z-[10] relative 
      "
        onMouseMove={mouseHandler}
      >
        <div
          style={{ left: circlePos.x - 10, top: circlePos.y - 10 }}
          className="circle w-[20px] h-[20px] rounded-full bg-[#f1902e] fixed left-0 top-0 "
        ></div>
        <Page1></Page1>

        <Page2></Page2>

        <Page3></Page3>

        <Page4 projectTitle={projects}></Page4>

        <Page5></Page5>

        <Page6></Page6>
        <Page7></Page7>
      </div>

      <Footer></Footer>
    </>
  );
};

export default page;
