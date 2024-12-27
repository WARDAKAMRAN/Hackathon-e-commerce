// pages/shop.js
import React from 'react';

const Hero2 = () => {
  return (
    <div className="relative h-screen bg-cover bg-center opacity-45" style={{ backgroundImage: "url('/heropic4.jpg')" }}>
      <div className="flex items-center justify-end h-full w-full px-8 md:px-16 lg:px-24">
        {/* Text Content */}
        <div className="mr-96 text-black">
          <h1 className="text-[36px] md:text-[48px] font-bold">Shop</h1>
          <p className="mt-2 text-[16px] md:text-[20px] font-medium">Home &gt; Shop</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;