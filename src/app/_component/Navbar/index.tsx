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
import { motion, AnimatePresence } from "framer-motion";
// import { IconType } from "react-icons";
import clsx from "clsx";


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
              >
                <Link href={item.path}>
                  {item.title}
                </Link>
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
                  style={{ backdropFilter: "blur(12px)" }} 
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
      <AnimatePresence>
        {isSideMenuOpen && (
          <MobileNav
            closeSideMenu={() => setSideMenuOpen(false)}
            mobileOpenMenus={mobileOpenMenus}
            handleMobileToggle={handleMobileToggle}
            mobileOpenSubMenus={mobileOpenSubMenus}
            handleMobileSubToggle={handleMobileSubToggle}
          />
        )}
      </AnimatePresence>
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex bg-black/40 backdrop-blur-sm h-full justify-end w-full fixed left-0 md:hidden min-h-screen top-0 z-50"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="bg-black/95 backdrop-blur-md h-full w-[100%] px-4 py-4 self-end overflow-y-auto"
      >
        <div className="flex h-1/6 text-white">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineClose
              onClick={closeSideMenu}
              className="text-4xl cursor-pointer"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col gap-3 items-center transition-all"
        >
          {Nav.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
              className="w-full"
            >
              {/* Main nav item */}
              {!item.dropdownItems ? (
                <Link
                  href={item.path}
                  className="flex text-white cursor-pointer gap-2 items-center justify-between py-2 hover:text-[#FFB400] transition-colors"
                  onClick={closeSideMenu}
                >
                  <span>{item.title}</span>
                </Link>
              ) : (
                <div
                  className="flex text-white cursor-pointer gap-2 items-center justify-between py-2 hover:text-[#FFB400] transition-colors"
                  onClick={() => handleMobileToggle(idx)}
                >
                  <span>{item.title}</span>
                  <IoIosArrowDown
                    className={`text-xs transition-transform duration-300 ${
                      mobileOpenMenus[idx] ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              
              {/* First-level submenu */}
              <AnimatePresence>
                {item.dropdownItems && mobileOpenMenus[idx] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-center pl-4 pt-2 overflow-hidden"
                  >
                    {item.dropdownItems.map((child, dIdx) => (
                      <motion.div
                        key={child.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: dIdx * 0.1, duration: 0.3 }}
                        className="mb-2"
                      >
                        {!child.subItems ? (
                          <Link
                            href={child.path}
                            className="block text-[#FFB400] hover:text-white py-2 transition-colors"
                            onClick={closeSideMenu}
                          >
                            {child.title}
                          </Link>
                        ) : (
                          <>
                            <div
                              className="flex items-center justify-between text-[#FFB400] py-2 cursor-pointer hover:text-white transition-colors"
                              onClick={() => handleMobileSubToggle(idx, dIdx)}
                            >
                              <span>{child.title}</span>
                              <IoIosArrowDown
                                className={`ml-2 text-[#FFB400] transition-transform duration-300 ${
                                  mobileOpenSubMenus[`${idx}-${dIdx}`]
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </div>
                            {/* Second-level submenu */}
                            <AnimatePresence>
                              {mobileOpenSubMenus[`${idx}-${dIdx}`] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-4 overflow-hidden"
                                >
                                  {child.subItems.map((sub, j) => (
                                    <motion.div
                                      key={j}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: j * 0.05, duration: 0.2 }}
                                    >
                                      <Link
                                        href={sub.path}
                                        className="block text-white hover:text-[#FFB400] py-1 transition-colors"
                                        onClick={closeSideMenu}
                                      >
                                        {sub.title}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex flex-col gap-12 items-center mt-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://paystack.com/pay/ie-pg23h4p?amount=1000`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#FFB400] h-fit text-black hover:border-black px-6 py-3 transition-all rounded">
              Donate Now
            </button>
          </motion.a>
        </motion.section>
      </motion.div>
    </motion.section>
  );
}
