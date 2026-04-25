import { NextRequest, NextResponse } from "next/server";
import { getTransporter } from "@/lib/mailer";
import { emailTemplate } from "@/lib/emailTemplate";

export async function POST(req: NextRequest) {
  const { name, email, phone, date, time, notes } = await req.json();

  if (!name || !email || !phone || !date || !time) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const transporter = getTransporter();
  const businessEmail = process.env.SMTP_USER!;

  try {
    // Confirmation to client
    await transporter.sendMail({
      from: `"Di-Max Transportation" <${businessEmail}>`,
      to: email,
      subject: "Appointment Confirmed — Di-Max Transportation",
      html: emailTemplate("Appointment Confirmed!", `
        <p style="color:#0A1F44;font-size:16px;">Hi <strong>${name}</strong>,</p>
        <p style="color:#475569;line-height:1.6;">Your appointment with Di-Max Transportation has been confirmed. Here are your details:</p>
        <div style="background:#f0f9ff;border-radius:8px;padding:20px;margin:20px 0;border-left:4px solid #127CE0;">
          <p style="margin:8px 0;color:#0A1F44;"><strong>📅 Date:</strong> ${formattedDate}</p>
          <p style="margin:8px 0;color:#0A1F44;"><strong>🕐 Time:</strong> ${time}</p>
          <p style="margin:8px 0;color:#0A1F44;"><strong>📞 Phone:</strong> ${phone}</p>
          ${notes ? `<p style="margin:8px 0;color:#0A1F44;"><strong>📝 Notes:</strong> ${notes}</p>` : ""}
        </div>
        <p style="color:#475569;line-height:1.6;">Our team will reach out to confirm closer to your appointment date. Need to reschedule? Contact us anytime.</p>
        <p style="color:#475569;line-height:1.6;">Thank you for choosing Di-Max Transportation!</p>
      `),
    });

    // Notification to business
    await transporter.sendMail({
      from: `"Di-Max Website" <${businessEmail}>`,
      to: businessEmail,
      subject: `📅 New Appointment — ${name} | ${formattedDate} at ${time}`,
      html: emailTemplate("New Appointment Booking", `
        <div style="background:#f0f9ff;border-radius:8px;padding:20px;border-left:4px solid #127CE0;">
          <p style="margin:8px 0;"><strong>👤 Name:</strong> ${name}</p>
          <p style="margin:8px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color:#127CE0;">${email}</a></p>
          <p style="margin:8px 0;"><strong>📞 Phone:</strong> ${phone}</p>
          <p style="margin:8px 0;"><strong>📅 Date:</strong> ${formattedDate}</p>
          <p style="margin:8px 0;"><strong>🕐 Time:</strong> ${time}</p>
          ${notes ? `<p style="margin:8px 0;"><strong>📝 Notes:</strong> ${notes}</p>` : ""}
        </div>
        <p style="margin-top:16px;color:#475569;">Reply directly to <a href="mailto:${email}" style="color:#127CE0;">${email}</a></p>
      `),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment email error:", error);
    return NextResponse.json({ error: "Failed to send confirmation" }, { status: 500 });
  }
}
