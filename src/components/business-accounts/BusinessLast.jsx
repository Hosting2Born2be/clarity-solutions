"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const requiredText = "This field is required";

const ValidationSchema = Yup.object().shape({
  companyName: Yup.string().required(requiredText),
  contactName: Yup.string().required(requiredText),
  companyWebsite: Yup.string().required(requiredText),
  contactPhoneNumber: Yup.string().required(requiredText),
  emailAddress: Yup.string()
    .email("Invalid email")
    .required(requiredText),
  countryOfIncorporation: Yup.string().required(
    requiredText
  ),
  countryOfBankAccount: Yup.string().required(
    requiredText
  ),
  affiliatedWebsites: Yup.string().required(requiredText),
  monthlyPaymentVolume: Yup.string().required(
    requiredText
  ),
  sourceOfFunds: Yup.string().required(requiredText),
});

const BusinessLast = () => {
  return (
    <>
      <section className="business-last">
        <div className="_container">
          <div className="business-last__body">
            <RevealWrapper delay={100} origin="bottom">
              <h2 className="section-title">
                Transact securely
                <br />
                with Clarity Solutions
              </h2>
            </RevealWrapper>

            <Formik
              initialValues={{
                companyName: "",
                contactName: "",
                companyWebsite: "",
                contactPhoneNumber: "",
                emailAddress: "",
                countryOfIncorporation: "",
                countryOfBankAccount: "",
                affiliatedWebsites: "",
                monthlyPaymentVolume: "1 - 5,000",
                sourceOfFunds: "Corporate Bank Funds",
                anticipatedPaymentCountries: "",
                additionalComments: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values) => {
                // Here you would handle form submission, e.g., sending data to a server
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ errors, touched }) => (
                <Form className={`contact-form ${montserrat.className}`}>
                  <div className="input-wrap">
                    <Field
                      name="companyName"
                      placeholder="Company Name"
                      className={
                        errors.companyName && touched.companyName ? "error" : ""
                      }
                    />
                    {errors.companyName && touched.companyName ? (
                      <div>{errors.companyName}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="contactName"
                      placeholder="Contact Name"
                      className={
                        errors.contactName && touched.contactName ? "error" : ""
                      }
                    />
                    {errors.contactName && touched.contactName ? (
                      <div>{errors.contactName}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="companyWebsite"
                      placeholder="Company Website"
                      className={
                        errors.companyWebsite && touched.companyWebsite
                          ? "error"
                          : ""
                      }
                    />
                    {errors.companyWebsite && touched.companyWebsite ? (
                      <div>{errors.companyWebsite}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="contactPhoneNumber"
                      placeholder="Contact Phone Number"
                      type="tel"
                      className={
                        errors.contactPhoneNumber && touched.contactPhoneNumber ? "error" : ""
                      }
                    />
                    {errors.contactPhoneNumber && touched.contactPhoneNumber ? (
                      <div>{errors.contactPhoneNumber}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="emailAddress"
                      placeholder="Email Address"
                      type="email"
                      className={
                        errors.emailAddress && touched.emailAddress ? "error" : ""
                      }
                    />
                    {errors.emailAddress && touched.emailAddress ? (
                      <div>{errors.emailAddress}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="countryOfIncorporation"
                      placeholder="Country of Incorporation"
                      className={
                        errors.countryOfIncorporation && touched.countryOfIncorporation ? "error" : ""
                      }
                    />
                    {errors.countryOfIncorporation &&
                    touched.countryOfIncorporation ? (
                      <div>{errors.countryOfIncorporation}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="countryOfBankAccount"
                      placeholder="Country of Bank Account"
                      className={
                        errors.countryOfBankAccount && touched.countryOfBankAccount ? "error" : ""
                      }
                    />
                    {errors.countryOfBankAccount &&
                    touched.countryOfBankAccount ? (
                      <div>{errors.countryOfBankAccount}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="affiliatedWebsites"
                      placeholder="Affiliated Websites"
                      className={
                        errors.affiliatedWebsites && touched.affiliatedWebsites ? "error" : ""
                      }
                    />
                    {errors.affiliatedWebsites && touched.affiliatedWebsites ? (
                      <div>{errors.affiliatedWebsites}</div>
                    ) : null}
                  </div>
                  <div className="radio-wrap">
                    <h4>Monthly Payment Volume</h4>
                    <div className="radio-row">
                      <label>
                        <Field
                          type="radio"
                          name="monthlyPaymentVolume"
                          value="1 - 5,000"
                        />

                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          1 - 5,000
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="monthlyPaymentVolume"
                          value="5,001 - 100,000"
                        />

                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          5,001 - 100,000
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="monthlyPaymentVolume"
                          value="100,001 - 500,000"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          100,001 - 500,000
                        </span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="monthlyPaymentVolume"
                          value="500,001+"
                        />
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg>
                          500,001+
                        </span>
                      </label>
                    </div>
                    {errors.monthlyPaymentVolume &&
                    touched.monthlyPaymentVolume ? (
                      <div>{errors.monthlyPaymentVolume}</div>
                    ) : null}
                  </div>
                  <div className="radio-wrap">
                    <h4>Source of Funds</h4>
                    <div className="radio-row">
                      <label>
                        <Field
                          type="radio"
                          name="sourceOfFunds"
                          value="Corporate Bank Funds"
                        />
                        <span><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg><span>Corporate Bank Funds</span></span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          name="sourceOfFunds"
                          value="Incoming Transfers from Affiliated Websites"
                        />
                        <span><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <rect
                              x="0.5"
                              y="0.896484"
                              width="11"
                              height="11"
                              rx="5.5"
                              stroke="#DCDCDC"
                            />
                            <rect
                              x="3"
                              y="3.39648"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#F85C3A"
                            />
                          </svg><span>Incoming Transfers from Affiliated Websites</span></span>
                      </label>
                    </div>
                    {errors.sourceOfFunds && touched.sourceOfFunds ? (
                      <div>{errors.sourceOfFunds}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <h4>Anticipated Payment Countries</h4>
                    <Field
                      as="textarea"
                      name="anticipatedPaymentCountries"
                      placeholder="Please provide information here"
                    />
                  </div>
                  <div className="input-wrap">
                    <h4>Additional Comments</h4>
                    <Field
                      as="textarea"
                      name="additionalComments"
                      placeholder="Share insights about your business and its payment requirements"
                    />
                  </div>

                  <button type="submit" className="orange-button">Submit Form</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};
export default BusinessLast;
