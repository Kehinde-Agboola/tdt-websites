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
        text: "The Destiny Trust Children Foundation (\"TDT\" or the \"Organisation\") is committed to creating and maintaining an environment where every person is treated with dignity, respect, fairness, and inclusion.",
      },
      {
        type: "p",
        text: "As an organisation dedicated to the education, wellbeing, protection, and empowerment of children and vulnerable communities, TDT believes that every individual deserves equal opportunity to participate, contribute, learn, work, volunteer, and thrive free from discrimination, harassment, bullying, intimidation, victimisation, or exclusion.",
      },
      {
        type: "p",
        text: "TDT does not tolerate discrimination, harassment, bullying, victimisation, abuse of authority, retaliation, or any conduct that undermines the dignity, safety, wellbeing, or equal participation of any person.",
      },
      {
        type: "p",
        text: "This Policy forms part of TDT's commitment to safeguarding, child protection, organisational integrity, diversity, inclusion, and respect for human dignity.",
      },
    ],
  },
  {
    number: "2",
    title: "Scope",
    blocks: [
      {
        type: "p",
        text: "This Policy applies to all persons who work for, volunteer with, engage with, receive services from, partner with, or otherwise interact with TDT, including: Trustees and Board Members, Advisory Board Members; employees, volunteers, consultants and contractors; interns, vendors and service providers, donors and partners, beneficiaries, children and young people, parents, guardians and caregivers, visitors and guests; and participants in TDT programmes, events, activities, learning platforms, digital communities, and residential facilities.",
      },
      {
        type: "p",
        text: "This Policy applies to conduct occurring: in the workplace, during programme delivery, outreaches, training programmes, meetings and events, within residential facilities, during travel, on digital platforms, on social media, in online learning environments; and in any circumstance connected with the activities of TDT.",
      },
    ],
  },
  {
    number: "3",
    title: "Equality and Inclusion Principles",
    blocks: [
      { type: "p", text: "TDT is committed to:" },
      {
        type: "clauses",
        items: [
          { id: "a", text: "treating every person with dignity, fairness, and respect," },
          {
            id: "b",
            text: "promoting equal opportunity in employment, volunteering, leadership, programme participation, and service delivery,",
          },
          {
            id: "c",
            text: "creating an environment where diversity is welcomed and valued,",
          },
          {
            id: "d",
            text: "ensuring that decisions are based on merit, suitability, need, and legitimate organisational considerations rather than prejudice or bias,",
          },
          {
            id: "e",
            text: "promoting inclusion and participation for children and vulnerable groups; and",
          },
          {
            id: "f",
            text: "taking reasonable steps, within available resources and operational realities, to remove barriers that may prevent equal participation.",
          },
        ],
      },
    ],
  },
  {
    number: "4",
    title: "Definitions",
    blocks: [
      {
        type: "definitions",
        items: [
          {
            term: "“Discrimination”",
            def: "means any unfair, unequal, adverse, exclusionary, or less favourable treatment of a person based on a protected characteristic or other irrelevant consideration rather than legitimate organisational, programme, or performance-related factors. Discrimination may be direct or indirect.",
          },
          {
            term: "“Harassment”",
            def: "means any unwelcome verbal, non-verbal, visual, written, physical, psychological, digital, or other conduct that violates a person's dignity or creates an intimidating, hostile, degrading, humiliating, offensive, unsafe, or exclusionary environment. Harassment may occur as a single serious incident or through repeated conduct.",
          },
          {
            term: "“Bullying”",
            def: "means repeated or serious behaviour directed at an individual or group that intimidates, humiliates, undermines, excludes, threatens, degrades, or causes emotional, psychological, social, or professional harm. Bullying may include: verbal abuse, malicious criticism, humiliation, intimidation, deliberate exclusion, spreading false information, abuse of authority, cyberbullying, repeated hostile conduct; and misuse of organisational position or influence.",
          },
          {
            term: "“Sexual Harassment”",
            def: "means any unwelcome sexual advance, request for sexual favour, sexual comment, sexual communication, physical conduct of a sexual nature, or any other conduct of a sexual nature that may reasonably be expected to cause offence, humiliation, intimidation, discomfort, or fear.",
          },
          {
            term: "“Retaliation”",
            def: "means any adverse action, intimidation, victimisation, threat, exclusion, disadvantage, or negative treatment directed at a person because that person: made a complaint, reported a concern, participated in an investigation, supported another person's complaint; or exercised any right under this Policy.",
          },
        ],
      },
    ],
  },
  {
    number: "5",
    title: "Prohibited Conduct",
    blocks: [
      {
        type: "p",
        text: "No person shall engage in discrimination, harassment, bullying, retaliation, victimisation, intimidation, abuse of authority, or any conduct inconsistent with the principles of this Policy.",
      },
      {
        type: "p",
        text: "The Organisation prohibits discrimination on the basis of race, ethnicity, colour, nationality, citizenship, language, religion or belief, sex, age, disability, marital status, family circumstances, socio-economic background, educational status, political opinion, health status; or any other characteristic protected by applicable law.",
      },
      {
        type: "p",
        text: "For the avoidance of doubt, discrimination against children on the basis of poverty, homelessness, out-of-school status, disability, learning ability, migration status, family background, ethnicity, religion, language, or other personal circumstance is prohibited.",
      },
    ],
  },
  {
    number: "6",
    title: "Child-Centred Protection",
    blocks: [
      {
        type: "p",
        text: "TDT recognises that children are particularly vulnerable to discrimination, exclusion, bullying, abuse, and harassment.",
      },
      {
        type: "p",
        text: "All children participating in TDT programmes, activities, schools, residential facilities, digital platforms, and community interventions shall be treated fairly, respectfully, and without discrimination.",
      },
      {
        type: "p",
        text: "Any allegation involving a child shall be addressed in accordance with this Policy and, where applicable, the Child Safeguarding and Protection Policy.",
      },
      {
        type: "p",
        text: "Where there is any inconsistency between this Policy and the Child Safeguarding and Protection Policy in matters affecting children, the Child Safeguarding and Protection Policy shall prevail.",
      },
    ],
  },
  {
    number: "7",
    title: "Accessibility and Reasonable Accommodation",
    blocks: [
      {
        type: "p",
        text: "TDT shall take reasonable steps to remove barriers to participation and provide reasonable accommodation for persons with disabilities and other vulnerable individuals where reasonably practicable and consistent with available resources.",
      },
      {
        type: "p",
        text: "The Organisation shall seek to ensure that programmes, services, learning opportunities, volunteer opportunities, and workplaces are as inclusive and accessible as reasonably possible.",
      },
    ],
  },
  {
    number: "8",
    title: "Reporting Concerns",
    blocks: [
      {
        type: "p",
        text: "Any person who experiences, witnesses, suspects, or receives information regarding discrimination, harassment, bullying, retaliation, or other conduct prohibited by this Policy is encouraged to report the matter promptly.",
      },
      { type: "p", text: "Reports may be made to:" },
      {
        type: "bullets",
        items: [
          { text: "a Team Lead or Supervisor;" },
          { text: "Human Resources;" },
          { text: "the Executive Director;" },
          { text: "the Safeguarding Lead;" },
          { text: "a designated Board representative; or" },
          { text: "any reporting mechanism established by the Organisation." },
        ],
      },
      {
        type: "p",
        text: "A person is not required to report a complaint to the individual who is the subject of the complaint.",
      },
    ],
  },
  {
    number: "9",
    title: "Investigation and Resolution",
    blocks: [
      {
        type: "p",
        text: "TDT shall take all complaints seriously and shall seek to address them promptly, fairly, impartially, and confidentially.",
      },
      { type: "p", text: "The Organisation may:" },
      {
        type: "bullets",
        items: [
          { text: "conduct an informal resolution process where appropriate;" },
          { text: "undertake a formal investigation;" },
          { text: "appoint an independent investigator;" },
          { text: "interview relevant persons;" },
          { text: "review relevant documents and evidence;" },
          { text: "implement interim protective measures; and" },
          { text: "take any action reasonably necessary to protect affected persons." },
        ],
      },
      { type: "p", text: "All parties shall be given a fair opportunity to be heard." },
      {
        type: "p",
        text: "Information relating to complaints shall be shared only with persons who have a legitimate need to know and confidentiality shall be maintained to the greatest extent reasonably possible.",
      },
    ],
  },
  {
    number: "10",
    title: "Protection Against Retaliation",
    blocks: [
      { type: "p", text: "TDT strictly prohibits retaliation." },
      {
        type: "p",
        text: "No person shall suffer intimidation, victimisation, disadvantage, exclusion, reprisal, or adverse treatment because they made a complaint, reported a concern, participated in an investigation, or assisted another person in exercising their rights under this Policy.",
      },
      {
        type: "p",
        text: "Retaliation shall itself constitute a violation of this Policy.",
      },
    ],
  },
  {
    number: "11",
    title: "Corrective and Disciplinary Measures",
    blocks: [
      {
        type: "p",
        text: "Where a violation of this Policy is established, TDT may take any action it considers appropriate, including:",
      },
      {
        type: "bullets",
        items: [
          { text: "counselling;" },
          { text: "warnings;" },
          { text: "training;" },
          { text: "mediation;" },
          { text: "corrective measures;" },
          { text: "removal from activities;" },
          { text: "suspension;" },
          { text: "termination of employment;" },
          { text: "termination of volunteer engagement;" },
          { text: "removal from programmes;" },
          { text: "restriction of access to TDT facilities or platforms;" },
          { text: "referral to professional bodies;" },
          { text: "referral to law enforcement authorities; or" },
          { text: "any other appropriate action." },
        ],
      },
    ],
  },
  {
    number: "12",
    title: "Responsibilities",
    blocks: [
      { type: "h", text: "Board of Trustees" },
      { type: "p", text: "The Board shall:" },
      {
        type: "bullets",
        items: [
          { text: "oversee implementation of this Policy;" },
          { text: "promote an organisational culture of dignity and inclusion;" },
          { text: "review significant complaints where appropriate;" },
          { text: "ensure independence and fairness in investigations where necessary; and" },
          { text: "monitor organisational culture and compliance." },
        ],
      },
      { type: "h", text: "Managers, Team Leads and Supervisors" },
      { type: "p", text: "Managers, Team Leads, and Supervisors shall:" },
      {
        type: "bullets",
        items: [
          { text: "model respectful behaviour;" },
          { text: "actively enforce this Policy;" },
          { text: "promptly address concerns;" },
          { text: "report suspected violations;" },
          { text: "support investigations; and" },
          { text: "promote inclusive and respectful environments." },
        ],
      },
      { type: "h", text: "Employees and Volunteers" },
      { type: "p", text: "Employees and volunteers shall:" },
      {
        type: "bullets",
        items: [
          { text: "comply with this Policy;" },
          { text: "treat others with dignity and respect;" },
          { text: "avoid prohibited conduct;" },
          { text: "report concerns promptly; and" },
          { text: "cooperate with investigations and corrective actions." },
        ],
      },
      { type: "h", text: "The Organisation" },
      { type: "p", text: "TDT shall:" },
      {
        type: "bullets",
        items: [
          { text: "promote equality, dignity, and inclusion;" },
          { text: "provide appropriate awareness and training;" },
          { text: "maintain fair complaint mechanisms;" },
          { text: "investigate concerns appropriately;" },
          { text: "support affected persons where necessary; and" },
          {
            text: "review and strengthen organisational practices to prevent discrimination and harassment.",
          },
        ],
      },
    ],
  },
  {
    number: "13",
    title: "Review",
    blocks: [
      {
        type: "p",
        text: "This Policy shall be reviewed periodically and at least every three years, or earlier where required by changes in law, organisational needs, safeguarding requirements, operational experience, or identified risks.",
      },
    ],
  },
];

const policyMeta: { label: string; value: string }[] = [
  { label: "Effective Date", value: "June 7, 2026" },
  { label: "Version", value: "2.0" },
  { label: "Review Cycle", value: "At least every 3 years" },
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
                <span className="shrink-0 font-medium text-[#9A6B00]">
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
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB400]" />
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

const AntiDiscriminationPolicyPage = () => {
  return (
    <PolicyLayout>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
            The Destiny Trust Children Foundation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Equality, Inclusion, Anti-Discrimination and Anti-Harassment Policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            The Destiny Trust is committed to creating and maintaining an
            environment where every person is treated with dignity, respect,
            fairness, and inclusion, free from discrimination, harassment,
            bullying, intimidation, victimisation, or exclusion.
          </p>

          <dl className="mt-6 grid gap-3 rounded-2xl bg-[#FFF8E5] p-5 sm:grid-cols-3">
            {policyMeta.map((meta) => (
              <div key={meta.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-[#9A6B00]">
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
                  <span className="text-[#9A6B00]">{section.number}.</span>{" "}
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
              href="/child-safeguarding-policy"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Child Safeguarding Policy
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

export default AntiDiscriminationPolicyPage;
