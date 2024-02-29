import "@/public/scss/faq.scss";
import FaqHero from "@/src/components/faq/FaqHero";
import FaqWrap from "@/src/components/faq/FaqWrap";

export const metadata = {
  title: "Clarity Solutions FAQ: Answers to Popular Questions",
  description: "Find essential information about prepaid cards, including usage, eligibility, fees, and troubleshooting. Get answers to common questions to enhance your Clarity Solutions experience.",
  openGraph: {
    title: "Clarity Solutions FAQ: Answers to Popular Questions",
    description: "Find essential information about prepaid cards, including usage, eligibility, fees, and troubleshooting. Get answers to common questions to enhance your Clarity Solutions experience.",
    images: "/images/meta.jpg",
  },
};


export default async function Faq() {
  return (
    <>
      <FaqHero/>
      <FaqWrap/>
    </>
  );
}
