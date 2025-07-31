import Container from "@/app/_component/shared";
// import Image from "next/image";

const boardMembers = [
  {
    name: "ABIMBOLA OJENIKE",
    role: "Co-founder, Destiny Trust; Managing Partner, Slingstone LP.",
  },
  {
    name: "IKEM ISIEKWENA",
    role: "Co-founder, Destiny Trust; Managing Partner, SimmonsCooper; Ex-Director, NSIA.",
  },
  {
    name: "KEMI OJENIKE",
    role: "Co-founder, Destiny Trust; COO at Meristem Family Office.",
  },
  {
    name: "ODODO OWODEHA-ASHAKA",
    role: "Early Child Education Consultant; Proprietor, Adventure Schools.",
  },
  {
    name: "FOLUKE IRUKERA",
    role: "Early Child Education Consultant; Proprietor, Adventure Schools.",
  },
  {
    name: "NGOZI KEN-UDOCHUKWU",
    role: "Child development advocate; Founder, Olive Bloom Foundation.",
  },
];

const managementTeam = [
  { name: "Oluwatosin Olaseinde", role: "Growth and Partnerships" },
  { name: "Tejumade Adeyinka", role: "Technology and Skills Development" },
  { name: "Daniel Amuda", role: "Administration/HR" },
  { name: "Sandra Okwundu", role: "Technology and Skills Development" },
  { name: "Jesulayomi Oyelami", role: "Education" },
  { name: "Adegoke Adedoyin", role: "Governance" },
  { name: "Ifeyinwa Obienu", role: "Strategy and Communication" },
  { name: "Sanmi Abiodun", role: "Partnerships" },
  { name: "Jumoke Muftau", role: "Care Programmes" },
  { name: "Toyosi Abikoye", role: "Volunteering and Outreach" },
  { name: "Temitope Akinterinwa", role: "" },
  { name: "Oyindamola Fatusin", role: "Finance" },
  { name: "Jesutofunmi Olabenjo", role: "Non-executive Member" },
  { name: "Athina Jeje", role: "Chief Operating Officer" },
];

export default function AboutPage() {
  return (
    <Container>
      <main className="max-w-5xl mx-auto py-12 px-4">
        {/* About Us Section */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFB400]">
            About Us
          </h1>
          <p className="mb-6 text-lg text-black">
            We are a people who say no to the barriers that hold children
            back—homelessness, hunger, illiteracy, poverty, abuse, and neglect.
            We empower them to rise, thrive, and reach their fullest potential.
          </p>
        </section>

        {/* Commitment Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-[#FFB400]">
            A Commitment to Children
          </h2>
          <p className="mb-4 text-black">
            Our commitment is to children—their education, wellbeing, and
            future. We educate, empower, and care for street children and other
            vulnerable young people, with education as the centrepiece of our
            work. To make learning truly sustainable, we provide integrated care
            and support services for children and their families, addressing
            barriers like homelessness, poverty, neglect, abuse, and exposure to
            crime.
          </p>
          <p className="mb-4 text-black">
            We rehabilitate, shelter, feed, and offer healthcare to children in
            urgent need of care and protection. Since 2012, we have reached over
            20,000 children—and with every transformed life, we press forward
            toward a future of even greater impact.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-[#FFB400]">
            Our Vision
          </h2>
          <p className="text-black">
            We envision a world where every child, regardless of where they were
            born or circumstance, can dream freely, grow as a whole person, and
            live to the fullest extent of their potential. A world where no
            child is held back by poverty, and where education is a pathway to
            empowerment, dignity, and lasting change.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-[#FFB400]">
            Our Mission
          </h2>
          <p className="text-black">
            To give at-risk children a new start and a fair chance to thrive by
            nurturing, protecting, and empowering them through integrated and
            holistic support centred on education as a tangible means of
            empowerment. We are breaking the cycle of poverty, unlocking every
            child&apos;s full potential, and meeting them where they need us most,
            with education as the foundation for lasting change.
          </p>
        </section>

        {/* Why We Invest Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-[#FFB400]">
            Why We Invest in Children
          </h2>
          <p className="mb-4 text-black">
            We believe children hold endless possibilities to recreate a better
            future for our society. Our future can only be as great as what we
            make of the children today.
          </p>
          <p className="mb-4 text-black">
            This is why we are big on their wellbeing, education and
            empowerment. With this, we are breaking the span of
            transgenerational poverty, rescuing children that would be left
            behind and building them into valuable human capital that Africa
            would need to thrive in the future.
          </p>
          <p className="text-black">
            Together, we can touch more lives; we can be the hope of that one
            child that could become a menace to the society without a timely
            intervention providing care, education and empowerment.
          </p>
        </section>

        {/* Our People Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-[#FFB400]">
            Our People
          </h2>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-black">Board Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boardMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-black/80 rounded-lg p-5 shadow-md border border-[#FFB400]"
                >
                  <h4 className="font-bold text-[#FFB400] mb-2">
                    {member.name}
                  </h4>
                  <p className="text-white">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">
              Management Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {managementTeam.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-black/80 rounded-lg p-5 shadow-md border border-[#FFB400]"
                >
                  <h4 className="font-bold text-[#FFB400] mb-2">
                    {member.name}
                  </h4>
                  <p className="text-white">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}
