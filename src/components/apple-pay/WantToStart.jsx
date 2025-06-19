import Image from "next/image";
import Link from "next/link";
import React from "react";

export const WantToStart = () => {
  return (
    <section className="want-to-start">
      <div className="_container">
        <div className="want-to-start__body">
          <div className="wow fadeInUp">
            <h2>Want to Start?</h2>
            <p>
              Get in touch with us today to add your Clarity Solutions debit
              card to Apple Pay and start enjoying seamless, secure payments.
            </p>
            <Link href="/contacts" className="orange-button">
              Contact Us
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
            src="/images/apple-pay/start.png"
            alt="Learn How"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
