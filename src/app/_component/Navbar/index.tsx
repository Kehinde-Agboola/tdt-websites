/** @format */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Nav } from "@/app/constant/index";
import logo from "../../../../public/assets/tdtlogo.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IconType } from "react-icons";

type NavItem = {
  title: string;
  path: string;
  icon?: IconType;
  dropdownItems?: { title: string; path: string; icon?: IconType }[];
};

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
 const [scrolling, setScrolling] = useState(false);

 useEffect(() => {
   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const handleScroll = () => {
   if (window.scrollY > 20) {
     setScrolling(true);
   } else {
     setScrolling(false);
   }
 };
  let hideTimeout: NodeJS.Timeout;

  const handleMouseEnter = (index: number) => {
    clearTimeout(hideTimeout); 
    setOpenDropdownIndex(index); 
  };
  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setOpenDropdownIndex(null); 
    }, 500); 
  };
  function openSideMenu() {
    setSideMenuOpen(true);
  }

  function closeSideMenu() {
    setSideMenuOpen(false);
  }

  const amount = 1000; 

  return (
    <section className="bg-black shadow-md sticky top-0 z-50">
      <nav className="flex justify-between text-[12px] w-full max-w-6xl md:px-0 mx-auto px-4 py-5">
        {/* Left side: Logo */}
        <div ref={animationParent} className="flex gap-10 items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={50} />
          </Link>
        </div>

        {/* Center: Nav Links */}
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="gap-4 hidden items-center transition-all xl:flex">
          {Nav.map((item, index) => (
            <div
              key={index}
              className="group px-2 py-3 relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.path ?? "#"}
                className="text-white"
              >
                <span className="flex cursor-pointer gap-2 group-hover:text-[#FFB400] items-center">
                  {item.title}
                  {item.dropdownItems && (
                    <IoIosArrowDown
                      className={`transition-all ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </span>
              </Link>

              {/* Dropdown */}
              {item.dropdownItems && openDropdownIndex === index && (
                <div
                  className="w-[240px] transition-opacity duration-300 ease-in-out absolute top-16 -right-20 flex-col gap-1 border-t-2 border-[#FFB400]
                    navlink py-3 text-[12px]  shadow-md"
                >
                  {item.dropdownItems.map((child, i) => (
                    <Link
                      key={i}
                      href={child.path ?? "#"}
                      className={`flex justify-between  hover:text-[#FFB400] items-center pr-2 py-2 ${
                        scrolling ? "text-black" : "text-white"}`}
                    >
                      <span className="pl-3">{child.title}</span>
                      <span className="text-navbg">
                        {child.icon && <child.icon />}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Donate Button */}
        <div className="hidden items-center xl:flex">
          <a
            href={`https://paystack.com/pay/ie-pg23h4p?amount=${amount}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#FFB400] h-fit text-black hover:border-black px-4 py-2 transition-all">
              Donate Now
            </button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <FiMenu
          onClick={openSideMenu}
          className="text-4xl text-white cursor-pointer xl:hidden"
        />
      </nav>
    </section>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <section className="flex bg-black/60 h-full justify-end w-full fixed left-0 md:hidden min-h-screen top-0">
      <div className="bg-black h-full w-[100%] px-4 py-4 self-end">
        <div className="flex h-1/6 text-white">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="text-4xl cursor-pointer"
          />
        </div>
        <div className="flex flex-col justify-items-end text-base gap-5 items-center transition-all">
          {Nav.map((item, index) => (
            <SingleNavItem key={index} item={item} />
          ))}
        </div>

        <section className="flex flex-col gap-12 items-center mt-4">
          <button className="bg-[#FFB400] h-fit text-black hover:border-black px-4 py-2 transition-all">
            Donate Now
          </button>
        </section>
      </div>
    </section>
  );
}

function SingleNavItem({ item }: { item: NavItem }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);

  function toggleItem() {
    setItemOpen(!isItemOpen);
  }

  return (
    <div ref={animationParent} className="px-2 py-3 relative">
      <div
        onClick={toggleItem}
        className="flex text-white cursor-pointer gap-2 items-center"
      >
        <span>{item.title}</span>
        {item.dropdownItems && (
          <IoIosArrowDown
            className={`text-xs transition-all ${
              isItemOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Dropdown */}
      {isItemOpen && item.dropdownItems && (
        <div className="flex flex-col justify-center">
          {item.dropdownItems.map((child, i) => (
            <Link
              key={i}
              href={child.path ?? "#"}
              className="flex justify-center text-white hover:text-[#FFB400] items-center pl-6 pr-8 py-1"
            >
              <span className="pl-3 whitespace-nowrap">{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
