"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

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
                complete <br/>the fields below, and our team will promptly contact
                you!
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
              onSubmit={(values) => {
                // Here you would handle form submission, e.g., sending data to a server
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ errors, touched }) => (
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
                      <div>{errors.firstName}</div>
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
                      <div>{errors.lastName}</div>
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
                      <div>{errors.emailAddress}</div>
                    ) : null}
                  </div>
                  <div className="input-wrap">
                    <Field
                      name="residentialCountry"
                      placeholder="Residential Country"
                      className={
                        errors.residentialCountry && touched.residentialCountry
                          ? "error"
                          : ""
                      }
                    />
                    {errors.residentialCountry && touched.residentialCountry ? (
                      <div>{errors.residentialCountry}</div>
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
                      <div>{errors.sanCard}</div>
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactsLast;