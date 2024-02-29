import "@/public/scss/insights.scss";
import InsightsHero from "@/src/components/insights/InsightsHero";
import InsightsSecond from "@/src/components/insights/InsightsSecond";


export const metadata = {
  title: "Clarity Solutions Insights: Stay Informed with Our Latest Articles",
  description: "Explore insightful articles covering financial freedom, global transactions, payment security, and emerging trends in digital payments. Stay ahead with Clarity Solutions.",
  openGraph: {
    title: "Clarity Solutions Insights: Stay Informed with Our Latest Articles",
    description: "Explore insightful articles covering financial freedom, global transactions, payment security, and emerging trends in digital payments. Stay ahead with Clarity Solutions.",
    images: "/images/meta.jpg",
  },
};

export default function Insights() {
  return (
    <>
        <InsightsHero/>
        <InsightsSecond/>
    </>
  );
}
