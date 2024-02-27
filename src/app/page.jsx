"use client";
import Image from "next/image";
import Link from "next/link";
import "@/public/scss/home.scss";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="_container">
          <div className="home-hero__body">
            <RevealWrapper origin="bottom">
              <h1 className="wow fadeInUp">Welcome to Clarity Solutions</h1>
              <p className="wow fadeInUp">
                At Clarity Solutions, we believe in empowering individuals and
                businesses alike by providing seamless financial solutions. With
                a focus on convenience, security, and accessibility, we strive
                to make managing your finances more straightforward than ever
                before. Join us on a journey towards financial freedom today!
              </p>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section className="home-second">
        <div className="_container">
          <div className="home-second__body">
            <RevealWrapper origin="bottom">
              <h2 className="section-title">Why choose us?</h2>
            </RevealWrapper>

            <div className="why-row">
              <RevealWrapper origin="bottom">
                <div className="why-element">
                  <span>1</span>
                  <p>Instant payouts and versatile debit card options for hassle-free transactions.</p>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom">
                <div className="why-element">
                  <span>2</span>
                  <p>Robust security measures in partnership with top-tier banks.</p>
                </div>
              </RevealWrapper>
              <RevealWrapper origin="bottom">
                <div className="why-element">
                  <span>3</span>
                  <p>Global access through our online banking portal and mobile app ensures convenience wherever you are.</p>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
