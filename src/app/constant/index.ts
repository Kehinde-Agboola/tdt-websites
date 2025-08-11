// import { FaArrowRight } from "react-icons/fa6";
import Committed from "../../../public/assets/home/commited.png";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
import Abimbola from "../../../public/assets/team/Abimbola Ojenike.jpg";
import Ododo from "../../../public/assets/team/Ododo Owodeha-Ashaka.jpg";
import Olabenjo from "../../../public/assets/team/Tofunmi Olabenjo.jpg";
import Teju from "../../../public/assets/team/Tejumade Adeyinka.jpg"
import Tosin from "../../../public/assets/team/Tosin Olaseinde.jpg"
import Terinwa from "../../../public/assets/team/Temitope Terinwa.jpg"
import Kemi from "../../../public/assets/team/Oluwakemi Ojenike.jpg"
import Foluke from "../../../public/assets/team/foluke.jpg";
import jumoke from "../../../public/assets/team/jumoke.jpg";
import OutReach from "../../../public/assets/blog/outreach.png";
import Help from "../../../public/assets/blog/helpinhand.png";
import Latest from "../../../public/assets/home/latest.png";
import Ikem from "../../../public/assets/team/Ikem.jpg"
import Ugo from "../../../public/assets/team/ugo.jpg"
export interface NavSubItem {
  title: string;
  path: string;
  icon?: IconType;
}

export interface NavDropdownItem {
  title: string;
  path: string;
  icon?: IconType;
  subItems?: NavSubItem[];
}

export interface NavItem {
  title: string;
  path: string;
  icon?: IconType; 
  dropdownItems?: NavDropdownItem[];
}

export const Nav: NavItem[] = [
  {
    title: "Who We Are",
    path: "/whoweare",
    dropdownItems: [
      { title: "About Us", path: "/whoweare/about-us" },
      { title: "Our People", path: "/whoweare/ourpeople" },
      { title: "Impact Report & Financials", path: "/impact-report-financial" },
      { title: "FAQS", path: "/whoweare/faqs" },
      { title: "Blog", path: "/whoweare/blog" },
    ],
  },
  {
    title: "What We Do",
    path: "/#",
    dropdownItems: [
      {
        title: "Education",
        path: "/whatwedo/education",
        subItems: [
          { title: "Education Access", path: "/whatwedo/education" },
          {
            title: "Bridge Learning",
            path: "/whatwedo/education",
          },
          {
            title: "Education Technology",
            path: "/whatwedo/education",
          },
          { title: "Scholarships", path: "/whatwedo/education" },
          {
            title: "School Support",
            path: "/whatwedo/education",
          },
          {
            title: "Literacy Campaign",
            path: "/whatwedo/education",
          },
        ],
      },
      {
        title: "Care",
        path: "/whatwedo/care",
        subItems: [
          {
            title: "Rehabilitation and Care",
            path: "/whatwedo/care",
          },
          { title: "Shelter and Wellbeing", path: "/whatwedo/care" },
          {
            title: "Supported Independent Living",
            path: "/whatwedo/care",
          },
          { title: "Child Healthcare", path: "/whatwedo/care" },
          { title: "Hunger Relief", path: "/whatwedo/care" },
        ],
      },
      {
        title: "Empowerment",
        path: "/whatwedo/empowerment",
        subItems: [
          { title: "STEAM Empowerment", path: "/whatwedo/empowerment" },
          { title: "Family Empowerment", path: "/whatwedo/empowerment" },
        ],
      },
    ],
  },
  {
    title: "Our Projects",
    path: "#",
    dropdownItems: [
      { title: "School Enrolment", path: "#" },
      { title: "Residential Care", path: "#" },
      { title: "Bridge Learning", path: "#" },
      {
        title: "OurSchool Africa Edtech",
        path: "https://www.ourschool.africa/",
      },
      {
        title: "Kids Innovation Africa",
        path: "https://www.kidsinnovation.africa/",
      },
      { title: "Child HealthCare", path: "/projects/childhealthcare" },
      { title: "Hunger Relief", path: "/projects/hungerrelief" },
      {
        title: "BackToBasics Literacy Campaign",
        path: "/projects/backtobasics",
      },
      {
        title: "Project Enable - Family Empowerment",
        path: "/projects/projectenable",
      },
    ],
  },
  {
    title: "Scholarship",
    path: "/scholarship",
    dropdownItems: [
      {
        title: "Henry Ofili STEAM Scholarship",
        path: "https://ofilischolarship.destinytrust.org/",
      },
      { title: "Subomi Plumptre ​Trust Scholarship", path: "#" },
      {
        title: "Lolu Arr Scholarship",
        path: "#",
      },
      { title: "A4 Foundation Scholarship", path: "#" },
      { title: "GA Scholarship", path: "#" },
      { title: "Zolala Scholarship", path: "#" },
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
    heading: "How does The Destiny Trust spend my money generally?",
    description:
      "Donations to the Foundation go directly into providing education, daily meals, shelter, healthcare, and empowerment for homeless children and other young people in urgent need. Homeless children are either placed in our residential care programme or resettled with a parent or responsible guardian. In both cases, we provide for the children's essential needs while also supporting and empowering the child and their caregiver to build a more stable and hopeful future.",
  },

  {
    heading:
      "What percentage of giving to The Destiny Trust goes into administrative and personnel expenses?",
    description:
      "We maintain a lean administrative expense of about 2%. Our personnel costs have ranged between 15% and 26% over the past years, covering only the salaries of our full-time teachers, home managers, caregivers, and other essential professionals. Beyond this, our work is largely volunteer-driven, with many of our operations supported by dedicated teams of committed volunteers. Our Founders, Trustees, and Management Team serve entirely in a voluntary capacity and do not receive salaries or out-of-pocket reimbursements.",
  },

  {
    heading:
      "How do you select the children admitted into your residential centre?",
    description:
      "We take up some of the most critical cases where a child is unlikely to go to school due to lack of a stable home, where there is no responsible parent or guardian at all or where abuse there is actual or imminent likelihood of abuse of a child on the streets/slums. Children are also referred from the Courts and  relevant departments of government in the states in which we operate.",
  },
  {
    heading:
      "Do you house all 1000 target beneficiaries or how do you reach them?",
    description:
      "We do not provide shelter to every child. Our shelter runs at a limited capacity of 30 children per time and we secure homes for only a handful of others within the limits of available funding. Broadly however, we work with poor households in slum communities  to bring relief to several hundreds of children that can’t be provided into our in-centre care programme. They are mostly children we have previously enrolled in school. We use community-based approaches to provide food, healthcare and education support.",
  },
  {
    heading:
      "Does The Destiny Trust accept donations other than money? How can I give other things?",
    description:
      "Yes, we also accept donation of food, books, functional computer devices, clothing etc. Please send us an email at info@destinytrust.org to let us know you have a gift for us and we will reach out to arrange for a pick-up. You can also post material gifts on the charity relief aggregator site www.helpcentral.ng. They will pick-up from you at your convenient time and deliver to us.",
  },
  {
    heading: "How can I join the campaign - #1000HelpingHands?",
    description:
      "Join the campaign by sharing the message with friends and family. Like our updates, retweet or share them on your timelines. You can also sign-up as a volunteer. Please send an email to volunteering@destinytrust.org or info@destinytrust.org. You will receive a customized avatar with which you can create awareness within your own network and show you identify with the campaign. ",
  },
  {
    heading: "How can I become a volunteer with The Destiny Trust?",
    description:
      "We are a community of volunteers with diverse skills and professional backgrounds. We always seek more passionate people who share our passion to make a difference. Please send a personal statement of your intention to join us to volunteering@destinytrust.org. We would respond with a highlight of team responsibilities and support you through the onboarding process. ",
  },
  {
    heading:
      "Where can I find The Destiny Trust’s Audited Financial Statement and Annual Impact Report?",
    description:
      "Our financial statements and impact report for the past years are published on our website. You can also send us an email at info@destinytrust.org.  ",
  },
  {
    heading:
      "Does The Destiny Trust have a non-discrimination policy for children in its care?",
    description:
      "Yes. The Destiny Trust upholds a strict non-discrimination policy. We welcome and support all children regardless of gender, religion, ethnicity, disability, or background. Our programmes are driven by the belief that every child deserves equal opportunity, care, and access to education, regardless of their circumstances. ",
  },
  {
    heading: "What age range of children does The Destiny Trust support?",
    description:
      "We support children and young people of all ages through our various programmes. Our residential care programme caters specifically to children aged 5 to 17. For older beneficiaries transitioning from residential care, we offer a Supported Independent Living programme. In addition, our education scholarship scheme continues to support eligible children and youths through to the completion of their university education.",
  },
  {
    heading:
      "Is The Destiny Trust licensed to operate children’s homes and other childcare facilities?",
    description:
      "Yes, The Destiny Trust is duly registered and licensed by the relevant authorities to operate children’s residential homes and related childcare programmes in Nigeria. Our five care centres in Lagos and Oyo States are run under the licenses and regulatory oversight of the respective state governments. We strictly adhere to all child protection standards and government regulations in the delivery of our services.",
  },
  {
    heading: "Can I refer a child in need to The Destiny Trust?",
    description:
      "Yes, we are often willing to act on referrals from concerned members of the public who identify children in need of care and protection. However, the decision to admit a child into our in-centre care programme involves a collaborative process with government child protection departments and, where necessary, the Family Courts. Every case is subjected to a thorough social investigation to determine the best interest of the child and ensure compliance with legal and child safeguarding standards.",
  },
  {
    heading: "Does The Destiny Trust offer adoption services?",
    description:
      "No, The Destiny Trust is not authorised to facilitate adoptions. Adoption processes are solely handled by the government through its designated child welfare and adoption authorities. While we strongly encourage eligible couples to consider adoption as a way of giving children a loving family, we do not have the authority to give out children for adoption and do not engage in adoption placements.",
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
]

 

  export const boardMembers = [
    {
      name: "Abimbola Ojenike",
      role: "Co-founder & Lead",
      description:
        "Abimbola is a lawyer and social impact leader. He is the Co-founder and Lead at The Destiny Trust. As a lawyer, he advises corporates, growth companies, and individuals on technology, finance, intellectual property, regulations, and dispute resolution, and has represented clients in significant commercial transactions and high-stakes litigation. He also co-founded Helpcentral, a social-impact tech company, and leads The Justice Project, a tech-enabled pro bono legal clearinghouse. Abimbola serves on the boards of several non-profits and has been recognised by the Tällberg Foundation as an emerging leader and named among Nigeria’s “40 Under 40” rising stars by the Nigerian Legal Awards.",
      image: Abimbola,
    },
    {
      name: "Foluke Irukera",
      role: "Board Member",
      description:
        "Foluke Irukera is an Early Childhood Education Consultant, Youth Counsellor, and Life Coach dedicated to nurturing young minds. She is the Proprietor of Adventure Schools in Lagos, delivering quality early years education. A convener and speaker at teen conferences, she coaches on life skills, personal growth, and character development. With deep expertise in child development, she advances The Destiny Trust's mission to provide holistic learning and empower children to build strong foundations for life.",
      image: Foluke,
    },
    {
      name: "Ikem Isiekwena",
      role: "Co-founder & Managing Partner",
      description:
        "Ikem is the Managing Partner at SimmonsCooper Partners, where he oversees the firm's practice across Competition Law, Mergers & Acquisitions, Private Equity, Media, Technology, Energy, Projects, Transport, and Policy. With nearly two decades of experience advising on major transactions and policy across multiple sectors, Ikem is a leading expert in competition law and has served as a lead World Bank consultant to the Federal Competition and Consumer Protection Commission. He was also a Non-Executive Director on the Board of the Nigeria Sovereign Investment Authority. Ikem is Co-founder of The Destiny Trust, which empowers underserved children through education and care initiatives.",
      image: Ikem,
    },
    {
      name: "Kemi Ojenike",
      role: "Co-founder & Chief Operating Officer",
      description:
        "Kemi Ojenike is a lawyer and family wealth leader, currently serving as Chief Operating Officer at Meristem Family Office, where she works with high-net-worth families on wealth structuring, governance, and legacy planning. A Chartered Governance Professional, she brings over a decade of experience as General Counsel in the financial services sector, advising on legal and compliance matters in capital markets, real estate investment, and technology. Kemi believes in a holistic approach to wealth that values not just financial capital, but also human, intellectual, and social capital. Beyond her corporate work, she is a social entrepreneur and Co-founder of The Destiny Trust.",
      image: Kemi,
    },
    {
      name: "Ngozi Ken-Udochukwu",
      role: "Board Member",
      description:
        "Ngozi Ken-Udochukwu is a child development advocate and lawyer. She is the Founder of Olive Bloom Foundation and Co-founder of No To Child Hunger, where she coordinates a large-scale school feeding programme for children. Ngozi also serves on the boards of several non-profits, including organisations providing free education in underserved communities, advancing her commitment to improving children's welfare and expanding access to learning opportunities.",
      image: Ugo,
    },
    {
      name: "Ododo Owodeha-Ashaka",
      role: "Board Member",
      description:
        "Ododo is an engineering professional with over a decade of multinational experience in mechanical and process systems design. She has held senior engineering roles within the Oil and Gas and Nuclear Power industries. Ododo first joined The Destiny Trust as a volunteer, coordinating back-office functions, and now serves on its Board, advancing the Trust's mission of empowering underserved children.",
      image: Ododo,
    },

    {
      name: "Oluwatosin Olaseinde",
      role: "Growth and Partnerships",
      description:
        "Oluwatosin is a professional accountant with over 10 years of experience spanning across accounting, audit, financial management, and taxation. She is the Founder/CEO of MoneyAfrica, an ed-tech platform that enhances financial literacy and investments by leveraging on technology. Oluwatosin is a World Economic Forum Young Global Leader, Washington Mandela Fellow, LinkedIn Top Voice in Finance & Economy (2020), and featured on TEDx, BBC UK, Al Jazeera, and CNN and ranked amongst Top 50 African Business Heroes. She leads growth and partnerships at The Destiny Trust.",
      image: Tosin,
    },
    {
      name: "Tejumade Adeyinka",
      role: "Technology and Skills Development",
      description:
        "Teju Adeyinka is a Product Manager with experience building and managing digital infrastructure and technology products. She is the founder of scouthappy.com, a platform connecting African talent to meaningful work in global markets. Teju previously led the Developer Platform at 0x Labs, a leading blockchain infrastructure provider, and was the first Product Manager at Helicarrier, where she helped build and scale transformative blockchain products in Africa's tech ecosystem. Passionate about driving economic mobility, she champions initiatives that harness industry and commerce to create opportunities for Africans.",
      image: Teju,
    },
  ];
  


  export const managementTeam = [

    // {
    //   name: "Sandra Okwundu",
    //   role: "Technology and Skills Development",
    //   description:
    //     "Onyinye is a Quality Assurance and DevOps professional with experience in technology and digital solutions, including her work at Interswitch and Équité Association. She leads The Destiny Trust's Kids Innovation Africa project, which bridges the digital divide for underserved children by expanding their access to technology and digital skills. Sandra is passionate about leveraging innovation to create opportunities for young people in disadvantaged communities.",
    //   image: "https://via.placeholder.com/400x400/10B981/FFFFFF?text=S.O",
    // },
    // {
    //   name: "Ifeyinwa Obienu",
    //   role: "Strategy and Communication",
    //   description:
    //     "Ifeyinwa is a lawyer with expertise in corporate and commercial law, serving as in-house counsel in the financial services sector. She has experience advising on regulatory compliance, transactions, and governance. At The Destiny Trust, Ifeyinwa leads communication and strategy, shaping the organisation's message and long-term direction to drive its mission of empowering underserved children. She is passionate about leveraging her legal and strategic skills to create lasting social impact and amplify the voices of vulnerable communities.",
    //   image: "/assets/team/placeholder-female.jpg",
    // },
    {
      name: "Jumoke Muftau",
      role: "Care Programmes",
      description:
        "Jumoke Muftau is a human resources professional and Head of HR at Sovereign Finance, a leading financial services group. She holds a master's degree from the University of Bradford and is a member of the Chartered Institute of Personnel and Development (CIPD), UK. With previous experience in HR operations, including at FBN Capital, Jumoke brings expertise in talent management, employee engagement, and organisational development. At The Destiny Trust, she oversees care services across various homes, ensuring a supportive environment for vulnerable children.",
      image: jumoke,
    },
    // {
    //   name: "Oluwatoyosi Abikoye",
    //   role: "Volunteering and Outreaches",
    //   description:
    //     "Oluwatoyosi Abikoye is a lawyer and academic, a member of the Chartered Institute of Arbitrators (UK), and a PhD candidate at CEDIS, NOVA School of Law, Lisbon. With over a decade of experience in litigation, mediation, and legislative reform—including work as a state prosecutor—she brings strategic legal expertise to advancing equity and opportunity for children. Oluwatoyosi also manages volunteering at The Destiny Trust, supporting its structure as a volunteer-driven organisation.",
    //   image: "/assets/team/placeholder-female.jpg",
    // },
    {
      name: "Temitope Akinterinwa",
      role: "Co-lead, Care Services",
      description:
        "Temitope is a creative professional with diverse experience in directing, producing, and acting within the entertainment industry. She is a member of the Director's Guild of Canada, Ontario District, and has served as Assistant Director on notable productions including the Canadian Screen Award-winning sitcom Children Ruin Everything (Season 4), Netflix's mini-series The Madness, and the Canadian crime comedy-drama Pretty Hard Cases (Season 3). Temitope is also the writer, producer, and director of the award-winning short film Ego, which explores conflict resolution, self-reflection, and relationship building. At The Destiny Trust, Temi is Co-lead, overseeing care services and residential programmes.",
      image: Terinwa,
    },
    // {
    //   name: "Oyindamola Fatusin",
    //   role: "Finance",
    //   description:
    //     "Oyindamola Fatusin is a Chartered Accountant with experience in audit and accounting across diverse industries, including shipping, financial services, and technology. She works at Chapel Hill Denham and brings her expertise in financial management to her role overseeing financial control at The Destiny Trust. Oyindamola is committed to ensuring transparent and efficient stewardship of resources in support of the Trust's mission.",
    //   image: "/assets/team/placeholder-female.jpg",
    // },
    {
      name: "Jesutofunmi Olabenjo",
      role: "Legal Advisory",
      description:
        "Jesutofunmi is a Senior Associate Attorney at DGILaw (Farrell LLP, allied with Deloitte) with expertise in business immigration, oil and gas law, employment law, and corporate advisory. She holds an LLM in Corporate Law, Finance, and Governance from Harvard Law School and an LLB from Lagos State University, and is licensed to practice in Nigeria, New York, and Ontario. Passionate about mentoring young lawyers and supporting youth-focused causes, Jesutofunmi combines her legal career with active community service.",
      image: Olabenjo,
    },
    // {
    //   name: "Athina Jeje",
    //   role: "Chief Operating Officer",
    //   description:
    //     "Athina is an education equity advocate and social impact professional with extensive experience in curriculum development, instructional design, and technology-driven learning solutions. She holds degrees in Education Management and a Master's in Educational Administration and Planning. Beginning her career as an Early Years teacher, she developed expertise in functional curriculum planning. As Chief Operating Officer at The Destiny Trust, Athina leads transformative education initiatives, including Nigeria's first structured alternative school for over-age out-of-school children. She also heads STEAM education training, equipping children with the skills essential for success in science, technology, engineering, arts, and mathematics.",
    //   image: "/assets/team/placeholder-female.jpg",
    // },
  ];