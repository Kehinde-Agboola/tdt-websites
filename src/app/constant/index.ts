import { FaArrowRight } from "react-icons/fa6";
import Committed from "../../../public/assets/home/commited.png"
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
import Abimbola from "../../../public/assets/blog/abimbola.png"
import OutReach from "../../../public/assets/blog/outreach.png"
import Help from "../../../public/assets/blog/helpinhand.png"
import Latest from "../../../public/assets/home/latest.png"

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
      { title: "About Us", path: "/#" },
      { title: "Our Team", path: "/whoweare/ourteam" },
      { title: "Blog", path: "/whoweare/blog" },
      { title: "FAQS", path: "/whoweare/faqs" },
    ],
  },
  {
    title: "What We Do",
    path: "/#",
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
      { title: "Our School", path: "#" },
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
      {
        title: "Lolu Arr Scholarship",
        path: "/scholarship/LoluArrScholarship",
      },
      { title: "A4 Foundation Scholarship", path: "#" },
    ],
  },
  {
    title: "Shop For Good",
    path: "/ShopForGood",
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

type FrequntlyAskedQuestion = {
  heading: string;
  description: string;
};

export const FAQuestions: FrequntlyAskedQuestion[] = [
  {
    heading: "Can I Sponsor a scholarship?",
    description:
      "Yes, you can sponsor a scholarship! We welcome and appreciate your generosity. Sponsoring a scholarship helps support deserving students in achieving their educational goals. Please contact our scholarship coordinator at [email/contact details] for more information on how you can become a sponsor.",
  },

  {
    heading: "How can I sponsor a child?",
    description:
      "Sponsoring a child involves providing financial support for their education, healthcare, and general well-being. You can sign up to sponsor a child through our website.",
  },

  {
    heading: "Do you partner with other organizations or institutions?",
    description:
      "Yes, we actively partner with other NGOs, educational institutions, healthcare providers, and community organizations to enhance our services and reach more children in need.",
  },
  {
    heading: "How can I get involved?",
    description:
      "You can get involved by volunteering, donating, sponsoring a child, participating in our fundraising events, or spreading the word about our work. Visit our website or contact us directly for more information on how to get started.",
  },
  {
    heading: "How can I volunteer with your organization?",
    description:
      "Absolutely! We welcome volunteers who are passionate about helping children. Please visit our website to learn more about our volunteer opportunities and application process.",
  },
  {
    heading: "What types of volunteer opportunities are available?",
    description:
      "We offer a variety of volunteer opportunities, including teaching, mentoring, organizing activities, administrative support, fundraising, and helping with day-to-day operations at our shelter facilities.",
  },
];


  export const recentPosts = [
    {
      image: Abimbola,
      author: "Samuel Adeshina • September 12, 2024 ",
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home.",
    },
    {
      image: OutReach,
      author: "Samuel Adeshina • September 12, 2024 ",
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home.",
    },
    {
      image: Help,
      author: "Samuel Adeshina • September 12, 2024 ",
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home.",
    },
  ];

  export const articles = [
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
  ];