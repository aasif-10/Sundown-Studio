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

const Page6 = () => {
  return (
    <>
      <div className="page6 w-full min-h-[70vh] bg-[#eeeae2] pb-55 pt-20">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={0}
          className="mySwiper  cursor-default "
        >
          <SwiperSlide className="w-[50%] border-r-2 border-[#ceb8b8] px-20 pl-8 flex flex-col items-start ">
            <div className="flex flex-col gap-5">
              <div className="logo font-['Neue_Haas_Grotesk_Display_Pro'] ">
                <img
                  className="w-40 "
                  src="https://1000logos.net/wp-content/uploads/2023/03/AfterPay-logo.png"
                  alt=""
                />
              </div>
              <p className="text-[16px] text-[#0c0c0b]">
                Design and Production partner for Hunter Holiday 2022 Pop-in at
                Nordstrom 57th St, New York, including activations in Women's,
                Men's and Kid's zones. Thirty-five (35) additional smaller
                take-downs in Nordstrom stores across the US. Concept design for
                Holiday boot customization events in stores across winter 2022.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-r-2 border-[#ceb8b8] px-20 pl-8 flex flex-col items-start w-[200px]">
            <div className="flex flex-col gap-5">
              <div className="logo font-['Neue_Haas_Grotesk_Display_Pro'] ">
                <img
                  className="w-40 "
                  src="https://1000logos.net/wp-content/uploads/2023/03/AfterPay-logo.png"
                  alt=""
                />
              </div>
              <p className="text-[16px] text-[#0c0c0b]">
                Design and Production partner for Hunter Holiday 2022 Pop-in at
                Nordstrom 57th St, New York, including activations in Women's,
                Men's and Kid's zones. Thirty-five (35) additional smaller
                take-downs in Nordstrom stores across the US. Concept design for
                Holiday boot customization events in stores across winter 2022.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-r-2 border-[#ceb8b8] px-20 pl-8 flex flex-col items-start w-[200px]">
            <div className="flex flex-col gap-5">
              <div className="logo font-['Neue_Haas_Grotesk_Display_Pro'] ">
                <img
                  className="w-40 "
                  src="https://1000logos.net/wp-content/uploads/2023/03/AfterPay-logo.png"
                  alt=""
                />
              </div>
              <p className="text-[16px] text-[#0c0c0b]">
                Design and Production partner for Hunter Holiday 2022 Pop-in at
                Nordstrom 57th St, New York, including activations in Women's,
                Men's and Kid's zones. Thirty-five (35) additional smaller
                take-downs in Nordstrom stores across the US. Concept design for
                Holiday boot customization events in stores across winter 2022.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-r-2 border-[#ceb8b8] px-20 pl-8 flex flex-col items-start w-[200px]">
            <div className="flex flex-col gap-5">
              <div className="logo font-['Neue_Haas_Grotesk_Display_Pro'] ">
                <img
                  className="w-40 "
                  src="https://1000logos.net/wp-content/uploads/2023/03/AfterPay-logo.png"
                  alt=""
                />
              </div>
              <p className="text-[16px] text-[#0c0c0b]">
                Design and Production partner for Hunter Holiday 2022 Pop-in at
                Nordstrom 57th St, New York, including activations in Women's,
                Men's and Kid's zones. Thirty-five (35) additional smaller
                take-downs in Nordstrom stores across the US. Concept design for
                Holiday boot customization events in stores across winter 2022.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-r-2 border-[#ceb8b8] px-20 pl-8 flex flex-col items-start w-[200px]">
            <div className="flex flex-col gap-5">
              <div className="logo font-['Neue_Haas_Grotesk_Display_Pro'] ">
                <img
                  className="w-40 "
                  src="https://1000logos.net/wp-content/uploads/2023/03/AfterPay-logo.png"
                  alt=""
                />
              </div>
              <p className="text-[16px] text-[#0c0c0b]">
                Design and Production partner for Hunter Holiday 2022 Pop-in at
                Nordstrom 57th St, New York, including activations in Women's,
                Men's and Kid's zones. Thirty-five (35) additional smaller
                take-downs in Nordstrom stores across the US. Concept design for
                Holiday boot customization events in stores across winter 2022.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-r-2 border-[#ceb8b8] px-20 pl-8 flex flex-col items-start w-[200px]">
            <div className="flex flex-col gap-5">
              <div className="logo font-['Neue_Haas_Grotesk_Display_Pro'] ">
                <img
                  className="w-40 "
                  src="https://1000logos.net/wp-content/uploads/2023/03/AfterPay-logo.png"
                  alt=""
                />
              </div>
              <p className="text-[16px] text-[#0c0c0b]">
                Design and Production partner for Hunter Holiday 2022 Pop-in at
                Nordstrom 57th St, New York, including activations in Women's,
                Men's and Kid's zones. Thirty-five (35) additional smaller
                take-downs in Nordstrom stores across the US. Concept design for
                Holiday boot customization events in stores across winter 2022.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-r-2 border-[#ceb8b8] px-20 pl-8 flex flex-col items-start w-[200px]">
            <div className="flex flex-col gap-5">
              <div className="logo font-['Neue_Haas_Grotesk_Display_Pro'] ">
                <img
                  className="w-40 "
                  src="https://1000logos.net/wp-content/uploads/2023/03/AfterPay-logo.png"
                  alt=""
                />
              </div>
              <p className="text-[16px] text-[#0c0c0b]">
                Design and Production partner for Hunter Holiday 2022 Pop-in at
                Nordstrom 57th St, New York, including activations in Women's,
                Men's and Kid's zones. Thirty-five (35) additional smaller
                take-downs in Nordstrom stores across the US. Concept design for
                Holiday boot customization events in stores across winter 2022.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Page6;
