import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LearnHow = () => {
  return (
    <section className="learn-how">
      <div className="_container">
        <div className="learn-how__body wow fadeInUp">
          <div>
            <h2>
              Learn How to Add <br />
              Your Card to Apple Pay
            </h2>
            <p>
              Need help setting up your <b>Clarity Solutions debit card</b> with{" "}
              <b>Apple Pay?</b>
              <br />
              Visit Apple’s official resources for step-by-step instructions.
            </p>
            <Link
              href="https://support.apple.com/guide/iphone/set-up-apple-pay-iph9b7f53382/ios"
              className="orange-button"
              target="_blank"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4.53125 12.9431L19.5312 12.9431M14.6562 18.1931L19.9062 12.9431L14.6562 7.69312"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </Link>
          </div>
          <Image
            src="/images/apple-pay/card.png"
            alt="Learn How"
            width={297}
            height={315}
          />
        </div>
      </div>
    </section>
  );
};
