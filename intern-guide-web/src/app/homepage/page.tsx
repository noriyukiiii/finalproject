"use client";

import Navbar from "../components/navbar/navbar";
import React, { useRef } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import ไอคอน

export default function Homepage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;

      const currentIndex = Math.round(container.scrollLeft / containerWidth);
      const newIndex = Math.max(currentIndex - 1, 0); // ลด index เพื่อเลื่อนซ้าย
      container.scrollTo({
        left: newIndex * containerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.offsetWidth;

      const currentIndex = Math.round(container.scrollLeft / containerWidth);
      const newIndex = Math.min(
        currentIndex + 1,
        Math.floor(scrollWidth / containerWidth) - 1
      ); // เพิ่ม index เพื่อเลื่อนขวา
      container.scrollTo({
        left: newIndex * containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        {/* ปุ่มเลื่อน */}
        <div className="relative w-full h-[800px]">
          {/* ปุ่มเลื่อนซ้าย */}
          <div
            onClick={scrollLeft}
            className="absolute left-0 h-full top-1/2 transform -translate-y-1/2 z-10 w-16 bg-gray-400 hover:bg-gray-800 opacity-50 cursor-pointer flex items-center"
          >
            <FaArrowLeft className="text-orange-300 mx-auto" size={20} />
            </div>

          {/* ปุ่มเลื่อนขวา */}
          <div
            onClick={scrollRight}
            className="absolute right-0 h-full top-1/2 transform -translate-y-1/2 z-10 w-16 bg-gray-400 hover:bg-gray-800 opacity-50 cursor-pointer flex items-center"
          >
            <FaArrowRight className="text-orange-300 mx-auto" size={20} />
          </div>

          {/* คอนเทนเนอร์เลื่อน */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-4 w-full h-[800px]"
          >
            <div className="flex-shrink-0 w-full h-full relative">
              <Image
                src="/homepage_recommend.png"
                alt="Homepage Recommendation"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-full h-full relative">
              <Image
                src="/homepage_recommend.png"
                alt="Another Recommendation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
