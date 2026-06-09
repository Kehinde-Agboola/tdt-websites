import Link from "next/link";
import PolicyLayout from "@/app/_component/PolicyLayout";

type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "bullets"; items: { title?: string; text: string }[] }
  | { type: "definitions"; items: { term: string; def: string }[] }
  | { type: "contacts"; items: { role: string; lines: string[] }[] };

type Section = { number: string; title: string; blocks: Block[] };

const policySections: Section[] = [
  {
    number: "A",
    title: "Our Commitment to Child Protection",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust Children (“The Destiny Trust”) is committed to protecting children and young persons from abuse, neglect, exploitation, violence, and all forms of harm within the families, communities, institutions, and environments in which they live, learn, and participate in our programmes.",
      },
      {
        type: "p",
        text: "Through this Child Protection Policy (CPP), The Destiny Trust sets out its programme-based and community-centred approach to preventing child protection risks, identifying children who may be at risk, and responding appropriately and promptly to concerns. This Policy establishes the framework through which The Destiny Trust works to strengthen protective environments for children and to ensure that children who have suffered harm or are at risk of harm receive appropriate support, referral, and intervention in their best interests.",
      },
      {
        type: "p",
        text: "We recognise that child abuse and exploitation occur across all societies and contexts, and that children, particularly those living in vulnerable or disadvantaged circumstances, may face heightened risks. Harm may occur within homes, schools, peer groups, communities, online spaces, or institutions. Child protection therefore requires coordinated action involving families, community leaders, educators, civil society organisations, and statutory authorities.",
      },
      { type: "p", text: "The Destiny Trust is committed to:" },
      {
        type: "bullets",
        items: [
          {
            text: "Promoting awareness of children’s rights and child protection within the communities where we work;",
          },
          {
            text: "Integrating child protection risk assessment and mitigation into programme design and implementation;",
          },
          {
            text: "Strengthening families and caregivers to provide safe, stable, and protective care;",
          },
          {
            text: "Establishing safe and accessible disclosure and reporting pathways for children;",
          },
          {
            text: "Facilitating referrals and coordination with appropriate government and specialised child protection services;",
          },
          {
            text: "Supporting recovery, reintegration, and long-term wellbeing in the best interests of the child.",
          },
        ],
      },
      {
        type: "p",
        text: "This Policy also applies to the conduct of all staff, volunteers, consultants, contractors, partners, and any person representing The Destiny Trust where their actions, behaviour, or decisions may affect the safety and protection of children within programme or community contexts. All such persons are required to act in a manner that promotes child protection, prevents harm, and supports safe and protective environments for children.",
      },
      {
        type: "p",
        text: "This Child Protection Policy operates alongside The Destiny Trust’s Child Safeguarding Policy, which governs internal standards of conduct, safe recruitment, reporting mechanisms, investigations, and disciplinary action. Where concerns relate to the conduct of organisational representatives, such matters shall be addressed in accordance with both this Policy and the Child Safeguarding Policy.",
      },
      {
        type: "p",
        text: "The Destiny Trust adopts a zero-tolerance approach to all forms of child abuse, neglect, exploitation, and violence. We are committed to ensuring that children’s safety, dignity, rights, and wellbeing remain central to all protection actions, decisions, and programme interventions.",
      },
    ],
  },
  {
    number: "B",
    title: "Purpose",
    blocks: [
      { type: "p", text: "The purpose of this Policy is to:" },
      {
        type: "bullets",
        items: [
          {
            text: "ensure the protection of children and young persons from all forms of abuse, neglect, exploitation, and violence,",
          },
          {
            text: "provide clear guidance on the prevention, identification, and response to child protection concerns,",
          },
          {
            text: "define the responsibilities of staff, volunteers, partners, associates and visitors,",
          },
          {
            text: "establish a safe, ethical, and child-centred practice across all programmes,",
          },
          {
            text: "ensure compliance with applicable child protection laws and best practices.",
          },
        ],
      },
    ],
  },
  {
    number: "C",
    title: "Scope and Applicability",
    blocks: [
      { type: "p", text: "This Policy applies to all:" },
      {
        type: "bullets",
        items: [
          {
            text: "employees, volunteers, interns, consultants, trustees, and contractors connected with The Destiny Trust,",
          },
          {
            text: "partner organizations, contractors, donors, and service providers working with or on behalf of The Destiny Trust,",
          },
          {
            text: "programmes, activities, premises, outreach initiatives, and digital platforms operated or supported by The Destiny Trust,",
          },
          {
            text: "all children and young persons under the age of 18 who are under the care of The Destiny Trust or who participate in the Foundation’s programmes.",
          },
        ],
      },
    ],
  },
  {
    number: "D",
    title: "Definitions",
    blocks: [
      {
        type: "p",
        text: "The following words and expressions shall, unless repugnant to the context or meaning thereof, have the meaning hereinafter respectively ascribed/assigned to them:",
      },
      {
        type: "definitions",
        items: [
          {
            term: "“Bullying”",
            def: "means a form of hurt, intimidation, or control over a child. This includes verbal abuse, physical abuse, emotional abuse, and online bullying such as sending hurtful messages, sharing embarrassing images or bullying through social media, web or mobile phones.",
          },
          {
            term: "“Child”",
            def: "means any person under the age of 18 years regardless of gender, background or legal status.",
          },
          {
            term: "“Child Abuse”",
            def: "means any act or omission that violates the rights of a child under the Nigerian law, or that causes or is likely to cause harm to a child’s physical, emotional, psychological, or sexual wellbeing. This includes but is not limited to, physical abuse, emotional or psychological abuse, sexual abuse, neglect, child trafficking, or child exploitation.",
          },
          {
            term: "“Child Exploitation”",
            def: "means the use of any child or young person for economic, sexual or other benefits that are harmful to the child’s welfare or development including, subjection to exploitative labour, child trafficking, forced begging, sexual exploitation or other forms of economic exploitation.",
          },
          {
            term: "“Child Protection”",
            def: "means the response to child abuse, neglect, child exploitation, and violence against children and young persons associated with The Destiny Trust. It includes measures taken to prevent harm and respond appropriately when concerns arise.",
          },
          {
            term: "“Emotional Abuse”",
            def: "means persistent emotional maltreatment which causes severe and persistent adverse effects on the child’s emotional development including, conveying to children that they are worthless, unloved, or inadequate, imposing developmentally inappropriate expectations, causing children to feel frightened, degrading or rejecting a child, or exploiting and corrupting children and young persons.",
          },
          {
            term: "“Exploitation”",
            def: "refers to situations whereby an abuser makes unfair profit and/or takes advantage of unequal power and/or economic status of a child and/or young person.",
          },
          {
            term: "“Grooming”",
            def: "includes any behaviour, gesture or course of conduct intended to build trust, emotional connection, dependency, or secrecy with a child or young person for the purpose of sexual exploitation or abuse. This may occur online or offline and may involve manipulation, gifts, favours, promises, threats, intimidation, isolation from peers or caregivers, misuse of authority or power, gradual boundary-breaking, or exposure to sexual content, whether or not sexual activity ultimately takes place.",
          },
          {
            term: "“Incident”",
            def: "means an incident of child abuse or potential child abuse.",
          },
          {
            term: "“Physical Abuse”",
            def: "means any act or omission that causes, or is likely to cause, physical harm to a child or young person. This includes, but is not limited to, hitting, beating, slapping, shaking, biting, burning, cutting, causing bruises or abrasions, strangulation, suffocation, drowning, poisoning, fabricated or induced illness, and any form of violent, degrading, or harmful punishment, including corporal punishment in a manner that is inconsistent with or prohibited under applicable Nigerian laws.",
          },
          {
            term: "“Sexual Abuse”",
            def: "means any act, attempt, threat, or pattern of behaviour by which a child or young person is forced, coerced, manipulated, deceived, groomed, or enticed to participate in sexual activities, whether or not the child is aware of, understands, or consents to what is occurring. Sexual abuse may be perpetrated by adults or other children and includes both contact and non-contact acts. Sexual abuse includes, but is not limited to: sexual assault by penetration or non-penetrative acts; inappropriate touching; exposure of a child to sexual acts, sexualised behaviour, or sexually explicit materials; involving a child in the viewing, production, possession, or distribution of sexual images or content; causing or encouraging a child to watch sexual activities; encouraging, coercing, or normalising sexually inappropriate or exploitative behaviour; and sexual exploitation in any form including grooming.",
          },
        ],
      },
    ],
  },
  {
    number: "E",
    title: "Guiding Principles",
    blocks: [
      {
        type: "p",
        text: "This Child Protection Policy is guided by the following principles, which inform all decisions, actions, and interventions of The Destiny Trust:",
      },
      {
        type: "bullets",
        items: [
          {
            title: "Best Interests of the Child",
            text: "The best interests of the child shall be the primary consideration in all activities, decisions, and interventions undertaken by The Destiny Trust. Where competing interests arise, the welfare, safety, and wellbeing of the child shall take precedence over organisational, institutional, or individual interests.",
          },
          {
            title: "Children-First and Survivor-Focused Approach",
            text: "The Destiny Trust adopts a children-first and survivor-focused approach to protection. In all situations, decisions, and responses, the safety, dignity, rights, and wellbeing of the child or young person shall take priority over programme objectives, organisational interests, reputational concerns, or the interests of adults. The Destiny Trust recognises the actual and potential impacts of trauma and is committed to responding and attending to any concerns or incident in a sensitive, supportive, and appropriate manner that promotes healing and recovery.",
          },
          {
            title: "Zero Tolerance for Abuse",
            text: "The Destiny Trust adopts zero tolerance for all forms of child abuse, exploitation, neglect, and violence. Any conduct that places a child at risk or compromises a child’s safety will not be condoned, excused, or ignored, regardless of the position, status, or seniority of the person involved.",
          },
          {
            title: "Children as Rights-Holders",
            text: "The Destiny Trust recognises children as rights-holders and, where appropriate, active participants in their own protection. Protection measures shall respect children’s dignity, evolving capacities, views, and right to be heard, in accordance with applicable child rights laws and international best practice.",
          },
          {
            title: "Duty of Care",
            text: "The Destiny Trust has a responsibility to care for and protect all children and young persons with whom it works, with particular attention to those who are vulnerable or at heightened risk of harm.",
          },
          {
            title: "Confidentiality and Data Protection",
            text: "All protection concerns and reports shall be handled with sensitivity, discretion, and confidentiality. Information relating to a child or incident shall be shared strictly on a need-to-know basis, in the best interest of the child and in accordance with applicable child protection and data protection laws, including the Nigerian Data Protection Act 2023. All safeguarding communications shall be treated as confidential and securely managed.",
          },
          {
            title: "Equality and Non-Discrimination",
            text: "The Destiny Trust is committed to protect all children equally, irrespective of gender, age, disability, ethnicity, religion, social status, or background, and to giving due consideration to children with additional or specific protection needs.",
          },
          {
            title: "Partnership and Collaboration",
            text: "The Destiny Trust is committed to working in collaboration with relevant agencies, partners, and stakeholders to strengthen child protection within organisations and the wider community.",
          },
        ],
      },
    ],
  },
  {
    number: "F",
    title: "Strategic Approaches to Child Protection",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust intends to meet its commitment to protect children and young persons from harm by adopting the following approach:",
      },
      { type: "h", text: "Training and Awareness" },
      {
        type: "p",
        text: "The Destiny Trust recognizes that effective child protection begins with knowledge, understanding, and shared responsibility. Accordingly, we are committed to build capacity of all The Destiny Trust personnel and associates as well as target children and communities, to recognize, prevent, and respond appropriately to child protection concerns. Key measures include:",
      },
      {
        type: "bullets",
        items: [
          {
            text: "All staff of The Destiny Trust shall receive safeguarding induction and orientation on this Child Protection Policy prior to or upon engagement and shall complete mandatory refresher training at least annually or as otherwise required by the Foundation.",
          },
          {
            text: "Staff and personnel with direct, frequent, or specific responsibility for the care, supervision, or engagement of children shall receive advanced, role-specific protection training, including training on recognising abuse, responding to disclosures, and reporting obligations, and shall complete periodic refresher training as determined by their role.",
          },
          {
            text: "All volunteers, interns, contractors, consultants, partners, and visitors shall be informed of the Child Protection Policy and their protection responsibilities before being permitted to engage with children or access programme sites.",
          },
          {
            text: "Parents, legal guardians, caregivers, and children shall be informed, in clear and age-appropriate ways, of The Destiny Trust’s protection standards, reporting channels, and their rights under this Policy.",
          },
          {
            text: "Completion of required protection training and acknowledgement of this Policy shall be a condition of eligibility to work with, represent, or engage with children through The Destiny Trust.",
          },
          {
            text: "The Destiny Trust shall provide regular protection training, refresher sessions, and capacity-building programmes for staff, partners, and relevant stakeholders to maintain competence, awareness, and compliance with this Policy.",
          },
        ],
      },
      { type: "h", text: "Prevention" },
      {
        type: "p",
        text: "The Destiny Trust is committed to identify and reduce risks to children before harm occurs by embedding safety measures into all aspects of our work. Preventive actions include; conducting regular risk assessments across programmes, facilities, and activities, implementing safe recruitment and vetting procedures, enforcing the Child Safeguarding Code of Conduct, always ensuring appropriate supervision of the children and creating a safe, inclusive, and child-centred environment where children feel respected, listened to, and protected.",
      },
      { type: "h", text: "Reporting and Response" },
      {
        type: "p",
        text: "We maintain clear, accessible, and confidential mechanisms for reporting child protection concerns. Reporting is considered a critical safeguard and a shared responsibility of The Destiny Trust. Any suspicion, allegation, disclosure, or concern relating to child abuse or harm must be reported immediately and reports shall be made to the designated Child Protection focal person or through established reporting channels. Children must be provided with child-friendly avenues to raise concerns, and such concerns can be raised orally, or in writing or anonymously. No individual or child shall suffer retaliation or adverse consequences for reporting a concern in good faith.",
      },
      {
        type: "p",
        text: "The Destiny Trust is committed to respond promptly, appropriately, and sensitively to all child protection concerns. All responses shall be guided by the best interests of the child. Upon receipt of the complaint, The Destiny Trust shall prioritize the immediate safety and wellbeing of the child, assess the nature, seriousness, and urgency of the concern, take appropriate interim protective measures where necessary and refer the case to the relevant statutory authorities or child welfare agencies in accordance with the law.",
      },
      { type: "h", text: "How to Respond to a Disclosure or Concern" },
      {
        type: "bullets",
        items: [
          {
            title: "Listen",
            text: "Listen carefully and attentively to the child or reporter. Allow them to speak freely and at their own pace. Do not interrupt, investigate, interrogate, or ask leading or excessive questions. Once the basic facts have been shared, do not question further.",
          },
          {
            title: "Reassure",
            text: "Reassure the child or reporter that they were right to speak up, that the concern is being taken seriously, and that the child is not to blame. Do not make promises that cannot be kept.",
          },
          {
            title: "No Promise of Secrecy",
            text: "Do not promise confidentiality. Explain, in age-appropriate language, that the information may need to be shared with others in order to keep the child safe.",
          },
          {
            title: "Record",
            text: "As soon as possible, make an accurate, factual record of what was said or observed, using the child’s or reporter’s own words where possible. Record relevant details such as dates, times, locations, persons involved, and any observable signs. Do not include opinions or assumptions.",
          },
          {
            title: "Share and Escalate",
            text: "Report the concern immediately to the designated Safeguarding Focal Point or authorised safeguarding personnel of The Destiny Trust. Where a child shows or sends an image, video, or other digital content that depicts them or another child in a vulnerable, humiliating, or abusive situation, do not share or forward the content. Secure it appropriately and report it through safeguarding channels.",
          },
        ],
      },
      { type: "h", text: "Reporting Channels and Timelines" },
      {
        type: "bullets",
        items: [
          { text: "Reports may be made verbally or in writing and may be made anonymously." },
          {
            text: "All safeguarding concerns or complaints must be referred within 24 hours to the designated safeguarding personnel of The Destiny Trust.",
          },
          {
            text: "Where there is an immediate or serious risk to a child or young person, urgent protective action shall be taken without delay, including escalation to senior management and referral to relevant statutory or child protection authorities where required.",
          },
        ],
      },
      { type: "h", text: "Protection Reporting Contact" },
      {
        type: "p",
        text: "Protection concerns, disclosures, or allegations should be reported immediately through any of the following channels:",
      },
      {
        type: "contacts",
        items: [
          {
            role: "Designated Protection Focal Point",
            lines: [
              "Email: safeguarding@thedestinytrust.org",
              "Phone/WhatsApp: +234 809 945 4275",
            ],
          },
          {
            role: "Deputy Protection Lead / Senior Management",
            lines: [
              "Email: safeguarding.alternate@thedestinytrust.org",
              "Phone/WhatsApp: +234 813 882 8681",
            ],
          },
          {
            role: "Anonymous Reporting",
            lines: [
              "Email: report@thedestinytrust.org",
              "Phone/WhatsApp: +234 813 882 8681",
            ],
          },
        ],
      },
      {
        type: "p",
        text: "Where a report involves immediate danger or a life-threatening situation, the matter should be escalated without delay to relevant emergency services or child protection authorities.",
      },
      { type: "h", text: "Monitoring and Continuous Improvement" },
      {
        type: "p",
        text: "The Destiny Trust commits to continuous learning and improvement by reviewing reported cases and response outcomes, strengthening reporting and response mechanisms, incorporating feedback from children, staff, and communities, and updating policies and procedures in line with evolving best practices.",
      },
    ],
  },
  {
    number: "G",
    title: "Roles and Responsibilities",
    blocks: [
      { type: "h", text: "Board of Trustees" },
      {
        type: "bullets",
        items: [
          { text: "Provides oversight and strategic direction on child safeguarding matters" },
          { text: "Approve and periodically review the Child Protection policy" },
          { text: "Ensure adequate resources are allocated for Child protection implementation" },
        ],
      },
      { type: "h", text: "Management" },
      {
        type: "bullets",
        items: [
          { text: "Ensure effective implementation of Child protection mechanisms" },
          { text: "Appoint a Designated Child Protection Officer/Team" },
          { text: "Promote a culture of child safety and accountability" },
        ],
      },
      { type: "h", text: "Designated Child Protection Officer/Team" },
      {
        type: "bullets",
        items: [
          { text: "Act as the primary contact for Child protection matters" },
          { text: "Coordinate responses to Child protection concerns" },
          { text: "Maintain accurate and secure records of concerns and incidents" },
        ],
      },
      { type: "h", text: "Staff, Volunteers and Partners" },
      {
        type: "bullets",
        items: [
          { text: "Adhere strictly to this policy and the Safeguarding Code of Conduct" },
          { text: "Remain vigilant and report child protection concerns as soon as possible" },
          { text: "Participate in child protection trainings and awareness programmes." },
        ],
      },
    ],
  },
  {
    number: "H",
    title: "Safe Recruitment",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust is committed to undertake child-safe recruitment and screening practices before formalising collaborations with staff, volunteers, interns, consultants and service providers. Every recruitment decision prioritizes the safety and wellbeing of children above all other considerations. The mandatory process required for recruitment of persons are that:",
      },
      {
        type: "bullets",
        items: [
          {
            text: "all job description for positions must include requirement to adhere and commit to this policy and the Safeguarding Code of Conduct",
          },
          {
            text: "applicants shall undergo a structured selection process, including interviews that assess suitability to work with children and young persons",
          },
          {
            text: "background checks shall be conducted in accordance with applicable laws and regulations, including checks on criminal records.",
          },
          {
            text: "child protection induction training shall be mandatory prior to or upon commencement of duties",
          },
        ],
      },
    ],
  },
  {
    number: "I",
    title: "Confidentiality and Information Sharing",
    blocks: [
      {
        type: "p",
        text: "All information relating to child protection concerns, reports, disclosures, or incidents shall be handled with strict confidentiality and sensitivity.",
      },
      {
        type: "p",
        text: "Protection records shall be maintained securely, accessed only by authorised personnel, and stored separately from other organisational or personnel files.",
      },
      {
        type: "p",
        text: "Information shall be shared strictly on a need-to-know basis, in accordance with applicable child protection, safeguarding, and data protection laws, and only to the extent necessary to protect the child or young person or to comply with legal or regulatory obligations.",
      },
      { type: "h", text: "Permitted Disclosure in the Best Interests of the Child" },
      {
        type: "p",
        text: "Information relating to a child may be shared where such disclosure is necessary and proportionate in the best interests of the child, including for programme reporting, monitoring and evaluation, learning, accountability, donor or sponsor reporting, partnership requirements, or to secure services, support, or opportunities that benefit the child. Any such disclosure shall be limited to the minimum information required and anonymised or de-identified where possible.",
      },
      {
        type: "p",
        text: "Where information is shared with a partner, donor, sponsor, or third party, The Destiny Trust shall require that such recipient demonstrates comparable child protection, safeguarding, confidentiality, and data protection standards, and is subject to appropriate contractual, policy, or written obligations to protect the information and the rights and wellbeing of the child.",
      },
      { type: "h", text: "Partner Due Diligence" },
      {
        type: "p",
        text: "Prior to sharing any child-related information with a partner, donor, sponsor, or third party, The Destiny Trust shall conduct appropriate confidentiality due diligence to assess the adequacy of the recipient’s child protection policies, practices, reporting mechanisms, and data protection measures. Information shall not be shared where the recipient fails to meet minimum protection or confidentiality standards, unless required by law or necessary to protect the child.",
      },
      { type: "h", text: "Child Protection and Legal Exception" },
      {
        type: "p",
        text: "Confidentiality shall not prevent the sharing of information where there is a concern that a child or young person is at risk of harm, where disclosure is necessary to protect the child, or where disclosure is required by law or by a competent authority. In such cases, information shall be shared promptly, proportionately, and with due regard to the safety, dignity, and rights of the child or young person.",
      },
    ],
  },
  {
    number: "J",
    title:
      "Support for Affected Children and Child Protection Case Management Procedures",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust is committed to ensuring that any child who has experienced, is experiencing, or is at risk of abuse, neglect, exploitation, or violence receives timely, appropriate, and compassionate support. All actions taken shall be guided by the best interests of the child and grounded in a children-first and trauma-informed approach.",
      },
      { type: "p", text: "Where a child protection concern arises, The Destiny Trust shall:" },
      {
        type: "bullets",
        items: [
          {
            title: "Ensure Immediate Safety",
            text: "Take prompt and appropriate steps to safeguard the child from further harm, including implementing protective measures where necessary.",
          },
          {
            title: "Adopt a Child-Centred and Trauma-Informed Response",
            text: "Respond in a manner that minimises re-traumatisation, respects the child’s dignity, recognises the impact of trauma, and supports the child’s emotional and psychological wellbeing.",
          },
          {
            title: "Facilitate Access to Services",
            text: "Provide or facilitate access to appropriate medical, psychosocial, counselling, welfare, legal, or other specialised services, either directly or through trusted referral partners.",
          },
          {
            title: "Make Appropriate Referrals",
            text: "Refer cases to relevant statutory or child protection authorities where required by law or where necessary to secure the child’s protection and rights.",
          },
          {
            title: "Provide Ongoing Support and Monitoring",
            text: "Continue to monitor the child’s wellbeing, safety, and support needs, and take reasonable steps to protect the child from retaliation, stigma, intimidation, or further victimisation.",
          },
          {
            title: "Promote Stability and Continuity",
            text: "Support the continuity of the child’s education, participation in programmes, and access to safe services, where appropriate and in the child’s best interests.",
          },
          {
            title: "Protect Confidentiality",
            text: "Maintain strict confidentiality and ensure that information is shared only on a need-to-know basis, in accordance with legal obligations and safeguarding standards.",
          },
        ],
      },
      {
        type: "p",
        text: "The Destiny Trust shall prioritise the long-term recovery, stability, and wellbeing of affected children and shall ensure that support measures are proportionate, appropriate, and consistent with the child’s rights and expressed views, where age-appropriate.",
      },
    ],
  },
  {
    number: "K",
    title: "Historical Abuse",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust recognises that abuse may have occurred in the past and may be disclosed long after the event. Historical abuse may relate to incidents that occurred prior to a child’s engagement with The Destiny Trust or during earlier periods of involvement.",
      },
      {
        type: "p",
        text: "The Destiny Trust is committed to responding to disclosures of historical abuse with seriousness, sensitivity, and respect.",
      },
      { type: "p", text: "Where historical abuse is disclosed, The Destiny Trust shall:" },
      {
        type: "bullets",
        items: [
          { text: "Listen carefully and respond in a child-centred and trauma-informed manner;" },
          { text: "Assess any ongoing risk to the child or to other children;" },
          { text: "Take appropriate steps to ensure current safety and protection;" },
          { text: "Facilitate access to appropriate psychosocial, medical, or legal support services;" },
          {
            text: "Refer the matter to relevant statutory authorities where required by law or where there is ongoing risk;",
          },
          { text: "Maintain accurate documentation and handle information confidentially;" },
          {
            text: "Ensure that no child is discouraged from reporting abuse, regardless of when it occurred.",
          },
        ],
      },
      {
        type: "p",
        text: "Where historical abuse involves a current or former staff member, volunteer, partner, or representative of The Destiny Trust, the matter shall also be addressed under the Child Safeguarding Policy and may result in investigation and appropriate action.",
      },
      {
        type: "p",
        text: "The passage of time shall not prevent The Destiny Trust from taking appropriate protective or referral action where necessary.",
      },
    ],
  },
  {
    number: "L",
    title: "Child-to-Child Abuse (Peer Abuse)",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust recognises that children may harm other children. Child-to-child abuse may include physical violence, bullying (including cyberbullying), sexual harassment, sexualised behaviour, coercion, emotional abuse, exploitation, or other harmful conduct.",
      },
      {
        type: "p",
        text: "Child-to-child abuse shall be treated as a serious child protection concern and not dismissed as “normal” behaviour or conflict.",
      },
      {
        type: "p",
        text: "Where child-to-child abuse is identified or suspected, The Destiny Trust shall:",
      },
      {
        type: "bullets",
        items: [
          { text: "Prioritise the safety and wellbeing of all children involved;" },
          { text: "Separate children where necessary to prevent further harm;" },
          { text: "Respond in a manner that is proportionate, fair, and trauma-informed;" },
          { text: "Avoid criminalising children unnecessarily while ensuring accountability;" },
          { text: "Conduct appropriate assessment and documentation;" },
          {
            text: "Provide support and referral to both the child who has been harmed and the child who has caused harm, recognising that both may have protection needs;",
          },
          { text: "Engage parents or guardians where appropriate and safe;" },
          {
            text: "Refer to statutory authorities where the conduct may constitute a criminal offence or where required by law.",
          },
        ],
      },
      {
        type: "p",
        text: "The Destiny Trust recognises that children who harm others may themselves be experiencing abuse, trauma, or neglect, and shall approach such situations with sensitivity, safeguarding both protection and accountability.",
      },
    ],
  },
  {
    number: "M",
    title: "Child Sexual Conduct and Protection Standards",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust affirms that childhood is a protected and formative stage of life. Children under the care of or participating in programmes of The Destiny Trust are entitled to grow in safety, dignity, innocence, and healthy development.",
      },
      {
        type: "p",
        text: "The Destiny Trust does not encourage or condone sexual activity between children within its residential facilities, educational settings, outreach programmes, or any environment under its supervision. Programme spaces are to remain safe, structured, and non-sexualised environments.",
      },
      {
        type: "p",
        text: "Children are encouraged to conduct themselves in a manner consistent with their age, the values of The Destiny Trust, and the standards of conduct established for their protection.",
      },
      {
        type: "p",
        text: "However, where sexual behaviour between children is identified, The Destiny Trust shall approach the matter from a child protection perspective. The priority shall be:",
      },
      {
        type: "bullets",
        items: [
          { text: "Ensuring the immediate safety and wellbeing of all children involved;" },
          {
            text: "Assessing whether coercion, pressure, manipulation, exploitation, or harm has occurred;",
          },
          { text: "Providing guidance, counselling, supervision, and appropriate intervention;" },
          { text: "Engaging parents or guardians where safe and appropriate;" },
          {
            text: "Referring to statutory authorities where required by law or where serious harm is identified.",
          },
        ],
      },
      {
        type: "p",
        text: "Where behaviour involves coercion, significant age difference, power imbalance, force, intimidation, image-based exploitation, or repeated harmful conduct, it shall be treated as a serious child protection concern.",
      },
      {
        type: "p",
        text: "The Destiny Trust recognises that children who engage in harmful behaviour may themselves require protection, guidance, and support. Responses shall prioritise safety, accountability, education, and rehabilitation, consistent with the best interests of the child.",
      },
    ],
  },
  {
    number: "N",
    title: "Acknowledgement",
    blocks: [
      {
        type: "p",
        text: "Every individual seeking to work with, volunteer for, partner with, or otherwise engage with The Destiny Trust shall be required to sign an acknowledgement confirming that they have read, understood, and agree to comply with this Policy. The acknowledgement shall further confirm the individual’s understanding that any breach of this Policy, including any act of abuse or misconduct involving a child or young person, will result in disciplinary action in accordance with this Policy and applicable laws.",
      },
      {
        type: "p",
        text: "Organisations that work with us in carrying out our programmes, projects, processes, events and/or activities involving children and young people must comply with the Child Protection Guidelines.",
      },
      {
        type: "p",
        text: "All staff, volunteers, and representatives of The Destiny Trust shall be required to renew this acknowledgement periodically, and in any event upon material updates to the Policy or changes in role or responsibility, as a condition of continued engagement with the Foundation.",
      },
    ],
  },
  {
    number: "O",
    title: "Sanctions and Disciplinary Measures",
    blocks: [
      {
        type: "p",
        text: "The Foundation takes all breaches of this Child Protection Policy seriously. Any conduct that violates this Policy, the Code of Conduct, or applicable child protection standards shall attract appropriate disciplinary action, proportionate to the nature and severity of the breach. Sanctions may be imposed where a staff member, volunteer, consultant, partner, or representative:",
      },
      {
        type: "bullets",
        items: [
          { text: "engage in abuse, exploitation, neglect, or any form of harm against a child," },
          {
            text: "fails to report child protection concerns or deliberately conceals information,",
          },
          { text: "breaches behavioural standards or professional boundaries with children," },
          { text: "obstructs or interferes with a child protection investigation, and" },
          { text: "retaliates against a child or any person who reports concerns in good faith." },
        ],
      },
      {
        type: "p",
        text: "Depending on the circumstances, disciplinary measures that can be imposed include: verbal or written warnings, mandatory retraining or increased supervision, suspension or temporary removal from duties involving children, termination of employment, contract, or volunteer engagement, and referral to professional bodies or relevant authorities where appropriate, without prejudice to any other rights or remedies available to the affected child or The Destiny Trust in the circumstances.",
      },
      {
        type: "p",
        text: "Where an allegation or serious concern arises, The Destiny Trust may take immediate interim measures, including suspension or reassignment, to safeguard children pending the outcome of an investigation. Such measures do not imply guilt but are taken in the best interests of child safety.",
      },
      {
        type: "p",
        text: "Where a third party, contractor, or partner breaches the child protection standards, The Destiny Trust may suspend, terminate, or otherwise restrict the engagement and shall take appropriate steps to prevent further risk to children and young persons.",
      },
      {
        type: "p",
        text: "Where a breach involves actual or suspected harm to a child or young person, or constitutes a criminal or regulatory violation, the matter shall be reported to the appropriate authorities and may give rise to civil, criminal, or other legal action.",
      },
    ],
  },
  {
    number: "P",
    title: "Approval and Review",
    blocks: [
      {
        type: "bullets",
        items: [
          {
            text: "This Child Protection Policy was approved by the Board of Trustees of The Destiny Trust and takes effect from the date of adoption.",
          },
          {
            text: "The Policy shall be reviewed periodically to ensure continued relevance, effectiveness, and compliance with applicable laws, protection standards, and organisational practice. A formal review shall be conducted at least every two (2) years, or sooner where required due to changes in law, organisational structure, programme activities, or following an incident or learning review.",
          },
          {
            text: "Any amendments to this Policy shall be subject to approval by the Board of Trustees.",
          },
        ],
      },
    ],
  },
];

const codeOfConductSections: Section[] = [
  {
    number: "A",
    title: "Expected Standards of Behaviour",
    blocks: [
      { type: "p", text: "All staff and representatives of The Destiny Trust must:" },
      {
        type: "bullets",
        items: [
          {
            text: "Create and maintain an environment that is safe, inclusive, respectful, and supportive of the dignity, rights, and wellbeing of children and young persons.",
          },
          {
            text: "Interact with children in a manner that is appropriate, professional, respectful, and non-exploitative at all times.",
          },
          {
            text: "Use positive, non-violent, non-discriminatory, and age-appropriate approaches to guidance, discipline, and behaviour management.",
          },
          {
            text: "Obtain all required consent and authorisation before involving any child in activities, programmes, photography, filming, media representation, or digital content, in accordance with the Child Safeguarding Policy.",
          },
          {
            text: "Respect children’s privacy, confidentiality, and personal boundaries, subject to safeguarding, reporting, and legal obligations.",
          },
          {
            text: "Follow all safeguarding procedures and immediately report any safeguarding concern, suspicion, disclosure, or allegation in line with the Foundation’s reporting and escalation procedures.",
          },
          {
            text: "Comply with all applicable child protection, child rights, and child labour laws and international standards, and refrain from engaging children or young persons in domestic labour or any form of work that is illegal, exploitative, or harmful.",
          },
          {
            text: "Cooperate fully, honestly, and confidentially in any safeguarding enquiry, assessment, or investigation.",
          },
          {
            text: "Encourage children, young persons, staff, volunteers, and partners to speak up about concerns that affect their safety, rights, or wellbeing.",
          },
        ],
      },
    ],
  },
  {
    number: "B",
    title: "Prohibited Conduct",
    blocks: [
      {
        type: "p",
        text: "No staff member or representative of The Destiny Trust shall engage in, condone, or tolerate any of the following conduct:",
      },
      {
        type: "bullets",
        items: [
          {
            text: "Any form of physical, emotional, psychological, or sexual abuse, including sexual activity with a child, sexual exploitation, grooming, inappropriate contact, or exposure to sexualised behaviour or content.",
          },
          {
            text: "Use of threats, intimidation, humiliation, degrading language, excessive control, or corporal punishment against any child or young person.",
          },
          {
            text: "Being alone with a child in a secluded, unobservable, or unauthorised location without approval or appropriate safeguards.",
          },
          {
            text: "Giving gifts, money, favours, or preferential treatment to a child in a manner that is secretive, manipulative, coercive, or inappropriate.",
          },
          {
            text: "Involving a child in any illegal, exploitative, hazardous, or harmful activity.",
          },
          {
            text: "Taking, sharing, storing, or using images, videos, audio recordings, or personal information of children without proper consent, authorisation, and safeguarding controls.",
          },
          {
            text: "Discriminating against, favouring, or excluding any child in a manner that undermines fairness, equality, or dignity.",
          },
          {
            text: "Using computers, mobile phones, cameras, social media, messaging platforms, or any digital technology to exploit, harass, groom, or otherwise harm children.",
          },
          {
            text: "Physically restraining, assaulting, or using unnecessary force against a child, except where legally justified to prevent immediate harm and in line with approved procedures.",
          },
          {
            text: "Allowing a child or young person to stay overnight at a personal residence, sleeping in the same room or bed with a child, or travelling alone with a child without authorisation and approved safeguards.",
          },
          {
            text: "Fondling, holding, kissing, hugging, touching, or engaging in any physical contact with a child that is inappropriate, excessive, culturally insensitive, or not clearly in the child’s best interests.",
          },
          {
            text: "Carrying a child, allowing a child to sit on the lap, or engaging in prolonged or unnecessary physical contact, except where clearly appropriate, culturally acceptable, and in the child’s best interests (e.g. emergency care), and with due sensitivity.",
          },
        ],
      },
    ],
  },
  {
    number: "C",
    title: "Application and Enforcement",
    blocks: [
      {
        type: "p",
        text: "This Code of Conduct is not exhaustive. All persons covered by this Code are required to exercise sound judgement and avoid any behaviour that may compromise the safety, rights, dignity, or wellbeing of children and young persons or bring The Destiny Trust into disrepute.",
      },
      {
        type: "p",
        text: "Any breach of this Code shall be treated as a serious safeguarding matter and may result in disciplinary action, termination of engagement, and referral to relevant authorities in accordance with the Child Safeguarding Policy and applicable laws.",
      },
    ],
  },
];

const policyMeta: { label: string; value: string }[] = [
  { label: "Policy Version", value: "3.0" },
  { label: "Date Approved", value: "February 22, 2026" },
  { label: "Effective Date", value: "February 22, 2026" },
  { label: "Next Review Due", value: "January 2028" },
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
    case "contacts":
      return (
        <ul key={key} className="grid gap-3 sm:grid-cols-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-sm font-semibold text-gray-900">{item.role}</p>
              <div className="mt-2 space-y-1">
                {item.lines.map((line, j) => (
                  <p key={j} className="text-sm leading-relaxed text-gray-700">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      );
  }
}

function renderSections(sections: Section[]) {
  return sections.map((section) => (
    <section key={section.number} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">
        <span className="text-yellow">{section.number}.</span>{" "}
        {section.title}
      </h2>
      {section.blocks.map((block, i) => renderBlock(block, i))}
    </section>
  ));
}

const ChildProtectionPolicyPage = () => {
  return (
    <PolicyLayout>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
        The Destiny Trust
      </p>
      <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
        Child Protection Policy
      </h1>
      <p className="mt-4 text-base leading-relaxed text-gray-700">
        The Destiny Trust is committed to protecting children and young persons
        from abuse, neglect, exploitation, violence, and all forms of harm within
        the families, communities, institutions, and environments in which they
        live, learn, and participate in our programmes.
      </p>

      <dl className="mt-6 grid gap-3 rounded-2xl bg-[#FFF8E5] p-5 sm:grid-cols-4">
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

      <div className="mt-10 space-y-10">{renderSections(policySections)}</div>

      {/* Annexure 1 — Code of Conduct */}
      <div className="mt-14 border-t border-gray-200 pt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
          Annexure 1
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          Child Protection Code of Conduct
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-sm leading-relaxed text-gray-700">
            This Child Protection Code of Conduct sets out the minimum standards
            of behaviour required of all staff, volunteers, interns, consultants,
            contractors, service providers, partners, visitors, and any other
            persons engaged by, working with, or representing The Destiny Trust.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            The Code applies at all times and in all settings, including
            programme sites, offices, residential facilities, field locations,
            digital and online spaces, travel, and any situation in which an
            individual is acting on behalf of or associated with The Destiny
            Trust.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            The purpose of this Code is to protect children and young persons
            from abuse, neglect, exploitation, violence, and harm, and to promote
            safe, respectful, and ethical engagement with children.
          </p>
        </div>
        <div className="mt-8 space-y-10">
          {renderSections(codeOfConductSections)}
        </div>
      </div>

      {/* Annexure II — Acknowledgement and Declaration */}
      <div className="mt-14 border-t border-gray-200 pt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
          Annexure II
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          Child Protection Acknowledgement and Declaration
        </h2>
        <div className="mt-4 space-y-4">
          <p className="text-sm leading-relaxed text-gray-700">
            I, the undersigned, acknowledge that I have received, read, and
            understood The Destiny Trust Child Protection Policy and Code of
            Conduct.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            I confirm that I understand my responsibility to uphold the highest
            standards of behaviour in all my interactions with children and young
            persons and to place their safety, dignity, rights, and wellbeing
            first at all times.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            I agree to follow The Destiny Trust’s Child Protection Policy and Code
            of Conduct at all times. I will put children first, act respectfully
            and safely around children and young people, maintain appropriate
            boundaries, report any protection concern immediately, cooperate with
            child protection processes, and respect confidentiality and data
            protection requirements where it is safe and lawful to do so.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">I understand that:</p>
          <ul className="space-y-3 pl-1">
            {[
              "Compliance with the Child Protection Policy and Code of Conduct is mandatory and non-negotiable.",
              "Any breach of the Policy or Code of Conduct may result in disciplinary action, termination of my engagement or relationship with The Destiny Trust, and, where applicable, referral to relevant authorities.",
              "Failure to report a child protection concern may itself constitute a breach of the Policy and Code of Conduct.",
            ].map((text, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-gray-700"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-gray-700">
            I declare that the information provided below is true and accurate,
            and I commit to upholding the standards set out in the Child
            Protection Policy and Code of Conduct.
          </p>
        </div>

        <dl className="mt-6 grid gap-x-8 gap-y-5 rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-200 sm:grid-cols-2">
          {[
            "Name",
            "Role / Relationship with The Destiny Trust",
            "Department / Programme (if applicable)",
            "Signature",
            "Date",
          ].map((label) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-yellow">
                {label}
              </dt>
              <dd className="mt-3 border-b border-dashed border-gray-400" />
            </div>
          ))}
        </dl>

        <div className="mt-8 space-y-2 text-sm leading-relaxed text-gray-700">
          <p>
            This Child Protection Policy and Child Protection Code of Conduct was
            duly approved and adopted by the Board of Trustees of The Destiny
            Trust pursuant to a resolution of the Board passed at a duly convened
            meeting on 22nd February, 2026.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-yellow">
                For and on behalf of the Board of Trustees
              </p>
              <p className="mt-2 font-semibold text-gray-900">
                Ododo Owodeha-Ashaka
              </p>
              <p className="text-sm text-gray-700">Ag. Chairperson</p>
              <p className="mt-3 text-sm text-gray-700">Date: February 22, 2026</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-yellow">
                For and on behalf of Management
              </p>
              <p className="mt-2 font-semibold text-gray-900">Abimbola Ojenike</p>
              <p className="text-sm text-gray-700">Founder / Chief Executive</p>
              <p className="mt-3 text-sm text-gray-700">Date: February 22, 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gray-50 p-5 text-sm leading-relaxed text-gray-800 ring-1 ring-gray-200">
        For further information about this Policy, contact The Destiny Trust at
        info@destinytrust.org.
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

export default ChildProtectionPolicyPage;
