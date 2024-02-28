"use client";
import Accordion from "./Accordion";

const Tab5 = ({ activeTab }) => {
  const items = [
    {
      id: 47,
      title: "Why can’t I log into my card account online?",
      content:
        'Your access code remains the same, while the one-time verification code is sent to your email with each login. Ensure correct case sensitivity when entering your username and password. Forgot your password? Reach out to <a href="mailto:info@clarity-solutions.io">info@clarity-solutions.io</a> for assistance.',
    },
    {
      id: 48,
      title: "Why haven’t I received my card yet?",
      content:
        'If your card hasn’t arrived within 15 business days post-order, please contact <a href="mailto:info@clarity-solutions.io">info@clarity-solutions.io</a>.',
    },
    {
      id: 49,
      title: "I have just received my card, and it is not working. Why?",
      content:
        "Ensure your card is activated following the provided steps upon logging in. If issues persist, our team is here to assist you further.",
    },
    {
      id: 50,
      title: "Why isn’t my balance what I think it should be?",
      content:
        "Your balance may differ due to load limits, pending transactions, or same-day transaction processing. Check your account’s Card Limits tab for more details.",
    },
    {
      id: 51,
      title: "Why can’t I transfer my Secondary Balance?",
      content:
        "If unable to transfer, it might indicate reaching load limits. Check your account’s Card Limits tab for transfer availability.",
    },
    {
      id: 52,
      title: "Why are my online transactions being declined?",
      content:
        "Security measures may block online transactions without prior authorization. Authorise transactions for 30 minutes under the “My Account” tab.",
    },
    {
      id: 53,
      title: "What do I do if my card is lost or stolen?",
      content:
        'Block your card manually or contact us at <a href="mailto:info@clarity-solutions.io">info@clarity-solutions.io</a>. Provide your SAN or card number for assistance.',
    },
    {
      id: 54,
      title: "I’ve reached my yearly limit. What do I do now?",
      content:
        'Reach out to <a href="mailto:info@clarity-solutions.io">info@clarity-solutions.io</a> for further options if you’ve reached your yearly limit.',
    },
    {
      id: 55,
      title: "My card is about to expire. What should I do?",
      content:
        'Request a card renewal by contacting <a href="mailto:info@clarity-solutions.io">info@clarity-solutions.io</a>.',
    },
    {
      id: 56,
      title: "My card has stopped working. Why?",
      content:
        'If your card has stopped working, contact <a href="mailto:info@clarity-solutions.io">info@clarity-solutions.io</a> for assistance.',
    },
  ];

  return (
    <div id="tab5" className={activeTab === "#tab5" ? "active" : "hidden"}>
      <Accordion items={items} />
    </div>
  );
};

export default Tab5;
