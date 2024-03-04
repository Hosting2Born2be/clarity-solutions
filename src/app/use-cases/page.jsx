import "@/public/scss/business.scss";
import BusinessHero from "@/src/components/business-accounts/BusinessHero";
import BusinessLast from "@/src/components/business-accounts/BusinessLast";
import BusinessSecond from "@/src/components/business-accounts/BusinessSecond";
import BusinessThird from "@/src/components/business-accounts/BusinessThird";


export const metadata = {
  title: "Clarity Solutions Business Accounts: Streamline Your Payment Processes",
  description: "Expand your financial reach with Clarity Solutions Business Accounts. Tailored solutions designed to support freelancers, gig economy platforms, and e-commerce businesses.",
  openGraph: {
    title: "Clarity Solutions Business Accounts: Streamline Your Payment Processes",
    description: "Expand your financial reach with Clarity Solutions Business Accounts. Tailored solutions designed to support freelancers, gig economy platforms, and e-commerce businesses.",
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};

export default function Business() {
  return (
    <>
      <BusinessHero/>
      <BusinessThird/>
      <BusinessSecond/>
      <BusinessLast/>
    </>
  );
}
