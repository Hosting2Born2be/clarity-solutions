"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

const BusinessSecond = () => {
  return (
    <>
      <section className="business-second">
        <div className="_container">
          <div className="business-second__body">
            <RevealWrapper delay={100} origin="bottom">
              <h2 className="section-title">
                <Link
                  href="https://clarityglobalinc.com/send.html"
                  target="_blank"
                >
                  Apply for payment solutions now
                </Link>
              </h2>
            </RevealWrapper>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="business-second-row"
            >
              <div>
                <h4>
                  <Link
                    href="https://clarityglobalinc.com/send.html"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10.9546"
                        r="7.5"
                        stroke="#F85C3A"
                        stroke-width="5"
                      />
                    </svg>
                    <span>Accounts for SEPA, CHAPS and SWIFT payments</span>
                  </Link>
                </h4>
                <p>
                  Named IBANS for worldwide B2B payments and currency exchange
                  with all major currencies supported.
                </p>
              </div>

              <div>
                <h4>
                  <Link
                    href="https://clarityglobalinc.com/send.html"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10.9546"
                        r="7.5"
                        stroke="#F85C3A"
                        stroke-width="5"
                      />
                    </svg>
                    <span>
                      All accounts and services are managed under one platform
                    </span>
                  </Link>
                </h4>
                <p>
                  Find it easy to manage your accounts and transactions with our
                  secure platform protected with 2FA verification access
                </p>
              </div>

              <div>
                <h4>
                  <Link
                    href="https://clarityglobalinc.com/send.html"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10.9546"
                        r="7.5"
                        stroke="#F85C3A"
                        stroke-width="5"
                      />
                    </svg>
                    <span>
                      Personalised support while onboarding and processing
                    </span>
                  </Link>
                </h4>
                <p>
                  Experience hassle-free account setup with a personal account
                  manager. Fill in the online application form to get an account
                  for your business
                </p>
              </div>

              <div>
                <h4>
                  <Link
                    href="https://clarityglobalinc.com/send.html"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <circle
                        cx="10"
                        cy="10.9546"
                        r="7.5"
                        stroke="#F85C3A"
                        stroke-width="5"
                      />
                    </svg>
                    <span>Tailored payment solutions and OTC deals</span>
                  </Link>
                </h4>
                <p>
                  Find the perfect tailored solution for your business with low
                  financial risk and an individual approach. Make your
                  cryptocurrencies exchange and transfers with our services.
                </p>
              </div>
            </RevealList>
          </div>
          <div class="button-wrap">
            <Link
              href="https://t.me/clarityglobalinc_support"
              target="_blank"
              className="orange-button"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default BusinessSecond;
