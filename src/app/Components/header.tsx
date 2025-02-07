
import React from "react";
import Image from "next/image";
 import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-12">
        {/* Logo (Image) */}
        <div className="flex items-center  font-bold space-x-2">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Furniro Logo"
            width={70}
            height={44}
            className="object-contain"
          /><h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            Furniro</h1>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-10 text-gray-600 text-lg font-medium">
          <Link
            href="/"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            Shop
          </Link>
      
           <Link href="/blog"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-yellow-500 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-2 lg:space-x-8 text-gray-600">
          {/* Search Icon */}
          <button
            className="hover:text-yellow-500 transition-all duration-300"
            aria-label="Search"
          >
            <FiSearch size={22} />
          </button>

          {/* Wishlist Icon */}
          <button
            className="hover:text-yellow-500 transition-all duration-300"
            aria-label="Wishlist"
          >
            <FiHeart size={22} />
          </button>

          {/* Cart Icon */}
          <button
            className="hover:text-yellow-500 transition-all duration-300 relative"
            aria-label="Cart"
          >
            <FiShoppingCart size={22} />
            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="hover:text-yellow-500 transition-all duration-300"
            aria-label="Mobile Menu"
          >
            <FiSearch size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="flex flex-col items-center space-y-4 text-gray-600 md:hidden mt-4">
        <Link
          href={"/Home"}
          className="hover:text-yellow-500 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href={"/shop"}
          className="hover:text-yellow-500 transition-all duration-300"
        >
          Shop
        </Link>
        <Link
          href={"/blog"}
          className="hover:text-yellow-500 transition-all duration-300"
        >
          Blog
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-yellow-500 transition-all duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;