
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Rooms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images for the slider
  const slides = [
    { id: 1, src: '/wall.png', title: '01 --- Bed Room', subtitle: 'Inner Peace' },
    { id: 2, src: '/dining1.png', title: '02 --- Living Room', subtitle: 'Comfort ' },
    { id: 3, src: '/sidetable.png', title: '03 --- Kitchen', subtitle: 'Culinary Bliss' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-[1440px] h-[670px] bg-[#fcf8f3] flex items-center justify-between">
      {/* Left Section */}
      <div className="ml-[100px]">
        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-[40px] font-bold leading-[48px] text-left text-black font-poppins">
            50+ Beautiful Rooms
          </h1>
          <h2 className="text-[40px] font-bold leading-[48px] text-left text-black font-poppins">
            Inspiration
          </h2>
        </div>
        {/* Paragraph */}
        <p className="mt-[30px] text-[16px] font-medium leading-[24px] text-left text-black font-poppins w-[368px]">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        {/* Explore More Button */}
        <button className="mt-6 px-6 py-2 bg-yellow-500 text-white text-[16px] font-medium rounded shadow-lg hover:bg-yellow-600">
          Explore More
        </button>
      </div>

      {/* Right Section */}
      <div className="relative">
        {/* Slider */}
        <div className="relative mt-8 w-[650px] h-[650px] overflow-hidden">
          <Image
            src={slides[currentSlide].src}
            alt="Room Image"
            width={450}
            height={550}
            className="w-full h-full object-cover"
          />
          {/* Text Box */}
          <div className="absolute ml-20 w-[200px] h-[120px] bottom-[20px] left-[20px] bg-white px-4 py-2 shadow-lg">
            <p className="text-[20px] text-black font-medium">{slides[currentSlide].title}</p>
            <p className="text-[28px] font-semibold leading-[33.6px] text-black">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="absolute mr-60 bottom-[20px] right-[20px] w-[80px] h-[80px] bg-yellow-500 flex items-center justify-center shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* Previous Arrow */}
        <button
          onClick={prevSlide}
          className="absolute ml-0 bottom-[20px] left-[20px] w-[80px] h-[80px] bg-yellow-500 flex items-center justify-center shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Rooms;