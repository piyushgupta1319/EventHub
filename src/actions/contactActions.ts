"use server";

import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/mail";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    // Save to database
    const contact = await prisma.feedback.create({
      data: {
        name: formData.name,
        email: formData.email,
        message: `Subject: ${formData.subject}\n\n${formData.message}`,
      },
    });

    // Send email notification to admin
    await sendEmail({
      to: "guptapiyush6336@gmail.com",
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
        <hr />
        <p><small>Received at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    // Send confirmation email to user
    await sendEmail({
      to: formData.email,
      subject: "We received your message - EventHub",
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Hi ${formData.name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Message Details:</strong></p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
        <hr />
        <p>Best regards,<br>EventHub Team</p>
      `,
    });

    return {
      success: true,
      message: "Thank you for reaching out! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Failed to submit form. Please try again later.",
    };
  }
}
