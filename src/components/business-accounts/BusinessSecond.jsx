"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

const BusinessSecond = () => {
  return (
    <>
      <section className="business-second">
        <div className="_container">
          <div className="business-second__body">
            <RevealWrapper origin="bottom">
              <h2 className="section-title">We offer</h2>
            </RevealWrapper>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="business-second-row"
            >
              <div>
                <h4>
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
                  Effortless Setup
                </h4>
                <p>
                  Open a business account within minutes and promptly send and
                  receive international payments in multiple currencies. Our
                  streamlined onboarding process ensures you can begin managing
                  your finances immediately.
                </p>
              </div>

              <div>
                <h4>
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
                  Tailored Solutions for Every Industry
                </h4>
                <p>
                  Our Business Accounts are designed to support businesses
                  across various sectors, including marketplace platforms, gig
                  workers, online sellers, and content creators. Whether you’re
                  in e-commerce, freelance services, or affiliate marketing, our
                  payment solutions are adaptable to your industry’s unique
                  requirements.
                </p>
              </div>

              <div>
                <h4>
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
                  Mass Payments Made Simple
                </h4>
                <p>
                  Connect to our secure platform via API to automate
                  cross-border mass payments. Alternatively, utilise batch-file
                  payments for seamless execution without integration
                  complexities. Our platform is designed to easily handle large
                  volumes of transactions, saving you time and resources.
                </p>
              </div>

              <div>
                <h4>
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
                  Enhanced Security Measures
                </h4>
                <p>
                  Operating within a highly regulated jurisdiction and
                  collaborating with esteemed financial institutions, we
                  prioritise the security of your business account. Your funds
                  are safeguarded against unauthorised access and potential
                  threats, providing peace of mind.
                </p>
              </div>
            </RevealList>
            <RevealWrapper origin="bottom">
              <Link href="#" className="orange-button">
                Get started today
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
};
export default BusinessSecond;
