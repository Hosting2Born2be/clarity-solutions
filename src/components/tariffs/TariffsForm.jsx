"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-international-phone/style.css";


const montserrat = Montserrat({ subsets: ["latin"] });
const requiredText = "This field is required";



const ValidationSchema = Yup.object().shape({
  emailAddress: Yup.string().email("Invalid email").required(requiredText),
  yourName: Yup.string().required(requiredText),
  amountOnCard: Yup.string().required(requiredText),
  desiredBalance: Yup.string().required(requiredText),
});

const TariffsForm = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [resultMessage, setResultMessage] = useState("");
  return (
    <>
      <section className="business-last" id="become-member">
        <div className="_container">
          <div className="business-last__body">
            <RevealWrapper delay={100} origin="bottom">
              <h2 className="section-title">Order a card</h2>
            </RevealWrapper>

            <Formik
              initialValues={{
                yourName: "",
                emailAddress: "",
                amountOnCard: "",
                desiredBalance: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  // Make a POST request to your serverless function
                  const response = await fetch("/api/card", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                  });
                  console.log(JSON.stringify(values));
                  if (response.ok) {
                    resetForm();
                    setResultMessage("success");
                  } else {
                    setResultMessage("failed");
                  }
                } catch (error) {
                  console.error(error);
                  setResultMessage("failed");
                }
              }}
            >
              {({ errors, touched, setFieldValue, values }) => (
                <Form className={`contact-form ${montserrat.className}`}>
                  <div className="input-wrap">
                    <Field
                      name="emailAddress"
                      placeholder="Your email registered with Clarity"
                      type="email"
                      className={
                        errors.emailAddress && touched.emailAddress
                          ? "error"
                          : ""
                      }
                    />
                    {errors.emailAddress && touched.emailAddress ? (
                      <div className="error-label">{errors.emailAddress}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="yourName"
                      placeholder="Your Name"
                      className={
                        errors.yourName && touched.yourName ? "error" : ""
                      }
                    />
                    {errors.yourName && touched.yourName ? (
                      <div className="error-label">{errors.yourName}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <Field
                      name="amountOnCard"
                      placeholder="Amount of cards"
                      className={
                        errors.amountOnCard && touched.amountOnCard
                          ? "error"
                          : ""
                      }
                    />
                    {errors.amountOnCard && touched.amountOnCard ? (
                      <div className="error-label">{errors.amountOnCard}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <Field
                      name="desiredBalance"
                      placeholder="Desired wallet balance"
                      className={
                        errors.desiredBalance && touched.desiredBalance
                          ? "error"
                          : ""
                      }
                    />
                    {errors.desiredBalance && touched.desiredBalance ? (
                      <div className="error-label">{errors.desiredBalance}</div>
                    ) : null}
                  </div>

                  <button type="submit" className="orange-button">
                    Send request
                  </button>

                  {resultMessage === "success" ? (
                    <div className="input-wrap full">
                      <div className="message success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="41"
                          height="40"
                          viewBox="0 0 41 40"
                          fill="none"
                        >
                          <path
                            d="M12.2773 20.8334L17.2773 25.8334L28.944 14.1667"
                            stroke="#F85C3A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.6108 36.6668C29.8158 36.6668 37.2774 29.2052 37.2774 20.0002C37.2774 10.7952 29.8158 3.3335 20.6108 3.3335C11.4058 3.3335 3.94409 10.7952 3.94409 20.0002C3.94409 29.2052 11.4058 36.6668 20.6108 36.6668Z"
                            stroke="#F85C3A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>
                          Thank you for choosing Clarity Solutions! Our
                          representative will reach you out to you shortly.
                        </span>
                      </div>
                    </div>
                  ) : resultMessage === "failed" ? (
                    <div className="input-wrap full">
                      <div className="message error">
                        Failed to send message. Please try again.
                      </div>
                    </div>
                  ) : null}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};
export default TariffsForm;
