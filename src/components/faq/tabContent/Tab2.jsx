"use client";
import Accordion from "./Accordion";

const Tab2 = ({ activeTab }) => {
  const items = [
    {
      id: 10,
      title: "Who is eligible to use the card?",
      content:
        "The cardholder, whose name is imprinted on the card, is authorised to use the card.",
    },
    {
      id: 11,
      title: "What is a Virtual Card, and how does it work?",
      content:
        "A Virtual Card is a digital representation of your prepaid card, facilitating online or telephone payments and enabling online shopping. It offers a convenient and swift way to initiate transactions with your Prepaid Account.",
    },
    {
      id: 12,
      title: "What are the benefits of upgrading to a plastic card?",
      content:
        "Upgrading to a plastic card lets you make point-of-sale (POS) purchases and withdraw funds from ATMs/Cash Machines.",
    },
    {
      id: 13,
      title: "How can I check my card balance?",
      content:
        'To check your card balance and view transaction history, login to your account at <a href="http://cosmopayment.com">cosmopayment.com</a>. Your balance will be prominently displayed, and you can access detailed transaction records under the Transaction History tab.',
    },
    {
      id: 14,
      title: "What is the card SAN (Secure/Secondary Account Number)?",
      content:
        "The SAN, a 9 or 10-digit number on the back of the prepaid card, is a secure identifier. You can safely share this number with payers and individuals intending to send you funds.",
    },
    {
      id: 15,
      title: "Can I use the card for online transactions?",
      content:
        "Yes, the prepaid card can be utilised for online transactions wherever it is accepted as a valid payment method.",
    },
    {
      id: 16,
      title: "Is it possible to use the card with no funds available?",
      content:
        "No, the card can only be used once activated and loaded with funds. Attempting to use the card without activation or sufficient funds may result in the ATM retaining the card.",
    },
    {
      id: 17,
      title: "How does the card function at a cash machine (ATM)?",
      content:
        "Upgrading your card is necessary to enable cash withdrawals at ATMs. Visit “My Account” and complete the “KYC Documents” validation process to upgrade your card and gain access to ATM withdrawals.",
    },
    {
      id: 18,
      title:
        "How should I handle multiple account choices at a cash machine (ATM)?",
      content:
        "Opt for “Current” or “Checking” when prompted to select an account for cash withdrawals at an ATM.",
    },
    {
      id: 19,
      title:
        "What options for utilising a balance too small for an ATM withdrawal are available?",
      content:
        "Request a merchant or store cashier to charge the remaining balance to your card, then pay the purchase balance using an alternative payment method.",
    },
    {
      id: 20,
      title: "How can I minimise cash machine (ATM) related fees?",
      content:
        "Carefully select ATMs, considering their associated fees and withdrawal policies. Consolidate withdrawals to maximise usage and avoid attempting to withdraw more than your account balance, which incurs additional costs.",
    },
    {
      id: 21,
      title: "What foreign exchange (FX) rate is utilised?",
      content:
        "Foreign exchange conversion rates are determined at the time of the transaction based on daily rates, applicable fees, and processing entities involved.",
    },
    {
      id: 22,
      title:
        "What is a pre-authorization hold, and how does it impact my card balance?",
      content:
        "Merchants may place a pre-authorization hold on your card to verify funds for a transaction. The remaining funds may be held for up to eight days after settling the final transaction amount.",
    },
    {
      id: 23,
      title: "How do I upgrade to a Plastic Card?",
      content:
        "Ensure sufficient funds are available in your account, then provide your Secure Account Number (SAN) to the payer. Once payment is received, login to your account and select “Request Plastic Card.” Your plastic card will be delivered within 10-15 business days unless expedited delivery is requested.",
    },
  ];

  return (
    <div id="tab2" className={activeTab === "#tab2" ? "active" : "hidden"}>
      <Accordion items={items} />
    </div>
  );
};

export default Tab2;
