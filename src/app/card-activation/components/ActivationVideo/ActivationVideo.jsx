"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";

import st from "./ActivationVideo.module.scss";

export default function ActivationVideo() {
  return (
    <section className={st.activationVideo}>
      <div className="_container">
        <div className={st.activationVideo__body}>
          <RevealWrapper delay={100} origin="bottom">
            <h2>Activation Made Easy</h2>
            <p>
              Follow along with our screen guide to activate your Clarity <br />
              Solutions card in just a few simple steps.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={100} origin="bottom">
            <div className={st.activationVideo__video}>
              <Image
                src="/images/activation/iphone.png"
                alt="Card Activation"
                width={244}
                height={512}
                className={st.activationVideo__videoImage}
              />
              <video
                src="/images/activation/video.mp4"
                playsInline
                autoPlay
                muted
                loop
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
