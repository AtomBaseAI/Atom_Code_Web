"use server"

import { Resend } from "resend"

export async function sendEmail(formData) {
  try {
    const resend = new Resend('re_XQXshkCY_A2mox1SHLqJJNkznGS83rMf1')

    const email = formData.get("email") 
    const message = formData.get("message") 

    if (!email || !message) {
      return { error: "All fields are required" }
    }



    const data = await resend.emails.send({
      from: "Atom Code Web <onboarding@resend.dev>",
      to: 'support@atomcode.dev',
      subject: "New Contact Form Submission",
      text: `
        Email: ${email}
        Message: ${message}
      `,
    })

    return { success: "Email sent successfully" }
  } catch (error) {
    return { error: error.message ?? "Failed to send email" }
  }
}

