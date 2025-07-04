import Link from "next/link";
import React from "react";

export const HowToPay = () => {
  return (
    <section className="how-to-pay">
      <div className="how-to-pay__inner">
        <div className="_container">
          <div className="how-to-pay__body ">
            <h2 className="wow fadeInUp">How to Pay</h2>
            <div className="how-to-pay__item">
              <p>
                Apple Pay is accepted at any contactless terminal. <br />
                For online shopping, simply select <b>Apple Pay</b> when it
                appears as a payment option at checkout.
              </p>
            </div>
            <div className="how-to-pay__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="102"
                height="43"
                viewBox="0 0 102 43"
                fill="none"
              >
                <g clipPath="url(#clip0_6781_2088)">
                  <path
                    d="M18.6255 6.36952C17.4312 7.78279 15.5199 8.89788 13.6088 8.73844C13.3699 6.82754 14.3054 4.79681 15.4004 3.54258C16.5947 2.0895 18.6852 1.05423 20.3773 0.974609C20.5764 2.96533 19.7999 4.91624 18.6255 6.36952ZM20.3576 9.11684C17.5904 8.95759 15.2215 10.6893 13.9075 10.6893C12.5739 10.6893 10.5631 9.19646 8.37329 9.23627C5.52665 9.27608 2.87886 10.8884 1.42558 13.4566C-1.5606 18.5927 0.649272 26.1975 3.53573 30.378C4.9492 32.4483 6.64134 34.7177 8.87092 34.6381C10.9813 34.5585 11.8173 33.2646 14.3656 33.2646C16.9335 33.2646 17.6702 34.6381 19.8998 34.5983C22.209 34.5585 23.6623 32.5282 25.0758 30.4576C26.6881 28.1086 27.3451 25.8191 27.385 25.6997C27.3451 25.6599 22.9258 23.9679 22.886 18.8714C22.8462 14.6113 26.3698 12.5807 26.529 12.4613C24.5381 9.51494 21.4327 9.19646 20.3576 9.11684ZM36.3435 3.34353V34.3795H41.161V23.7689H47.83C53.9216 23.7689 58.2018 19.5884 58.2018 13.5364C58.2018 7.48461 54.0012 3.34373 47.9892 3.34373L36.3435 3.34353ZM41.161 7.40479H46.7151C50.8958 7.40479 53.2846 9.63437 53.2846 13.5561C53.2846 17.4778 50.8958 19.7275 46.6952 19.7275H41.161V7.40479ZM67.0007 34.6182C70.0267 34.6182 72.8335 33.0855 74.1077 30.6567H74.2072V34.3793H78.6666V18.9311C78.6666 14.452 75.0832 11.5654 69.5687 11.5654C64.4525 11.5654 60.6701 14.4918 60.5307 18.5131H64.8707C65.229 16.602 67.0005 15.3478 69.4294 15.3478C72.3757 15.3478 74.0281 16.7214 74.0281 19.2498V20.9616L68.0159 21.3199C62.4219 21.6583 59.3961 23.9478 59.3961 27.9295C59.3961 31.9507 62.5214 34.6182 67.0007 34.6182ZM68.2946 30.9353C65.7268 30.9353 64.0942 29.7012 64.0942 27.8098C64.0942 25.8591 65.6669 24.7243 68.673 24.5452L74.0281 24.2068V25.9584C74.0281 28.865 71.5596 30.9353 68.2948 30.9353M84.619 42.8201C89.3173 42.8201 91.5269 41.0287 93.4579 35.5938L101.918 11.864H97.0212L91.3476 30.1986H91.2481L85.5745 11.864H80.5379L88.6998 34.459L88.2619 35.8326C87.5254 38.1617 86.3309 39.0577 84.2008 39.0577C83.8226 39.0577 83.0861 39.0178 82.7873 38.978V42.7007C83.066 42.7803 84.2603 42.8201 84.6188 42.8201"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6781_2088">
                    <rect
                      width="101.92"
                      height="42"
                      fill="white"
                      transform="translate(0 0.974609)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>
                To pay: Activate <b>Apple Pay</b> and select your{" "}
                <b>Clarity Solutions debit card.</b>
              </p>
            </div>
            <Link
              href="https://support.apple.com/guide/iphone/set-up-apple-pay-iph9b7f53382/ios"
              className="white-button"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M17.5511 21.2546C16.5711 22.2046 15.5011 22.0546 14.4711 21.6046C13.3811 21.1446 12.3811 21.1246 11.2311 21.6046C9.79114 22.2246 9.03114 22.0446 8.17114 21.2546C3.29114 16.2246 4.01114 8.56461 9.55114 8.28461C10.9011 8.35461 11.8411 9.02461 12.6311 9.08461C13.8111 8.84461 14.9411 8.15461 16.2011 8.24461C17.7111 8.36461 18.8511 8.96461 19.6011 10.0446C16.4811 11.9146 17.2211 16.0246 20.0811 17.1746C19.5111 18.6746 18.7711 20.1646 17.5411 21.2646L17.5511 21.2546ZM12.5311 8.22461C12.3811 5.99461 14.1911 4.15461 16.2711 3.97461C16.5611 6.55461 13.9311 8.47461 12.5311 8.22461Z"
                  fill="#2D2D2D"
                />
              </svg>
              <span>View Apple Guide</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
