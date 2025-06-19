import React from "react";
import "@/public/scss/apple-pay.scss";
import { ApplePayHero } from "@/src/components/apple-pay/ApplePayHero";
import { WhyUseApplePay } from "@/src/components/apple-pay/WhyUseApplePay";
import { HowAddCard } from "@/src/components/apple-pay/HowAddCard";
import { LearnHow } from "@/src/components/apple-pay/LearnHow";
import { HowToPay } from "@/src/components/apple-pay/HowToPay";
import { WantToStart } from "@/src/components/apple-pay/WantToStart";

export const metadata = {
  title: "Our Debit Card with Apple Pay | Clarity Solutions",
  description: "Explore the benefits of Clarity Solutions debit cards with Apple Pay. Learn how to add your card to Apple Wallet and enjoy fast, secure payments on the go.",
  openGraph: {
    title: "Our Debit Card with Apple Pay | Clarity Solutions",
    description: "Explore the benefits of Clarity Solutions debit cards with Apple Pay. Learn how to add your card to Apple Wallet and enjoy fast, secure payments on the go.",
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};

const ApplePay = () => {
  return (
    <>
      <ApplePayHero />
      <WhyUseApplePay />
      <HowAddCard />
      <LearnHow />
      <HowToPay />
      <WantToStart />
    </>
  );
};

export default ApplePay;
