import Container from "@/app/_component/shared";
import Link from "next/link";

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
    title: "Our Commitment to Child Safeguarding",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust Children Foundation (“The Destiny Trust”) is committed to creating and sustaining a safe, inclusive, and child-centred environment for every child and young person who engages with, benefits from, or is affected by our work.",
      },
      {
        type: "p",
        text: "We recognise that children and young persons, particularly those living in disadvantaged or vulnerable circumstances, are at risk of abuse, neglect, exploitation, and violence. Safeguarding children is therefore not incidental to our work; it is fundamental to who we are, how we operate and our mission. Our work to educate, care for, and equip children with skills is only meaningful if the systems, processes, and programmes designed to support them do not themselves expose children to harm or the risk of harm.",
      },
      {
        type: "p",
        text: "The Destiny Trust accepts its full legal, moral, and ethical responsibility to safeguard the rights, dignity, safety, and wellbeing of every child and young person associated with the organisation. This responsibility applies to all trustees, staff, volunteers, partners, consultants, contractors, and any individual or organisation acting on our behalf.",
      },
      {
        type: "p",
        text: "We maintain zero tolerance for abuse, neglect, exploitation, violence, harassment, or any conduct that endangers children or young persons. No child shall be harmed, discriminated against, excluded, or placed at risk on the basis of gender, ethnicity, religion, disability, socio-economic status, or any other characteristic. Inequality, discrimination, and exclusion are incompatible with our values and will not be tolerated.",
      },
      {
        type: "p",
        text: "Safeguarding is a shared responsibility at The Destiny Trust. We are committed to ensuring that everyone who works with or engages with us understands their safeguarding responsibilities and is supported to fulfil them. Clear recruitment, vetting, and engagement processes are in place to prevent anyone who may pose a risk from working with or having access to children.",
      },
      {
        type: "p",
        text: "Safeguarding is a core value of The Destiny Trust and guides our programmes, decisions, and relationships. We are committed to acting promptly and responsibly to prevent harm and to respond appropriately to any safeguarding concerns in line with applicable laws and good practice.",
      },
      {
        type: "p",
        text: "This Child Safeguarding Policy outlines our commitment to safeguarding the children and sets out the procedures for preventing, identifying, and responding to any safeguarding concerns.",
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
            text: "ensure that the welfare, protection, and best interests of children and young persons are central to all activities, programmes, and operations of the Foundation,",
          },
          {
            text: "prevent all forms of abuse, neglect, exploitation, violence, and harm to children and young persons under the care of, or associated with, the Foundation,",
          },
          {
            text: "ensure that only suitable individuals are recruited, engaged, or permitted to represent the Foundation and that such persons strictly comply with all child safeguarding requirements,",
          },
          {
            text: "provide clear guidance to staff, volunteers, partners, contractors, and other stakeholders on expected conduct, appropriate behaviour, and safeguarding responsibilities,",
          },
          {
            text: "establish clear procedures for the timely reporting, management, and response to safeguarding concerns, incidents, or allegations,",
          },
          {
            text: "prevent, address, and respond to unsafe, inappropriate, or harmful actions or behaviours by staff, associates, visitors, or any other persons connected with The Destiny Trust,",
          },
          {
            text: "promote safe practices across all programmes, services, and activities of The Destiny Trust; and",
          },
          {
            text: "promote a safe, respectful, and inclusive environment in which the rights, dignity, and wellbeing of children and young persons are protected.",
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
            text: "employees, volunteers, interns, consultants, and board members of The Destiny Trust,",
          },
          {
            text: "partner organizations, contractors, and service providers working with or on behalf of The Destiny Trust,",
          },
          {
            text: "programmes, activities, premises, outreach initiatives, and digital platforms operated or supported by The Destiny Trust,",
          },
          {
            text: "all children and young persons under the age of 18 who are under the care of The Destiny Trust or who participate in the Foundation’s programmes.",
          },
        ],
      },
      {
        type: "p",
        text: "Compliance with this Policy is mandatory and non-negotiable. Any breach of this Policy shall be treated as serious misconduct and may result in immediate disciplinary action, including suspension, dismissal, or termination of employment, engagement, contractual, or partnership relationships, without prejudice to any other rights or remedies available to the affected child or The Destiny Trust in the circumstances. Where a breach involves actual or suspected harm to a child or young person, or constitutes a criminal or regulatory violation, the matter shall be reported to the appropriate authorities and may give rise to civil, criminal, or other legal action.",
      },
    ],
  },
  {
    number: "D",
    title: "Legal Framework",
    blocks: [
      {
        type: "p",
        text: "This Policy is governed by the Constitution of the Federal Republic of Nigeria 1999 (As Amended), the Child's Right Act 2003, applicable State Child Right Laws and Safeguarding Regulations, the Violence against Persons (Prohibition) Act 2009, International conventions and child protection standards and the internal policies of The Destiny Trust, including the Child Safeguarding Code of Conduct as reflected in Annex 1.",
      },
    ],
  },
  {
    number: "E",
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
            term: "“Child Safeguarding”",
            def: "means responsibilities, proactive preventives and responsive measures undertaken to protect children and young persons from maltreatment, neglect, exploitation, violence or any form of harm whatsoever. This includes, ensuring that their contact with The Destiny Trust and those associated with it is safe and where there are concerns over a child or young person’s welfare or where a child is subjected to violence, appropriate and timely actions are taken to address this.",
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
            term: "“Physical Abuse”",
            def: "means any act or omission that causes, or is likely to cause, physical harm to a child or young person. This includes, but is not limited to, hitting, beating, slapping, shaking, biting, burning, cutting, causing bruises or abrasions, strangulation, suffocation, drowning, poisoning, fabricated or induced illness, and any form of violent, degrading, or harmful punishment, including corporal punishment in a manner that is inconsistent with or prohibited under applicable Nigerian laws.",
          },
          {
            term: "“Sexual Abuse”",
            def: "means any act, attempt, threat, or pattern of behaviour by which a child or young person is forced, coerced, manipulated, deceived, groomed, or enticed to participate in sexual activities, whether or not the child is aware of, understands, or consents to what is occurring. Sexual abuse may be perpetrated by adults or other children and includes both contact and non-contact acts. Sexual abuse includes, but is not limited to: sexual assault by penetration or non-penetrative acts; inappropriate touching; exposure of a child to sexual acts, sexualised behaviour, or sexually explicit materials; involving a child in the viewing, production, possession, or distribution of sexual images or content; causing or encouraging a child to watch sexual activities; encouraging, coercing, or normalising sexually inappropriate or exploitative behaviour; and sexual exploitation in any form including grooming. Grooming includes any behaviour, gesture or course of conduct intended to build trust, emotional connection, dependency, or secrecy with a child or young person for the purpose of sexual exploitation or abuse. This may occur online or offline and may involve manipulation, gifts, favours, promises, threats, intimidation, isolation from peers or caregivers, misuse of authority or power, gradual boundary-breaking, or exposure to sexual content, whether or not sexual activity ultimately takes place.",
          },
        ],
      },
    ],
  },
  {
    number: "F",
    title: "Guiding Principles",
    blocks: [
      {
        type: "p",
        text: "This Child Safeguarding Policy is guided by the following principles, which inform all decisions, actions, and interventions of The Destiny Trust:",
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
            text: "The Destiny Trust adopts a children-first and survivor-focused approach to safeguarding. In all situations, decisions, and responses, the safety, dignity, rights, and wellbeing of the child or young person shall take priority over programme objectives, organisational interests, reputational concerns, or the interests of adults. The Destiny Trust recognises the actual and potential impacts of trauma and is committed to preventing harm, minimising re-traumatisation, and responding to safeguarding concerns in a sensitive, supportive, and appropriate manner that promotes healing and recovery.",
          },
          {
            title: "Zero Tolerance for Abuse",
            text: "The Destiny Trust adopts zero tolerance for all forms of child abuse, exploitation, neglect, and violence. Any conduct that places a child at risk or compromises a child’s safety will not be condoned, excused, or ignored, regardless of the position, status, or seniority of the person involved.",
          },
          {
            title: "Children as Rights-Holders",
            text: "The Destiny Trust recognises children as rights-holders and, where appropriate, active participants in their own protection. Safeguarding measures shall respect children’s dignity, evolving capacities, views, and right to be heard, in accordance with applicable child rights laws and international best practice.",
          },
          {
            title: "Duty of Care",
            text: "The Destiny Trust has a responsibility to care for and protect all children and young persons with whom it works, with particular attention to those who are vulnerable or at heightened risk of harm.",
          },
          {
            title: "Confidentiality and Data Protection",
            text: "All safeguarding concerns and reports shall be handled with sensitivity, discretion, and confidentiality. Information relating to a child or safeguarding incident shall be shared strictly on a need-to-know basis, in the best interest of the child and in accordance with applicable child protection and data protection laws, including the Nigerian Data Protection Act 2023. All safeguarding communications shall be treated as confidential and securely managed.",
          },
          {
            title: "Prevention and Risk Management",
            text: "The Destiny Trust prioritises prevention by identifying safeguarding risks early and implementing appropriate protective measures, including safe recruitment practices, training, supervision, risk assessments, and child-safe programme design.",
          },
          {
            title: "Equality and Non-Discrimination",
            text: "The Destiny Trust is committed to safeguarding all children equally, irrespective of gender, age, disability, ethnicity, religion, social status, or background, and to giving due consideration to children with additional or specific protection needs.",
          },
          {
            title: "Partnership and Collaboration",
            text: "The Destiny Trust is committed to working in collaboration with relevant agencies, partners, and stakeholders to strengthen child safeguarding within organisations and child protection within the wider community.",
          },
        ],
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
          { text: "Approve and periodically review the Child Safeguarding policy" },
          { text: "Ensure adequate resources are allocated for Child safeguarding implementation" },
        ],
      },
      { type: "h", text: "Management" },
      {
        type: "bullets",
        items: [
          { text: "Ensure effective implementation of Child safeguarding mechanisms" },
          { text: "Appoint a Designated Safeguarding Officer/Team" },
          { text: "Promote a culture of child safety and accountability" },
        ],
      },
      { type: "h", text: "Designated Child Safeguarding Officer/Team" },
      {
        type: "bullets",
        items: [
          { text: "Act as the primary contact for Child Safeguarding matters" },
          { text: "Coordinate responses to Child safeguarding concerns" },
          { text: "Maintain accurate and secure records of concerns and incidents" },
        ],
      },
      { type: "h", text: "Staff, Volunteers and Partners" },
      {
        type: "bullets",
        items: [
          { text: "Adhere strictly to this policy and the Safeguarding Code of Conduct" },
          { text: "Remain vigilant and report child safeguarding concerns as soon as possible" },
          { text: "Participate in child safeguarding trainings and awareness programmes." },
        ],
      },
    ],
  },
  {
    number: "H",
    title: "Media Guidelines",
    blocks: [
      {
        type: "p",
        text: "The Destiny Trust recognises the responsible use of images, videos, audio recordings, and written stories as an important part of documenting impact, monitoring progress, learning, advocacy, fundraising, and celebrating the growth, potential, achievements, and talents of children and young persons. All media involving children shall be used only where it serves the best interests of the child and is consistent with this Policy.",
      },
      {
        type: "p",
        text: "Accordingly, The Destiny Trust, its staff, interns, volunteers, contractors, visitors, partners, and any other persons acting on its behalf shall comply with the following guidelines:",
      },
      {
        type: "bullets",
        items: [
          {
            text: "Media involving children may be collected and used for programme documentation, impact reporting, progress tracking, learning, advocacy, and public communications, including celebrating children’s strengths, achievements, talents, and development, provided such use is child-safe, respectful, and in the best interests of the child.",
          },
          {
            text: "Informed consent shall be obtained from the child and, where applicable, from the child’s parent, legal guardian, or authorised caregiver before photographing, filming, recording, or otherwise collecting media involving a child or young person.",
          },
          {
            text: "The purpose of collecting the media, how it will be used, and where it may be shared shall be explained to the child in age-appropriate language, including the nature of the final content.",
          },
          {
            text: "Children shall participate voluntarily and may withhold or withdraw consent at any time, without pressure, consequence, or negative impact on their access to programmes or support.",
          },
          {
            text: "All written content, photographs, and video footage shall portray children in a dignified, respectful, and non-exploitative manner, and shall not depict children in vulnerable, submissive, degrading, or embarrassing situations, or exaggerate hardship or distress.",
          },
          {
            text: "Children shall be appropriately and fully clothed in all images and recordings, and no content shall be sexually suggestive, exploitative, or capable of misinterpretation.",
          },
          {
            text: "Images, videos, and written narratives shall accurately reflect the child’s context and progress and shall not misrepresent facts or circumstances.",
          },
          {
            text: "Children’s privacy shall be protected at all times. Identifiable information, including names, dates of birth, precise locations, school details, or other personal identifiers, shall not be disclosed in any written, visual, or digital content unless strictly necessary and expressly authorised in line with this Policy.",
          },
        ],
      },
      { type: "h", text: "Digital and Social Media Use" },
      {
        type: "p",
        text: "Media involving children may be shared through The Destiny Trust’s official digital and social media platforms for approved purposes such as impact reporting, programme updates, advocacy, fundraising, and celebrating children’s progress and achievements, provided all safeguarding, consent, and privacy requirements are met.",
      },
      {
        type: "p",
        text: "No child-related media shall be posted, shared, forwarded, tagged, geo-located, or livestreamed on personal social media accounts or personal messaging platforms by staff, volunteers, or representatives of The Destiny Trust.",
      },
      {
        type: "p",
        text: "Children shall not be tagged, named, or otherwise made identifiable or traceable on digital or social media platforms. Captions, hashtags, comments, and accompanying text shall be respectful, factual, and child-safe.",
      },
      {
        type: "p",
        text: "All digital media involving children shall be stored securely, accessed only by authorised personnel, and managed in compliance with applicable child protection and data protection laws, including the Nigerian Data Protection Act 2023.",
      },
      {
        type: "p",
        text: "Any unauthorised use, sharing, loss, or misuse of child-related media, or any concern relating to digital or social media content involving children, shall be reported immediately through The Destiny Trust’s safeguarding reporting and escalation channels.",
      },
    ],
  },
  {
    number: "I",
    title: "Confidentiality and Information Sharing",
    blocks: [
      {
        type: "p",
        text: "All information relating to child safeguarding concerns, reports, disclosures, or incidents shall be handled with strict confidentiality and sensitivity.",
      },
      {
        type: "p",
        text: "Safeguarding records shall be maintained securely, accessed only by authorised personnel, and stored separately from other organisational or personnel files. Information shall be shared strictly on a need-to-know basis, in accordance with applicable child protection, safeguarding, and data protection laws, and only to the extent necessary to protect the child or young person or to comply with legal or regulatory obligations.",
      },
      { type: "h", text: "Permitted Disclosure in the Best Interests of the Child" },
      {
        type: "p",
        text: "Information relating to a child may be shared where such disclosure is necessary and proportionate in the best interests of the child, including for programme reporting, monitoring and evaluation, learning, accountability, donor or sponsor reporting, partnership requirements, or to secure services, support, or opportunities that benefit the child. Any such disclosure shall be limited to the minimum information required and anonymised or de-identified where possible.",
      },
      {
        type: "p",
        text: "Where information is shared with a partner, donor, sponsor, or third party, The Destiny Trust shall require that such recipient demonstrates comparable child safeguarding, confidentiality, and data protection standards, and is subject to appropriate contractual, policy, or written obligations to protect the information and the rights and wellbeing of the child.",
      },
      { type: "h", text: "Partner Due Diligence" },
      {
        type: "p",
        text: "Prior to sharing any child-related information with a partner, donor, sponsor, or third party, The Destiny Trust shall conduct appropriate safeguarding and confidentiality due diligence to assess the adequacy of the recipient’s child safeguarding policies, practices, reporting mechanisms, and data protection measures. Information shall not be shared where the recipient fails to meet minimum safeguarding or confidentiality standards, unless required by law or necessary to protect the child.",
      },
      { type: "h", text: "Safeguarding and Legal Exception" },
      {
        type: "p",
        text: "Confidentiality shall not prevent the sharing of information where there is a concern that a child or young person is at risk of harm, where disclosure is necessary to safeguard the child, or where disclosure is required by law or by a competent authority. In such cases, information shall be shared promptly, proportionately, and with due regard to the safety, dignity, and rights of the child or young person.",
      },
    ],
  },
  {
    number: "J",
    title: "Reporting and Response",
    blocks: [
      {
        type: "p",
        text: "Any child, staff member, volunteer, intern, consultant, partner, or any person engaged with The Destiny Trust who has a concern, witnesses, receives a disclosure, or suspects a breach of this Policy or any form of abuse, neglect, exploitation, or harm involving a child or young person must report the concern immediately in accordance with the procedures set out below:",
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
      { type: "h", text: "Safeguarding Reporting Contacts" },
      {
        type: "p",
        text: "Safeguarding concerns, disclosures, or allegations should be reported immediately through any of the following channels:",
      },
      {
        type: "contacts",
        items: [
          {
            role: "Designated Safeguarding Focal Point",
            lines: [
              "Email: safeguarding@thedestinytrust.org",
              "Phone/WhatsApp: +234 809 945 4275",
            ],
          },
          {
            role: "Deputy Safeguarding Lead / Senior Management",
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
      { type: "h", text: "What to Do if You Are Concerned About a Child’s Wellbeing" },
      {
        type: "bullets",
        items: [
          { text: "The first priority is always the immediate safety and welfare of the child." },
          { text: "Remain calm and composed. Do not show shock, disbelief, anger, or distress." },
          {
            text: "Do not investigate or attempt to verify the allegation. If a child reports abuse directly, ask only limited, neutral questions (e.g. who, what, where, when) to understand the concern. Do not ask why questions.",
          },
          { text: "Do not confront or challenge parents, carers, teachers, or alleged perpetrators." },
          {
            text: "Ensure that all concerns, suspicions, disclosures, and actions taken are properly recorded and reported in line with this Policy.",
          },
        ],
      },
      { type: "h", text: "What Happens After You Make a Report" },
      {
        type: "bullets",
        items: [
          {
            text: "All safeguarding reports and concerns are taken seriously and assessed promptly by the designated Safeguarding Focal Point or authorised safeguarding personnel.",
          },
          {
            text: "Appropriate protective measures will be implemented to safeguard the child or young person, and further action will be determined in line with this Policy and applicable laws.",
          },
          {
            text: "Where required, reports will be escalated to senior management and referred to statutory authorities or specialist child protection services.",
          },
          {
            text: "Information will be handled sensitively and confidentially and shared strictly on a need-to-know basis.",
          },
          {
            text: "Where appropriate and permissible, feedback may be provided to the reporter on the status or outcome of the report, subject to confidentiality and the best interests of the child.",
          },
        ],
      },
      { type: "h", text: "Non-Retaliation and Whistleblower Protection" },
      {
        type: "bullets",
        items: [
          {
            text: "The Destiny Trust strictly prohibits any form of retaliation, victimisation, intimidation, or adverse treatment against any person who raises a safeguarding concern, makes a report, or participates in a safeguarding process in good faith.",
          },
          {
            text: "No child, staff member, volunteer, intern, consultant, partner, or reporter shall suffer dismissal, disciplinary action, discrimination, harassment, or any other detriment for reporting a concern honestly, even where the concern is not ultimately substantiated.",
          },
          {
            text: "Any act of retaliation or interference with safeguarding reporting or investigations shall itself constitute a serious breach of this Policy and may result in disciplinary action and other appropriate measures.",
          },
        ],
      },
    ],
  },
  {
    number: "K",
    title: "Acknowledgement",
    blocks: [
      {
        type: "p",
        text: "Every individual seeking to work with, volunteer for, partner with, or otherwise engage with The Destiny Trust shall be required to sign an acknowledgement confirming that they have read, understood, and agree to comply with this Policy. The acknowledgement shall further confirm the individual’s understanding that any breach of this Policy, including any act of abuse or misconduct involving a child or young person, will result in disciplinary action in accordance with this Policy and applicable laws.",
      },
      {
        type: "p",
        text: "Organisations that work with us in carrying out our programmes, projects, processes, events and/or activities involving children and young people must comply with the Child Safeguarding Guidelines.",
      },
      {
        type: "p",
        text: "All staff, volunteers, and representatives of The Destiny Trust shall be required to renew this acknowledgement periodically, and in any event upon material updates to the Policy or changes in role or responsibility, as a condition of continued engagement with the Foundation.",
      },
    ],
  },
  {
    number: "L",
    title: "Training and Awareness",
    blocks: [
      {
        type: "bullets",
        items: [
          {
            text: "All staff of The Destiny Trust shall receive safeguarding induction and orientation on this Child Safeguarding Policy prior to or upon engagement, and shall complete mandatory refresher training at least annually or as otherwise required by the Foundation.",
          },
          {
            text: "Staff and personnel with direct, frequent, or specific responsibility for the care, supervision, or engagement of children shall receive advanced, role-specific safeguarding training, including training on recognising abuse, responding to disclosures, and reporting obligations, and shall complete periodic refresher training as determined by their role.",
          },
          {
            text: "All volunteers, interns, contractors, consultants, partners, and visitors shall be informed of the Child Safeguarding Policy and their safeguarding responsibilities before being permitted to engage with children or access programme sites.",
          },
          {
            text: "Parents, legal guardians, caregivers, and children shall be informed, in clear and age-appropriate ways, of The Destiny Trust’s safeguarding standards, reporting channels, and their rights under this Policy.",
          },
          {
            text: "Completion of required safeguarding training and acknowledgement of this Policy shall be a condition of eligibility to work with, represent, or engage with children through The Destiny Trust.",
          },
          {
            text: "The Destiny Trust shall provide regular safeguarding training, refresher sessions, and capacity-building programmes for staff, partners, and relevant stakeholders to maintain competence, awareness, and compliance with this Policy.",
          },
        ],
      },
    ],
  },
  {
    number: "M",
    title: "Approval and Review",
    blocks: [
      {
        type: "bullets",
        items: [
          {
            text: "This Child Safeguarding Policy was approved by the Board of Trustees of The Destiny Trust and takes effect from the date of adoption.",
          },
          {
            text: "The Policy shall be reviewed periodically to ensure continued relevance, effectiveness, and compliance with applicable laws, safeguarding standards, and organisational practice. A formal review shall be conducted at least every two (2) years, or sooner where required due to changes in law, organisational structure, programme activities, or following a safeguarding incident or learning review.",
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
    title:
      "Prohibition of Exploitative or Inappropriate Relationships with Current or Former Beneficiaries",
    blocks: [
      {
        type: "p",
        text: "All trustees, board members, the Founder/Chief Executive Officer, senior management, staff, volunteers, interns, consultants, contractors, partners, and any person engaged by or representing The Destiny Trust occupy positions of trust and authority in relation to children and young persons participating in our programmes.",
      },
      {
        type: "p",
        text: "The Destiny Trust recognises that relationships formed within contexts of care, mentorship, sponsorship, or authority inherently involve power imbalances. Emotional dependency and influence may persist beyond the period of formal programme participation and such relationships may constitute exploitation even where the former beneficiary has reached adulthood.",
      },
      {
        type: "p",
        text: "The purpose of this provision is to protect children and former beneficiaries from exploitation and to protect organisational representatives from situations that may give rise to harm, conflict of interest, or reputational risk. Such individuals are required to maintain clear professional boundaries at all times and must not engage in any relationship that exploits, abuses, or misuses their position of trust.",
      },
      { type: "h", text: "Absolute Prohibition – Current Beneficiaries" },
      {
        type: "p",
        text: "No trustee, staff member, volunteer, consultant, contractor, partner, or representative of The Destiny Trust shall engage in any romantic, sexual, intimate, or exploitative relationship with:",
      },
      {
        type: "bullets",
        items: [
          {
            text: "Any child or young person currently under the care of, supported by, or participating in programmes of The Destiny Trust;",
          },
          {
            text: "Any child or young person currently residing in, enrolled in, mentored through, or receiving sponsorship or other services from The Destiny Trust.",
          },
        ],
      },
      { type: "p", text: "This prohibition applies regardless of perceived consent." },
      { type: "h", text: "Prohibition – Former Child Beneficiaries" },
      {
        type: "p",
        text: "No trustee, staff member, volunteer, consultant, contractor, partner, or representative shall engage in any romantic, sexual, or intimate relationship with a former child beneficiary of The Destiny Trust where:",
      },
      {
        type: "bullets",
        items: [
          {
            text: "The individual was previously under the care, supervision, residential placement, mentorship, sponsorship, financial assistance, or programme support of The Destiny Trust as a child;",
          },
          { text: "A relationship of trust, authority, influence, or dependency existed;" },
          {
            text: "The relationship may reasonably be perceived as exploitative, coercive, or arising from prior influence.",
          },
        ],
      },
      {
        type: "p",
        text: "This prohibition applies irrespective of the age of consent under applicable law. The existence of apparent consent shall not, of itself, constitute a defence where a prior safeguarding relationship or power imbalance existed.",
      },
      { type: "h", text: "Mandatory Disclosure and Conflict of Interest" },
      {
        type: "p",
        text: "Where any trustee, staff member, volunteer, or representative becomes aware of a personal relationship that may create a safeguarding concern or conflict of interest, the matter must be disclosed immediately to:",
      },
      {
        type: "bullets",
        items: [
          { text: "The Safeguarding Lead; and" },
          { text: "Senior Management or the Board of Trustees, as appropriate." },
        ],
      },
      { type: "p", text: "Failure to disclose may constitute a separate breach of this Policy." },
      { type: "h", text: "Consequences of Breach" },
      {
        type: "p",
        text: "Any breach of this provision shall constitute serious misconduct and may result in:",
      },
      {
        type: "bullets",
        items: [
          { text: "Immediate suspension or termination of employment or engagement;" },
          { text: "Removal from trustee or leadership position;" },
          { text: "Referral to statutory authorities where applicable;" },
          { text: "Such other action as deemed necessary by The Destiny Trust." },
        ],
      },
      { type: "h", text: "Application and Enforcement" },
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
        <span className="text-[#9A6B00]">{section.number}.</span>{" "}
        {section.title}
      </h2>
      {section.blocks.map((block, i) => renderBlock(block, i))}
    </section>
  ));
}

const ChildSafeguardingPolicyPage = () => {
  return (
    <Container>
      <main className="mx-auto max-w-7xl py-12 sm:py-16">
        <div className="">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
            The Destiny Trust
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Child Safeguarding Policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            The Destiny Trust is committed to creating and sustaining a safe,
            inclusive, and child-centred environment for every child and young
            person who engages with, benefits from, or is affected by our work.
          </p>

          <dl className="mt-6 grid gap-3 rounded-2xl bg-[#FFF8E5] p-5 sm:grid-cols-4">
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

          <div className="mt-10 space-y-10">{renderSections(policySections)}</div>

          {/* Annexure I — Code of Conduct */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
              Annexure I
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Child Safeguarding Code of Conduct
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-sm leading-relaxed text-gray-700">
                This Child Safeguarding Code of Conduct sets out the minimum
                standards of behaviour required of all staff, volunteers,
                interns, consultants, contractors, service providers, partners,
                visitors, and any other persons engaged by, working with, or
                representing The Destiny Trust.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                The Code applies at all times and in all settings, including
                programme sites, offices, residential facilities, field
                locations, digital and online spaces, travel, and any situation
                in which an individual is acting on behalf of or associated with
                The Destiny Trust.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                The purpose of this Code is to protect children and young
                persons from abuse, neglect, exploitation, violence, and harm,
                and to promote safe, respectful, and ethical engagement with
                children.
              </p>
            </div>
            <div className="mt-8 space-y-10">
              {renderSections(codeOfConductSections)}
            </div>
          </div>

          {/* Annexure II — Acknowledgement and Declaration */}
          <div className="mt-14 border-t border-gray-200 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
              Annexure II
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Child Safeguarding Acknowledgement and Declaration
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-sm leading-relaxed text-gray-700">
                I, the undersigned, acknowledge that I have received, read, and
                understood The Destiny Trust Child Safeguarding Policy and Code
                of Conduct.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                I confirm that I understand my responsibility to uphold the
                highest standards of behaviour in all my interactions with
                children and young persons and to place their safety, dignity,
                rights, and wellbeing first at all times.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                I agree to follow The Destiny Trust’s Child Safeguarding Policy
                and Code of Conduct at all times. I will put children first, act
                respectfully and safely around children and young people,
                maintain appropriate boundaries, report any safeguarding concern
                immediately, cooperate with safeguarding processes, and respect
                confidentiality and data protection requirements where it is safe
                and lawful to do so.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                I understand that:
              </p>
              <ul className="space-y-3 pl-1">
                {[
                  "Compliance with the Child Safeguarding Policy and Code of Conduct is mandatory and non-negotiable.",
                  "Any breach of the Policy or Code of Conduct may result in disciplinary action, termination of my engagement or relationship with The Destiny Trust, and, where applicable, referral to relevant authorities.",
                  "Failure to report a safeguarding concern may itself constitute a breach of the Policy and Code of Conduct.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-gray-700"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB400]"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-gray-700">
                I declare that the information provided below is true and
                accurate, and I commit to upholding the standards set out in the
                Child Safeguarding Policy and Code of Conduct.
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
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[#9A6B00]">
                    {label}
                  </dt>
                  <dd className="mt-3 border-b border-dashed border-gray-400" />
                </div>
              ))}
            </dl>

            <div className="mt-8 space-y-2 text-sm leading-relaxed text-gray-700">
              <p>
                This Child Safeguarding Policy and Safeguarding Code of Conduct
                was duly approved and adopted by the Board of Trustees of The
                Destiny Trust pursuant to a resolution of the Board passed at a
                duly convened meeting on February 22, 2026.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#9A6B00]">
                    For and on behalf of the Board of Trustees
                  </p>
                  <p className="mt-2 font-semibold text-gray-900">
                    Ododo Owodeha-Ashaka
                  </p>
                  <p className="text-sm text-gray-700">Ag. Chairman of the Board</p>
                  <p className="mt-3 text-sm text-gray-700">
                    Date: February 22, 2026
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#9A6B00]">
                    For and on behalf of Management
                  </p>
                  <p className="mt-2 font-semibold text-gray-900">
                    Abimbola Ojenike
                  </p>
                  <p className="text-sm text-gray-700">Founder / Chief Executive</p>
                  <p className="mt-3 text-sm text-gray-700">
                    Date: February 22, 2026
                  </p>
                </div>
              </div>
            </div>
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
              AI Ethics &amp; Governance Policy
            </Link>
            <Link
              href="/get-involve"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Get involved
            </Link>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default ChildSafeguardingPolicyPage;
