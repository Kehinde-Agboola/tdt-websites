"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../../public/assets/Logowhite.png";
import Email from "../atom/Email";
import { Nav } from "@/app/constant/index";

type FooterNavLink = { label: string; href: string; external: boolean };

type FooterNavSection = { title: string; links: FooterNavLink[] };

/** Shorter than main nav — key project / partner links (no duplicate hub vs heading). */
const FOOTER_PROJECT_LINKS: { title: string; path: string }[] = [
  { title: "Accelerated Learning", path: "/projects/bridgelearning" },
  {
    title: "OurSchool Africa Edtech",
    path: "https://www.ourschool.africa/",
  },
  {
    title: "Kids Innovation Africa",
    path: "https://www.kidsinnovation.africa/",
  },
];

function toFooterLink(label: string, path: string): FooterNavLink | null {
  if (!path || path === "#") return null;
  const external = /^https?:\/\//i.test(path);
  return { label, href: path, external };
}

/** Mirrors `Nav` from `@/app/constant/index` (excludes Shop For Good — footer only). */
function buildFooterSectionsFromNav(): FooterNavSection[] {
  return Nav.filter((item) => item.title !== "Shop For Good").map((item) => {
    const links: FooterNavLink[] = [];

    const push = (label: string, path: string) => {
      const l = toFooterLink(label, path);
      if (l) links.push(l);
    };

    // Hub URL only when there is no dropdown (avoids repeating the column title).
    if (
      item.path &&
      item.path !== "/#" &&
      item.path !== "/" &&
      !item.dropdownItems?.length
    ) {
      push(item.title, item.path);
    }

    if (item.title === "Scholarship") {
      push("Overview", "/scholarship");
    }

    if (item.title === "Our Projects") {
      FOOTER_PROJECT_LINKS.forEach(({ title, path }) => push(title, path));
    } else {
      item.dropdownItems?.forEach((d) => {
        push(d.title, d.path);
      });
    }

    return { title: item.title, links };
  });
}

const footerNavSections = buildFooterSectionsFromNav();


function ContactBlock() {
  return (
    <div>
      <p className="text-sm underline mb-2">
        <a href="mailto:info@destinytrust.org">info@destinytrust.org</a>
      </p>
      <p className="text-sm mb-2">+234 813 800 2859</p>
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold text-[#FFB400]">Lagos:</p>
          <p className="mt-1">
            TDT Centre, 6, Brilla F.M Road, Off Bola Tinubu Road, Bogije Town,
            Ibeju-Lekki, Lagos
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#FFB400]">Ibadan:</p>
          <p className="mt-1">
            9, Kunle Abass Street, off Soun Ajagungbade Avenue, New Bodija,
            Ibadan
          </p>
        </div>
      </div>
    </div>
  );
}

const Footer = () => {
  const pathname = usePathname();
  const showNewsletterInFooter = pathname !== "/";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  /** Plain object variant — avoids nested stagger + dynamic `visible` fn leaving children invisible. */
  const footerNavReveal = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  const footerLinkClass =
    "text-white/90 outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#FFB400] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm";

  return (
    <footer className="shrink-0 bg-black text-white py-10 px-2 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto xl:px-0 md:px-4 px-4">
        <motion.section
          className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo — mobile first; desktop: start of left column */}
          <motion.div
            className="w-full lg:flex-[2] lg:text-left space-y-4"
            variants={fadeIn}
          >
            <Image
              src={Logo}
              alt="The Destiny Trust"
              className="w-[70%] md:mx-auto lg:mx-0"
            />
            <div className="hidden lg:block">
              <ContactBlock />
            </div>
          </motion.div>

          {/* Site map — grouped like main nav */}
          <motion.div
            className="order-2 w-full lg:order-none lg:min-w-0 lg:flex-[3] lg:text-left"
            variants={footerNavReveal}
          >
            <nav
              aria-label="Footer"
              className="mx-auto w-full max-w-xl text-white md:max-w-4xl lg:mx-0 lg:max-w-none"
            >
              <h4 className="sr-only">Site navigation</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
                {footerNavSections.map((section) => (
                  <div key={section.title}>
                    <p className="mb-3 text-sm font-semibold text-[#FFB400]">
                      {section.title}
                    </p>
                    <ul className="space-y-2 text-sm text-white/90">
                      {section.links.map((link, i) => (
                        <li
                          key={`${section.title}-${link.label}-${link.href}-${i}`}
                        >
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${footerLinkClass} underline-offset-2 hover:underline`}
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link href={link.href} className={footerLinkClass}>
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Policies — single link to the policies hub */}
                <div>
                  <p className="mb-3 text-sm font-semibold text-[#FFB400]">
                    Policies
                  </p>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>
                      <Link href="/policies" className={footerLinkClass}>
                        View all policies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </motion.div>

          {/* Contact — third on mobile only */}
          <motion.div
            className="w-full lg:hidden order-3"
            variants={fadeIn}
          >
            <ContactBlock />
          </motion.div>

        </motion.section>

        <motion.div
          className="text-center text-sm mt-10 w-full mb-0"
          variants={fadeIn}
          custom={0.8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          &copy; 2026 The Destiny Trust. All Rights Reserved.
          <p className="text-white text-center md:text-right">
            Developed by the Destiny Trust Children at
          </p>
          <p className="text-white text-center md:text-right">
            the{" "}
            <a
              href="https://www.kidsinnovation.africa/"
              target="_blank"
              className="underline"
            >
              Kids Innovation Africa
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
