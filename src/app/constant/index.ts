import { FaArrowRight } from "react-icons/fa6";
import Committed from "../../assets/home/commited.png"
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
export interface NavItem {
  title: string;
  path: string;
  icon?: IconType; // Optional icon property
  dropdownItems?: { title: string; path: string; icon?: IconType }[];
}


export const Nav: NavItem[] = [
  {
    title: "Who We Are",
    path: "/whoweare",

    dropdownItems: [
      { title: "About Us", path: "/whoweare/aboutUs" },
      { title: "Our Team", path: "/whoweare/ourteam" },
      { title: "Blog", path: "/whoweare/blog" },
      { title: "FAQS", path: "/whoweare/faqs" },
    ],
  },
  {
    title: "What We Do",
    path: "/whatwedo",
    dropdownItems: [
      {
        title: "Education",
        path: "/whatwedo/education",
        icon: FaArrowRight,
      },
      { title: "Care", path: "/whatwedo/care", icon: FaArrowRight },
      {
        title: "Empowerment",
        path: "/whatwedo/empowerment",
        icon: FaArrowRight,
      },
    ],
  },
  {
    title: "Our Projects",
    path: "/projects",
    // Icon for this main link
    dropdownItems: [
      { title: "Our School", path: "/projects/ourschool" },
      { title: "Bridge Learning", path: "/projects/bridgelearning" },
      {
        title: "Kids Innovation Africa",
        path: "https://www.kidsinnovation.africa/",
      },
      { title: "Back 2 School", path: "/projects/back2school" },
      {
        title: "Residential Learning Center",
        path: "/projects/learningcenter",
      },
    ],
  },
  {
    title: "Scholarship",
    path: "/scholarship",
    dropdownItems: [
      {
        title: "Henre Ofili STEAM Scholarship",
        path: "https://ofilischolarship.destinytrust.org/",
      },
      { title: "Subomi Plumptre ​Trust Scholarship", path: "#" },
      { title: "Lolu Arr Scholarship", path: "#" },
    ],
  },
  {
    title: "Shop For Good",
    path: "/shop",
  },
];

type EnableGlobaleData = {
  description?: string;
  imageSrc?: string | StaticImageData;
  buttonText?: string;
  heading?: string;
  columnReversed?: boolean;
};

export const EnableGlobalData: EnableGlobaleData[] = [
  {
    description:
      "Enable is a global non-profit organization that enhances the availability of funding for entrepreneurs in Nigeria. With over N1 billion raised on the platform, Enable has supported more than 2.5 million individuals. To obtain a loan from Enable, there is no need for a credit score, collateral, or business income. Are you ready to seize the opportunity and be the next success story?",
    imageSrc: Committed,
    buttonText: "Get A Loan",
    columnReversed: false,
  },
];