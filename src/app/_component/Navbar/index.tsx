/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";
import { Nav } from "@/app/constant/index";
import logo from "@/assets/tdtlogo.png";
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
  let hideTimeout: NodeJS.Timeout;

  const handleMouseEnter = (index: number) => {
    clearTimeout(hideTimeout); // Clear any hide delay
    setOpenDropdownIndex(index); // Show the dropdown immediately on hover
  };
  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setOpenDropdownIndex(null); // Hide the dropdown after a delay
    }, 500); // Adjust delay as desired (500ms in this case)
  };
  function openSideMenu() {
    setSideMenuOpen(true);
  }

  function closeSideMenu() {
    setSideMenuOpen(false);
  }

  return (
    <section className="bg-black sticky top-0 z-50 shadow-md">
      <nav className="max-w-6xl mx-auto flex w-full  justify-between px-4 py-5 text-sm">
        {/* Left side: Logo */}
        <div ref={animationParent} className="flex items-center gap-10">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={50} />
          </Link>
        </div>

        {/* Center: Nav Links */}
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden xl:flex items-center gap-4 transition-all">
          {Nav.map((item, index) => (
            <div
              key={index}
              className="relative group px-2 py-3"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.path ?? "#"} className="text-white">
                <span className="flex items-center gap-2 cursor-pointer group-hover:text-[#FFB400]">
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
                    navlink py-3 shadow-md"
                >
                  {item.dropdownItems.map((child, i) => (
                    <Link
                      key={i}
                      href={child.path ?? "#"}
                      className="flex items-center justify-between py-1 text-white hover:text-[#FFB400] pr-2"
                    >
                      <span className=" pl-3">{child.title}</span>
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
        <div className="hidden xl:flex items-center">
          <button className="h-fit bg-[#FFB400] px-4 py-2 text-black transition-all hover:border-black">
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <FiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-4xl xl:hidden text-white"
        />
      </nav>
    </section>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <section className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[100%] bg-black self-end px-4 py-4">
        <div className="flex h-1/6 text-white">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </div>
        <div className="flex flex-col justify-items-end items-center text-base gap-5 transition-all">
          {Nav.map((item, index) => (
            <SingleNavItem key={index} item={item} />
          ))}
        </div>

        <section className="flex flex-col gap-12 mt-4 items-center">
          <button className="h-fit bg-[#FFB400] px-4 py-2 text-black transition-all hover:border-black">
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
    <div ref={animationParent} className="relative px-2 py-3">
      <div
        onClick={toggleItem}
        className="flex items-center gap-2 text-white cursor-pointer"
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
              className="flex items-center justify-center py-1 pl-6 pr-8 text-white hover:text-[#FFB400]"
            >
              <span className="whitespace-nowrap pl-3">{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
