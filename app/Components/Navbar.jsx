"use client";
import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        {/* Left: Logo */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="flex-shrink-0"
        >
          <Image
            src="/HomeImages/LOGO.png"
            alt="logo"
            width={120}
            height={50}
            priority
          />
        </motion.div>

{/* Dwsktop */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-md hover:text-gray-500 transition duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            href="/Pages/Menu"
            className="text-md hover:text-gray-500 transition duration-300 font-medium"
          >
            Menu
          </Link>
        </nav>

        {/* Right: Login Image (Desktop only) */}
        <div className="flex items-center gap-5">
         <div className="hidden md:block">
          <Link href="/Pages/Login">
           <Image
            src="/HomeImages/Login.png"
            alt="login"
            width={150}
            height={60}
            className="cursor-pointer"
            />
          </Link>
         </div>
         <div className="hidden md:block">
          <Link href="/">
            <ShoppingCart size={26} />
          </Link>
         </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <HiXMark size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black h-screen text-white w-full flex flex-col justify-center items-center py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/Pages/Menu"
            onClick={() => setIsOpen(false)}
            className="text-lg hover:text-gray-400"
          >
            Menu
          </Link>

         <Link href="/Pages/Login">
          <Image
            src="/HomeImages/Login.png"
            alt="login"
            width={150}
            height={60}
            className="mt-4"
            />
          </Link>

          <Link href="/">
            <ShoppingCart size={26} />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
