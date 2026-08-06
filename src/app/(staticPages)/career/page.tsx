"use client";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "@/app/_component/shared";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CareerRole = {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  reportsTo: string;
  summary: string[];
  responsibilities: string[];
  qualifications: string[];
};

const roles: CareerRole[] = [
  {
    id: "programme-coordinator",
    title: "Programme Coordinator",
    location: "Kaduna State",
    employmentType: "Full-time, Fixed-term",
    reportsTo: "Chief Operating Officer",
    summary: [
      "Lead the day-to-day delivery of a multi-year girls' education programme focused on school re-entry, policy adoption, implementation readiness and collaboration with public education systems.",
      "Translate policy objectives into practical implementation approaches, help education actors identify readiness gaps, test workable tools and generate evidence that supports adoption and wider rollout.",
    ],
    responsibilities: [
      "Lead programme planning, implementation, coordination and periodic review.",
      "Ensure effective coordination of school, community and institutional strengthening activities.",
      "Monitor progress against programme objectives, outputs, timelines and approved budgets.",
      "Lead regular programme and implementation review meetings and follow up on agreed actions.",
      "Support transition from implementation readiness to implementation support as relevant policies and frameworks are adopted.",
      "Coordinate relationships with state and Local Government education authorities, schools, community organisations and other stakeholders.",
      "Lead policy engagement activities aimed at supporting the adoption, implementation and strengthening of school re-entry frameworks.",
      "Coordinate the development, adaptation and testing of tools at various programme levels.",
      "Coordinate capacity-building and technical support for education officials, school leaders, teachers, counsellors and other frontline actors.",
      "Work with the Monitoring, Evaluation and Learning team to generate and use evidence for programme improvement, policy engagement and implementation learning.",
      "Ensure lessons from project activities are documented and used to inform policy engagement, programme adaptation and wider rollout planning.",
      "Supervise programme staff and coordinate field operations.",
      "Promote effective collaboration across programme, finance, safeguarding, communications and MEL functions.",
      "Ensure programme activities comply with safeguarding, financial, data protection and operational standards.",
    ],
    qualifications: [
      "Degree in Education, Development Studies, Public Policy, Social Sciences or a related field.",
      "At least five years' relevant experience in programme management, preferably within education, girls' education, child protection, policy implementation or systems-strengthening programmes.",
      "Demonstrated experience working with government institutions, education authorities or other public systems.",
      "Experience supporting policy engagement, institutional strengthening, implementation planning or technical assistance will be an advantage.",
      "Strong project management, stakeholder engagement, coordination and team leadership skills.",
      "Ability to work effectively across government, school, community and partner settings.",
      "Strong analytical, problem-solving and organisational skills.",
      "Excellent written and verbal communication skills.",
    ],
  },
  {
    id: "finance-admin-officer",
    title: "Finance and Administration Officer",
    location: "Lagos State",
    employmentType: "Full-time",
    reportsTo: "Chief Operating Officer",
    summary: [
      "Support effective financial management, grant administration and day-to-day administrative operations across the organisation.",
      "Support the financial and administrative requirements of designated grant-funded programmes while contributing to wider finance, procurement, records management and operational processes.",
    ],
    responsibilities: [
      "Support the preparation, consolidation and monitoring of organisational and programme budgets.",
      "Maintain accurate and up-to-date accounting records for income, expenditure, advances and other financial transactions.",
      "Record and appropriately classify expenditure across programmes, projects and organisational cost centres.",
      "Support regular budget-versus-actual reviews and identify material variances for management attention.",
      "Prepare payment documentation and process approved payments in accordance with financial procedures and approval requirements.",
      "Support periodic bank, cash and ledger reconciliations.",
      "Maintain complete supporting documentation for financial transactions and ensure records are properly organised and retrievable.",
      "Support cash-flow planning and expenditure forecasting across programmes and operational units.",
      "Support the financial management of grants from institutional, corporate and philanthropic funders.",
      "Maintain separate and accurate records for restricted grants and ensure expenditure is charged to the appropriate funding source and budget line.",
      "Monitor expenditure against approved grant budgets, implementation periods and funding conditions.",
      "Support the preparation of donor financial reports and accompanying financial documentation.",
      "Support compliance with grant agreements, donor financial requirements and internal policies.",
      "Support procurement processes in accordance with organisational policies and approved budgets.",
      "Maintain procurement records, quotations, invoices, vendor information and related documentation.",
      "Coordinate routine administrative arrangements for meetings, training, travel and programme activities where required.",
      "Contribute to the continuous improvement of financial and administrative systems.",
      "Work collaboratively with programme, MEL, fundraising and other teams to strengthen coordination between programme delivery and financial management.",
    ],
    qualifications: [
      "Bachelor's degree or equivalent qualification in Accounting, Finance, Business Administration or a related field.",
      "Professional accounting qualification or progress towards one will be an advantage.",
      "At least three years' relevant experience in finance, accounting or administration, preferably within a nonprofit, development or social-impact organisation.",
      "Experience managing institutional grants, restricted funding and donor compliance will be an advantage.",
      "Experience with budgeting, reconciliations, financial reporting and maintenance of accounting records.",
      "Good understanding of regulatory compliance, financial controls and procurement.",
      "Proficiency in Microsoft Excel and other standard office applications; experience with accounting or financial management software is desirable.",
      "Strong numerical and analytical ability, excellent attention to detail and high standards of integrity.",
    ],
  },
];

function createMailTo(jobTitle: string) {
  const subject = encodeURIComponent(jobTitle);
  const body = encodeURIComponent(
    `Hello The Destiny Trust,\n\nI am applying for the ${jobTitle} role. Please find my CV and cover note attached.\n\nKind regards,`
  );

  return `mailto:hello@destinytrust.org?subject=${subject}&body=${body}`;
}

export default function CareerPage() {
  const [openRoleId, setOpenRoleId] = useState<string | null>(
    roles.length > 0 ? roles[0].id : null
  );

  const toggleRole = (id: string) => {
    setOpenRoleId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-w-0 bg-[#faf8f3] text-gray-900">
      <AnimatedSection
        as="section"
        animateOnMount
        className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(255,180,0,0.18),_transparent_30%),linear-gradient(180deg,_#fffdf7_0%,_#faf8f3_100%)] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FFB400]/10 blur-3xl" />
          <div className="absolute right-0 top-24 h-40 w-40 rounded-full bg-black/5 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-[#FFB400]/20 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6300] shadow-sm backdrop-blur">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-[#FFB400]" />
              Careers at The Destiny Trust
            </span> */}
            <h1 className="mt-6 font-heading text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
              Join our team and help create lasting change.
            </h1>
            <p className="mx-auto mt-6 max-w-[70%] text-base leading-8 text-black sm:text-lg">
              Put your skills to work in programmes that transform the lives of
              children and strengthen the systems that support them.
            </p>

            {/* <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Open roles", value: `${roles.length}` },
                { label: "Locations", value: "Kaduna + Lagos" },
                { label: "Apply by", value: "Email only" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/5 bg-white/85 p-4 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection
        as="section"
        animateOnMount
        className="px-4 py-16 sm:px-6 lg:px-8"
      >
        <Container>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-yellow">
                Current openings
              </p>
              <h2 className="mt-3 max-w-2xl font-heading text-2xl font-bold text-gray-950 sm:text-3xl">
Join us to make lasting change
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
                We are looking for people who are thoughtful, collaborative and
                ready to deliver meaningful work with care and precision.
              </p>
            </div>

            <a
              href="mailto:hello@destinytrust.org"
              className="inline-flex items-center gap-2 text-sm font-semibold text-yellow"
            >
              hello@destinytrust.org
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6">
            {roles.map((role) => {
              const isOpen = openRoleId === role.id;

              return (
                <Card
                  key={role.id}
                  className="overflow-hidden border border-black/5 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.11)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleRole(role.id)}
                    className="w-full text-left transition-colors hover:bg-[#fffaf0]"
                    aria-expanded={isOpen}
                  >
                    <CardHeader className="bg-white p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <CardDescription className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow">
                            Open position
                          </CardDescription>
                          <CardTitle className="mt-2 font-heading text-2xl text-gray-950 sm:text-3xl">
                            {role.title}
                          </CardTitle>

                          <div className="mt-4 flex flex-wrap gap-2 text-xs">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-medium text-black">
                              <MapPin className="h-3.5 w-3.5" />
                              {role.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5  font-medium text-black">
                              <Clock3 className="h-3.5 w-3.5" />
                              {role.employmentType}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="hidden text-xs font-semibold text-black sm:inline">
                            {isOpen ? "Hide details" : "View details"}
                          </span>
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-yellow shadow-sm">
                            <ChevronDown
                              className={`h-5 w-5 text-white transition-transform duration-200 ${
                                isOpen ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </button>

                  {isOpen && (
                    <CardContent className="space-y-8 border-t border-black/5 bg-[#fcfbf7] p-6 sm:p-8">
                      <div className="grid gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm sm:grid-cols-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gra">
                            Location
                          </p>
                          <p className="mt-2 text-sm font-semibold text-black">
                            {role.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black">
                            Employment type
                          </p>
                          <p className="mt-2 text-sm font-semibold text-black">
                            {role.employmentType}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black">
                            Reports to
                          </p>
                          <p className="mt-2 text-sm font-semibold text-gray-950">
                            {role.reportsTo}
                          </p>
                        </div>
                      </div>

                      <section>
                        <h3 className="font-heading text-lg font-semibold text-gray-950 sm:text-xl">
                          Role Purpose
                        </h3>
                        <div className="mt-4 space-y-4 text-base leading-8 text-gray-600">
                          {role.summary.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h3 className="font-heading text-lg font-semibold text-gray-950 sm:text-xl">
                          Key responsibilities
                        </h3>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {role.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm leading-6 text-gray-700 shadow-sm"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h3 className="font-heading text-lg font-semibold text-gray-950 sm:text-xl">
                          Qualifications and experience
                        </h3>
                        <ul className="mt-4 space-y-3">
                          {role.qualifications.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-gray-700"
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFB400]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      <div className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="h-4 w-4 text-[#c08a00]" />
                          Apply to hello@destinytrust.org with the job title in the subject line.
                        </div>
                        <Button
                          asChild
                          className="w-full bg-[#FFB400] text-black shadow-sm hover:bg-[#e6a200] sm:w-auto"
                        >
                          <a href={createMailTo(role.title)}>
                            Apply by email
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection
        as="section"
        animateOnMount
        className="px-4 pb-20 sm:px-6 lg:px-8"
      >
        <Container>
          <div className="rounded-3xl border border-[#FFB400]/20 bg-black px-6 py-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:px-8 sm:py-10">
            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FFD56A]">
                  How to apply
                </p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Send your CV and cover note to our recruitment inbox.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  Email hello@destinytrust.org and include the exact job title in the
                  subject line. Only successful applicants will be contacted.
                </p>
              </div>
              <div className="rounded-2xl bg-black ">
                <p className="text-sm text-white/70">Deadline</p>
                <p className="mt-1 text-2xl font-bold text-white">August 15, 2026</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-[#FFB400] text-slate-950 shadow-sm hover:bg-[#f2aa00]"
                  >
                    <a href="mailto:hello@destinytrust.org?subject=Career%20Application">
                      <Mail className="h-4 w-4" />
                      Email now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
}