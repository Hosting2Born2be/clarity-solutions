import React from "react";
import ActivationHero from "./components/ActivationHero/ActivationHero";
import ActivationVideo from "./components/ActivationVideo/ActivationVideo";
import ActivationSteps from "./components/ActivationSteps/ActivationSteps";
import NeedAssistance from "./components/NeedAssistance/NeedAssistance";

export const metadata = {
  title: "Card Activation | Clarity Solutions",
  description: "",
  openGraph: {
    title: "Card Activation | Clarity Solutions",
    description: "",
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};

const CardActivation = () => {
  return (
    <div>
      <ActivationHero />
      <ActivationVideo />
      <ActivationSteps />
      <NeedAssistance />
    </div>
  );
};

export default CardActivation;
