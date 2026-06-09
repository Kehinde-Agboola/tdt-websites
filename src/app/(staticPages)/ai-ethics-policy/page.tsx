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
        text: "1.1 The Destiny Trust Children (“TDT” or the “Organisation”) recognises the significant opportunities presented by Artificial Intelligence (“AI”) to enhance programme effectiveness, operational efficiency, innovation, research, fundraising, monitoring and evaluation, and beneficiary support services.",
      },
      {
        type: "p",
        text: "1.2 This Policy establishes the principles, governance framework, responsibilities and minimum standards governing the development, procurement, deployment and use of AI across the Organisation.",
      },
      { type: "p", text: "1.3 The purpose of this Policy is to:" },
      {
        type: "clauses",
        items: [
          {
            id: "a",
            text: "ensure that AI is developed and used in a manner consistent with the Organisation’s values, mission and legal obligations;",
          },
          {
            id: "b",
            text: "protect the rights, dignity, privacy and welfare of children and vulnerable beneficiaries;",
          },
          {
            id: "c",
            text: "promote innovation while managing risks to children, communities, beneficiaries, families, donors, volunteers, partners, and the Organisation;",
          },
          {
            id: "d",
            text: "provide a clear framework for the ethical and responsible use of AI throughout its lifecycle;",
          },
          {
            id: "e",
            text: "support trust, transparency, security, fairness and human accountability in relation to AI; and",
          },
          {
            id: "f",
            text: "establish minimum governance standards for the identification, assessment, mitigation, monitoring and escalation of AI-related risks.",
          },
        ],
      },
      {
        type: "p",
        text: "1.4 This Policy is intended to provide appropriate safeguards to ensure ethical and responsible development and use of Artificial Intelligence (AI) technologies within the Organisation.",
      },
    ],
  },
  {
    number: "2",
    title: "Application",
    blocks: [
      { type: "p", text: "2.1 This Policy applies to:" },
      {
        type: "clauses",
        items: [
          {
            id: "a",
            text: "all Trustees, officers, employees, secondees, interns, temporary personnel, consultants, contractors and any other persons acting for or on behalf of the Organisation;",
          },
          {
            id: "b",
            text: "all teams, functions, projects, programmes, controlled operations, and implementation structures of the Organisation;",
          },
          {
            id: "c",
            text: "all AI systems designed, developed, procured, licensed, configured, integrated, deployed, operated, used or retired by the Organisation or on its behalf;",
          },
          {
            id: "d",
            text: "all third-party AI systems, models, tools, platforms, services or application programming interfaces used in connection with the Organisation’s work, programmes, operations, or activities; and",
          },
          {
            id: "e",
            text: "all partnerships, pilots, collaborations, solutions, arrangements and other engagements involving the use of AI by or for the Organisation.",
          },
        ],
      },
      {
        type: "p",
        text: "2.2 This Policy applies throughout the full AI lifecycle, including concept development, use-case selection, procurement, design, data sourcing, model development, training, testing, validation, deployment, use, monitoring, maintenance, retraining, decommissioning and retirement.",
      },
      {
        type: "p",
        text: "2.3 This Policy applies whether AI is used for internal productivity, analytics, automation, decision support, content generation, software development, beneficiary interactions, operational control, monitoring, or any other technical purpose.",
      },
      {
        type: "p",
        text: "2.4 Supplementary procedures, standards, guidance notes, templates and control documents may be issued from time to time to support the implementation of this Policy.",
      },
    ],
  },
  {
    number: "3",
    title: "Term Definition",
    blocks: [
      { type: "p", text: "3.1 For the purpose of this Policy:" },
      {
        type: "definitions",
        items: [
          {
            term: "“Artificial Intelligence” or “AI”",
            def: "means an engineered or machine-based system that, for explicit or implicit objectives, infers from inputs how to generate outputs such as predictions, content, recommendations, classifications, scores or decisions capable of influencing physical or virtual environments.",
          },
          {
            term: "“AI system”",
            def: "means any software, model, tool, application, service or technical component that uses AI.",
          },
          {
            term: "“Generative AI”",
            def: "means AI capable of creating, transforming or synthesising text, images, audio, video, code, data or other content.",
          },
          {
            term: "“Automated decision-making”",
            def: "means the use of AI to make or materially influence a decision without meaningful human judgement at the point of decision.",
          },
          {
            term: "“High-Risk AI”",
            def: "means any AI system that, by reason of its purpose, context, capability, scale or likely impact, may materially affect health, safety, legal rights, employment, education, financial outcomes, access to opportunities or services, public trust, environmental integrity, vulnerable persons, or the Organisation’s regulatory, operational, financial or reputational position.",
          },
          {
            term: "“AI Impact Assessment”",
            def: "means the documented assessment undertaken to evaluate the purpose, expected benefits, stakeholders, data sources, risks, safeguards, oversight arrangements, legal considerations and deployment suitability of an AI system.",
          },
          {
            term: "“Human Oversight”",
            def: "means meaningful human supervision, review, intervention or control that is appropriate to the nature, context and risk of the AI system and capable of influencing outcomes.",
          },
          {
            term: "“Material AI Incident”",
            def: "means any event involving an AI system that results in, or is reasonably likely to result in, unlawful conduct, harmful or misleading output, significant error, discrimination, privacy breach, security incident, operational disruption, harm or regulatory exposure.",
          },
          {
            term: "“Material AI System”",
            def: "means any AI system whose design, deployment, outputs, operation, or failure may materially affect beneficiaries, children, families, safeguarding outcomes, educational opportunities, organisational operations, legal compliance, financial resources, reputation, or strategic objectives.",
          },
          {
            term: "“Restricted AI”",
            def: "means an AI system that presents elevated legal, ethical, safeguarding, privacy, operational, or reputational risks and may only be deployed following enhanced review, approval, and monitoring requirements.",
          },
          {
            term: "“Moderate-Risk AI”",
            def: "means an AI system that presents identifiable but manageable risks and may be deployed subject to appropriate controls, documentation, and oversight.",
          },
          {
            term: "“Low-Risk AI”",
            def: "means an AI system used for routine administrative, productivity, research, content development, or operational purposes that is unlikely to materially affect the rights, welfare, safety, opportunities, or interests of any individual.",
          },
          {
            term: "“Prohibited AI Use”",
            def: "means any AI system, capability, or deployment that is expressly prohibited under this Policy due to its unlawful, unsafe, exploitative, discriminatory, deceptive, or otherwise unacceptable nature.",
          },
          {
            term: "“Sensitive Data”",
            def: "includes personal data, confidential information, information relating to beneficiaries, children, families, donors, volunteers, partners, or communities served by the Organisation, safeguarding records, social investigation reports, incident reports, care plans, case notes, assessment records, complaints, medical information, financial information, privileged material, security credentials, regulated information, and any other information classified by the Organisation as confidential, restricted, or sensitive.",
          },
          {
            term: "“Third-Party AI Service”",
            def: "means any externally provided AI model, system, tool, platform, service or API used by or on behalf of the Organisation.",
          },
        ],
      },
    ],
  },
  {
    number: "4",
    title: "Policy Statements",
    blocks: [
      {
        type: "p",
        text: "4.1 AI plays a critical role in our organization's operations and future. We recognise the importance of responsible AI-use to uphold our values and mission.",
      },
      { type: "h", text: "Principles and Values" },
      { type: "p", text: "4.2 We are committed to the following AI principles:" },
      {
        type: "bullets",
        items: [
          {
            title: "Ethical Use",
            text: "AI systems must uphold ethical standards, ensuring fairness, accountability, transparency and the protection of human rights.",
          },
          {
            title: "Fairness",
            text: "AI systems must be intentionally designed and validated to ensure that all types of known bias, be it based on any factor such as but not limited to race, gender, religion, socio-economic status, sexuality or political affiliation, are identified, mitigated, and monitored.",
          },
          {
            title: "Reliability, Safety and Fitness for Purpose",
            text: "AI systems shall be sufficiently reliable, robust and safe for their intended use and shall not be deployed unless their material limitations, dependencies and foreseeable failure modes are understood and appropriately managed.",
          },
          {
            title: "Privacy, Confidentiality and Responsible Data Stewardship",
            text: "AI shall be governed in a manner consistent with applicable data protection requirements, confidentiality obligations, data minimisation, purpose limitation, access control and responsible stewardship of information.",
          },
          {
            text: "The source of data used in AI systems shall be verified for legality, provenance, and compliance with applicable data protection laws. Personal data shall be processed only on a lawful basis recognised by applicable law, including consent where required.",
          },
          {
            title: "Security and Misuse Prevention",
            text: "AI systems shall be subject to appropriate technical and organisational safeguards to prevent unauthorised access, compromise, abuse, harmful misuse, data leakage, adversarial manipulation and other security or integrity failures.",
          },
          {
            title: "Transparency and Explainability",
            text: "The Organisation shall maintain documentation and provide disclosures appropriate to the nature and risk of the AI system, including its purpose, limitations, oversight arrangements and material impacts where relevant.",
          },
          {
            title: "Accountability",
            text: "AI systems must have a unit that is responsible for ensuring compliance with the principles and relevant governance processes including laws and policies on data security, privacy and integrity. Such unit shall be supervised by the Team Lead for Technology and skills development in respect of the AI systems deployment and use.",
          },
          {
            title: "Lawfulness and Legitimate Purpose",
            text: "AI shall be developed, procured, deployed, and used in compliance with applicable laws, including the Nigeria Data Protection Act 2023, regulations and guidance issued by the Nigeria Data Protection Commission, the Child Rights Act 2003, and any other applicable laws relating to children, privacy, safeguarding, intellectual property, and technology.",
          },
          {
            title: "Human Accountability and Oversight",
            text: "AI shall not displace accountable human governance. A designated owner shall remain accountable for each material AI system, and appropriate human oversight shall be maintained throughout the lifecycle of the system.",
          },
          {
            title: "Human Rights, Dignity and Fairness",
            text: "AI shall be developed and used in a manner that respects human dignity and fundamental rights. The Organisation shall take reasonable steps to identify, assess, mitigate and monitor bias, unfairness and unlawful discrimination.",
          },
          {
            title: "Proportionality and Risk-Based Governance",
            text: "AI shall be governed according to its risk profile, context and potential impact. Higher-risk uses shall be subject to enhanced assessment, approval, control and monitoring requirements.",
          },
          {
            title: "Continuous Improvement",
            text: "AI governance shall be ongoing. The Organisation shall review, monitor and improve its AI systems, controls and governance arrangements in light of operational experience, incidents, legal developments, evolving standards and technological change.",
          },
        ],
      },
    ],
  },
  {
    number: "5",
    title: "Governance and Accountability",
    blocks: [
      {
        type: "p",
        text: "5.1 The Technology and Skills Development Team designated by the Board, shall exercise overall oversight of the Organisation’s AI governance framework.",
      },
      {
        type: "p",
        text: "5.2 The Executive Director shall provide the Board with at least an annual report on:",
      },
      {
        type: "clauses",
        items: [
          { id: "a", text: "material AI initiatives;" },
          { id: "b", text: "significant AI-related risks;" },
          { id: "c", text: "material AI incidents and remediation;" },
          {
            id: "d",
            text: "the adequacy and effectiveness of the Organisation’s AI governance framework; and",
          },
          {
            id: "e",
            text: "any strategic, legal, regulatory or reputational matters arising from the Organisation’s use of AI.",
          },
        ],
      },
      {
        type: "p",
        text: "5.3 The Management Board shall be responsible for ensuring that this Policy is implemented effectively and supported by appropriate governance structures, resources, controls, training and reporting mechanisms.",
      },
      {
        type: "p",
        text: "5.4 The Team Lead of the Technology and Skill Development Team, under the oversight of the Executive Director, shall be responsible for the implementation and oversight of this Policy and shall, as appropriate:",
      },
      {
        type: "clauses",
        items: [
          {
            id: "a",
            text: "oversee the implementation of this Policy and any related standards, procedures or guidance;",
          },
          { id: "b", text: "review AI Impact Assessments for material AI systems;" },
          { id: "c", text: "determine or confirm the risk classification of AI systems;" },
          {
            id: "d",
            text: "review and recommend approval, conditional approval, deferral, or prohibition of High-Risk or Restricted AI uses to the Executive Director or Board, as appropriate;",
          },
          {
            id: "e",
            text: "oversee material third-party AI arrangements and related risks;",
          },
          { id: "f", text: "review material AI incidents and remediation measures;" },
          {
            id: "g",
            text: "maintain oversight of the Organisation’s AI systems inventory; and",
          },
          {
            id: "h",
            text: "escalate material AI matters to the Executive Director and, where appropriate, to the Board.",
          },
        ],
      },
      {
        type: "p",
        text: "5.5 High-Risk AI systems shall not be approved solely by the team responsible for their development or deployment.",
      },
      {
        type: "p",
        text: "5.6 No person may develop, procure, integrate, deploy, materially modify or use any AI system for the Organisation except in accordance with this Policy and any applicable internal review or approval requirements.",
      },
    ],
  },
  {
    number: "6",
    title: "Risk Classification",
    blocks: [
      {
        type: "p",
        text: "6.1 Every material AI system shall be assessed and classified prior to development, procurement, pilot deployment or production use.",
      },
      {
        type: "p",
        text: "6.2 AI systems shall be classified by reference to their nature, purpose, context, users, data sensitivity, decision impact, operational criticality, legal implications and potential for harm.",
      },
      {
        type: "p",
        text: "6.3 The Organisation shall maintain a risk-based classification framework that includes, at a minimum:",
      },
      {
        type: "clauses",
        items: [
          { id: "a", text: "Prohibited AI Uses;" },
          { id: "b", text: "Restricted or High-Risk AI Uses;" },
          { id: "c", text: "Moderate-Risk AI Uses; and" },
          { id: "d", text: "Low-Risk AI Uses." },
        ],
      },
      {
        type: "p",
        text: "6.4 An AI system shall ordinarily be treated as Restricted or High-Risk where it:",
      },
      {
        type: "clauses",
        items: [
          {
            id: "a",
            text: "materially influences decisions affecting legal rights, employment, financial outcomes, access to services or other significant interests;",
          },
          {
            id: "b",
            text: "may affect health, safety of any child, environmental integrity or operational resilience;",
          },
          {
            id: "c",
            text: "processes Sensitive Data at scale, including personal information relating to children, or processes such data in particularly sensitive contexts where the rights, welfare, safety or best interests of children may be affected;",
          },
          {
            id: "d",
            text: "involves biometric, surveillance, identity, behavioural or profiling capabilities of any child or any beneficiaries;",
          },
          {
            id: "e",
            text: "is used in relation to vulnerable persons or sensitive contexts;",
          },
          {
            id: "f",
            text: "generates or materially supports outputs, advice, instructions, code or representations that may reasonably be relied upon; or",
          },
          {
            id: "g",
            text: "is otherwise likely to present significant legal, regulatory, ethical, reputational or societal risk.",
          },
        ],
      },
      {
        type: "p",
        text: "6.5 High-Risk AI systems shall be subject to independent review by a person or committee not directly responsible for the development or deployment of the system.",
      },
      {
        type: "p",
        text: "6.6 Risk classification shall be reviewed and, where necessary, updated whenever there is a material change in the system’s purpose, scope, data inputs, users, outputs, underlying model, deployment conditions or risk profile.",
      },
    ],
  },
  {
    number: "7",
    title: "Prohibited and Restricted Uses",
    blocks: [
      {
        type: "p",
        text: "7.1 The Organisation shall not develop, procure, deploy, support or knowingly enable AI systems for any unlawful purpose or in any manner that is inconsistent with this Policy.",
      },
      {
        type: "p",
        text: "7.2 Without limitation, the following shall be treated as prohibited unless expressly required by law:",
      },
      {
        type: "clauses",
        items: [
          {
            id: "a",
            text: "use of AI that violates, undermines, circumvents, or is otherwise inconsistent with any provision of the Organisation's Child Safeguarding and Protection Policy or any other policies, regulations or laws applicable to the protection and welfare of children;",
          },
          {
            id: "b",
            text: "use of AI systems that impairs informed choice or otherwise compromises the safety, welfare, rights or best interests of a child;",
          },
          { id: "c", text: "unlawful discrimination or exclusion;" },
          {
            id: "d",
            text: "deceptive, manipulative or exploitative uses intended to materially distort behaviour or impair informed choice;",
          },
          { id: "e", text: "social scoring of individuals;" },
          {
            id: "f",
            text: "fully automated decisions with legal or similarly significant effects on individuals without lawful basis and meaningful human oversight;",
          },
          {
            id: "g",
            text: "use of AI in a manner that knowingly infringes privacy, confidentiality, intellectual property or other legal rights;",
          },
          {
            id: "h",
            text: "use of confidential information or regulated data in public or unapproved AI tools;",
          },
          {
            id: "i",
            text: "creation or dissemination of harmful, false or misleading synthetic content on behalf of the Organisation without lawful purpose, proper authority and appropriate disclosure where required; and",
          },
          {
            id: "j",
            text: "any other use prohibited by applicable law, regulations, contract or Board direction.",
          },
        ],
      },
      {
        type: "p",
        text: "7.3 Personnel shall use only approved AI tools and shall comply at all times with applicable Organisation rules regarding confidentiality, records, intellectual property, information security, communications, regulatory compliance, child safeguarding, and responsible use of technology.",
      },
      {
        type: "p",
        text: "7.4 No person shall upload, disclose, transmit, process, or otherwise provide Sensitive Data, confidential information, safeguarding records, medical information, personal data relating to children or families, or any other restricted information to a public or unapproved Generative AI system.",
      },
      {
        type: "p",
        text: "7.5 Notwithstanding Clauses 7.3 and 7.4, the Organisation may use approved AI systems in connection with information relating to children, families, beneficiaries, programmes, or operations where:",
      },
      {
        type: "clauses",
        items: [
          { id: "a", text: "the use has been approved in accordance with this Policy;" },
          {
            id: "b",
            text: "appropriate contractual, technical, organisational, and safeguarding controls are in place;",
          },
          {
            id: "c",
            text: "the use complies with applicable data protection laws, child protection requirements, and the Organisation's Child Safeguarding and Protection Policy;",
          },
          { id: "d", text: "an AI Impact Assessment has been completed where required; and" },
          { id: "e", text: "appropriate Human Oversight is maintained." },
        ],
      },
    ],
  },
  {
    number: "8",
    title: "Children and AI",
    blocks: [
      {
        type: "p",
        text: "8.1 The best interests, safety, dignity, wellbeing, and educational development of children shall be a primary consideration in the design, procurement, deployment, and use of AI systems by the Organisation.",
      },
      {
        type: "p",
        text: "8.2 No AI system shall be used as the sole basis for decisions relating to a child's educational placement, programme eligibility, safeguarding status, welfare assessment, residential placement, disciplinary action, scholarship opportunity, or access to support services.",
      },
      {
        type: "p",
        text: "8.3 All materially significant decisions affecting children shall be subject to meaningful human review and oversight.",
      },
      {
        type: "p",
        text: "8.4 The Organisation shall not use AI systems for behavioural manipulation, social scoring, exploitative profiling, targeted advertising to children, or any activity inconsistent with the best interests of the child.",
      },
      {
        type: "p",
        text: "8.5 AI systems that directly interact with children shall incorporate age-appropriate design, content-safety controls, safeguarding escalation pathways, and appropriate human supervision.",
      },
      {
        type: "p",
        text: "8.6 AI systems that interact directly with children shall provide clear mechanisms for escalation to a human teacher, caregiver, caseworker, or other responsible adult where appropriate.",
      },
      {
        type: "p",
        text: "8.7 This Policy shall be interpreted and applied consistently with the Organisation's Child Safeguarding and Protection Policy. Where a conflict arises, the Child Safeguarding and Protection Policy shall prevail.",
      },
    ],
  },
  {
    number: "9",
    title: "AI Impact Assessment and Approval",
    blocks: [
      {
        type: "p",
        text: "9.1 An AI Impact Assessment shall be completed before any material AI system is developed, procured, piloted, integrated or deployed.",
      },
      {
        type: "p",
        text: "9.2 No High-Risk AI system shall be deployed without the approval of the Executive Director following review of the AI Impact Assessment. Material High-Risk AI deployments shall be reported to the Board at the next Board meeting.",
      },
      {
        type: "p",
        text: "9.3 AI Impact Assessments shall be reviewed and updated:",
      },
      {
        type: "clauses",
        items: [
          { id: "a", text: "before any material change to the system;" },
          { id: "b", text: "after any Material AI Incident;" },
          { id: "c", text: "where the risk profile materially changes; and" },
          {
            id: "d",
            text: "at prescribed review intervals, including at least annually for High-Risk AI systems.",
          },
        ],
      },
    ],
  },
  {
    number: "10",
    title:
      "Data Governance, Privacy, Confidentiality and Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "10.1 Data used in connection with AI systems must be relevant, appropriately sourced, suitably governed and used only in accordance with applicable law, contractual obligations, confidentiality duties and Organisation policy.",
      },
      {
        type: "p",
        text: "10.2 The Organisation shall maintain appropriate controls relating to:",
      },
      {
        type: "clauses",
        items: [
          { id: "a", text: "data provenance and source verification;" },
          { id: "b", text: "lawful basis or authorisation for use where required;" },
          { id: "c", text: "data quality, relevance and suitability;" },
          { id: "d", text: "data minimisation and purpose limitation;" },
          {
            id: "e",
            text: "access control, segregation and least-privilege principles;",
          },
          {
            id: "f",
            text: "de-identification, anonymisation or pseudonymisation where appropriate;",
          },
          { id: "g", text: "retention, deletion and secure disposal; and" },
          { id: "h", text: "cross-border data handling where applicable." },
        ],
      },
      {
        type: "p",
        text: "10.3 The Organisation shall take reasonable steps to assess and manage intellectual property, licensing and ownership risks associated with training data, prompts, outputs, model use and downstream deployment.",
      },
      {
        type: "p",
        text: "10.4 AI-generated outputs shall be reviewed as appropriate for accuracy, suitability, legal risk, confidentiality risk, harmful content, bias and intellectual property risk before being relied upon for material internal or external use.",
      },
      {
        type: "p",
        text: "10.5 Where an AI system involves the transfer, storage, access, processing, or hosting of personal data outside Nigeria, the Organisation shall ensure that such transfer complies with applicable data protection laws and is subject to appropriate contractual, technical, and organisational safeguards.",
      },
    ],
  },
  {
    number: "11",
    title: "Development, Procurement and Deployment Lifecycle Controls",
    blocks: [
      {
        type: "p",
        text: "11.1 AI systems shall be governed throughout their lifecycle and shall not be treated as ordinary software without AI-specific control measures.",
      },
      {
        type: "p",
        text: "11.2 The following minimum lifecycle requirements shall apply, as relevant to the system:",
      },
      {
        type: "bullets",
        items: [
          {
            title: "Use Case Definition and Feasibility",
            text: "The purpose, expected benefits, intended users, alternatives, and potential risks of any AI system, including risks to children and safeguarding concerns, shall be identified and assessed at the outset.",
          },
          {
            title: "Design and Requirements",
            text: "Requirements shall define intended use, prohibited use, performance expectations, oversight requirements, security controls, documentation needs and release criteria.",
          },
          {
            title: "Data Preparation and Management",
            text: "Data shall be assessed for quality, sensitivity, suitability, restrictions and bias-related considerations.",
          },
          {
            title: "Model Selection, Development or Procurement",
            text: "Models and tools shall be selected or developed with regard to reliability, controllability, explainability, security, vendor risk and the appropriateness of the model for the intended purpose.",
          },
          {
            title: "Testing and Validation",
            text: "Testing shall be proportionate to risk and may include performance testing, robustness testing, bias testing, security testing, misuse testing, adversarial testing, red-team exercises and validation against defined acceptance criteria.",
          },
          {
            title: "Release and Deployment Readiness",
            text: "No AI system shall be released into production until required approvals, controls, documentation, user instructions, monitoring mechanisms and rollback arrangements are in place.",
          },
          {
            title: "Monitoring and Maintenance",
            text: "The Organisation shall monitor material AI systems for performance degradation, drift, harmful outputs, anomalies, abuse, security weaknesses, unfair impacts and other indicators of control failure.",
          },
          {
            title: "Change Management",
            text: "Material changes to use case, data inputs, model capabilities, integrations, operating conditions or outputs shall require reassessment and may require renewed approval.",
          },
          {
            title: "Retirement and Decommissioning",
            text: "AI systems that are no longer appropriate, lawful, licensed, supported or fit for purpose, including systems for which any required licence, subscription, support arrangement or third-party right of use has expired, been terminated or otherwise ceased to be available, shall be retired or decommissioned in a controlled manner. Such retirement or decommissioning shall include, where applicable, discontinuance of use, revocation of access, secure handling or deletion of associated data and logs, management of dependencies and integrations, preservation of required records, and any other steps necessary to ensure legal, operational and information security compliance.",
          },
        ],
      },
    ],
  },
  {
    number: "12",
    title: "Human Oversight, Transparency and External Trust",
    blocks: [
      {
        type: "p",
        text: "12.1 The Organisation shall maintain documentation sufficient to explain each material AI system’s purpose, approved uses, limitations, oversight model, owners, risk classification, monitoring arrangements and material dependencies.",
      },
      {
        type: "p",
        text: "12.2 Where appropriate to the context, and having regard to legal, commercial and security considerations, the Organisation shall provide clear information regarding the role of AI in relevant products, services, interactions or materially significant outputs.",
      },
      {
        type: "p",
        text: "12.3 Human Oversight shall be proportionate to risk and may include:",
      },
      {
        type: "clauses",
        items: [
          { id: "a", text: "pre-use or pre-release review of outputs;" },
          { id: "b", text: "review of exceptions, anomalies or flagged outcomes;" },
          {
            id: "c",
            text: "authority to override, suspend, reject or escalate AI-generated outputs or actions; and",
          },
          {
            id: "d",
            text: "enhanced review in relation to decisions or outputs with potentially significant effects.",
          },
        ],
      },
      {
        type: "p",
        text: "12.4 AI outputs shall not be presumed to be correct solely because they were generated by an automated system. Users remain responsible for applying judgement, professional standards and Organisation controls.",
      },
      {
        type: "p",
        text: "12.5 Where the Organisation uses AI-generated content externally, it shall ensure appropriate review, quality assurance, and disclosure where required or appropriate.",
      },
    ],
  },
  {
    number: "13",
    title: "Third-Party AI Services and Vendor Governance",
    blocks: [
      {
        type: "p",
        text: "13.1 Third-Party AI Services shall be subject to due diligence proportionate to the nature and risk of the proposed use.",
      },
      {
        type: "p",
        text: "13.2 Due diligence shall consider, as appropriate:",
      },
      {
        type: "clauses",
        items: [
          {
            id: "a",
            text: "the provider’s governance, privacy and security posture,",
          },
          {
            id: "b",
            text: "the provider’s data use practices and confidentiality safeguards,",
          },
          { id: "c", text: "the quality and sufficiency of model documentation," },
          { id: "d", text: "known limitations, restrictions and safety features," },
          { id: "e", text: "incident response and notification commitments," },
          { id: "f", text: "subcontracting or onward transfer arrangements," },
          {
            id: "g",
            text: "audit, access, transparency and exit considerations where appropriate,",
          },
          { id: "h", text: "intellectual property and licensing implications; and" },
          { id: "i", text: "jurisdictional and regulatory considerations." },
        ],
      },
      {
        type: "p",
        text: "13.3 Contracts involving Third-Party AI Services shall, where appropriate, address data protection, confidentiality, ownership and use of data and outputs, security obligations, restrictions on secondary use, incident reporting, compliance with applicable law, and rights of suspension or termination.",
      },
      {
        type: "p",
        text: "13.4 No third-party AI service may be connected to Organisation systems, workflows or data outside approved procurement, information security and governance processes.",
      },
      {
        type: "p",
        text: "13.5 The Organisation shall not permit a Third-Party AI Service provider to use Organisation data, beneficiary data, child-related information, or other Sensitive Data for model training, model improvement, or secondary purposes except where expressly approved in writing, authorised by the Executive Director, and permitted under applicable law and Organisation policy.",
      },
    ],
  },
  {
    number: "14",
    title: "Inventory, Records and Auditability",
    blocks: [
      {
        type: "p",
        text: "14.1 The Organisation shall maintain and keep up to date an inventory of its material AI systems.",
      },
      {
        type: "p",
        text: "14.2 The inventory shall, at a minimum, record:",
      },
      {
        type: "clauses",
        items: [
          { id: "a", text: "the name or identifier of the system;" },
          { id: "b", text: "the designated owner responsible for the system;" },
          { id: "c", text: "the purpose and deployment context of the system;" },
          {
            id: "d",
            text: "the vendor, model or service provider, where applicable;",
          },
          { id: "e", text: "the applicable risk classification;" },
          { id: "f", text: "the relevant review or approval status;" },
          {
            id: "g",
            text: "the categories of data used by or in connection with the system;",
          },
          { id: "h", text: "the date of the last review;" },
          {
            id: "i",
            text: "any material restrictions, incidents, decommissioning or retirement status;",
          },
          { id: "j", text: "whether the system interacts directly with children;" },
          {
            id: "k",
            text: "whether the system is classified as High-Risk or Restricted AI; and",
          },
          {
            id: "l",
            text: "whether an AI Impact Assessment has been completed.",
          },
        ],
      },
      {
        type: "p",
        text: "14.3 Records of AI Impact Assessments, approvals, testing, incidents, monitoring, changes, and retirement shall be retained in accordance with applicable law, including the Nigeria Data Protection Act 2023, regulations and guidance issued by the Nigeria Data Protection Commission, and the Organisation’s records management framework.",
      },
      {
        type: "p",
        text: "14.4 AI governance records shall be accessible on a controlled basis to authorised management, governance, legal, privacy, information security, safeguarding, compliance, risk, or audit personnel.",
      },
    ],
  },
  {
    number: "15",
    title: "Incident Reporting, Escalation and Remediation",
    blocks: [
      {
        type: "p",
        text: "15.1 All personnel must promptly report actual or suspected AI-related incidents, harmful outputs, anomalies, misuse, security concerns, privacy concerns, system failures or breaches of this Policy.",
      },
      {
        type: "p",
        text: "15.2 The Organisation shall maintain procedures for the identification, triage, investigation, escalation, remediation and documentation of AI-related incidents.",
      },
      {
        type: "p",
        text: "15.3 Where necessary to prevent or limit harm, the Organisation may suspend, restrict, disable or withdraw an AI system pending review or remediation.",
      },
      {
        type: "p",
        text: "15.4 Material AI Incidents shall be escalated promptly to the relevant accountable owner, the executive owner for AI governance, and such governance, legal, compliance, privacy, security, risk or management stakeholders as may be appropriate.",
      },
      {
        type: "p",
        text: "15.5 Following a Material AI Incident, the Organisation shall conduct an appropriate post-incident review, including root-cause analysis, corrective action, control enhancement, record updates and any required regulatory, contractual or stakeholder notifications.",
      },
    ],
  },
  {
    number: "16",
    title: "Training, Awareness and Acceptable Use",
    blocks: [
      {
        type: "p",
        text: "16.1 The Organisation shall promote an appropriate level of AI literacy across the organisation and provide training proportionate to role and responsibility. Such training may include: general awareness for all personnel; child safeguarding considerations; specialised training for developers, product owners, reviewers and governance stakeholders; legal, ethical, privacy, security and confidentiality obligations; risks associated with generative AI, prompts, outputs and model misuse; and reporting and escalation obligations.",
      },
    ],
  },
  {
    number: "17",
    title: "Compliance, Exceptions and Enforcement",
    blocks: [
      { type: "p", text: "17.1 Compliance with this Policy is mandatory." },
      {
        type: "p",
        text: "17.2 Any exception to this Policy must be documented, justified and approved by the appropriate authority designated by the Organisation. No exception may be granted in respect of a prohibited use save where required by law and approved at the highest applicable governance level.",
      },
      {
        type: "p",
        text: "17.3 Any breach of this Policy may result in disciplinary action, suspension of access, contractual consequences, termination of engagement, legal action, regulatory reporting, recovery of losses, or any other appropriate remedial measure.",
      },
      {
        type: "p",
        text: "17.4 Any team, project, programme, or individual that develops, deploys or uses AI outside approved governance channels may be required to suspend such activity immediately and undertake remedial review or corrective action.",
      },
    ],
  },
  {
    number: "18",
    title: "Review and Continuous Improvement",
    blocks: [
      {
        type: "p",
        text: "18.1 This Policy shall be reviewed at least annually and more frequently where necessary to reflect changes in applicable law, regulation, standards or guidance; material changes in the Organisation’s AI activities or risk profile; lessons arising from incidents, audits, assessments or reviews; or material technological developments.",
      },
      {
        type: "p",
        text: "18.2 The Organisation shall continue to refine its AI governance framework, implementation standards and control environment in line with evolving best practice, regulations, law, or stakeholder expectations.",
      },
    ],
  },
  {
    number: "19",
    title: "Public Commitment",
    blocks: [
      {
        type: "p",
        text: "19.1 The Destiny Trust recognises that responsible AI governance is fundamental to trust, safeguarding, innovation, and the wellbeing of the children and communities it serves. The Organisation is committed to developing and using AI in a manner that is lawful, ethical, accountable, secure and aligned with the interests of its stakeholders and the broader public.",
      },
      {
        type: "p",
        text: "The implementation of this Policy shall be supported by an AI Impact Assessment template, an AI Systems Inventory, approved AI usage guidance, and such additional procedures or controls as may be required by the Organisation. The Executive Director shall ensure that these supporting instruments are established within a 60-day period following adoption of this Policy.",
      },
    ],
  },
];

const policyMeta: { label: string; value: string }[] = [
  { label: "Effective Date", value: "June 7, 2026" },
  { label: "Approver", value: "Board of Trustees" },
  { label: "Review Cycle", value: "Annually" },
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

const AIEthicsPolicyPage = () => {
  return (
    <PolicyLayout>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
            The Destiny Trust Children
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            AI Ethics and Governance Policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            This Policy establishes the principles, governance framework,
            responsibilities and minimum standards governing the development,
            procurement, deployment and use of Artificial Intelligence across
            The Destiny Trust.
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

export default AIEthicsPolicyPage;
