
import React from 'react';
import Image from 'next/image';
import ContactForm from '../Components/contactform';
const Contact = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/heropic4.jpg')" }}>
      <div className="flex items-center justify-end h-full w-full px-8 md:px-16 lg:px-24 ">
        {/* Text Content */}

        <div className="mr-96 text-black">
            {/* Logo Positioned Over Text */}
          <div className="absolute -top-20 -left-20">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={100} // Set appropriate width
              height={100} // Set appropriate height
              className="rounded-full" // Optional styling
            />
          </div>
          <h1 className="text-[36px] md:text-[48px] font-bold">Contact</h1>
          <p className="mt-2 text-[16px] md:text-[20px] font-medium">Home &gt; Contact</p>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
};

export default Contact
