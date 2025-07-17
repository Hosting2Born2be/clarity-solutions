"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppAssistance = () => {
  return (
    <section className="app-assistance">
      <div className="_container">
        <div className="app-assistance__body">
          <RevealWrapper delay={100} origin="bottom">
            <Image
              src="/images/app/assist.png"
              alt="Clarity Solutions App"
              width={500}
              height={500}
              className="hero"
            />
          </RevealWrapper>
          <RevealWrapper delay={100} origin="bottom">
            <h2>Need assistance?</h2>
            <p>
              Questions or issues with app setup or login? <br />
              Our team is here to help.
            </p>
            <Link href="/contacts">Contact Us</Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default AppAssistance;
