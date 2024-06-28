"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });


const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  sanCard: Yup.string().required("This field is required"),
});

function ConnectForm() {
    const [resultMessage, setResultMessage] = useState("");


  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        sanCard: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          // Make a POST request to your serverless function
          const response = await fetch("/api/connect", {
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
              className={errors.firstName && touched.firstName ? "error" : ""}
            />
            {errors.firstName && touched.firstName ? (
              <div className="error-label">{errors.firstName}</div>
            ) : null}
          </div>
          <div className="input-wrap">
            <Field
              name="lastName"
              placeholder="Last Name"
              className={errors.lastName && touched.lastName ? "error" : ""}
            />
            {errors.lastName && touched.lastName ? (
              <div className="error-label">{errors.lastName}</div>
            ) : null}
          </div>


          <div className="input-wrap full">
            <Field
              name="sanCard"
              placeholder="SAN or Card Number "
              className={errors.sanCard && touched.sanCard ? "error" : ""}
            />
            {errors.sanCard && touched.sanCard ? (
              <div className="error-label">{errors.sanCard}</div>
            ) : null}
          </div>

          <button type="submit" className="orange-button">
            Send Message
          </button>

          {resultMessage === "success" ? (
            <div className="input-wrap full">
              <div className="message success">
                Thank you for choosing Clarity Solutions! Our representative
                will reach you out to you shortly.
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
  );
}

export default ConnectForm;
