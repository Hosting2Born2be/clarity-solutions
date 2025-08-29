"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";

import st from "./ActivationSteps.module.scss";

export default function ActivationSteps() {
  const steps = [
    {
      text: "Log in to your account with your registered phone number.",
      image: "/images/activation/step-1.png",
    },
    {
      text: "Go to “My Cards” section of the main menu.",
      image: "/images/activation/step-2.png",
    },
    {
      text: "Tap + sign in the upper right corner.",
      image: "/images/activation/step-3.png",
    },
    {
      text: "Click the “Activate” button.",
      image: "/images/activation/step-4.png",
    },
    {
      text: "Follow the on-screen instructions to get your card activated.",
      image: "/images/activation/step-5.png",
    },
  ];

  return (
    <section className={st.activationSteps}>
      <div className="_container">
        <div className={st.activationSteps__body}>
          <RevealWrapper delay={0} origin="bottom">
            <h2>Activation Steps</h2>
            <p>
              Getting your Clarity Solutions card ready to use <br />
              takes just a few simple steps.
            </p>
          </RevealWrapper>
          <div className={st.activationSteps__steps}>
            {steps.map((step, index) => (
              <RevealWrapper
                delay={0}
                origin="bottom"
                key={index}
                className={st.activationSteps__step}
              >
                <div className={st.activationSteps__stepImage}>
                  <Image
                    src={step.image}
                    alt={step.text}
                    width={500}
                    height={600}
                    quality={100}
                  />
                </div>
                <div>
                  <p dangerouslySetInnerHTML={{ __html: step.text }} />
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
