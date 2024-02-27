"use client";
import { RevealWrapper, RevealList } from "next-reveal";


const TariffsSecond = () => {
  return (
    <>
      <section className="tariffs-second">
        <div className="_container">
          <div className="tariffs-second__body">
            <table>
              <thead>
                <th>Service</th>
                <th>Cost</th>
                <th>Unit</th>
                <th>Description</th>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="subtitle">Card Accound</td>
                </tr>

                <tr>
                  <td>Initial Plastic Card Order</td>
                  <td>$12.95</td>
                  <td>Per Card</td>
                  <td>Includes standard shipping. One-time fee for the first card order.</td>
                </tr>

                <tr>
                  <td>Plastic Card Replacement (Lost/Stolen)</td>
                  <td>$19.95</td>
                  <td>Per Card</td>
                  <td>Includes standard shipping. Charged for replacement of lost or stolen cards.</td>
                </tr>

                <tr>
                  <td>Monthly Account Maintenance</td>
                  <td>$3.00</td>
                  <td>Per Month</td>
                  <td>Deducted from available balance monthly.</td>
                </tr>

                <tr>
                  <td>Yearly Account Maintenance</td>
                  <td><span>FREE</span></td>
                  <td>Every Year</td>
                  <td>There is no charge for annual maintenance.</td>
                </tr>

                <tr>
                  <td>Receiving Payments</td>
                  <td>$3.00/<span>FREE</span></td>
                  <td>Per Payment</td>
                  <td>A fee is applied when receiving payments to the card, although some merchants may absorb this fee.</td>
                </tr>

                <tr>
                  <td>POS Purchases</td>
                  <td><span>FREE</span></td>
                  <td>Per Transaction</td>
                  <td>No charge for point-of-sale purchases.</td>
                </tr>

                <tr>
                  <td>Card to Card Transfer + Card to Email</td>
                  <td>$3.00</td>
                  <td>Per Transfer</td>
                  <td>Transfer Sender bears the cost for card-to-card and card-to-email transfers.</td>
                </tr>

                <tr>
                  <td>Bank Transfers</td>
                  <td>$5.00</td>
                  <td>Per Transfer</td>
                  <td>Cost per bank transfer. Processing time may take 1 - 3 business days.</td>
                </tr>

                <tr>
                  <td>Card to Wallet Transfer</td>
                  <td>$0.50</td>
                  <td>Per Transfer</td>
                  <td>Fee for transferring funds from card to wallet.</td>
                </tr>

                <tr>
                  <td>Clarity Solutions Client Help</td>
                  <td><span>FREE</span></td>
                  <td>All the Time</td>
                  <td>Assistance is provided to Clarity Solutions clients at no cost.</td>
                </tr>

                <tr>
                  <td colSpan={4} className="subtitle">ATM/Cash Transaction Fees *</td>
                </tr>

                <tr>
                  <td>ATM Withdrawal</td>
                  <td>$3.15</td>
                  <td>Per Transaction</td>
                  <td>Fee charged for ATM withdrawals. ATM/POS service providers may apply additional fees.</td>
                </tr>

                <tr>
                  <td>Cash Withdrawal Decline Fee</td>
                  <td>$1.00</td>
                  <td>Per Transaction</td>
                  <td>Charged when a withdrawal request is declined. Additional fees may apply from ATM/POS service providers.</td>
                </tr>

                <tr>
                  <td>ATM Balance Inquiry Fee</td>
                  <td>$1.00</td>
                  <td>Per Transaction</td>
                  <td>Fee for ATM balance inquiries. Additional fees may apply from ATM/POS service providers.</td>
                </tr>

                <tr>
                  <td colSpan={4} className="subtitle">Account Restrictions</td>
                </tr>

                <tr>
                  <td>POS Purchase</td>
                  <td>$20,000</td>
                  <td>Per Transaction</td>
                  <td>The maximum annual limit ranges from $80,000 to $90,000, depending on the card type.</td>
                </tr>

                <tr>
                  <td>ATM Withdrawal $600</td>
                  <td>$600</td>
                  <td>Per Transaction - <br/>$3,000 per 24 hours</td>
                  <td>For 30 days, the limit is $20,000 or $25,000, while for 365 days, it’s $80,000 or $90,000, depending on card type.</td>
                </tr>

                <tr>
                  <td>Primary Balance</td>
                  <td>$20,000</td>
                  <td>Max. Card Balance</td>
                  <td>You can transfer up to $6,000 daily from your secondary to your primary account.</td>
                </tr>

                <tr>
                  <td>Secondary Balance</td>
                  <td>Unlimited</td>
                  <td>No Account Limit</td>
                  <td>Any funds exceeding the $6,000 load limit will be automatically transferred to the secondary balance.</td>
                </tr>

                <tr>
                  <td colSpan={4}>* For transactions conducted in a foreign currency or requested in a currency other than USD, additional charges of up to 3.5% may apply in addition to network transaction fees. Furthermore, cards outside the EU may be subject to a 1.00% ATM Fee. POS cashback transactions may also be subject to up to 3.5% charges. Similarly, bank transfers in the same currency may incur an additional transaction fee of up to 2%.</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>


      </section>
    </>
  );
};
export default TariffsSecond;
