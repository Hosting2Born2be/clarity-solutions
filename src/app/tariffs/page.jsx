import "@/public/scss/tariffs.scss";
import TariffsHero from "@/src/components/tariffs/TariffsHero";
import TariffsSecond from "@/src/components/tariffs/TariffsSecond";


export const metadata = {
  title: "Clarity Solutions Tariffs: Transparent Pricing for Financial Services",
  description: "Explore Clarity Solutions tariffs for transparent pricing on card accounts, transfers, and ATM transactions. See our cost-effective options for hassle-free financial management.",
  openGraph: {
    title: "Clarity Solutions Tariffs: Transparent Pricing for Financial Services",
    description: "Explore Clarity Solutions tariffs for transparent pricing on card accounts, transfers, and ATM transactions. See our cost-effective options for hassle-free financial management.",
  },
};

export default function Tariffs() {
  return (
    <>
    <TariffsHero/>
    <TariffsSecond/>
    </>
  );
}
