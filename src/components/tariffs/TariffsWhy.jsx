"use client";
import React from "react";
import { RevealWrapper, RevealList } from "next-reveal";

function TariffsWhy() {
  return (
    <>
      <section className="tariffs-why">
        <div className="_container">
          <div className="tariffs-why__body">
            <RevealWrapper delay={100} origin="bottom">
              <span class="highlight">CLIENT&apos;S JOURNEY</span>
              <h2 className="section-title">
                Why order, and what are the use cases?
              </h2>
            </RevealWrapper>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="prioritise-row"
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
                  01
                </h4>
                <p>
                  Give employees their company card to spend allocated money on
                  business expenses.
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
                  02
                </h4>
                <p>
                  Assign company cards to teams or projects for shared spending,
                  aligned to an agreed budget.
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
                  03
                </h4>
                <p>
                  Create virtual cards for dedicated types of spending to easily
                  manage third-party suppliers&apos; expenses, such as subscription
                  or online ad expenses, and remove duplicate, wasted spending.
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
                  04
                </h4>
                <p>
                  Allow employees or contractors to make approved ad hoc
                  purchases with temporary virtual cards, which are active for 7
                  days, and set the number of times they can be used.
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
                  05
                </h4>
                <p>
                  Use the cards for advertising, dev, tech, and online service
                  purchases.
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
                  06
                </h4>
                <p>
                  And yes, you can make cash withdrawals using our physical
                  cards.
                </p>
              </div>
            </RevealList>
          </div>
        </div>
      </section>
    </>
  );
}

export default TariffsWhy;
