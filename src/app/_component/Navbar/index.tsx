/** @format */
"use client";

import Image from "next/image";
import { useState, useEffect} from "react";
import { Nav } from "@/app/constant/index";
import logo from "../../../../public/assets/tdtlogo.png";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion, AnimatePresence } from "framer-motion";
// import { IconType } from "react-icons";
import clsx from "clsx";
import { useLoading } from "@/contexts/LoadingContext";
import { useRouter, usePathname } from "next/navigation";


export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  
  // Basic loading and navigation
  const { startLoading, stopLoading } = useLoading();
  const router = useRouter();
  const pathname = usePathname();
  
  // Auto-stop loading when route changes
  useEffect(() => {
    // Stop loading when pathname changes (navigation complete)
    const timer = setTimeout(() => {
      stopLoading();
    }, 100); // Small delay to ensure page has loaded
    
    return () => clearTimeout(timer);
  }, [pathname, stopLoading]);

  // Lock body scroll while mobile menu is open (avoids background scroll behind drawer)
  useEffect(() => {
    if (!isSideMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isSideMenuOpen]);

  // Close mobile menu on Escape (matches user expectation for overlays)
  useEffect(() => {
    if (!isSideMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSideMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isSideMenuOpen]);

  // Close drawer when the route changes (back/forward or in-app navigation)
  useEffect(() => {
    setSideMenuOpen(false);
  }, [pathname]);

  // Mobile state
  const [mobileOpenMenus, setMobileOpenMenus] = useState<{
    [k: number]: boolean;
  }>({});
  const [mobileOpenSubMenus, setMobileOpenSubMenus] = useState<{
    [k: string]: boolean;
  }>({});

  // Navigation handler with loading
  const handleNavigation = (href: string, label?: string) => {
    if (href === window.location.pathname) return; // Don't load if same page
    
    startLoading(label || "Loading page...");
    
    // Small delay to show loading started, then navigate
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

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
    <section className="sticky top-0 z-[60] border-b border-white/10 bg-black">
      {/* z-[70] keeps the bar above the mobile drawer (z-50) so menu/close stays clickable */}
      <nav className="relative z-[70] mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-[12px] sm:px-5 md:px-0">
        {/* Logo */}
        <div ref={animationParent} className="flex gap-10 items-center">
          <button onClick={() => handleNavigation("/", "Loading home page...")}>
            <Image src={logo} alt="logo" width={150} height={50} />
          </button>
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
                // Always navigate when a path exists (even if it has a dropdown)
                onClick={() =>
                  handleNavigation(item.path, `Loading ${item.title}...`)
                }
              >
                <span className="cursor-pointer">{item.title}</span>
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
                      <button
                        // Allow navigation even when there are subItems (hover still shows submenu)
                        onClick={() =>
                          handleNavigation(
                            child.path,
                            `Loading ${child.title}...`,
                          )
                        }
                        className={clsx(
                          "flex items-center justify-between px-4 py-2 text-white hover:text-[#FFB400] w-full text-left",
                          child.subItems && "pr-8",
                        )}
                        tabIndex={0}
                        role="menuitem"
                      >
                        {child.title}
                        {child.subItems && (
                          <IoIosArrowForward className="ml-2 text-[#FFB400]" />
                        )}
                      </button>
                      {/* Second-level submenu (side) */}
                      {child.subItems && openSubMenuIndex === i && (
                        <div
                          className="absolute left-full top-0 ml-2 bg-black/70 backdrop-blur-md shadow-lg rounded min-w-[200px] z-40 flex flex-col border-t-2 border-[#FFB400] animate-dropdown"
                          role="menu"
                          style={{ backdropFilter: "blur(12px)" }}
                        >
                          {child.subItems.map((sub, j) => (
                            <button
                              key={j}
                              onClick={() =>
                                handleNavigation(
                                  sub.path,
                                  `Loading ${sub.title}...`,
                                )
                              }
                              className="block px-4 py-2 text-white hover:text-[#FFB400] w-full text-left"
                              tabIndex={0}
                              role="menuitem"
                            >
                              {sub.title}
                            </button>
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
        <div className="hidden shrink-0 items-center xl:flex">
          <a
            href={`https://paystack.com/pay/ie-pg23h4p?amount=${amount}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[158px] items-center justify-center"
          >
            <button
              type="button"
              className="min-h-[30px] w-full max-w-[200px] bg-[#FFB400] px-10 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-[#e6a200] active:scale-[0.98]"
            >
              Donate
            </button>
          </a>
        </div>

        {/* Mobile menu trigger — must stay in tab order and expose state to assistive tech */}
        <button
          type="button"
          id="mobile-nav-trigger"
          aria-expanded={isSideMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isSideMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setSideMenuOpen((o) => !o)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB400] xl:hidden"
        >
          {isSideMenuOpen ? (
            <AiOutlineClose className="text-3xl" aria-hidden />
          ) : (
            <FiMenu className="text-3xl" aria-hidden />
          )}
        </button>
      </nav>

      {/* Mobile Nav — xl:hidden matches desktop nav breakpoint (was md:hidden, which broke tablet) */}
      <AnimatePresence>
        {isSideMenuOpen && (
          <MobileNav
            key="mobile-drawer"
            closeSideMenu={() => setSideMenuOpen(false)}
            mobileOpenMenus={mobileOpenMenus}
            handleMobileToggle={handleMobileToggle}
            mobileOpenSubMenus={mobileOpenSubMenus}
            handleMobileSubToggle={handleMobileSubToggle}
            handleNavigation={handleNavigation}
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
  handleNavigation,
}: {
  closeSideMenu: () => void;
  mobileOpenMenus: { [k: number]: boolean };
  handleMobileToggle: (idx: number) => void;
  mobileOpenSubMenus: { [k: string]: boolean };
  handleMobileSubToggle: (parentIdx: number, subIdx: number) => void;
  handleNavigation: (href: string, label?: string) => void;
}) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-nav-title"
      id="mobile-nav-panel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 xl:hidden"
    >
      {/* Dimmed area below sticky header — tap to close */}
      <motion.button
        type="button"
        aria-label="Close menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute left-0 right-0 top-[4.75rem] bottom-0 bg-black/55 backdrop-blur-[2px]"
        onClick={closeSideMenu}
      />

      {/* Slide-in panel — aligned with xl breakpoint used for desktop nav */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="absolute bottom-0 right-0 top-[4.75rem] flex w-full max-w-[min(100vw,20rem)] flex-col border-l border-white/10 bg-[#0a0a0a] shadow-[-8px_0_32px_rgba(0,0,0,0.45)]"
      >
        <span id="mobile-nav-title" className="sr-only">
          Main navigation
        </span>

        <nav
          className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-4"
          aria-label="Primary"
        >
          <ul className="flex flex-col gap-0.5">
            {Nav.map((item, idx) => (
              <li key={item.title} className="border-b border-white/5 py-1">
                {!item.dropdownItems ? (
                  <button
                    type="button"
                    onClick={() => {
                      handleNavigation(item.path, `Loading ${item.title}...`);
                      closeSideMenu();
                    }}
                    className="flex min-h-11 w-full items-center rounded-md px-2 py-2 text-left text-base text-white transition-colors hover:bg-white/5 hover:text-[#FFB400]"
                  >
                    {item.title}
                  </button>
                ) : (
                  <>
                    <div className="flex min-h-11 items-stretch gap-1">
                      <button
                        type="button"
                        onClick={() => {
                          handleNavigation(item.path, `Loading ${item.title}...`);
                          closeSideMenu();
                        }}
                        className="min-h-11 flex-1 rounded-md px-2 py-2 text-left text-base text-white transition-colors hover:bg-white/5 hover:text-[#FFB400]"
                      >
                        {item.title}
                      </button>
                      <button
                        type="button"
                        aria-expanded={!!mobileOpenMenus[idx]}
                        aria-label={
                          mobileOpenMenus[idx]
                            ? `Collapse ${item.title} submenu`
                            : `Expand ${item.title} submenu`
                        }
                        onClick={() => handleMobileToggle(idx)}
                        className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md text-[#FFB400] transition-colors hover:bg-white/10"
                      >
                        <IoIosArrowDown
                          className={`text-lg transition-transform duration-200 ${
                            mobileOpenMenus[idx] ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {item.dropdownItems && mobileOpenMenus[idx] && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-2"
                        >
                          {item.dropdownItems.map((child, dIdx) => (
                            <li key={child.title} className="py-0.5">
                              {!child.subItems ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    handleNavigation(
                                      child.path,
                                      `Loading ${child.title}...`,
                                    );
                                    closeSideMenu();
                                  }}
                                  className="flex min-h-10 w-full rounded-md px-2 py-2 text-left text-sm text-[#FFB400]/95 transition-colors hover:bg-white/5 hover:text-[#FFB400]"
                                >
                                  {child.title}
                                </button>
                              ) : (
                                <>
                                  <div className="flex min-h-10 items-stretch gap-1">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        handleNavigation(
                                          child.path,
                                          `Loading ${child.title}...`,
                                        );
                                        closeSideMenu();
                                      }}
                                      className="min-h-10 flex-1 rounded-md px-2 py-2 text-left text-sm text-[#FFB400]/95 transition-colors hover:bg-white/5"
                                    >
                                      {child.title}
                                    </button>
                                    <button
                                      type="button"
                                      aria-expanded={
                                        !!mobileOpenSubMenus[`${idx}-${dIdx}`]
                                      }
                                      aria-label={
                                        mobileOpenSubMenus[`${idx}-${dIdx}`]
                                          ? `Collapse ${child.title} links`
                                          : `Expand ${child.title} links`
                                      }
                                      onClick={() =>
                                        handleMobileSubToggle(idx, dIdx)
                                      }
                                      className="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-md text-[#FFB400] hover:bg-white/10"
                                    >
                                      <IoIosArrowDown
                                        className={`text-sm transition-transform duration-200 ${
                                          mobileOpenSubMenus[`${idx}-${dIdx}`]
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                        aria-hidden
                                      />
                                    </button>
                                  </div>
                                  <AnimatePresence>
                                    {mobileOpenSubMenus[`${idx}-${dIdx}`] && (
                                      <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden border-l border-white/10 pl-3"
                                      >
                                        {child.subItems.map((sub) => (
                                          <li key={sub.title}>
                                            <button
                                              type="button"
                                              onClick={() => {
                                                handleNavigation(
                                                  sub.path,
                                                  `Loading ${sub.title}...`,
                                                );
                                                closeSideMenu();
                                              }}
                                              className="flex min-h-10 w-full rounded-md py-2 pl-1 text-left text-sm text-white/90 transition-colors hover:text-[#FFB400]"
                                            >
                                              {sub.title}
                                            </button>
                                          </li>
                                        ))}
                                      </motion.ul>
                                    )}
                                  </AnimatePresence>
                                </>
                              )}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a
            href="https://paystack.com/pay/ie-pg23h4p?amount=1000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 w-full items-center justify-center rounded-md bg-[#FFB400] px-4 py-3 text-base font-semibold text-black transition-colors hover:bg-[#e6a200] active:scale-[0.99]"
          >
            Donate
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </motion.aside>
    </motion.div>
  );
}
