import { NextRequest, NextResponse } from "next/server";
import { getTransporter } from "@/lib/mailer";
import { emailTemplate } from "@/lib/emailTemplate";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = getTransporter();
  const businessEmail = process.env.SMTP_USER!;

  try {
    // Confirmation to client
    await transporter.sendMail({
      from: `"Di-Max Transportation" <${businessEmail}>`,
      to: email,
      subject: "We received your message — Di-Max Transportation",
      html: emailTemplate("Message Received!", `
        <p style="color:#0A1F44;font-size:16px;">Hi <strong>${name}</strong>,</p>
        <p style="color:#475569;line-height:1.6;">Thank you for reaching out! We've received your message and will get back to you within <strong>24 hours</strong>.</p>
        <div style="background:#f0f9ff;border-radius:8px;padding:20px;margin:20px 0;border-left:4px solid #127CE0;">
          <p style="margin:8px 0;color:#0A1F44;"><strong>📋 Subject:</strong> ${subject}</p>
          <p style="margin:8px 0;color:#0A1F44;"><strong>💬 Message:</strong> ${message}</p>
        </div>
        <p style="color:#475569;line-height:1.6;">Thank you for choosing Di-Max Transportation!</p>
      `),
    });

    // Notification to business
    await transporter.sendMail({
      from: `"Di-Max Website" <${businessEmail}>`,
      to: businessEmail,
      subject: `💬 New Contact Message — ${name} | ${subject}`,
      html: emailTemplate("New Contact Message", `
        <div style="background:#f0f9ff;border-radius:8px;padding:20px;border-left:4px solid #127CE0;">
          <p style="margin:8px 0;"><strong>👤 Name:</strong> ${name}</p>
          <p style="margin:8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color:#127CE0;">${email}</a></p>
          <p style="margin:8px 0;"><strong>📋 Subject:</strong> ${subject}</p>
          <p style="margin:8px 0;"><strong>💬 Message:</strong> ${message}</p>
        </div>
        <p style="margin-top:16px;color:#475569;">Reply directly to <a href="mailto:${email}" style="color:#127CE0;">${email}</a></p>
      `),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
