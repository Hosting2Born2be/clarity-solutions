"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

const BusinessThird = () => {
  return (
    <>
      <section className="business-provide">
        <div className="_container">
          <div className="business-provide__body">
            <RevealWrapper delay={100} origin="bottom">
              <h2 className="section-title">
                Apply our business <br />
                solutions now
              </h2>
            </RevealWrapper>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="provide-row"
            >
              <div className="provide">
                <h4>Cost-effective</h4>
                <p>
                  Avoid exorbitant fees that eat into your bottom line. Benefit
                  from our No-Cost model, enabling businesses to make and
                  receive payments without financial burdens.
                </p>
              </div>

              <div className="provide">
                <h4>Versatile options</h4>
                <p>
                  Send payments to accounts worldwide, and users can
                  conveniently access their funds using their debit cards or
                  transfer funds directly to their local bank accounts in the
                  local currency.
                </p>
              </div>

              <div className="provide">
                <h4>Efficient & Straightforward</h4>
                <p>
                  Experience hassle-free account setup. Simply fill out the form
                  below, and a team member will reach out within 24 hours to
                  prepare your business account for seamless payment
                  transactions within a few hours.
                </p>
              </div>

              <div className="provide">
                <h4>Personalised support</h4>
                <p>
                  Receive dedicated assistance from our experienced team
                  throughout your journey. We’re here to address your inquiries,
                  provide guidance, and ensure your business accounts meet your
                  needs.
                </p>
              </div>
            </RevealList>
          </div>
        </div>
      </section>
    </>
  );
};
export default BusinessThird;
