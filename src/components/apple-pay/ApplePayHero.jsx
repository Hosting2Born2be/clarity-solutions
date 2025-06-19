import Image from "next/image";
import React from "react";

export const ApplePayHero = () => {
  return (
    <section className="apple-pay-hero">
      <div className="_container">
        <div className="apple-pay-hero__body">
          <Image
            src="/images/apple-pay/apple-pay.svg"
            alt="Apple Pay"
            width={165}
            height={65}
            className="wow fadeInUp"
          />
          <h1 className="wow fadeInUp">
            Unlock Seamless <br />
            Payments with Apple Pay
          </h1>
          <p className="wow fadeInUp">
            Add your Clarity Solutions debit card to Apple Pay for fast, secure
            payments in-store and online. Enjoy easy spending with Face ID or
            Touch ID, track transactions in real time, and take full control of
            your finances—anytime, anywhere.
          </p>
        </div>
      </div>
      <img
        className="apple-pay-hero__img"
        src="/images/apple-pay/hero.png"
        alt="Apple Pay"
      />
      <img
        className="apple-pay-hero__imgMobile"
        src="/images/apple-pay/heroMob.png"
        alt="Apple Pay"
      />
    </section>
  );
};
