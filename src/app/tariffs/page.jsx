import "@/public/scss/tariffs.scss";
import TariffsHero from "@/src/components/tariffs/TariffsHero";
import TariffsSecond from "@/src/components/tariffs/TariffsSecond";


export const metadata = {
  title: "Tariffs",
};

export default function Tariffs() {
  return (
    <>
    <TariffsHero/>
    <TariffsSecond/>
    </>
  );
}
