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
    title: "Purpose",
    blocks: [
      {
        type: "p",
        text: "1.1 The purpose of this Policy is to ensure that all decisions, actions, relationships, responsibilities, positions of trust, and resources connected with The Destiny Trust Children Foundation (“The Destiny Trust” or “TDT”) are managed solely in the best interests of the organisation, its beneficiaries, and its mission.",
      },
      {
        type: "p",
        text: "1.2 This Policy seeks to preserve integrity, transparency, accountability, public trust, and proper stewardship in all dealings involving the organisation, its people, beneficiaries, partners, donors, volunteers, assets, opportunities, and resources.",
      },
      {
        type: "p",
        text: "1.3 It also provides a framework for identifying, disclosing, and managing any personal, financial, professional, family, or other interest that may conflict with, or appear to conflict with, the duties owed to The Destiny Trust and the children and communities it serves.",
      },
      { type: "h", text: "1.4 Definitions" },
      {
        type: "p",
        text: "For the purposes of this Policy, the following terms shall have the meanings assigned to them below:",
      },
      {
        type: "definitions",
        items: [
          {
            term: "“Board Member”",
            def: "includes any Trustee, member of the Board of Trustees, Advisory Board Member, committee member exercising governance functions, or any person serving in a similar governance or oversight capacity within The Destiny Trust.",
          },
          {
            term: "“Close Relative”",
            def: "means a spouse, parent, child, or sibling of a Founder, Trustee, Board Member, or Advisory Board Member. For the purposes of this Policy, any other family, personal, or domestic relationship that could reasonably give rise to an actual, potential, or perceived Conflict of Interest shall be disclosed and managed in accordance with this Policy, whether or not the person falls within the definition of a Close Relative.",
          },
          {
            term: "“Conflict of Interest”",
            def: "means any actual, potential, or perceived situation in which a person's personal, financial, professional, family, business, fiduciary, political, religious, or other interest may influence, or reasonably appear to influence, the proper discharge of their duties to The Destiny Trust.",
          },
          {
            term: "“Financial Benefit”",
            def: "includes any salary, wage, fee, commission, honorarium, allowance, profit, dividend, distribution, reimbursement, gift, discount, preferential treatment, contract opportunity, financial advantage, or other economic benefit, whether direct or indirect.",
          },
          {
            term: "“Founder”",
            def: "means any person recognised by The Destiny Trust as having participated in the establishment or formation of the organisation and designated as a founder in its governance records.",
          },
          {
            term: "“Material Interest”",
            def: "means any direct or indirect financial, ownership, employment, management, fiduciary, contractual, or other interest that could reasonably influence, or be perceived to influence, a person's judgment, objectivity, or decision-making on behalf of The Destiny Trust.",
          },
          {
            term: "“Organisational Opportunity”",
            def: "means any business opportunity, programme opportunity, funding opportunity, partnership opportunity, intellectual property, information, relationship, resource, or advantage that arises through a person's position, engagement, or access within The Destiny Trust.",
          },
          {
            term: "“Position of Trust”",
            def: "means any role, responsibility, authority, or relationship through which a person may influence decisions, allocate resources, exercise oversight, supervise others, access confidential information, or affect the welfare, opportunities, or interests of beneficiaries, volunteers, employees, partners, or the organisation itself. This includes formal and informal positions of authority within The Destiny Trust.",
          },
          {
            term: "“Related Entity”",
            def: "means any entity in which a Founder, Trustee, Board Member, or Advisory Board Member has a Material Interest, exercises control, serves in a management capacity, or otherwise has the ability to influence decisions.",
          },
          {
            term: "“Related Party”",
            def: "means a Founder, Trustee, Board Member, Advisory Board Member, Close Relative, Related Entity, or any other person or entity whose relationship with a person covered by this Policy may reasonably give rise to an actual, potential, or perceived Conflict of Interest.",
          },
          {
            term: "“Trustee”",
            def: "means a member of the Board of Trustees of The Destiny Trust and includes any person exercising the powers, responsibilities, or fiduciary duties of a trustee under applicable law or the organisation's governing documents.",
          },
        ],
      },
    ],
  },
  {
    number: "2",
    title: "Scope",
    blocks: [
      {
        type: "p",
        text: "2.1 This Policy applies to founders, trustees, board members, advisory board members, employees, consultants, contractors, volunteers, committee members, partners, and any person acting for or on behalf of The Destiny Trust.",
      },
    ],
  },
  {
    number: "3",
    title: "Duty to Act in the Best Interest of The Destiny Trust",
    blocks: [
      {
        type: "p",
        text: "3.1 All persons covered by this Policy shall act honestly, transparently, and in the best interest of The Destiny Trust, its beneficiaries, and its charitable mission. No person shall allow private interest, personal relationships, or external obligations to improperly influence decisions made for or on behalf of the organisation.",
      },
    ],
  },
  {
    number: "4",
    title: "Duty of Disclosure",
    blocks: [
      {
        type: "p",
        text: "4.1 Every person covered by this Policy shall disclose any actual, potential, or perceived conflict of interest as soon as they become aware of it. Disclosure shall be made before participating in any discussion, decision, approval, transaction, or activity affected by the conflict.",
      },
      {
        type: "p",
        text: "4.2 Trustees, board members, senior management, and persons in decision-making roles shall also complete periodic conflict of interest declarations as may be required by the organisation.",
      },
    ],
  },
  {
    number: "5",
    title: "Management of Disclosed Conflicts",
    blocks: [
      {
        type: "p",
        text: "5.1 Disclosure alone does not resolve a conflict. Once disclosed, The Destiny Trust may take appropriate steps to manage the conflict, including requiring the affected person to withdraw from discussions, abstain from voting, refrain from influencing a decision, or be excluded from the relevant transaction or process.",
      },
      {
        type: "p",
        text: "5.2 The Board or authorised decision-making body shall ensure that conflicted persons do not participate in decisions where their independence may reasonably be questioned.",
      },
    ],
  },
  {
    number: "6",
    title: "Prohibited Financial Benefits and Self-Dealing",
    blocks: [
      {
        type: "p",
        text: "6.1 No Founder, Trustee, Board Member, Advisory Board Member, or Related Entity shall hold any beneficial interest, shares, equity, profit entitlement, or other proprietary interest in any social enterprise, special purpose vehicle, or income-generating entity established, promoted, sponsored, or substantially supported by The Destiny Trust.",
      },
      {
        type: "p",
        text: "6.2 Where it is necessary for legal, regulatory, or administrative purposes for any Founder, Trustee, Board Member, Advisory Board Member, or Related Entity to hold shares or interests in such entity, the shares or interests shall be held strictly as nominee or trustee for and on behalf of The Destiny Trust or such charitable purpose as the Board may approve. The holder shall not derive any personal benefit, dividend, profit, distribution, or proprietary advantage from such holding.",
      },
      {
        type: "p",
        text: "6.3 No Founder, Trustee, Board Member, Advisory Board Member, or Related Entity shall receive payment, compensation, fees, commissions, retainers, profit, or any other financial benefit for services rendered to The Destiny Trust, whether under a contract, consultancy, procurement arrangement, professional engagement, or other commercial relationship with the organisation.",
      },
      {
        type: "p",
        text: "6.4 No Founder, Trustee, Board Member, Advisory Board Member, or Related Entity shall receive payment, compensation, fees, commissions, retainers, profit, or any other financial benefit for services rendered to The Destiny Trust, whether under a contract, consultancy, procurement arrangement, professional engagement, volunteer service, or any other relationship with the organisation. Any service provided by such person or entity shall be rendered on a pro bono basis.",
      },
    ],
  },
  {
    number: "7",
    title: "Management of Conflict of Interest",
    blocks: [
      {
        type: "p",
        text: "7.1 Where any decision, transaction, arrangement, contract, partnership, grant, procurement, appointment, engagement, or other matter gives rise to an actual, potential, or perceived Conflict of Interest, but is not otherwise prohibited under this Policy, the matter may proceed only where it is necessary for the furtherance of The Destiny Trust's charitable purposes and is demonstrably in the best interests of the organisation.",
      },
      {
        type: "p",
        text: "7.2 The existence and nature of the Conflict of Interest shall be fully disclosed before the matter is considered.",
      },
      {
        type: "p",
        text: "7.3 Where the matter involves the provision of goods, services, funding, property, or any other economic benefit, the arrangement shall be conducted on an arm's length basis and on terms that are fair, reasonable, and no more favourable than prevailing market terms.",
      },
      {
        type: "p",
        text: "7.4 A person with a Conflict of Interest shall not participate in discussions, deliberations, recommendations, negotiations, approvals, or voting relating to the matter and shall withdraw from the meeting or decision-making process while the matter is being considered.",
      },
      {
        type: "p",
        text: "7.5 The matter shall be independently reviewed and approved only by disinterested decision-makers who have no personal interest in the matter and are satisfied that the proposed course of action is fair, reasonable, and in the best interests of The Destiny Trust.",
      },
      {
        type: "p",
        text: "7.6 The existence of the Conflict of Interest, the nature of the matter, the recusal of the conflicted person, and the basis for the decision shall be recorded in the conflicts register and the minutes of the relevant meeting.",
      },
      {
        type: "p",
        text: "7.7 A person who has disclosed a Conflict of Interest shall not be counted for the purpose of determining quorum in relation to the matter giving rise to the Conflict of Interest.",
      },
      {
        type: "p",
        text: "7.8 Where the withdrawal of a conflicted person results in the absence of a quorum required to consider the matter, the matter shall be deferred or otherwise dealt with in accordance with the governing documents of The Destiny Trust.",
      },
      {
        type: "p",
        text: "7.9 No decision, transaction, arrangement, or relationship prohibited under this Policy may be approved, validated, or ratified under this Section.",
      },
    ],
  },
  {
    number: "8",
    title: "Spousal and Related-Party Relationships on the Board",
    blocks: [
      {
        type: "p",
        text: "8.1 The Destiny Trust recognises that Close Relatives may, from time to time, serve the organisation in various capacities. Such relationships shall be disclosed and managed in a manner that preserves independence, transparency, and public confidence in the organisation’s governance.",
      },
      {
        type: "p",
        text: "8.2 Where two Board members are spouses or otherwise closely related, each shall disclose the relationship to the Board. A Board member shall not participate in discussions, deliberations, recommendations, approvals, votes, or decisions that directly affect the interests, appointment, remuneration, performance evaluation, disciplinary matters, benefits, or engagement of the other spouse or related person.",
      },
      {
        type: "p",
        text: "8.3 A Board member shall not move, second, approve, or participate in the approval of any resolution or decision that directly affects the interests of the other spouse or related person.",
      },
      {
        type: "p",
        text: "8.4 No spouse or related person shall serve as the reviewer, approver, authoriser, or signatory for a financial transaction, expense claim, procurement request, contract, reimbursement, payment, or other organisational action initiated by or directly benefiting the other spouse or related person. Such matters shall be reviewed and approved by an independent person authorised under the organisation’s governance and financial control framework.",
      },
      {
        type: "p",
        text: "8.5 The existence of a spousal or related-party relationship shall not, by itself, prevent service to the organisation. However, all such relationships shall be managed in a manner that avoids actual, potential, or perceived conflicts of interest.",
      },
    ],
  },
  {
    number: "9",
    title: "Founder and Board Remuneration and Expenses",
    blocks: [
      {
        type: "p",
        text: "9.1 The offices of Founder, Trustee, Board Member, and Advisory Board Member of The Destiny Trust are positions of service and shall not attract remuneration, salary, sitting allowance, director fees, retainers, honoraria, performance payments, or any other form of direct or indirect financial compensation.",
      },
      {
        type: "p",
        text: "9.2 No Founder, Trustee, Board Member, or Advisory Board Member shall receive payment, compensation, or financial benefit for services rendered to The Destiny Trust, whether personally or through any business, firm, partnership, or entity in which they have an interest.",
      },
      {
        type: "p",
        text: "9.3 Founders and Board Members are expected to contribute their expertise, leadership, professional skills, governance oversight, time, and bear ordinary incidental expenses in furtherance of the mission of The Destiny Trust without financial gain or reimbursement.",
      },
      {
        type: "p",
        text: "9.4 Notwithstanding Clause 9.3, where a Board Member is required to travel outside the state where they are ordinarily resident for an official activity of The Destiny Trust, the Board may, in exceptional circumstances, approve the direct provision or payment of reasonable travel and accommodation arrangements necessary for such activity. No cash payment shall be made to the Board Member and the Board Member shall derive no financial gain or personal benefit from such arrangement.",
      },
      {
        type: "p",
        text: "9.5 This prohibition is fundamental to the governance philosophy of The Destiny Trust and reflects the organisation’s commitment to stewardship, public trust, and the principle that its resources exist primarily for the benefit of the children and communities it serves.",
      },
    ],
  },
  {
    number: "10",
    title: "Use of Organisational Funds, Assets and Opportunities",
    blocks: [
      {
        type: "p",
        text: "10.1 No person shall use The Destiny Trust’s funds, assets, property, information, name, goodwill, programme opportunities, or organisational opportunities for personal benefit, private business, or any purpose unrelated to the Trust’s approved activities.",
      },
    ],
  },
  {
    number: "11",
    title: "Procurement and Vendor Engagement",
    blocks: [
      {
        type: "p",
        text: "11.1 Any person involved in procurement, vendor selection, contract negotiation, or approval must disclose any relationship or interest involving a proposed vendor, contractor, consultant, or service provider.",
      },
      {
        type: "p",
        text: "11.2 A conflicted person shall not influence, recommend, approve, or participate in any procurement decision involving a person or entity in which they have an interest.",
      },
    ],
  },
  {
    number: "12",
    title: "Recruitment, Appointment and Engagement",
    blocks: [
      {
        type: "p",
        text: "12.1 Recruitment, appointment, promotion, consultancy, volunteer engagement, or other organisational placement shall be based on merit, suitability, need, and the best interest of The Destiny Trust.",
      },
      {
        type: "p",
        text: "12.2 Any person involved in a recruitment or engagement process must disclose any personal, family, professional, or business relationship with a candidate. Such person shall not participate in the decision unless the conflict has been disclosed and appropriately managed.",
      },
    ],
  },
  {
    number: "13",
    title: "Child-Centred Conflicts",
    blocks: [
      {
        type: "p",
        text: "13.1 All decisions affecting children shall be guided by the best interests of the child and the objectives of The Destiny Trust.",
      },
      {
        type: "p",
        text: "13.2 No person shall influence beneficiary selection, scholarship placement, residential admission, school enrolment, support allocation, programme access, or any child-related decision for personal reasons, family ties, favouritism, private benefit, or external pressure.",
      },
      {
        type: "p",
        text: "13.3 Children shall be selected and supported based on need, vulnerability, programme criteria, and the best interests of the child.",
      },
    ],
  },
  {
    number: "14",
    title: "Gifts, Hospitality and Favours",
    blocks: [
      {
        type: "p",
        text: "14.1 No person shall solicit or accept gifts, hospitality, favours, commissions, personal benefits, or advantages that may influence, or appear to influence, their judgment or decisions on behalf of The Destiny Trust.",
      },
      {
        type: "p",
        text: "14.2 Modest and incidental hospitality may be accepted where it is reasonable, transparent, infrequent, and does not compromise independence. Cash gifts or personal financial benefits from vendors, beneficiaries, partners, or persons seeking advantage from the organisation are prohibited.",
      },
    ],
  },
  {
    number: "15",
    title: "Confidential Information",
    blocks: [
      {
        type: "p",
        text: "15.1 Confidential information obtained through service, employment, volunteering, partnership, or engagement with The Destiny Trust shall not be used for personal benefit, private advantage, or to benefit any third party.",
      },
      {
        type: "p",
        text: "15.2 This obligation continues after the person’s relationship with The Destiny Trust ends.",
      },
    ],
  },
  {
    number: "16",
    title: "Fundraising and Donor-Related Conflicts",
    blocks: [
      {
        type: "p",
        text: "16.1 No person shall divert fundraising opportunities, misrepresent personal projects as initiatives of The Destiny Trust, or use the organisation’s name, goodwill, donor information, or fundraising channels for private benefit.",
      },
      {
        type: "p",
        text: "16.2 All fundraising done in the name of The Destiny Trust must be authorised and applied solely to approved organisational purposes.",
      },
    ],
  },
  {
    number: "17",
    title: "Reporting Undisclosed Conflicts",
    blocks: [
      {
        type: "p",
        text: "17.1 Any person who becomes aware of an undisclosed conflict of interest may report it to the Executive Director, Board Chair, designated safeguarding or governance officer, or through any approved reporting channel.",
      },
      {
        type: "p",
        text: "17.2 The Destiny Trust shall treat such reports responsibly and shall not tolerate retaliation against any person who raises a concern in good faith.",
      },
    ],
  },
  {
    number: "18",
    title: "Breach of Policy",
    blocks: [
      {
        type: "p",
        text: "18.1 A breach of this Policy may lead to appropriate action, including warning, withdrawal from a decision-making process, removal from a role, suspension, termination of engagement, recovery of improperly obtained benefits, cancellation of a transaction, or referral to relevant authorities where necessary.",
      },
      {
        type: "p",
        text: "18.2 The failure to disclose a conflict will generally be treated more seriously than the existence of the conflict itself.",
      },
    ],
  },
  {
    number: "19",
    title: "Records",
    blocks: [
      {
        type: "p",
        text: "19.1 The Destiny Trust shall maintain a Register of Interests and Conflicts in which disclosed conflicts, recusals, approvals, and related decisions shall be recorded.",
      },
    ],
  },
  {
    number: "20",
    title: "Annual Declaration and Acknowledgement",
    blocks: [
      {
        type: "p",
        text: "20.1 Trustees, Board Members, Advisory Board Members, and senior management personnel shall complete a comprehensive declaration of interests and conflicts of interest in the form prescribed in Annexure A upon appointment or first adoption of this Policy, and shall subsequently complete an annual declaration in the form prescribed in Annexure B. They shall promptly update their disclosure whenever a new conflict arises.",
      },
    ],
  },
  {
    number: "21",
    title: "Review",
    blocks: [
      {
        type: "p",
        text: "21.1 This Policy shall be reviewed periodically by the Board or an authorised governance committee to ensure that it remains effective, practical, and aligned with The Destiny Trust’s mission, values, and legal obligations.",
      },
    ],
  },
];

const policyMeta: { label: string; value: string }[] = [
  { label: "Effective Date", value: "June 7, 2026" },
  { label: "Approver", value: "Board of Trustees" },
  { label: "Review Cycle", value: "Periodically" },
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

const ConflictOfInterestPolicyPage = () => {
  return (
    <PolicyLayout>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
            The Destiny Trust Children Foundation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Conflict of Interest Policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            This Policy ensures that all decisions, actions, relationships,
            responsibilities, positions of trust, and resources connected with
            The Destiny Trust are managed solely in the best interests of the
            organisation, its beneficiaries, and its mission.
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
              href="/ai-ethics-policy"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              AI Ethics Policy
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

export default ConflictOfInterestPolicyPage;
