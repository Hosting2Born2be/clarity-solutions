import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      companyName,
      contactName,
      companyWebsite,
      contactPhoneNumber,
      countryOfIncorporation,
      countryOfBankAccount,
      emailAddress,
      affiliatedWebsites,
      monthlyPaymentVolume,
      sourceOfFunds,
      anticipatedPaymentCountries,
      additionalComments
    } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "serg.web@acceptance.ltd", // Your Gmail email
        pass: "JN69Gb85rt", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false // This bypasses the certificate validation
      }
    });

    // Set up email data
    const mailOptions = {
      from: '"Clarity Solutions" <serg.web@acceptance.ltd>', // Sender address
      to: "serg.web@acceptance.ltd", // Change to your recipient's email
      subject: "Business Form Submission",
      text: `Company name: ${companyName}\nContact name: ${contactName}\nEmail: ${emailAddress}\nCompany Website: ${companyWebsite}\nContact Phone Number: ${contactPhoneNumber}\nCountry of Incorporation: ${countryOfIncorporation}\nCountry of Bank Account: ${countryOfBankAccount}\nAffiliated Website: ${affiliatedWebsites}\nMonthly Payment Volume: ${monthlyPaymentVolume}\nSource of Funds: ${sourceOfFunds}\nAnticipated Payment Countries: ${anticipatedPaymentCountries}\nAdditional Comments: ${additionalComments}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
