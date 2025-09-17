"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import Select from "react-select";
import countries from "@/lib/countries.json";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

const countryOptions = countries.map((country) => ({
  value: country.name,
  label: country.name,
}));

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#f0f0f0" : "#fff",
    color: state.isSelected ? "#000" : "#333",
  }),
};

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  emailAddress: Yup.string()
    .email("Invalid email")
    .required("This field is required"),
  residentialCountry: Yup.string().required("This field is required"),
  sanCard: Yup.string().required("This field is required"),
  yourInquiry: Yup.string().required("This field is required"),
});

const ContactsLast = () => {
  const [resultMessage, setResultMessage] = useState("");

  return (
    <>
      <section className="contacts-last">
        <div className="_container">
          <div className="contacts-last__body">
            <RevealWrapper delay={100} origin="bottom">
              <h2 className="section-title">
                Get in touch
                <br />
                with the crew
              </h2>
              <p>
                Feel free to reach out to us for any further inquiries. Please
                complete <br />
                the fields below, and our team will promptly contact you!
              </p>
            </RevealWrapper>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                emailAddress: "",
                residentialCountry: "",
                sanCard: "",
                yourInquiry: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  // Make a POST request to your serverless function
                  const response = await fetch("/api/contact", {
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
                      name="firstName"
                      placeholder="First Name"
                      className={
                        errors.firstName && touched.firstName ? "error" : ""
                      }
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="error-label">{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="lastName"
                      placeholder="Last Name"
                      className={
                        errors.lastName && touched.lastName ? "error" : ""
                      }
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="error-label">{errors.lastName}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap">
                    <Field
                      name="emailAddress"
                      placeholder="Email Address"
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
                  <div
                    className={`input-wrap ${
                      errors.residentialCountry && touched.residentialCountry
                        ? "error"
                        : ""
                    }`}
                  >
                    <Select
                      options={countryOptions}
                      name="residentialCountry"
                      placeholder="Residential Country"
                      styles={customStyles}
                      value={countryOptions.find(
                        (option) => option.value === values.residentialCountry
                      )}
                      onChange={(option) =>
                        setFieldValue("residentialCountry", option.value)
                      }
                      error={
                        errors.residentialCountry && touched.residentialCountry
                      }
                      classNamePrefix="select"
                    />
                    {errors.residentialCountry && touched.residentialCountry ? (
                      <div className="error-label">
                        {errors.residentialCountry}
                      </div>
                    ) : null}
                  </div>

                  <div className="input-wrap full">
                    <Field
                      name="sanCard"
                      placeholder="SAN or Card Number "
                      className={
                        errors.sanCard && touched.sanCard ? "error" : ""
                      }
                    />
                    {errors.sanCard && touched.sanCard ? (
                      <div className="error-label">{errors.sanCard}</div>
                    ) : null}
                  </div>

                  <div className="input-wrap full">
                    <h4>Your Inquiry</h4>
                    <Field
                      as="textarea"
                      name="yourInquiry"
                      placeholder="Share details about your inquiry to get prompt and helpful assistance"
                    />
                  </div>

                  <button type="submit" className="orange-button">
                    Send Message
                  </button>

                  {resultMessage === "success" ? (
                    <div className="input-wrap full">
                      <div className="message success">
                        Thank you for choosing Clarity Solutions! Our
                        representative will reach you out to you shortly.
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
            <div className="via-email">
              <span>Or via email</span>
              <Link href="mailto:support@clarity-solutions.io">
                support@clarity-solutions.io
              </Link>
            </div>
            <Link className="via-telegram" href="https://t.me/clarity_cards_support" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M16.4993 2.66663C9.13935 2.66663 3.16602 8.63996 3.16602 16C3.16602 23.36 9.13935 29.3333 16.4993 29.3333C23.8593 29.3333 29.8327 23.36 29.8327 16C29.8327 8.63996 23.8593 2.66663 16.4993 2.66663ZM22.686 11.7333C22.486 13.84 21.6193 18.96 21.1793 21.32C20.9927 22.32 20.6193 22.6533 20.2727 22.6933C19.4993 22.76 18.9127 22.1866 18.166 21.6933C16.9927 20.92 16.326 20.44 15.1927 19.6933C13.8727 18.8266 14.726 18.3466 15.486 17.5733C15.686 17.3733 19.0993 14.2666 19.166 13.9866C19.1753 13.9442 19.174 13.9002 19.1624 13.8584C19.1508 13.8165 19.1292 13.7782 19.0993 13.7466C19.0193 13.68 18.9127 13.7066 18.8193 13.72C18.6993 13.7466 16.8327 14.9866 13.1927 17.44C12.6593 17.8 12.1793 17.9866 11.7527 17.9733C11.2727 17.96 10.366 17.7066 9.68602 17.48C8.84601 17.2133 8.19268 17.0666 8.24602 16.6C8.27268 16.36 8.60602 16.12 9.23268 15.8666C13.126 14.1733 15.7127 13.0533 17.006 12.52C20.7127 10.9733 21.4727 10.7066 21.9793 10.7066C22.086 10.7066 22.3393 10.7333 22.4993 10.8666C22.6327 10.9733 22.6727 11.12 22.686 11.2266C22.6727 11.3066 22.6993 11.5466 22.686 11.7333Z"
                  fill="#F85C3A"
                />
              </svg>
              <span>@clarity_cards_support</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactsLast;
