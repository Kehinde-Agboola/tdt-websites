import Link from "next/link";
import PolicyLayout from "@/app/_component/PolicyLayout";

type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "clauses"; items: { id?: string; text: string }[] }
  | { type: "bullets"; items: { title?: string; text: string }[] }
  | { type: "definitions"; items: { term: string; def: string }[] };

type Section = { number: string; title: string; blocks: Block[] };

const sections: Section[] = [
  {
    number: "1",
    title: "Purpose and Commitment",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust Children (“The Destiny Trust” or the “Organisation”) is committed to the highest standards of integrity, transparency, accountability, and responsible stewardship in the receipt, management, and application of funds and resources entrusted to it.",
      },
      {
        type: "p",
        text: "This Policy establishes the minimum standards and procedures for preventing, detecting, managing, and reporting money laundering, terrorism financing, proliferation financing, and related financial crime risks in the Organisation’s operations, fundraising, partnerships, procurement, grants, programme delivery, and community engagements.",
      },
      {
        type: "p",
        text: "The Destiny Trust shall not knowingly receive, retain, transfer, apply, or facilitate the use of funds, goods, services, or other resources connected with criminal activity, terrorism, terrorism financing, proliferation financing, child exploitation, trafficking, corruption, fraud, or any activity inconsistent with its mission and values.",
      },
    ],
  },
  {
    number: "2",
    title: "Legal and Regulatory Framework",
    blocks: [
      {
        type: "p",
        text: "This Policy shall be interpreted and applied in accordance with applicable laws, regulations, and regulatory guidance, including:",
      },
      {
        type: "clauses",
        items: [
          { id: "a", text: "the Money Laundering (Prevention and Prohibition) Act 2022;" },
          { id: "b", text: "the Terrorism (Prevention and Prohibition) Act 2022;" },
          {
            id: "c",
            text: "applicable regulations, directives, and guidance issued by the Economic and Financial Crimes Commission, the Special Control Unit Against Money Laundering, the Nigerian Financial Intelligence Unit, and other competent authorities;",
          },
          {
            id: "d",
            text: "applicable sanctions, counter-terrorism, anti-corruption, child protection, data protection, and nonprofit governance obligations; and",
          },
          {
            id: "e",
            text: "international standards and best practices relevant to nonprofit organisations, including relevant Financial Action Task Force recommendations.",
          },
        ],
      },
    ],
  },
  {
    number: "3",
    title: "Scope",
    blocks: [
      {
        type: "p",
        text: "This Policy applies to all Trustees, Board members, employees, volunteers, consultants, contractors, programme partners, implementing partners, donors, vendors, service providers, and any other persons acting for or on behalf of The Destiny Trust.",
      },
      {
        type: "p",
        text: "It applies to all donations, grants, sponsorships, fundraising activities, procurement, programme expenditure, partnerships, financial transactions, in-kind support, community interventions, vendor relationships, and any activity involving the receipt or use of funds, goods, services, or resources by or for the Organisation.",
      },
    ],
  },
  {
    number: "4",
    title: "Definitions",
    blocks: [
      { type: "p", text: "For the purpose of this Policy:" },
      {
        type: "definitions",
        items: [
          {
            term: "“AML/CFT/CPF”",
            def: "means anti-money laundering, combating the financing of terrorism, and countering proliferation financing.",
          },
          {
            term: "“Beneficial Owner”",
            def: "means the natural person who ultimately owns, controls, benefits from, or exercises effective control over a donor, partner, vendor, contractor, organisation, legal entity, trust, or arrangement.",
          },
          {
            term: "“Donation”",
            def: "includes cash, bank transfer, cheque, grant, sponsorship, gift, in-kind support, property, equipment, services, or any other resource provided to The Destiny Trust.",
          },
          {
            term: "“Enhanced Due Diligence”",
            def: "means additional checks undertaken where a donor, partner, vendor, transaction, geography, sector, payment channel, or other relationship presents higher AML/CFT/CPF risk.",
          },
          {
            term: "“Politically Exposed Person” or “PEP”",
            def: "means a person who is or has been entrusted with a prominent public function, including their close associates and immediate family members.",
          },
          {
            term: "“Suspicious Activity”",
            def: "means any activity, transaction, donation, request, relationship, or circumstance that appears unusual, inconsistent, concealed, deceptive, unsupported by a lawful purpose, linked to criminality, or capable of exposing The Destiny Trust to money laundering, terrorism financing, proliferation financing, corruption, fraud, child exploitation, or related risk.",
          },
        ],
      },
    ],
  },
  {
    number: "5",
    title: "Governance and Responsibilities",
    blocks: [
      {
        type: "p",
        text: "The Board of Trustees shall exercise overall oversight over this Policy and ensure that the Organisation maintains reasonable controls for AML/CFT/CPF compliance.",
      },
      {
        type: "p",
        text: "The Executive Director shall be responsible for ensuring that this Policy is implemented across the Organisation and supported by appropriate procedures, training, reporting channels, and internal controls.",
      },
      {
        type: "p",
        text: "The Board or Executive Director may designate a Compliance Officer or compliance function to coordinate AML/CFT/CPF implementation, including donor and partner due diligence, risk assessment, monitoring, internal reporting, record keeping, and regulatory engagement.",
      },
      {
        type: "p",
        text: "All employees, volunteers, consultants, contractors, and persons acting on behalf of The Destiny Trust have a responsibility to comply with this Policy and promptly report suspicious activity or concerns.",
      },
    ],
  },
  {
    number: "6",
    title: "Risk-Based Approach",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall apply a risk-based approach to AML/CFT/CPF compliance. The level of due diligence required shall depend on the nature, value, source, purpose, geography, payment method, and risk profile of the donation, transaction, partner, vendor, or activity.",
      },
      {
        type: "p",
        text: "The Destiny Trust may apply simplified due diligence to low-risk, routine, and low-value engagements, standard due diligence to ordinary donor, vendor, and partner relationships, and enhanced due diligence to higher-risk donations, counterparties, geographies, or activities.",
      },
      {
        type: "p",
        text: "Higher-risk circumstances may include large or unusual donations, anonymous or third-party donations, cash donations, foreign donations, donations from high-risk jurisdictions, donations from PEPs, donations linked to high-risk sectors, unclear source of funds, unusual refund requests, complex or concealed ownership structures, adverse media, sanctions concerns, or any connection with violence, extremism, exploitation, trafficking, corruption, or organised crime.",
      },
    ],
  },
  {
    number: "7",
    title: "Donor, Partner and Vendor Due Diligence",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall take reasonable steps to identify and verify donors, partners, vendors, contractors, and other relevant counterparties, having regard to the level of risk presented.",
      },
      {
        type: "p",
        text: "Due diligence may include obtaining and verifying names, contact details, legal status, registration documents, beneficial ownership information, identity documents, source of funds or resources, purpose of donation, nature of business or activity, relationship to the Organisation, sanctions or watchlist exposure, PEP status, and adverse media information.",
      },
      {
        type: "p",
        text: "Where a person or entity acts on behalf of another person, organisation, trust, nominee, or intermediary, The Destiny Trust may require information on the person or entity ultimately providing, controlling, or benefiting from the funds, goods, services, or relationship.",
      },
      {
        type: "p",
        text: "The Destiny Trust shall not establish or continue a relationship where adequate due diligence cannot be completed, where information provided is false or misleading, or where the relationship presents unacceptable AML/CFT/CPF, safeguarding, legal, regulatory, or reputational risk.",
      },
    ],
  },
  {
    number: "8",
    title: "Donations, Grants and Fundraising Controls",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust may refuse, return, suspend, or reject any donation, grant, sponsorship, gift, or support where there is concern that it may be connected to money laundering, terrorism financing, proliferation financing, corruption, fraud, child exploitation, trafficking, criminal activity, or any purpose inconsistent with the Organisation’s mission.",
      },
      { type: "p", text: "The Destiny Trust shall apply additional scrutiny to:" },
      {
        type: "clauses",
        items: [
          { id: "a", text: "anonymous donations above thresholds set by the Organisation;" },
          { id: "b", text: "cash donations;" },
          { id: "c", text: "foreign donations;" },
          { id: "d", text: "donations from PEPs or persons connected to PEPs;" },
          { id: "e", text: "donations from high-risk sectors or high-risk jurisdictions;" },
          { id: "f", text: "donations made through intermediaries or third parties;" },
          { id: "g", text: "donations subject to unusual conditions;" },
          {
            id: "h",
            text: "donations where the donor requests secrecy, concealment, unusual documentation, or unusual refund arrangements; and",
          },
          {
            id: "i",
            text: "donations that appear intended to influence beneficiary selection, procurement, recruitment, programme decisions, safeguarding decisions, public advocacy, or governance outcomes.",
          },
        ],
      },
      {
        type: "p",
        text: "The Destiny Trust shall not accept donations that compromise its independence, child safeguarding standards, programme integrity, charitable purpose, or public trust.",
      },
    ],
  },
  {
    number: "9",
    title: "Prohibited Dealings",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall not knowingly deal with, receive support from, provide support to, contract with, or otherwise facilitate any person or entity that is sanctioned, designated, prohibited by law, involved in terrorism, terrorism financing, proliferation financing, money laundering, corruption, trafficking, child exploitation, abuse, organised crime, or any activity that creates unacceptable legal, regulatory, safeguarding, or reputational risk.",
      },
      {
        type: "p",
        text: "No funds, goods, services, equipment, logistics, facilities, or programme resources of The Destiny Trust shall be used to directly or indirectly support armed groups, terrorist groups, criminal networks, exploitative actors, traffickers, or persons involved in abuse, exploitation, or violence against children.",
      },
    ],
  },
  {
    number: "10",
    title: "Politically Exposed Persons",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall apply enhanced due diligence to donations, partnerships, sponsorships, procurement, or other relationships involving PEPs, their close associates, or immediate family members.",
      },
      {
        type: "p",
        text: "Enhanced due diligence may include review of source of funds, source of wealth, public office connection, purpose of donation, adverse media, sanctions concerns, anti-corruption risk, and whether the relationship may create undue influence over the Organisation.",
      },
      {
        type: "p",
        text: "A PEP relationship shall not be accepted or continued where it may compromise The Destiny Trust’s independence, integrity, charitable purpose, child safeguarding obligations, or public trust.",
      },
    ],
  },
  {
    number: "11",
    title: "Sanctions, Terrorism Financing and High-Risk Jurisdictions",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall take reasonable steps to screen material donors, partners, vendors, implementing partners, contractors, and other high-risk counterparties against applicable sanctions, terrorism financing, adverse media, and other relevant risk indicators.",
      },
      {
        type: "p",
        text: "The Destiny Trust shall give special attention to transactions, donations, partnerships, or activities involving persons, organisations, banks, payment channels, or jurisdictions known or suspected to present higher AML/CFT/CPF risk, including jurisdictions identified as high-risk or under increased monitoring by competent authorities or international standard-setting bodies.",
      },
      {
        type: "p",
        text: "Where a proposed transaction or relationship involves high-risk geography, concealed ownership, unusual routing of funds, unexplained urgency, or no apparent lawful purpose, The Destiny Trust shall escalate the matter for enhanced review before proceeding.",
      },
    ],
  },
  {
    number: "12",
    title: "Monitoring and Red Flags",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall monitor relevant relationships, donations, grants, procurement, partnerships, and programme expenditure for unusual or suspicious patterns.",
      },
      { type: "p", text: "Red flags may include:" },
      {
        type: "clauses",
        items: [
          { id: "a", text: "refusal to provide identification or source-of-funds information;" },
          { id: "b", text: "false, inconsistent, incomplete, or unverifiable information;" },
          { id: "c", text: "large donations inconsistent with known donor profile;" },
          { id: "d", text: "requests to return donations to a different account or third party;" },
          { id: "e", text: "insistence on secrecy or avoidance of documentation;" },
          { id: "f", text: "unusual cash donations;" },
          { id: "g", text: "donations routed through multiple accounts without clear purpose;" },
          {
            id: "h",
            text: "donor attempts to influence beneficiary selection, safeguarding decisions, procurement, employment, or programme implementation;",
          },
          {
            id: "i",
            text: "adverse media linking a donor, partner, vendor, or intermediary to crime, corruption, terrorism, exploitation, trafficking, or abuse;",
          },
          {
            id: "j",
            text: "donations or partnerships involving sanctioned persons or high-risk jurisdictions;",
          },
          {
            id: "k",
            text: "unusual procurement pricing, unexplained urgency, or refusal to follow procurement controls; and",
          },
          {
            id: "l",
            text: "any activity inconsistent with The Destiny Trust’s child protection, safeguarding, or ethical standards.",
          },
        ],
      },
    ],
  },
  {
    number: "13",
    title: "Reporting, Escalation and Anti-Tipping-Off",
    blocks: [
      {
        type: "p",
        text: "All employees, volunteers, contractors, consultants, and persons acting on behalf of The Destiny Trust shall promptly report any suspicious activity or AML/CFT/CPF concern to the Executive Director, Compliance Officer, Board Chair, or any designated reporting channel.",
      },
      {
        type: "p",
        text: "The Organisation shall review the concern and, where appropriate, make a report to the relevant competent authority, including the Nigerian Financial Intelligence Unit, SCUML, EFCC, law enforcement, or any other regulator or authority with jurisdiction over the matter.",
      },
      {
        type: "p",
        text: "No person shall inform a donor, partner, vendor, contractor, beneficiary, volunteer, or any other person that a suspicious activity report has been made, is being considered, or that an AML/CFT/CPF review or investigation is ongoing, where doing so may prejudice the review, investigation, or legal process.",
      },
      {
        type: "p",
        text: "Reports made in good faith shall be treated responsibly and no person shall suffer retaliation for reporting a genuine concern.",
      },
    ],
  },
  {
    number: "14",
    title: "Cooperation with Regulators and Law Enforcement",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall cooperate with competent regulators and law enforcement agencies in accordance with applicable law.",
      },
      {
        type: "p",
        text: "Where The Destiny Trust receives a lawful request for information, documents, or cooperation, the Organisation shall take appropriate steps to verify the request, protect confidentiality and data security, preserve relevant records, and provide required information in accordance with law.",
      },
      {
        type: "p",
        text: "Confidentiality obligations shall not be used to obstruct lawful regulatory or law enforcement requests.",
      },
    ],
  },
  {
    number: "15",
    title: "Enhanced Internal Review",
    blocks: [
      {
        type: "p",
        text: "Notwithstanding any statutory reporting threshold, The Destiny Trust may subject any donation, grant, sponsorship, partnership, procurement arrangement, or financial transaction to enhanced review where, in the opinion of the Executive Director, Compliance Officer, or Board, the nature, source, structure, purpose, circumstances, or associated risk indicators warrant additional scrutiny.",
      },
      {
        type: "p",
        text: "The Organisation may request additional information, conduct enhanced due diligence, delay acceptance of funds, impose conditions, refuse a transaction, or make a voluntary report to a competent authority where it reasonably considers such action necessary to protect the Organisation, its beneficiaries, its charitable mission, or the integrity of the financial system.",
      },
      {
        type: "p",
        text: "The Organisation may adopt internal review, monitoring, documentation, and escalation thresholds that are more stringent than those prescribed by law where necessary to address its risk profile as a child-focused charitable organisation.",
      },
    ],
  },
  {
    number: "16",
    title: "Record Keeping",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall maintain records of donor, partner, vendor, contractor, and relevant counterparty due diligence, approvals, risk assessments, donation records, suspicious activity reviews, reports, regulatory correspondence, and related AML/CFT/CPF documents.",
      },
      {
        type: "p",
        text: "Records shall be retained for at least five years after the end of the relevant relationship, transaction, project, donation, or regulatory process, or for a longer period where required by law, litigation, investigation, audit, grant conditions, or organisational policy.",
      },
      {
        type: "p",
        text: "Records shall be stored securely and accessed only by authorised persons.",
      },
    ],
  },
  {
    number: "17",
    title: "Training and Awareness",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust shall provide AML/CFT/CPF awareness and training proportionate to role and responsibility.",
      },
      {
        type: "p",
        text: "Training may cover donor and partner due diligence, suspicious activity indicators, fundraising controls, procurement risks, sanctions screening, PEP risks, child safeguarding-related financial crime risks, reporting channels, anti-tipping-off obligations, and record keeping.",
      },
    ],
  },
  {
    number: "18",
    title: "Breach and Enforcement",
    blocks: [
      { type: "p", text: "Compliance with this Policy is mandatory." },
      {
        type: "p",
        text: "Any breach may result in disciplinary action, termination of engagement, rejection or return of funds, termination of partnership, suspension of activities, regulatory reporting, recovery of losses, legal action, or any other appropriate remedial measure.",
      },
      {
        type: "p",
        text: "The Destiny Trust may refuse to accept or continue any donation, grant, sponsorship, partnership, procurement, volunteer engagement, or other relationship where it presents unacceptable AML/CFT/CPF, safeguarding, legal, regulatory, ethical, or reputational risk.",
      },
    ],
  },
  {
    number: "19",
    title: "Review",
    blocks: [
      {
        type: "p",
        text: "This Policy shall be reviewed periodically and at least every two years, or earlier where required by changes in law, regulation, organisational activities, donor requirements, risk exposure, or lessons arising from incidents, audits, investigations, or regulatory engagement.",
      },
    ],
  },
  {
    number: "20",
    title: "Acknowledgement",
    blocks: [
      {
        type: "p",
        text: "Donors, partners, vendors, contractors, implementing partners, volunteers, employees, and other relevant persons may be required to acknowledge this Policy and cooperate with The Destiny Trust’s due diligence, monitoring, reporting, and compliance requirements.",
      },
      {
        type: "p",
        text: "Failure to cooperate with reasonable AML/CFT/CPF due diligence or compliance requirements may result in refusal, suspension, or termination of the relevant relationship.",
      },
    ],
  },
];

const policyMeta: { label: string; value: string }[] = [
  { label: "Effective Date", value: "June 7, 2026" },
  { label: "Version", value: "2.0" },
  { label: "Review Cycle", value: "At least every 2 years" },
];

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={key} className="text-sm leading-relaxed text-gray-700">
          {block.text}
        </p>
      );
    case "h":
      return (
        <h3 key={key} className="text-base font-semibold text-gray-900">
          {block.text}
        </h3>
      );
    case "clauses":
      return (
        <ul key={key} className="space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-700">
              {item.id && (
                <span className="shrink-0 font-medium text-yellow">
                  {item.id}.
                </span>
              )}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      );
    case "bullets":
      return (
        <ul key={key} className="space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-700">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />
              <span>
                {item.title && (
                  <span className="font-semibold text-gray-900">
                    {item.title} —{" "}
                  </span>
                )}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
    case "definitions":
      return (
        <dl key={key} className="space-y-3">
          {block.items.map((item, i) => (
            <div key={i} className="text-sm leading-relaxed text-gray-700">
              <dt className="inline font-semibold text-gray-900">
                {item.term}{" "}
              </dt>
              <dd className="inline">{item.def}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

const AmlPolicyPage = () => {
  return (
    <PolicyLayout>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
            The Destiny Trust Children
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Anti-Money Laundering, Combating Financing of Terrorism and
            Counter-Proliferation Financing Policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            This Policy establishes the minimum standards and procedures for
            preventing, detecting, managing, and reporting money laundering,
            terrorism financing, proliferation financing, and related financial
            crime risks across The Destiny Trust’s operations.
          </p>

          <dl className="mt-6 grid gap-3 rounded-2xl bg-[#FFF8E5] p-5 sm:grid-cols-3">
            {policyMeta.map((meta) => (
              <div key={meta.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-yellow">
                  {meta.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-gray-900">
                  {meta.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.number} className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">
                  <span className="text-yellow">{section.number}.</span>{" "}
                  {section.title}
                </h2>
                {section.blocks.map((block, i) => renderBlock(block, i))}
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-gray-50 p-5 text-sm leading-relaxed text-gray-800 ring-1 ring-gray-200">
            For further information about this Policy, contact The Destiny Trust
            at info@destinytrust.org.
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/conflict-of-interest-policy"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Conflict of Interest Policy
            </Link>
            <Link
              href="/get-involve"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Get involved
            </Link>
          </div>
    </PolicyLayout>
  );
};

export default AmlPolicyPage;
