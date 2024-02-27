import "@/public/scss/insights.scss";
import InsightsHero from "@/src/components/insights/InsightsHero";
import InsightsSecond from "@/src/components/insights/InsightsSecond";



export const metadata = {
  title: "Insights",
};

export default function Insights() {
  return (
    <>
        <InsightsHero/>
        <InsightsSecond/>
    </>
  );
}
