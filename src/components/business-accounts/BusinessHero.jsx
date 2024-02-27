"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import BusinessParallaxComponent from "./BusinessParallaxComponent";


const BusinessHero = () => {
  return (
    <>
      <section className="business-hero">
        <div className="_container">
          <div className="business-hero__body">
            <RevealWrapper origin="bottom">
              <h1 className="wow fadeInUp">Expand your financial reach</h1>
              <p className="wow fadeInUp">
                Empower your business with Clarity Solutions Business Accounts,
                designed to streamline your payment processes and support your
                financial growth. Whether you’re a freelancer platform, a gig
                economy marketplace, or an e-commerce platform, our Business
                Accounts offer tailored solutions to meet your needs.
              </p>
            </RevealWrapper>
          </div>
        </div>
        <BusinessParallaxComponent/>
        <RevealWrapper className="hero-mobile" origin="bottom">
          <img src="/images/business/hero-mobile.png" />
        </RevealWrapper>
      </section>
    </>
  );
};
export default BusinessHero;
