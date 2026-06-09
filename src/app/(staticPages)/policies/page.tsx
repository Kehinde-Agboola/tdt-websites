import Link from "next/link";
import PolicyLayout from "@/app/_component/PolicyLayout";

const policies: { label: string; href: string; description: string }[] = [
  {
    label: "AI Ethics and Governance Policy",
    href: "/ai-ethics-policy",
    description:
      "Principles, governance and minimum standards for the responsible development, procurement and use of AI across The Destiny Trust.",
  },
  {
    label: "Child Safeguarding Policy",
    href: "/child-safeguarding-policy",
    description:
      "Our commitment, code of conduct and procedures for preventing, identifying and responding to safeguarding concerns affecting children.",
  },
  {
    label: "Conflict of Interest Policy",
    href: "/conflict-of-interest-policy",
    description:
      "How interests, relationships and positions of trust are disclosed and managed in the best interests of the organisation and its beneficiaries.",
  },
  {
    label: "Equality, Inclusion, Anti-Discrimination & Anti-Harassment Policy",
    href: "/anti-discrimination-policy",
    description:
      "Our commitment to dignity, fairness and inclusion, and the standards prohibiting discrimination, harassment, bullying and retaliation.",
  },
  {
    label: "AML / CFT / CPF Policy",
    href: "/aml-cft-cpf-policy",
    description:
      "Standards for preventing, detecting and reporting money laundering, terrorism financing, proliferation financing and related risks.",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    description:
      "How we collect, use, share and protect the personal information of everyone who visits our site or supports our work.",
  },
  {
    label: "Terms of Use",
    href: "/terms-of-use",
    description:
      "The terms and conditions governing your use of www.destinytrust.org and our related services.",
  },
];

const PoliciesPage = () => {
  return (
    <PolicyLayout>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
        The Destiny Trust Children Foundation
      </p>
      <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
        Policies
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
        Our governance, safeguarding and compliance policies set out the
        standards we hold ourselves to in serving the children and communities
        we work with. Select a policy from the sidebar, or choose one below.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {policies.map((policy) => (
          <Link
            key={policy.href}
            href={policy.href}
            className="group rounded-2xl border border-gray-200 p-5 transition-colors hover:border-[#FFB400] hover:bg-[#FFF8E5]"
          >
            <p className="text-base font-semibold text-gray-900">
              {policy.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {policy.description}
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-[#9A6B00]">
              Read policy →
            </span>
          </Link>
        ))}
      </div>
    </PolicyLayout>
  );
};

export default PoliciesPage;
