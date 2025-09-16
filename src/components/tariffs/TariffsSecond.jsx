"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

const TariffsSecond = () => {
  return (
    <>
      <section className="tariffs-second">
        <div className="_container">
          <span class="highlight">TERMS OF OPENING A CARD</span>
          <div className="tariffs-second__body">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Cost</th>
                  <th>Unit</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="subtitle">
                    Card Account
                  </td>
                </tr>

                <tr>
                  <td>Virtual Card Issuance</td>
                  <td>€30.00</td>
                  <td>Per Card</td>
                  <td>One-time fee for the card order.</td>
                </tr>

                <tr>
                  <td>
                    Physical card issuance <br />
                    (Chip + PayPass)
                  </td>
                  <td>€30.00</td>
                  <td>Per Card</td>
                  <td>
                    One-time charge for plastic card issuance. Standard fees
                    will apply thereafter.
                  </td>
                </tr>

                <tr>
                  <td>Monthly Account Maintenance</td>
                  <td>€30.00</td>
                  <td>Per Month</td>
                  <td>Deducted from available balance monthly.</td>
                </tr>

                <tr>
                  <td>Yearly Account Maintenance</td>
                  <td>
                    <span>FREE</span>
                  </td>
                  <td>Every Year</td>
                  <td>There is no charge for annual maintenance.</td>
                </tr>

                <tr>
                  <td>Card Top-Up Fee </td>
                  <td>
                    <span>FREE</span>
                  </td>
                  <td>Per Transfer</td>
                  <td>Fee for adding funds to your card.</td>
                </tr>

                <tr>
                  <td>Clarity Solutions Client Help</td>
                  <td>
                    <span>FREE</span>
                  </td>
                  <td>All the Time</td>
                  <td>
                    Assistance is provided to Clarity Solutions clients at no
                    cost.
                  </td>
                </tr>

                {/**
                 * <tr>
                  <td colSpan={4} className="subtitle">
                    Transaction
                  </td>
                </tr>

                <tr>
                  <td>Minimal Transfer Amount</td>
                  <td>€5.000</td>
                  <td>Per Transfer per Wallet (not a card)</td>
                  <td>Minimum transfer amounts apply per wallet.</td>
                </tr>

                <tr>
                  <td>Maximum Transfer Amount</td>
                  <td>€50.000</td>
                  <td>Per Transfer per Wallet (not a card)</td>
                  <td>Maximum transfer amounts apply per wallet.</td>
                </tr>

                <tr>
                  <td>Minimum Payment Amount</td>
                  <td>€1.00</td>
                  <td>Per Payment</td>
                  <td>Minimum payment amount required per transaction.</td>
                </tr>

                <tr>
                  <td>Maximum Payment Amount </td>
                  <td>€50.000</td>
                  <td>Per Payment</td>
                  <td>
                    Payments above 5k EUR could require additional verification.
                  </td>
                </tr>
                 */}
              </tbody>
            </table>
          </div>

          <div className="tariffs-second__other">
            <RevealWrapper origin="bottom">
              <h2>Other conditions:</h2>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <ul>
                <li>
                  The top-up takes up to 1 business day after payment is
                  received.
                </li>
                <li>
                  You will get phone App access with access to your cards,
                  transactions, and balances.
                </li>
                <li>
                  With the App on your phone, you can add any card to your Apple
                  Wallet or Google Pay as a physical card to make POS payments.
                </li>
                <li>
                  Each card could be connected to 1 user, but one could have
                  multiple cards.
                </li>
                <li>
                  You can order Virtual (issued up to 1 business day) and
                  Physical cards (issued within 1 business day; delivery
                  timeframe is from 1 week, depending on your location).
                </li>
                <li>
                  There are predefined Monthly and daily limits for a wallet,
                  which can be increased subject to additional approval process
                  by the service provider. You can place the
                  monthly/weekly/daily limit per transaction on the desired
                  cards.
                </li>
              </ul>
            </RevealWrapper>
            {/**<RevealWrapper origin="bottom">
              <div className="warn">
                <img src="/images/tariffs/warn.svg" />
                The commission is calculated as a percentage of the amount to
                top-up the virtual card. Then, it is added to the top-up amount,
                creating the gross amount to pay for you.
              </div>
            </RevealWrapper> */}

            <RevealWrapper origin="bottom">
              <h2>To create a virtual card account, we need the following:</h2>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <ul>
                <li>First name - could be various.</li>
                <li>Last name - could be various.</li>
                <li>
                  Phone number - You will need a code from it to log in to the
                  phone app or website app to manage the transactions and cards.
                </li>
                <li>
                  Email - You will need to log in to the phone app to manage the
                  transactions and cards.
                </li>
              </ul>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <div className="warn">
                <img src="/images/tariffs/warn.svg" />
                Both phone and email could be changed after.
              </div>
            </RevealWrapper>

            <RevealWrapper origin="bottom">
              <ul>
                <li>
                  Amount of desired cards (currently) and amount (EUR) to top up
                  for each one.
                </li>
              </ul>
            </RevealWrapper>
            <RevealWrapper origin="bottom">
              <div className="warn">
                <img src="/images/tariffs/warn.svg" />
                After collecting the required information, you will receive your
                card account credentials.
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={100} origin="bottom">
            <div className="need-help">
              <h2>Top-up process</h2>
              <p>
                Your funds are topped up to your user&apos;s wallet. All the
                user&apos;s cards <br />
                are connected to their wallet and use their balance. The
                spending <br />
                limits section could limit the card spending (balance).
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="tariffs-top">
        <div className="_container">
          <div className="tariffs-top__body">
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="tariffs-top__col-01"
            >
              <h2 className="section-title">
                To top-up your <br />
                wallet/card, <br />
                you need:
              </h2>
            </RevealList>
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="tariffs-top__col-02"
            >
              <div class="how-element">
                <span>1</span>
                <p>
                  To send transfer from your account with Clarity Global to your
                  Global Clarity Card account (details will be visible under Top
                  Up section in the mobile application.
                </p>
              </div>
              <div class="how-element">
                <span>2</span>
                <p>
                  To see the balance on your user&apos;s wallet and start
                  spending immediately.
                </p>
              </div>
            </RevealList>
          </div>
        </div>
      </section>
    </>
  );
};
export default TariffsSecond;
