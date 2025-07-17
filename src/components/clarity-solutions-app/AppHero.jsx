"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppHero = () => {
  return (
    <section className="app-hero">
      <div>
        <div className="_container">
          <div className="app-hero__body">
            <RevealWrapper delay={100} origin="bottom">
              <h1>
                Download <br />
                the{" "}
                <span>
                  Clarity <br />
                  Solutions App
                </span>
              </h1>
              <p>
                Manage your cards, control your company’s spending, and access
                your funds securely — anytime, anywhere.
              </p>
              <Image
                src="/images/app/qr.svg"
                alt="Clarity Solutions App"
                width={148}
                height={148}
                className="qr"
              />
              <div className="buttons">
                <Link href="#">
                  <Image
                    src="/images/app/app-store.svg"
                    alt="App Store"
                    width={170}
                    height={54}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/app/google-play.svg"
                    alt="Google Play"
                    width={170}
                    height={54}
                  />
                </Link>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={100} origin="bottom">
              <Image
                src="/images/app/hero.webp"
                alt="Clarity Solutions App"
                width={506}
                height={808}
                className="hero"
              />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
