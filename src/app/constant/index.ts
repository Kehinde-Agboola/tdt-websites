// import { FaArrowRight } from "react-icons/fa6";
import Committed from "../../../public/assets/home/commited.png";
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
import Abimbola from "../../../public/assets/team/Abimbola.jpg";
import Abimbola2 from "../../../public/assets/blog/abimbola.png";
import oyinda from "../../../public/assets/team/oyinda.jpg"
import Ododo from "../../../public/assets/team/Ododo Owodeha-Ashaka.jpg";
import Olabenjo from "../../../public/assets/team/Tofunmi Olabenjo.jpg";
import Teju from "../../../public/assets/team/Tejumade Adeyinka.jpg"
import Tosin from "../../../public/assets/team/Tosin Olaseinde.jpg"
import Terinwa from "../../../public/assets/team/Temitope Terinwa.jpg"
import Kemi from "../../../public/assets/team/Oluwakemi Ojenike.jpg"
import Foluke from "../../../public/assets/team/foluke.jpg";
import jumoke from "../../../public/assets/team/jumoke.jpg";
import OutReach from "../../../public/assets/blog/outreach.png";
import Rescue from "../../../public/assets/blog/rescue.png"
// import Help from "../../../public/assets/blog/helpinhand.png";
import Latest from "../../../public/assets/home/latest.png";
import Ikem from "../../../public/assets/team/Ikem.jpg"
import Ugo from "../../../public/assets/team/ugo.jpg"
import ourSchool from "../../../public/assets/blog/ourschool.png";
// import Children from "../../../../../public/assets/blog/ourschool.png";
// import { title } from "process";
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
    path: "/#",
    dropdownItems: [
      { title: "School Enrolment", path: "/whatwedo/education" },
      { title: "Residential Care", path: "/whatwedo/care" },
      { title: "Bridge Learning", path: "/projects/bridgelearning" },
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
// Export featuredPost as an array to allow usage with `.map` in templates
export const featuredPost = [
  {
    Image: ourSchool,
    author: "Samuel Adeshina • September 12, 2024 ",
    title: "OurSchool.africa Has Launched!",
    slug: "ourschool-africa-has-launched",
    description:
      "A Digital School for Every Child – OurSchool.africa Has Launched!",
    content: `
  <p>8.3 million - that’s the number of out-of-school children in Nigeria today according to UNICEF but these aren’t just numbers. They are children whose dreams are on hold, whose futures are uncertain. Many live in remote villages where schools don’t exist, or in displacement camps with no access to classrooms or teachers.
We knew we had to act. That’s why we launched OurSchool.africa, a digital school created for children who need education the most.</p>
<p>With pre-recorded curriculum-based lessons, our platform is designed to work offline or online, using low-cost mobile devices, smartboards, and solar-powered hubs to deliver quality education to even the hardest-to-reach places.</p>
<p>We’ve launched the beta version  but the journey is just beginning. We see a great promise for educating children in slums, IDP camps, and remote communities. With a strong focus on Northern Nigeria where the out-of-school crisis is most severe, the launch of OurSchool starts our mission to take education to children just where they are.</p>

 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <p class="font-bold text-2xl">Our Goal and Impact Projection:</p>
    <div class="grid grid-cols-1 gap-4">
     <div >
     <h3 class="font-bold">Reach 1 Million learners</h3>
     <p>Bringing learning to one million out-of-school children by end of 2026.</p>
     </div>
     <div>
     <h3 class="font-bold">1000+ Recorded Lessons</h3>
     <p>Creating recorded lessons covering everything taught in Nigerian primary schools so children can learn anytime, anywhere.</p>
     </div>
     <div>
     <h3 class="font-bold">Solar-powered learning hubs</h3>
     <p>Establishing safe, solar-powered learning spaces where children in remote areas can learn.</p>
     </div>
     <div>
     <h3 class="font-bold">1,000 learning devices distributed</h3>
     <p>Placing OurSchool tablets preloaded with lessons and AI-powered learning support into the hands of children who need them most.</p>
     </div>
    </div>
 </div>
  `,
  },
];

export const recentPosts = [
  {
    image: Abimbola2,
    author: "Samuel Adeshina • September 12, 2024 ",
    title: "FROM OUR FOUNDERS: Midyear Reflections and the Road Ahead",
    slug: "from-our-founders-midyear-reflections-and-the-road-ahead",
    description:
      "As we reach the midpoint of 2025, we see lives changing. We see children finding safety and daring to dream again. What keeps us inspired and moving forward are these stories of hope and your commitment to building a brighter future with us.",
    content: `
      <p>As we reach the midpoint of 2025, we see lives changing. We see children finding safety and daring to dream again. What keeps us inspired and moving forward are these stories of hope and your consistent commitment to building a brighter future with us. Every act of kindness, every donation, every prayer, every hour of volunteering truly counts.</p>
      
      <p>We are especially excited about the future of OurSchool (ourschool.africa), our offline digital school designed for out-of-school children in remote villages, IDP camps, and underserved communities with little or no internet or electricity. We are building classrooms without walls and taking school directly to the children who need it most, just where they are. It is a vision to reach 1 million more African children excluded from school over the next two years.</p>
      
      <p>The road ahead is long and our resources are lean. We are essentially bootstrapping a solution far bigger than our resources. But we press on because of you, and because of the early support from the good people of City Church Lagos, whose generosity helped lay the foundation for this ambitious goal. Our hope is that - maybe, just maybe - one child, or a hundred, or even millions, will receive the light of education through this effort.</p>
      
   
      
      <p>Communities with little or no internet or electricity. We are building classrooms without walls and taking school directly to the children who need it most, just where they are. It is a vision to reach 1 million more African children excluded from school over the next two years.

The road ahead is long and our resources are lean. We are essentially bootstrapping a solution far bigger than our resources. But we press on because of you, and because of the early support from the good people of City Church Lagos, whose generosity helped lay the foundation for this ambitious goal. Our hope is that - maybe, just maybe - one child, or a hundred, or even millions, will receive the light of education through this effort.

Thank you for standing with us, especially now, when compassion is needed most. Together, we are changing stories and building a future where every child has the chance to live to their fullest potential.</p>
    `,
  },
  {
    image: OutReach,
    author: "Samuel Adeshina • September 12, 2024 ",
    title: "Rescued and Restored: 11 More Children Find Home",
    slug: "rescued-and-restored-11-more-children-find-home",
    description:
      "Creating a beautiful indoor garden is a rewarding way to bring nature into your home.",
    content: `
    <p>Abandoned. Abused. Hungry. Homeless. Exploited. These were once the painful realities of the 11 children who joined our family in the first half of this year. Each child carries a unique story and a silent cry for help.</p>
    <p>One unforgettable moment unfolded in February, deep within the chaos of Ibadan’s largest market. There, we found the Ajayi siblings unkempt, roaming and begging just to survive. Amid the bustling of the market, their silent cries were easy to miss. But to those willing to look closely, they were loud and heartbreaking.</p>
    <p>
    Rescuing them wasn’t easy. We faced resistance from those who profited off their suffering, people who saw them as economic tools rather than children. Side by side with law enforcement, we fought to bring them to safety. Thanks to the collaborative efforts of the Oyo State Ministry of Women and Social Inclusion and law enforcement, the three siblings were rescued from the grip of modern-day slavery.
    </p>
    <p>Today, they live in safety. They have a warm bed, nourishing meals, clean clothes, access to education and a chance to simply be children again. They laugh. They learn. They heal. And every night, they sleep peacefully under a roof called home.</p>
    <p>Then there’s Femi, a young boy who had been out of school for over 10 years. After losing his mother, his father abandoned him on the streets of Lagos and returned to Delta State. Femi survived by doing odd jobs: cleaning bakeries, working on construction sites, sleeping wherever nightfall found him. Today, Femi has a safe bed, regular meals, and something he never imagined he would have - the promise of an education.</p>
    <p>And Sarah.</p>
    <p>Born to a single mother who later remarried, Sarah was not welcome in her mother’s new home. She was handed off to an “aunty from the city,” and from there, passed from one household to another. She became a domestic slave caring for children and elderly, hawking on the streets, often going hungry. </p>
    <p>Each morning, as other children walked to school, Sarah stood by the roadside, watching them pass by, longing for a life she believed was beyond her reach.
</p>
    <p>These are just a few of the many stories that show why this work matters. Thanks to your support, we continue to rescue children and restore hope. Together, we are giving them the one thing every child deserves - a chance to live and thrive.</p>

    `,
  },
  {
    image: Rescue,
    author: "Samuel Adeshina • September 12, 2025 ",
    title: "1,000 children benefit as NGO embarks on back-to-school outreach",
    slug: "1000-children-benefit-back-to-school-outreach",
    description:
      "When classrooms reopened this season, 1,000 children returned ready to learn because of a community-driven back-to-school outreach led by The Destiny Trust. What began as a targeted distribution of school supplies became a wider movement: health checks, community mobilisation and family support that together removed barriers keeping children out of class.",
    content: `
    <p>Across the outreach, teams worked directly in vulnerable neighbourhoods to deliver uniforms, textbooks, stationery and hygiene kits to children who otherwise would have started the school year empty-handed. Volunteers partnered with local schools, community leaders and health professionals to ensure each child received not only materials but also a brief health screening and referral where needed. The combined approach — material support plus wellbeing checks — meant more children could stay in class and focus on learning.</p>
    <p>Behind the numbers are families and children whose futures have been changed by this single intervention. For one family, receiving school uniforms and books removed a daily, painful choice between feeding the household and sending a child to school. For another child, the health check discovered a treatable condition that threatened attendance; a simple referral kept that child in class. These individual stories add up: when communities come together, small practical actions multiply into real, measurable change.</p>
    <p>Impact and approach</p>
    <p>
The outreach shows the power of combining immediate relief with systems thinking: distributing supplies addresses urgent needs, while partnerships with schools and health providers ensure continuity and follow-up. By mobilising volunteers, corporate partners and local leaders, The Destiny Trust reached 1,000 children quickly and cost-effectively — a model that can be scaled and repeated across other communities.</p>
    `,
  },
];

export const articles = [
  {
    id: 1,
    title: "From Our Founders",
    author: "Michael Chen • August 15, 2025 ",
    slug: "from-our-founders",
    description:
      "The Destiny Trust NGO has successfully reached over 1,000 children in their latest back-to-school outreach program, providing essential educational materials and support to vulnerable communities.",
    content: `
      <p>As we reach the midpoint of 2025, we see lives changing. We see children finding safety and daring to dream again. What keeps us inspired and moving forward are these stories of hope and your consistent commitment to building a brighter future with us. Every act of kindness, every donation, every prayer, every hour of volunteering truly counts.</p>
      
      <p>We are especially excited about the future of OurSchool (ourschool.africa), our offline digital school designed for out-of-school children in remote villages, IDP camps, and underserved communities with little or no internet or electricity. We are building classrooms without walls and taking school directly to the children who need it most, just where they are. It is a vision to reach 1 million more African children excluded from school over the next two years.</p>
      
      <p>The road ahead is long and our resources are lean. We are essentially bootstrapping a solution far bigger than our resources. But we press on because of you, and because of the early support from the good people of City Church Lagos, whose generosity helped lay the foundation for this ambitious goal. Our hope is that - maybe, just maybe - one child, or a hundred, or even millions, will receive the light of education through this effort.</p>
      
   
      
      <p>Communities with little or no internet or electricity. We are building classrooms without walls and taking school directly to the children who need it most, just where they are. It is a vision to reach 1 million more African children excluded from school over the next two years.

The road ahead is long and our resources are lean. We are essentially bootstrapping a solution far bigger than our resources. But we press on because of you, and because of the early support from the good people of City Church Lagos, whose generosity helped lay the foundation for this ambitious goal. Our hope is that - maybe, just maybe - one child, or a hundred, or even millions, will receive the light of education through this effort.

Thank you for standing with us, especially now, when compassion is needed most. Together, we are changing stories and building a future where every child has the chance to live to their fullest potential.</p>
    `,
    imgSrc: Abimbola2,
  },
  {
    id: 2,
    title: "Empowering Communities Through Educational Support Programs",
    slug: "empowering-communities-through-educational-support-programs",
    author: "Sarah Johnson",
    date: "August 28, 2024",
    description:
      "Today, they live in safety. They have a warm bed, nourishing meals, clean clothes, access to education and a chance to simply be children again. They laugh. They learn. They heal. And every night, they sleep peacefully under a roof called home.",
    content: `
      <p>Then there’s Femi, a young boy who had been out of school for over 10 years. After losing his mother, his father abandoned him on the streets of Lagos and returned to Delta State. Femi survived by doing odd jobs: cleaning bakeries, working on construction sites, sleeping wherever nightfall found him. Today, Femi has a safe bed, regular meals, and something he never imagined he would have - the promise of an education.</p>
      
      <p>And Sarah.</p>
      
      <p>Born to a single mother who later remarried, Sarah was not welcome in her mother’s new home. She was handed off to an “aunty from the city,” and from there, passed from one household to another. She became a domestic slave caring for children and elderly, hawking on the streets, often going hungry. </p>
   
      
      <p>These are just a few of the many stories that show why this work matters. Thanks to your support, we continue to rescue children and restore hope. Together, we are giving them the one thing every child deserves - a chance to live and thrive.</p>
      `,
    imgSrc: Rescue,
  },
  // <p>These programs are designed to create sustainable change, empowering not just individual children but entire communities.</p>
  //  <ul>
  //     <li>Establishment of 5 new learning centers</li>
  //     <li>Training of 50+ volunteer educators</li>
  //     <li>Implementation of digital literacy programs</li>
  //     <li>Creation of scholarship opportunities for outstanding students</li>
  //   </ul>
  {
    id: 3,
    title: "Building Sustainable Futures Through Community Partnership",
    slug: "building-sustainable-futures-through-community-partnership",
    author: "Michael Chen",
    date: "August 15, 2024",
    description:
      "Discover how community partnerships are creating lasting change and building sustainable futures for vulnerable children and their families.",
    content: `
      <p>Community partnership lies at the heart of everything we do at The Destiny Trust. We believe that sustainable change can only happen when communities are actively involved in the solution.</p>
      
      <p>Our partnership model involves:</p>
      <ul>
        <li>Local community leaders as program ambassadors</li>
        <li>Parent and guardian involvement in decision-making</li>
        <li>Youth-led initiatives and peer mentoring</li>
        <li>Collaboration with local businesses and organizations</li>
      </ul>
      
      <p>Through these partnerships, we've been able to create programs that are not only effective but also culturally relevant and sustainable long-term.</p>
      
      <p>The impact of this approach is evident in the success stories of children who have gone on to become community leaders themselves, creating a positive cycle of change.</p>
    `,
    imgSrc: Latest,
  },
  {
    id: 4,
    title: "Healthcare Access: A Critical Component of Child Development",
    slug: "healthcare-access-critical-component-child-development",
    author: "Dr. Amara Okafor",
    date: "July 30, 2024",
    description:
      "Exploring the vital role of healthcare access in child development and how The Destiny Trust is addressing healthcare gaps in underserved communities.",
    content: `
      <p>Access to quality healthcare is fundamental to a child's ability to learn, grow, and thrive. At The Destiny Trust, we recognize that educational support must be coupled with comprehensive healthcare services.</p>
      
      <p>Our healthcare initiatives include:</p>
      <ul>
        <li>Regular health screenings and check-ups</li>
        <li>Vaccination programs</li>
        <li>Nutritional support and feeding programs</li>
        <li>Mental health and counseling services</li>
        <li>Health education for families</li>
      </ul>
      
      <p>By addressing health barriers, we ensure that children can fully participate in educational programs and reach their maximum potential.</p>
      
      <p>The integration of healthcare and education services has resulted in improved school attendance, better academic performance, and overall enhanced quality of life for the children we serve.</p>
    `,
    imgSrc: Latest,
  },
];

 

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

    {
      name: "Jesutofunmi Olabenjo",
      role: "Legal Advisory",
      description:
        "Jesutofunmi is a Senior Associate Attorney at DGILaw (Farrell LLP, allied with Deloitte) with expertise in business immigration, oil and gas law, employment law, and corporate advisory. She holds an LLM in Corporate Law, Finance, and Governance from Harvard Law School and an LLB from Lagos State University, and is licensed to practice in Nigeria, New York, and Ontario. Passionate about mentoring young lawyers and supporting youth-focused causes, Jesutofunmi combines her legal career with active community service.",
      image: Olabenjo,
    },
    {
      name: "Oyindamola Fatusin",
      role: "Finance",
      description:
        "Oyindamola Fatusin is a Chartered Accountant with experience in audit and accounting across diverse industries, including shipping, financial services, and technology. She works at Chapel Hill Denham and brings her expertise in financial management to her role overseeing financial control at The Destiny Trust. Oyindamola is committed to ensuring transparent and efficient stewardship of resources in support of the Trust's mission.",
      image: oyinda,
    },
    // {
    //   name: "Athina Jeje",
    //   role: "Chief Operating Officer",
    //   description:
    //     "Athina is an education equity advocate and social impact professional with extensive experience in curriculum development, instructional design, and technology-driven learning solutions. She holds degrees in Education Management and a Master's in Educational Administration and Planning. Beginning her career as an Early Years teacher, she developed expertise in functional curriculum planning. As Chief Operating Officer at The Destiny Trust, Athina leads transformative education initiatives, including Nigeria's first structured alternative school for over-age out-of-school children. She also heads STEAM education training, equipping children with the skills essential for success in science, technology, engineering, arts, and mathematics.",
    //   image: "/assets/team/placeholder-female.jpg",
    // },
  ];