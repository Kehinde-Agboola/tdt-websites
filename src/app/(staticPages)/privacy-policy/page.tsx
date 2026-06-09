import Link from "next/link";
import PolicyLayout from "@/app/_component/PolicyLayout";

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

const blocks: Block[] = [
  {
    type: "p",
    text: "The Destiny Trust (‘We’, ‘Us’ or ‘Our’) takes seriously the issue of protecting the privacy of everyone who visits www.destinytrust.org or who applies to join us in our work. In our interaction with donors, volunteers, members and others involved in our work, we often obtain personal information. Personal information is any information that can be used to identify or contact you such as your name, email or telephone number. Our communication with you will be mostly about providing you with an update on our work and enlisting your support for our advocacy for the causes we are committed to. We will adopt approaches that are both ethical and effective and respect the limitations you may wish to place on the use of your personal information.",
  },
  {
    type: "p",
    text: "This Privacy Policy will tell you what information we collect about you, why we need your personal details that we request when you support us and how we will use them. It will explain the choices you have about how your personal information is used and how we protect that information.",
  },
  {
    type: "p",
    text: "This Privacy Policy applies to www.destinytrust.org and other websites, owned and operated by us that are intended for use and including the mobile optimized versions of these sites and our Mobile Device Applications or \"Apps\" (we refer to these sites and Apps collectively as the “Sites”). Services refer to your use of the Sites, and where circumstances permit, our activities.",
  },
  {
    type: "p",
    text: "By accepting the Terms of Use, you confirm that you have read and understand this Privacy Policy and our Cookie Policy and you acknowledge that we will store, use and otherwise process your information in the jurisdiction where we are located.",
  },
  {
    type: "p",
    text: "We may share information among our subsidiaries or websites that are owned or controlled by us, but information collected under this Privacy Policy is always protected under the terms of this Privacy Policy.",
  },
  { type: "h2", text: "Information we collect about you" },
  { type: "h3", text: "Membership, Volunteering or Partnership" },
  {
    type: "p",
    text: "Any personal information provided to us in applications will be filed securely and made available only to The Destiny Trust. We will only use your personal information to provide you with details which we feel are relevant or of interest to you as a volunteer or stakeholder in the work of The Destiny Trust.",
  },
  { type: "h3", text: "Services and Device Information" },
  {
    type: "p",
    text: "When you access and use the Services, we automatically collect and store in server logs information from your browser or mobile device such as your IP address or unique device identifier, browser information (including referring URL), your preferences and settings, cookies and information about the content you have viewed and actions taken (e.g., search queries, ad engagement, clicks and the associated dates and times). We may also collect device-specific information when you install and use an App including your device model, operating system information, advertising ID (which is a unique, user-resettable identification number for advertising associated with a mobile device) and App version and usage information. When enabled by you, we collect precise location information provided by your mobile device, which you may disable through the device settings.",
  },
  { type: "h3", text: "Cookies and Other Tracking Technologies" },
  {
    type: "p",
    text: "We and our partners use cookies to collect information about your use of the Services. “Cookies” are small data files assigned to your browser when you visit a Site which enable recognition of your browser and collect and store information about your use of the Services, as described above. In addition to cookies, we and our partners use other tracking technologies that collect information about your use of the Services, including mobile identifiers and \"web beacons\" which are small graphic files (sometimes called “clear GIFs” or “web pixels”) embedded in a web page or email typically used to monitor activity and send relevant information back to a home server (which can belong to the host site, a network advertiser or some other third party).",
  },
  {
    type: "p",
    text: "Our advertising service partners may use cookies and other tracking technologies to collect information about your use of the Sites, including content you have viewed. These third parties may use this information to help us deliver advertising on the Sites and on other third party websites based on your browsing activity on the Sites. We may further tailor the advertising on the Sites and these other third party websites based on additional information to the extent known by us or these third parties. We also work with third party ad networks to display advertising on our Sites and on third party websites. Our ad network vendors use technologies to collect information about your activities on the Sites and in our App to provide you cookie-based targeted advertising on our Sites and on third party websites based upon your browsing activity and your interests.",
  },
  {
    type: "p",
    text: "When you download and install one of our Apps onto your mobile device we assign a random number to your App installation. This number cannot be used to identify you personally, and we cannot identify you personally unless you choose to become a registered user of the App. We use this random number in a manner similar to our use of cookies as described in this Privacy Policy. Unlike cookies, the random number is assigned to your installation of the App itself and not a browser, because the App does not work through your browser. Therefore the random number cannot be removed through settings. If you do not want us to use the random number for the purposes for which we use cookies, please do not use the Apps. Our use of cookies and other tracking technologies on our mobile optimized sites and our App are similar to our use on our desktop sites.",
  },
  { type: "h2", text: "How Information Collected About You Is Used" },
  {
    type: "p",
    text: "Information about your use of the Services may be used for the following purposes:",
  },
  {
    type: "ul",
    items: [
      "to keep you informed about our work as we value you as an important stakeholder in our work.",
      "to enable you to use any services that we may from time to time provide through our sites,",
      "to respond to your inquiries and to send you administrative communications about the Sites, Services and our activities,",
      "to obtain your feedback about the Sites, Services and our activities,",
      "to send you secure electronic messages and personalized emails pertaining to your interests as inferred from your use of the Services, including news, announcements, reminders and opportunities from us,",
      "to statistically analyse trends and user behaviour and activity including how frequently areas of the Sites are visited, how the Services are being used and how many emails are received and opened,",
      "to detect and defend against fraud and other threats to the Services, you and other users,",
      "to identify issues with the Services, and",
      "to conduct research and measurement activities, including those described below.",
    ],
  },
  {
    type: "p",
    text: "In addition, we may use personal information about you for other purposes that are disclosed to you at the time we collect the information and/or with your consent.",
  },
  {
    type: "p",
    text: "We may combine your personal information and other information collected about your use of the Services, and also supplement with information from external sources for the purposes described in this Privacy Policy. For example, information that we collect about you may be combined by us with other information available to us through third parties for research and measurement purposes, including measuring the effectiveness of content, advertising or programs. This information from other sources may include age, gender, demographic, geographic, personal interests, product purchase activity or other information. We may report aggregate information, which is not able to be identified back to an individual user of the Sites, to our current or prospective advertisers and other business partners. We will not sell your personal information to third parties for their use without your consent.",
  },
  { type: "h2", text: "Sharing Your Information" },
  { type: "h3", text: "Our Subsidiaries and Affiliates" },
  {
    type: "p",
    text: "We may share your information with our subsidiaries and affiliates. In the event of a change in organisational control resulting, we reserve the right to transfer your personal information to the new party in control. In the event of such a change, your personal information will continue to be treated in accordance with this Privacy Policy unless any changes to the Privacy Policy are made in accordance with the section below that discusses “Changes to This Privacy Policy.”",
  },
  { type: "h3", text: "Third Party Advertisers and Third Party Websites" },
  {
    type: "p",
    text: "We may share information that we have about you, such as a cookie ID or IP address, with third party advertising service providers who may use this information, on our behalf, to help us deliver advertising on the Sites as well as on third party websites.",
  },
  {
    type: "p",
    text: "Certain content, services and advertisements offered to you through the Sites are served on, or contain links to, websites hosted and operated by a company other than us (\"Third Party Websites\"). We do not share your personal information with these Third Party Websites without your consent, but you should be aware that any information you disclose to these Third Party Websites once you access these Third Party Websites is not subject to this Privacy Policy.",
  },
  {
    type: "p",
    text: "We do not endorse and we are not responsible for the privacy practices of these Third Party Websites. You should review the privacy policy posted on the Third Party Website to understand how that Third Party Website collects and uses your information. We make an effort to make it obvious to you when you leave a Site and enter a Third Party Website, either by requiring you to click on a link or by notifying you on the Site before you visit the third party site.",
  },
  {
    type: "p",
    text: "In addition, if you see a phrase such as \"Powered by\" or \"in association with\" followed by the name of a company other than us, then you are on a website hosted by a company other than us. When you use a co-branded service (a service operated with a partner), or register or otherwise provide information on a co-branded site, where applicable, we may pass the collected information back to that partner, which may include third party service providers whose services are embedded into and/or appear within the Services.",
  },
  {
    type: "p",
    text: "We may also include social widgets on the Sites which enable you to interact with the associated social media services, e.g., to share an article. These widgets may collect browsing data which may be received by the third party that provided the widget, and are controlled by these third parties. You may be able to manage your privacy preferences directly with the applicable social network platform.",
  },
  {
    type: "h3",
    text: "Compliance with Law, Regulation, and Law Enforcement Requests",
  },
  {
    type: "p",
    text: "To cooperate with government and law enforcement officials and private parties to enforce and comply with law, we may release personal information to third parties: (1) to comply with legal requirements such as a law, regulation, search warrant, subpoena or court order; (2) when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request; or (3) in special cases, such as in response to a physical threat to you or others, to protect property or defend or assert legal rights. In addition, we may disclose personal information as described below.",
  },
  { type: "h2", text: "Your Choices and Rights" },
  { type: "h3", text: "Updating/Removing Your Personal Information" },
  {
    type: "p",
    text: "If you do not want your personal information used by us as provided in this Privacy Policy, you should not use the Sites, Apps and Services. You can correct, update or review personal information you have previously submitted by contacting us using the contact information listed below or through the Contact Us link provided at the bottom of every page of the Sites.",
  },
  {
    type: "p",
    text: "If you have registered and desire to delete any of your registration information you have provided to us from our systems please contact us through the Contact provided the page of the Sites. Upon your request, we will delete your registration information from our active databases and where feasible from our back-up media. You should be aware that it is not technologically possible to remove each and every record of the information you have provided to the Sites from our servers.",
  },
  {
    type: "p",
    text: "When you sign up to receive email communications for any of our Services, including our email newsletters, or at any time, you can choose to opt out of receiving additional newsletters or other email communications from us or our advertisers or sponsors.",
  },
  {
    type: "p",
    text: "You can unsubscribe from an email newsletter by following the directions included at the bottom of the newsletter and using the “Unsubscribe” link found in the emails.",
  },
  {
    type: "h3",
    text: "Additional Information for Users in Nigeria and the European Economic Area (“EEA”)",
  },
  {
    type: "p",
    text: "When you use the Services, we collect, store, and use and otherwise process your personal information as described in this Privacy Policy. We rely on a number of legal bases to process your information, including where: (i) necessary for our legitimate interests in providing and improving the Services including offering you content and advertising that may be of interest to you; (ii) necessary for our legitimate interest in keeping the Services, Sites and Apps safe and secure; (iii) necessary for the legitimate interests of our service providers and partners; (iv) necessary to perform our contractual obligations in the Terms of Use; (v) you have consented to the processing, which you can revoke at any time (however a revocation does not affect the lawfulness of processing of your personal data that occurred prior to the date of revocation); (vi) you have expressly made the information public, e.g., in a message board or other public forums; (vii) necessary to comply with a legal obligation such as a law, regulation, search warrant, subpoena or court order or to exercise or defend legal claims; and (viii) necessary to protect your vital interests, or those of others.",
  },
  {
    type: "p",
    text: "You can: (i) access personal information we have about you (we will try to provide information within 30 days of your request); (ii) have your personal information corrected or deleted (in most cases you can correct personal information you have submitted to us by going back to the specific Service, logging-in and making the desired change); (iii) in certain circumstances, you can object to our processing of your personal information and we will discontinue such processing unless we have compelling legitimate grounds to continue; (iv) withdraw consent previously provided (however a withdrawal does not affect the lawfulness of processing of your personal data that occurred prior to the date of withdrawal); or (v) if you believe that we have not complied with applicable data protection laws, you may lodge a complaint with your local supervisory authority. If you wish to inquire as to whether we maintain any of your personal information and if so, whether you wish to exercise any of those rights that are available to you with respect to such personal information, you may contact us as described on this Site. We will respond to your request within a reasonable timeframe.",
  },
  {
    type: "p",
    text: "Where we process your personal information for direct marketing purposes, you can opt-out through the unsubscribe link in the email communications we send to you, by changing your subscription preferences in your account settings or as otherwise specified in this Privacy Policy.",
  },
  {
    type: "p",
    text: "We will retain your personal information for as long as necessary to provide the Services to you and fulfil the purposes described in this Privacy Policy. This is also the case for third parties within whom we share your information to perform services on our behalf. When we no longer need to use your personal information and there is no need for us to keep it to comply with our legal or regulatory obligations, we will either remove it from our systems or anonymised it. If you have registered with us and you no longer want us to use your registration information to provide the Services to you, you may close your account.",
  },
  {
    type: "h3",
    text: "Contacting Us about Your Personal Information or Privacy",
  },
  {
    type: "p",
    text: "Please contact us via our website’s Contact Us link/page or by email: info@destinytrust.org if you have any questions about this Privacy Policy or the personal information we maintain about you.",
  },
  { type: "h3", text: "Changes to this Privacy Policy" },
  {
    type: "p",
    text: "We reserve the right to change or modify this Privacy Policy and any of our Services at any time and any changes will be effective upon being posted unless we advise otherwise. By continuing to use the Services after changes are made to this Privacy Policy, you agree to such changes. We encourage you to periodically review this Privacy Policy for the latest information on our privacy practices. Please exit the Sites immediately if you do not agree to the terms of this Privacy Policy.",
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
    case "h3":
      return (
        <h3 key={key} className="text-base font-semibold text-[#9A6B00]">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={key} className="space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-gray-700"
            >
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB400]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

const PrivacyPolicyPage = () => {
  return (
    <PolicyLayout>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
            The Destiny Trust Children Foundation
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            How The Destiny Trust collects, uses, shares and protects the
            personal information of everyone who visits www.destinytrust.org or
            joins us in our work.
          </p>

          <div className="mt-10 space-y-4">
            {blocks.map((block, i) => renderBlock(block, i))}
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

export default PrivacyPolicyPage;
