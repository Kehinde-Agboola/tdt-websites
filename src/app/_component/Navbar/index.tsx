/** @format */
"use client";

import Image from "next/image";
import { useState} from "react";
import { Nav } from "@/app/constant/index";
import logo from "../../../../public/assets/tdtlogo.png";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
// import { IconType } from "react-icons";
import clsx from "clsx";

// type NavItem = {
//   title: string;
//   path: string;
//   icon?: IconType;
//   dropdownItems?: {
//     title: string;
//     path: string;
//     icon?: IconType;
//     subItems?: { title: string; path: string }[];
//   }[];
// };

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  // Mobile state
  const [mobileOpenMenus, setMobileOpenMenus] = useState<{
    [k: number]: boolean;
  }>({});
  const [mobileOpenSubMenus, setMobileOpenSubMenus] = useState<{
    [k: string]: boolean;
  }>({});

  // Desktop handlers
  let hideTimeout: NodeJS.Timeout;
  const handleMouseEnter = (index: number) => {
    clearTimeout(hideTimeout);
    setOpenDropdownIndex(index);
  };
  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setOpenDropdownIndex(null);
      setOpenSubMenuIndex(null);
    }, 300);
  };

  // Keyboard navigation
  const handleKeyDown = (
    e: React.KeyboardEvent,
    idx: number,
    hasDropdown: boolean
  ) => {
    if (
      hasDropdown &&
      (e.key === "Enter" ||
        e.key === " " ||
        e.key === "ArrowDown" ||
        e.key === "ArrowRight")
    ) {
      setOpenDropdownIndex(idx);
    }
    if (e.key === "Escape") {
      setOpenDropdownIndex(null);
      setOpenSubMenuIndex(null);
    }
  };

  // Mobile handlers
  const handleMobileToggle = (idx: number) => {
    setMobileOpenMenus((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };
  const handleMobileSubToggle = (parentIdx: number, subIdx: number) => {
    setMobileOpenSubMenus((prev) => ({
      ...prev,
      [`${parentIdx}-${subIdx}`]: !prev[`${parentIdx}-${subIdx}`],
    }));
  };

  const amount = 1000;

  return (
    <section className="bg-black shadow-md sticky top-0 z-50">
      <nav className="flex justify-between text-[12px] w-full max-w-6xl md:px-0 mx-auto px-4 py-5">
        {/* Logo */}
        <div ref={animationParent} className="flex gap-10 items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={50} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="gap-4 hidden items-center transition-all xl:flex">
          {Nav.map((item, index) => (
            <div
              key={index}
              className="group px-2 py-3 relative flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ alignItems: "center" }}
            >
              <button
                className="text-white flex gap-2 items-center group-hover:text-[#FFB400] focus:outline-none"
                aria-haspopup={!!item.dropdownItems}
                aria-expanded={openDropdownIndex === index}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, index, !!item.dropdownItems)}
              >
                {item.title}
                {item.dropdownItems && (
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      openDropdownIndex === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* First-level submenu (side) */}
              {item.dropdownItems && openDropdownIndex === index && (
                <div
                  className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-black/70 backdrop-blur-md shadow-lg rounded min-w-[220px] z-30 flex flex-col border-t-2 border-[#FFB400] animate-dropdown"
                  onMouseEnter={() => setOpenDropdownIndex(index)}
                  onMouseLeave={handleMouseLeave}
                  role="menu"
                  style={{ backdropFilter: "blur(12px)" }} // fallback for older browsers
                >
                  {item.dropdownItems.map((child, i) => (
                    <div
                      key={i}
                      className="relative group"
                      onMouseEnter={() => setOpenSubMenuIndex(i)}
                      onMouseLeave={() => setOpenSubMenuIndex(null)}
                    >
                      <Link
                        href={child.path}
                        className={clsx(
                          "flex items-center justify-between px-4 py-2 text-white hover:text-[#FFB400]",
                          child.subItems && "pr-8"
                        )}
                        tabIndex={0}
                        role="menuitem"
                      >
                        {child.title}
                        {child.subItems && (
                          <IoIosArrowForward className="ml-2 text-[#FFB400]" />
                        )}
                      </Link>
                      {/* Second-level submenu (side) */}
                      {child.subItems && openSubMenuIndex === i && (
                        <div
                          className="absolute left-full top-0 ml-2 bg-black/70 backdrop-blur-md shadow-lg rounded min-w-[200px] z-40 flex flex-col border-t-2 border-[#FFB400] animate-dropdown"
                          role="menu"
                          style={{ backdropFilter: "blur(12px)" }}
                        >
                          {child.subItems.map((sub, j) => (
                            <Link
                              key={j}
                              href={sub.path}
                              className="block px-4 py-2 text-white hover:text-[#FFB400]"
                              tabIndex={0}
                              role="menuitem"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Donate Button */}
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
          onClick={() => setSideMenuOpen(true)}
          className="text-4xl text-white cursor-pointer xl:hidden"
        />
      </nav>

      {/* Mobile Nav */}
      {isSideMenuOpen && (
        <MobileNav
          closeSideMenu={() => setSideMenuOpen(false)}
          mobileOpenMenus={mobileOpenMenus}
          handleMobileToggle={handleMobileToggle}
          mobileOpenSubMenus={mobileOpenSubMenus}
          handleMobileSubToggle={handleMobileSubToggle}
        />
      )}
    </section>
  );
}

function MobileNav({
  closeSideMenu,
  mobileOpenMenus,
  handleMobileToggle,
  mobileOpenSubMenus,
  handleMobileSubToggle,
}: {
  closeSideMenu: () => void;
  mobileOpenMenus: { [k: number]: boolean };
  handleMobileToggle: (idx: number) => void;
  mobileOpenSubMenus: { [k: string]: boolean };
  handleMobileSubToggle: (parentIdx: number, subIdx: number) => void;
}) {
  return (
    <section className="flex bg-black/60 h-full justify-end w-full fixed left-0 md:hidden min-h-screen top-0 z-50">
      <div className="bg-black h-full w-[100%] px-4 py-4 self-end overflow-y-auto">
        <div className="flex h-1/6 text-white">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="text-4xl cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-3 items-center transition-all">
          {Nav.map((item, idx) => (
            <div key={item.title} className="w-full">
              <div
                className="flex text-white cursor-pointer gap-2 items-center justify-between py-2"
                onClick={() => item.dropdownItems && handleMobileToggle(idx)}
              >
                <span>{item.title}</span>
                {item.dropdownItems && (
                  <IoIosArrowDown
                    className={`text-xs transition-transform duration-300 ${
                      mobileOpenMenus[idx] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
              {/* First-level submenu */}
              {item.dropdownItems && mobileOpenMenus[idx] && (
                <div className="flex flex-col justify-center pl-4 pt-2">
                  {item.dropdownItems.map((child, dIdx) => (
                    <div key={child.title} className="mb-2">
                      <div
                        className="flex items-center justify-between text-[#FFB400] py-2 cursor-pointer"
                        onClick={() =>
                          child.subItems && handleMobileSubToggle(idx, dIdx)
                        }
                      >
                        <span>{child.title}</span>
                        {child.subItems && (
                          <IoIosArrowDown
                            className={`ml-2 text-[#FFB400] transition-transform duration-300 ${
                              mobileOpenSubMenus[`${idx}-${dIdx}`]
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                      {/* Second-level submenu */}
                      {child.subItems &&
                        mobileOpenSubMenus[`${idx}-${dIdx}`] && (
                          <div className="pl-4">
                            {child.subItems.map((sub, j) => (
                              <Link
                                key={j}
                                href={sub.path}
                                className="block text-white hover:text-[#FFB400] py-1"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      {!child.subItems && (
                        <Link
                          href={child.path}
                          className="block text-white hover:text-[#FFB400] py-1 pl-2"
                        >
                          {child.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="flex flex-col gap-12 items-center mt-4">
          <a
            href={`https://paystack.com/pay/ie-pg23h4p?amount=1000`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#FFB400] h-fit text-black hover:border-black px-4 py-2 transition-all">
              Donate Now
            </button>
          </a>
        </section>
      </div>
    </section>
  );
}

// Add this CSS for dropdown animation (can be in your global CSS or module)
/*
@keyframes dropdown {
  0% { opacity: 0; transform: translateY(-10px);}
  100% { opacity: 1; transform: translateY(0);}
}
.animate-dropdown {
  animation: dropdown 0.3s ease;
}
*/
