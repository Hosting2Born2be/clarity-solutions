"use client";

import { RevealWrapper } from "next-reveal";

import st from "./ActivationHero.module.scss";
import Image from "next/image";

export default function ActivationHero() {
  return (
    <section className={st.activationHero}>
      <div className="_container">
        <div className={st.activationHero__body}>
          <RevealWrapper
            delay={100}
            origin="bottom"
            className={st.activationHero__col1}
          >
            <h1>
              Clarity Solutions <br />
              <span>Card Activation</span>
            </h1>
            <p>Step-by-step instructions to get your card ready for use.</p>
          </RevealWrapper>
          <RevealWrapper
            delay={100}
            origin="bottom"
            className={st.activationHero__col2}
          >
            <Image 
              src="/images/activation/hero.png"
              alt="Card Activation"
              width={575}
              height={575}
              className={st.activationHero__image}
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
