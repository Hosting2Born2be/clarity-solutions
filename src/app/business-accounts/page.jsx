import "@/public/scss/business.scss";
import BusinessHero from "@/src/components/business-accounts/BusinessHero";
import BusinessLast from "@/src/components/business-accounts/BusinessLast";
import BusinessSecond from "@/src/components/business-accounts/BusinessSecond";
import BusinessThird from "@/src/components/business-accounts/BusinessThird";


export const metadata = {
  title: "Business Accounts",
};

export default function Home() {
  return (
    <>
      <BusinessHero/>
      <BusinessSecond/>
      <BusinessThird/>
      <BusinessLast/>
    </>
  );
}
