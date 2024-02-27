import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      firstName,
      lastName,
      emailAddress,
      residentialCountry,
      sanCard,
      yourInquiry,
    } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "serg.web@acceptance.ltd", // Your Gmail email
        pass: "JN69Gb85rt", // Your Gmail password or app password
      },
    });

    // Set up email data
    const mailOptions = {
      from: '"Clarity Solutions" <serg.web@acceptance.ltd>', // Sender address
      to: "andruschenko033@gmail.com", // Change to your recipient's email
      subject: "New Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${emailAddress}\nResidentialCountry: ${residentialCountry}\nSAN or Card Number: ${sanCard}\nYour Inquiry: ${yourInquiry}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
