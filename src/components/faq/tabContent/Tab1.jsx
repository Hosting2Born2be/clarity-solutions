"use client";
import Accordion from "./Accordion";

const Tab1 = ({ activeTab }) => {
  const items = [
    {
      id: 1,
      title: "What distinguishes a Prepaid Card?",
      content:
        "A Prepaid Card provides convenient access to global merchants and ATMs without the necessity of a traditional bank account or incurring credit card interest. It stores a predetermined amount of funds that decrease with each transaction.",
    },
    {
      id: 2,
      title: "Where can I use my prepaid card?",
      content:
        "Your prepaid card is accepted at millions of merchants worldwide, including online stores and any ATM accepting payment cards. With over 1 million ATMs and 40 million merchants globally, you have extensive accessibility.",
    },
    {
      id: 3,
      title: "How does the prepaid card function?",
      content:
        "The prepaid card functions similarly to a debit card, allowing you to purchase at point-of-sale locations and withdraw cash from ATMs.",
    },
    {
      id: 4,
      title: "Who is eligible for a prepaid card?",
      content:
        "Anyone over 18 who complies with our Terms and Conditions can obtain a prepaid card through our participating merchants and sites, provided they reside in one of our supported jurisdictions.",
    },
    {
      id: 5,
      title:
        "Will support be extended to my jurisdiction in the future if it's not currently listed?",
      content:
        "We prioritise expanding our services to as many countries as possible. Please get in touch with us at info@clarity-solutions.io to explore potential options and stay updated on social media for announcements regarding new country additions.",
    },
    {
      id: 6,
      title: "What are the associated fees with the prepaid card?",
      content: "You can view all applicable fees by visiting our Tariffs page.",
    },
    {
      id: 7,
      title: "How can I register for a card?",
      content:
        "To register for a card, click <a href='#'>Sign Up</a> or contact us at <a href='mailto:info@clarity-solutions.io'>info@clarity-solutions.io</a> for assistance.",
    },
    {
      id: 8,
      title: "How can businesses get set up with Clarity Solutions?",
      content:
        "Businesses interested in utilising Clarity Solutions can initiate the setup process by emailing <a href='mailto:info@clarity-solutions.io'>info@clarity-solutions.io</a> and detailing their business needs. Our team will respond within 24 hours.",
    },
    {
      id: 9,
      title: "Is Clarity Solutions a secure service?",
      content:
        "Absolutely. Our banking partners are AAA-rated financial institutions located worldwide. Your funds are always held in reputable banks covered by the appropriate regulatory bodies. We maintain transparency about our business processes to ensure a trustworthy relationship with our partners. Additionally, we adhere to the highest PCI compliance standards and are an authorised PCI-compliant company.",
    },
  ];

  return (
    <div id="tab1" className={activeTab === "#tab1" ? "active" : "hidden"}>
      <Accordion items={items} />
    </div>
  );
};

export default Tab1;
