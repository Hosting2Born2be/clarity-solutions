"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DontHaveCard = () => {
  return (
    <section className="dont-have-card">
      <div className="_container">
        <div className="dont-have-card__body">
          <RevealWrapper delay={100} origin="bottom">
            <Image
              src="/images/app/cards.png"
              alt="Clarity Solutions App"
              width={500}
              height={500}
              className="hero"
            />
          </RevealWrapper>
          <RevealWrapper delay={100} origin="bottom">
            <h2>Don’t have your card yet?</h2>
            <p>
              Check available plans and request your <br />
              Clarity card in just a few clicks.
            </p>
            <Link href="/tariffs">View Tariffs</Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default DontHaveCard;
