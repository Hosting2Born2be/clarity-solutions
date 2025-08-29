"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";

import st from "./NeedAssistance.module.scss";

export default function NeedAssistance() {
  return (
    <section className={st.needAssistance}>
      <div className="_container">
        <RevealWrapper origin="bottom" className={st.needAssistance__body}>
          <div>
            <h2>Need Assistance with Activation? </h2>
            <Link href="/contacts">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.53125 11.9685L19.5312 11.9685M14.6562 17.2185L19.9062 11.9685L14.6562 6.71851"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
          <Image
            src="/images/activation/card.png"
            alt="Card Activation"
            width={297}
            height={315}
          />
        </RevealWrapper>
      </div>
    </section>
  );
}
