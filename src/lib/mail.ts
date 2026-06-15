import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    await transporter.sendMail({
      from: `"EventHub" <${process.env.EMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });

    console.log(`Email sent successfully to ${options.to}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

export async function sendOTPEmail(email: string, otp: string) {
  try {
    await transporter.sendMail({
      from: `"EventHub" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Email - EventHub",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2>Welcome to EventHub!</h2>

          <p>You requested email verification for your account.</p>

          <p>Your OTP is:</p>

          <h1 style="color:#2563eb; letter-spacing:5px;">
            ${otp}
          </h1>

          <p>This OTP will expire in 5 minutes.</p>

          <br/>

          <p>Thank you,<br/>
          EventHub Team</p>
        </div>
      `,
    });

    console.log("OTP email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send OTP email");
  }
}