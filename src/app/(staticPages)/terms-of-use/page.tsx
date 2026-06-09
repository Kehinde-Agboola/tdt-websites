import Link from "next/link";
import PolicyLayout from "@/app/_component/PolicyLayout";

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "clauses"; items: { id: string; title?: string; text: string }[] };

const blocks: Block[] = [
  {
    type: "p",
    text: "Welcome to The Destiny Trust Children Foundation (“The Destiny Trust”), a non-profit registered under the Laws of the Federal Republic of Nigeria with registration number CAC/IT/NO 58124. These Terms of Use, along with our Privacy Policy, govern your use of our website. As used in these Terms of Use, \"our service\" or \"the service\" means the activities and service provided on our sites located at www.destinytrust.org (“the Website”), including all features and functionalities, website, and user interfaces, as well as software associated with the Service.",
  },
  {
    type: "p",
    text: "By using the website, you are deemed to have read and agreed to the Terms and Conditions as may be reviewed from time to time. You agree to only use our site in a manner that complies with all applicable laws and regulations and is consistent with these terms and does not infringe the rights of anyone else, nor restrict or inhibit their use and enjoyment of our sites (including, without limitation, by hacking). We reserve the right in our sole discretion to deny any you access to any of our websites without prior notice.",
  },
  {
    type: "p",
    text: "The following words used in this Statement of Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements shall have the following meaning: \"You\" and \"Your\" refers to you, the person using our services and accepting this Terms and Conditions. \"The Destiny Trust Children Foundation\", \"The Destiny Trust\", “TDT”, \"Ourselves\", “Our”, \"We\" and \"Us\", refers to The Destiny Trust. \"Party\", \"Parties\" refers to both you and ourselves, or either you or ourselves. These terms apply to the entire contents of our website and to any correspondence between you and us.",
  },
  {
    type: "p",
    text: "Please carefully review these terms and conditions of use before using this site or accessing any data here. Any use of this website creates a binding agreement to comply with these terms and conditions. If you do not agree to these terms without limitation or exclusions, you must exit this site immediately.",
  },
  { type: "h2", text: "User Agreement" },
  {
    type: "p",
    text: "The following are terms of a legal agreement (the “Agreement”) between you, individually and TDT that sets forth the terms and conditions for your use of this website at www.destinytrust.org, including any sub-domain thereof (the “Site”). The Site is owned and operated by The Destiny Trust. This Site is being provided to you expressly subject to this Agreement. By accessing, browsing and/or using the Site, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement and to comply with all applicable laws and regulations. The terms and conditions of this Agreement form an essential basis of the bargain between you and us.",
  },
  {
    type: "p",
    text: "We reserve the right to amend this Agreement at any time and will notify you of any such changes by posting the revised Agreement on the Site. You should check this Agreement on the Site periodically for changes. All changes shall be effective upon posting. Your continued use of the Site after any change to this Agreement constitutes your agreement to be bound by any such changes. We may terminate, suspend, change, or restrict access to all or any part of this Site without notice or liability.",
  },
  { type: "h2", text: "Limitations of Use" },
  {
    type: "p",
    text: "The copyright in all material on this Site, including without limitation the text, data, articles, design, source code, software, photos, images and other information (collectively the “Content”), is held by The Destiny Trust and is protected by Nigerian law and International copyright laws or treaties. You agree that the Content may not be copied, reproduced, distributed, republished, displayed, posted or transmitted in any form or by any means, including, but not limited to, electronic, mechanical, photocopying, recording, or otherwise, without the express prior written consent of The Destiny Trust. You acknowledge that the Content is and shall remain the property of The Destiny Trust. You may not modify, participate in the sale or transfer of, or create derivative works based on any Content, in whole or in part. The use of the Content on any other website, including by linking or framing, or in any networked computer environment for any purpose, is prohibited without TDT’s prior written approval.",
  },
  {
    type: "p",
    text: "All data obtained from or provided by The Destiny Trust, regardless of the method of delivery, is explicitly prohibited from publication and distribution and is subject to The Destiny Trust Data Terms of Use. Subject to these Terms, you may download, view, store and print any part of the Website intended for public viewing for your own personal use, provided in each case that copyright and source indications are also printed and copied, no modifications are made to the materials and they are not used as part of any other publication, any document is printed and copied entirely and is not used in a derogatory or misleading context and the material is not used in a manner which may damage our reputation or otherwise be harmful to us or impair our ability to achieve our charitable objects.",
  },
  {
    type: "p",
    text: "You may not, without The Destiny Trust’s express written permission, “mirror” any material contained on this Site on any other server. Any unauthorized use of any Content on this Site may violate copyright laws, trademark laws, the laws of privacy and publicity, and communications statutes and regulations.",
  },
  {
    type: "p",
    text: "You agree to use the Content and Site only for lawful purposes. You are prohibited from any use of the Content or Site that would constitute a violation of any applicable law, regulation or rule of any nationality, state, or locality or of any international law or treaty, or that could give rise to any civil or criminal liability. Any unauthorized use of the Site, including but not limited to unauthorized entry into our systems, misuse of passwords, or misuse of any information posted on the Site is strictly prohibited.",
  },
  {
    type: "p",
    text: "You agree not to post, upload, publish, display, transmit, share, store or otherwise make or attempt to make publicly available on the Site or on any other website, or in any email, blog, forum, medium or other communication of any kind, any private or personally identifiable information of any TDT member or other third party, including, without limitation, names, addresses, phone numbers, email addresses, Social Security numbers, driver’s license numbers, or bank account or credit card numbers, whether or not such private or personally identifiable information is displayed on or ascertainable from the Site, or obtained or obtainable from sources unrelated to the Site (such as from a “Google® search” or other online research).",
  },
  { type: "h2", text: "Trademarks" },
  {
    type: "p",
    text: "The Destiny Trust (including the logo), www.destinytrust.org, and all related logos (collectively the “The Destiny Trust Trademarks”) are trademarks or service marks of The Destiny Trust. Other product, and service names and logos used and displayed on this Site may be trademarks or service marks owned by The Destiny Trust or others. Nothing on this Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of The Destiny Trust Trademarks displayed on this Site, without our prior written permission in each instance. You may not use, copy, display, distribute, modify or reproduce any of the trademarks found on the Site unless in accordance with written authorization by The Destiny Trust. The Destiny Trust prohibits use of any of The Destiny Trust Trademarks as part of a link to or from any site unless establishment of such a link is approved in writing by The Destiny Trust in advance. Any questions concerning any The Destiny Trust Trademarks, or whether any mark or logo is a The Destiny Trust Trademark, should be referred to The Destiny Trust.",
  },
  { type: "h2", text: "Third-Party Applications and Sites" },
  {
    type: "p",
    text: "This site may contain links to web sites controlled, owned, and operated by third parties (the “third-party sites”). The Destiny Trust cannot control and has no responsibility for the accuracy or availability of information provided on the third-party sites. You acknowledge that use of any third-party sites is governed by the terms of use for those websites, and not by this Agreement. Links to third-party sites do not constitute an endorsement or recommendation by The Destiny Trust of such sites or the content, products, advertising or other materials presented on such sites, but are only for your convenience and you access them at your own risk. Such third-party sites may have a privacy policy different from that of The Destiny Trust and the third-party site may provide less security than this Site.",
  },
  {
    type: "p",
    text: "The Destiny Trust is not responsible for the content of any third-party web sites, nor does The Destiny Trust make any warranties or representations, express or implied, regarding the content (or the accuracy of such content) on any third-party web sites, and The Destiny Trust shall have no liability of any nature whatsoever for any failure of products or services offered or advertised at such sites or otherwise.",
  },
  { type: "h2", text: "Electronic Communication" },
  {
    type: "p",
    text: "As a partner or volunteer, you may from time to time, receive disclosures, notices, documents and information (“Communications”) from The Destiny Trust or our respective agents (collectively, “we” or “us”).",
  },
  {
    type: "p",
    text: "You shall ensure the accuracy, truth, lawfulness and decency of the content of your emails or any other material you send to The Destiny Trust. You shall ensure that any such email or material is free from any indecent, obscene, offensive, defamatory or fraudulent statement. You agree to indemnify The Destiny Trust for any losses, costs, expenses or liabilities which The Destiny Trust may incur as a result of your breach of this clause.",
  },
  {
    type: "p",
    text: "The Destiny Trust may filter, edit, refuse to post or delete any email or material sent to The Destiny Trust without notice and in its absolute discretion. The Destiny Trust does not accept any liability for any material posted on the site by a third party.",
  },
  { type: "p", text: "You are advised to take note of the following:" },
  {
    type: "clauses",
    items: [
      {
        id: "a",
        title: "Electronic Communications",
        text: "You agree that all Communications from The Destiny Trust and our respective agents relating to your use of the Site or related services may be provided or made available to you electronically by e-mail or at the Site. You have the right to receive a free paper copy of any Communication by contacting us in the manner described below. We may discontinue electronic provision of Communications at any time in our sole discretion.",
      },
      {
        id: "b",
        title: "Scope of Consent",
        text: "Your consent to receive Communications electronically, and our agreement to do so, applies to all of your interactions and transactions to which such Communications relate, whether between you and The Destiny Trust or any of its Agents.",
      },
      {
        id: "c",
        title: "Hardware and Software Requirements",
        text: "To access and retain the Communications electronically, you will need to use a device with an internet connection and an up-to-date browser capable of opening portable document formats (“PDF”) and a valid email address that has been provided to The Destiny Trust. You acknowledge that you can receive and access communications in the formats described herein.",
      },
      {
        id: "d",
        title: "Mobile Technology",
        text: "If you are accessing our platform electronically through a mobile device, such as a tablet, smartphone or similar device, you must be able to print and save the transmitted Communications. You can find apps that support printing and saving for most mobile devices through your mobile device’s app store. If your mobile device does not have this functionality, you must access our website through alternate means that provide you with the ability to print and save the Communications.",
      },
      {
        id: "e",
        title: "Withdrawing Consent",
        text: "You may withdraw your consent to receive Communications electronically by contacting us in the manner described in this Agreement. The withdrawal of your consent will not affect the legal validity and enforceability of any pending transactions through The Destiny Trust platform, or any electronic Communications provided or business transacted between us prior to the time you withdraw your consent.",
      },
      {
        id: "f",
        title: "Assignment",
        text: "In addition, you further acknowledge that your consent to have all Communications provided or made available to you in electronic form on The Destiny Trust platform is assignable to any entity that succeeds The Destiny Trust.",
      },
      {
        id: "g",
        title: "Changes in Your Contact Information",
        text: "You agree to keep us informed of any changes in the telephone number, email and mailing address you provide to us so that you continue to receive all Communications without interruption. You can contact us by email at info@destinytrust.org.",
      },
    ],
  },
  { type: "h2", text: "Payment Methods" },
  {
    type: "p",
    text: "No information pertaining to payment is shared with us as you supply all the payment-related information to the designated Payment Processor. The Destiny Trust may only exchange information about donation, gift and/or purchase from our merchandize platform with the Payment Processor in order to facilitate completion or reversal of payments, resolution of disputes and provision of customer support.",
  },
  {
    type: "p",
    text: "You should be mindful of any communication requesting that you submit credit card or other account information. Providing your information in response to these types of communications can result in identity theft.",
  },
  { type: "h2", text: "Donations" },
  {
    type: "p",
    text: "A donation you make through this website to The Destiny Trust are generally not refundable. This because the donation may have been utilized or allocated to specific projects we are committed to. The Destiny Trust is unable to issue a refund after the donated funds have been granted to a project. We may consider a refund if the donation was made accidentally or in some other extremely unusual circumstance if we receive a written request within 12 hours of the donation.",
  },
  { type: "h2", text: "Anti-money Laundering" },
  {
    type: "p",
    text: "The Destiny Trust recognises its obligation under Nigerian and international laws with respect to prevention of money laundering, corrupt practices and terrorism financing. As such, we are committed to the highest standards of compliance. All charities are also obligated to keep the Special Control Unit Against Money Laundering (SCUML) informed of suspicious financial inflow and to provide routine reporting on donations exceeding thresholds prescribed by regulation from time to time. We will cooperate with all regulatory request for information on the donations we receive.",
  },
  {
    type: "p",
    text: "Thus, you warrant to us that the source of funds do not violate anti-money laundering, anti-terrorism anti-corruption practices and regulations in Nigeria and in your country of location. You also warrant that the donations are not intended to influence anyone involved in The Destiny Trust including the employees, the volunteers and trustees.",
  },
  { type: "h2", text: "Disclaimer of Warranties" },
  {
    type: "p",
    text: "None of the trustees of The Destiny Trust or any of its affiliates, providers or their respective officers, employees, agents, independent contractors or licensors (collectively the “The Destiny Trust Parties”) guarantees the accuracy, adequacy, timeliness, reliability, completeness, or usefulness of any of the Content and The Destiny Trust Parties disclaim liability for errors or omissions in the Content.",
  },
  {
    type: "p",
    text: "This Site and all of the Content is provided “as is” and “as available,” without any warranty, either express or implied. Additionally, there are no warranties as to the results of your use of the Content. The Destiny Trust Parties do not warrant that the Site is free of viruses or other harmful components. This does not affect those warranties which are incapable of exclusion, restriction or modification under the laws applicable to this Agreement.",
  },
  {
    type: "p",
    text: "The Destiny Trust Parties may discontinue or make changes in the Content and Site at any time without prior notice to you and without any liability to you. Any dated information is published as of its date only, and The Destiny Trust Parties do not undertake any obligation or responsibility to update or amend any such information. The Destiny Trust Parties reserve the right to terminate any or all Site offerings or transmissions without prior notice to you. This Site could contain technical inaccuracies or typographical errors. Use of this Site is at your own risk.",
  },
  { type: "h2", text: "Site Monitoring" },
  {
    type: "p",
    text: "The Destiny Trust has no obligation to monitor the Site; however, you acknowledge and agree that The Destiny Trust has the right to monitor the Site electronically from time to time and to disclose any information as necessary or appropriate to satisfy any law, regulation or other governmental request, to operate the Site, present marketing or other promotional offers to you either on the Site or on a third party site, or to protect itself or other users of the Site.",
  },
  { type: "h2", text: "Use of Personally Identifiable Information" },
  {
    type: "p",
    text: "The Destiny Trust’s practices and policies with respect to the collection and use of personally identifiable information are governed by The Destiny Trust’s Privacy Policy.",
  },
  { type: "h2", text: "Termination" },
  {
    type: "p",
    text: "This Agreement is effective until terminated by The Destiny Trust. The Destiny Trust may terminate this Agreement at any time without notice, or suspend or terminate your access and use of the Site at any time, with or without cause, in The Destiny Trust’s absolute discretion and without notice. The following provisions of this Agreement shall survive termination of your use or access to the Site: the sections concerning Disclaimer of Warranties, Limitation of Liability, Waiver, Applicable Law and Dispute Resolution, and General Provisions, and any other provision that by its terms survives termination of your use or access to the Site.",
  },
  { type: "h2", text: "Waiver" },
  {
    type: "p",
    text: "Failure by The Destiny Trust to enforce any of its rights under this Agreement shall not be construed as a waiver of those rights or any other rights in any way whatsoever.",
  },
  { type: "h2", text: "Governing Law, Disputes and Forum" },
  {
    type: "p",
    text: "The formation, construction and interpretation of these Terms of Use and all disputes arising out of or relating hereto shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria without regard to principles of conflict of laws. Any dispute relating to these Terms of Use shall be subject to the jurisdiction of Nigerian Courts.",
  },
  {
    type: "p",
    text: "You agree to give The Destiny Trust prior notice of intention to institute any action or proceedings of a judicial, quasi-judicial or regulatory nature. Where no remedy is provided by The Destiny Trust or the remedy provided is unsatisfactory to you, an action or proceedings shall be instituted not later than 1 (One) Month after giving the notice of the intention to The Destiny Trust. You and The Destiny Trust agree that any cause of action arising out of or related to the services must commence within one (1) month after the cause of action accrues. Otherwise, such cause of action is permanently barred.",
  },
  { type: "h2", text: "Additional Terms" },
  {
    type: "p",
    text: "Certain sections or pages on the Site may contain separate terms and conditions of use, which are in addition to the terms and conditions of this Agreement. In the event of a conflict, the additional terms and conditions will govern for those sections or pages.",
  },
  { type: "h2", text: "Severability" },
  {
    type: "p",
    text: "If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall be enforced to the fullest extent possible, and the remaining provisions of the Agreement shall remain in full force and effect.",
  },
  { type: "h2", text: "General Provisions" },
  {
    type: "p",
    text: "This Agreement supersedes any previous Terms of Use Agreement to which you and The Destiny Trust may have been bound. This Agreement will be binding on, inure to the benefit of, and be enforceable against the parties and their respective successors and assigns. All rights not expressly granted herein are hereby reserved. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section.",
  },
  { type: "h2", text: "Contacting Us" },
  {
    type: "p",
    text: "To find more information or inquiries or if you need assistance, please contact us by e-mail at info@destinytrust.com.",
  },
];

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={key} className="text-sm leading-relaxed text-gray-700">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={key} className="pt-4 text-xl font-bold text-gray-900">
          {block.text}
        </h2>
      );
    case "clauses":
      return (
        <ul key={key} className="space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-gray-700"
            >
              <span className="shrink-0 font-medium text-[#9A6B00]">
                {item.id}.
              </span>
              <span>
                {item.title && (
                  <span className="font-semibold text-gray-900">
                    {item.title}. {""}
                  </span>
                )}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
  }
}

const TermsOfUsePage = () => {
  return (
    <PolicyLayout>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
            The Destiny Trust Children Foundation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            These Terms of Use, along with our Privacy Policy, govern your use of
            www.destinytrust.org. Please read them carefully before using the
            site.
          </p>

          <div className="mt-10 space-y-4">
            {blocks.map((block, i) => renderBlock(block, i))}
          </div>

          <div className="mt-10 rounded-2xl bg-gray-50 p-5 text-sm leading-relaxed text-gray-800 ring-1 ring-gray-200">
            For further information about these Terms, contact The Destiny Trust
            at info@destinytrust.org.
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Privacy Policy
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

export default TermsOfUsePage;
