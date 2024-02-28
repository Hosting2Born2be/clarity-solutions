"use client";
import Accordion from "./Accordion";

const Tab4 = ({ activeTab }) => {
  const items = [
    {
      id: 37,
      title: "What does KYC mean?",
      content:
        "KYC, or Know Your Customer, refers to the minimum regulatory requirements set by industries to ensure comprehensive account verification. These requirements are crucial, non-negotiable, and encompass the following:<br/><br/>- Valid Government-Issued ID: This could include a passport, driver’s licence, or similar identification.<br/>- Proof of Address (dated within 3 months): Acceptable documents include bank statements, utility bills (such as electricity, water, heating, cable TV, and Internet), or tax statements.<br/><br/>Note: Mobile phone statements, voting cards, rental agreements, and invoices are invalid proofs of address.",
    },
    {
      id: 38,
      title: "How long does it take for document approval after uploading?",
      content:
        "You can expect feedback on your submitted documents within 24-48 business hours. However, please note that submission alone does not guarantee approval; our team must review the documents. Avoid uploading new documents until we have completed the review to prevent resetting the review timer.",
    },
    {
      id: 39,
      title: "What actions can I take while waiting for account approval?",
      content:
        "While awaiting account approval, you can provide your payers with your SAN (secure account number) to facilitate payments. Additionally, once funds are received, you can order your plastic card.",
    },
    {
      id: 40,
      title: "Is KYC mandatory, or can I maintain an anonymous account?",
      content:
        "KYC is mandatory for all Clarity Solutions accounts. Attempting to register anonymously risks account freezing. Therefore, ensure all provided information is accurate and valid.",
    },
    {
      id: 41,
      title: "It’s been over 48 business hours. What should I do?",
      content:
        "If the review period exceeds 48 business hours, consider the following:<br/><br/>- Uploading new documents during review resets the timer.<br/>- Reviews are conducted Monday to Friday, 9 AM to 5 PM EST.<br/>- Check your spam folder for any emails regarding document feedback.<br/>- If issues persist, contact us at info@clarity-solutions.io for assistance.",
    },
    {
      id: 42,
      title: "Why do my documents keep getting rejected?",
      content:
        "Document rejections may occur due to various reasons, including:<br/><br/>- Blurry photos<br/>- Incomplete document corners<br/>- Mismatched information<br/>- Expiration<br/>- Invalidity<br/><br/>Ensure all documents meet the specified guidelines to avoid rejections.",
    },
    {
      id: 43,
      title:
        "I lack bills in my name due to living arrangements. What alternatives are available?",
      content:
        "Options include providing a bank statement or a government tax statement. Alternatively, seek an official proof of address from a lawyer, notary, or local government office, police station, or post office.",
    },
    {
      id: 44,
      title: "Your requirements seem stringent. Can we negotiate?",
      content:
        "Unfortunately, these requirements constitute the minimum standards for account eligibility. Given the regulated nature of our services, adherence is non-negotiable. For guidance on document submissions, reach out to us via email.",
    },
    {
      id: 45,
      title: "How many documents should I upload?",
      content:
        "Upload one document per category, as we retain only one document per category on file. Uploading new documents overrides existing ones.",
    },
    {
      id: 46,
      title: "Do you retain uploaded documents?",
      content:
        "We store only the documents necessary for account approval, one per category, in compliance with PCI standards. Uploaded documents are securely stored, ensuring data privacy and security.",
    },
  ];

  return (
    <div id="tab4" className={activeTab === "#tab4" ? "active" : "hidden"}>
      <Accordion items={items} />
    </div>
  );
};

export default Tab4;
