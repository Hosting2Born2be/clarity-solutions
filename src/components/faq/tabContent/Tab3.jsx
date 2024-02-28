"use client";
import Accordion from "./Accordion";

const Tab3 = ({ activeTab }) => {
  const items = [
    {
      id: 24,
      title: "How do I activate my card?",
      content:
        "Upon receipt of an activation email, follow the provided instructions. Use the web access code included in the email for the initial sign-in. Upon logging in, update your personal details and proceed to upgrade your card for increased limits.",
    },
    {
      id: 25,
      title: "I lost my activation email and access code. What should I do?",
      content:
        'Contact us to request a reset of your access code or click <a href="#">Forgot Access Code</a> on the Sign In page.',
    },
    {
      id: 26,
      title:
        "What is the difference between a One-Time Verification and an Access Code?",
      content:
        "Your Access Code remains unchanged and is selected during account registration. The One-Time Verification Code is a randomly generated code sent to your email upon login.",
    },
    {
      id: 27,
      title:
        "Why am I not receiving the One-Time Verification Code in my email?",
      content:
        "Delays may occur due to email server issues. Ensure that spam folders are checked, and consider using email services like Gmail for optimal delivery.",
    },
    {
      id: 28,
      title: "What is the difference between my access code and my PIN?",
      content:
        "Your access code is used for online account access and activation, while your PIN (Personal Identification Number) is required for transactions at ATMs and Points of Sale.",
    },
    {
      id: 29,
      title: "I don’t remember my PIN. What should I do?",
      content:
        "Login to your account and select “Retrieve PIN” to recover your PIN.",
    },
    {
      id: 30,
      title: "What is a Secondary Balance?",
      content:
        "The secondary balance is a reserve account for funds when daily, monthly, or yearly load limits are reached.",
    },
    {
      id: 31,
      title: "How do I upgrade to plastic?",
      content:
        "Login to your account and select “Request Plastic Card”. Allow approximately 10-15 business days for card delivery.",
    },
    {
      id: 32,
      title: "Do I receive a statement?",
      content:
        "No, statements are not sent. However, you can view your balance and transactions online for free by logging in to your account.",
    },
    {
      id: 33,
      title: "Is my prepaid card safe to use on the internet?",
      content:
        "Yes, but exercise caution. Only use secure, reputable sites, and never disclose your PIN online. Beware of phishing attempts.",
    },
    {
      id: 34,
      title:
        "What is the difference between a Card to Card Transfer and an Email Money Transfer?",
      content:
        "A Card to Card Transfer sends funds directly between prepaid cards, while an Email Money Transfer transfers funds via email.",
    },
    {
      id: 35,
      title:
        "My friend sent me a transfer. Why don’t the funds appear in my account?",
      content:
        "Accept transfers into your account via email or login, and accept pending transactions.",
    },
    {
      id: 36,
      title:
        "What is the security question & security answer to send and receive an email money transfer?",
      content:
        "When initiating an Email Money Transfer, select a security question and alphanumeric answer to share with the recipient for claiming funds.",
    },
  ];

  return (
    <div id="tab3" className={activeTab === "#tab3" ? "active" : "hidden"}>
      <Accordion items={items} />
    </div>
  );
};

export default Tab3;
