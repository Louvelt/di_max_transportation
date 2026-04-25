import { NextRequest, NextResponse } from "next/server";
import { getTransporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, service, pickup, dropoff, moveDate, message } = await req.json();

  if (!name || !email || !phone || !service || !pickup || !dropoff || !moveDate) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const formattedDate = new Date(moveDate).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const transporter = getTransporter();
  const businessEmail = process.env.SMTP_USER!;

  try {
    // Confirmation email to client
    await transporter.sendMail({
      from: `"Di-Max Transportation" <${businessEmail}>`,
      to: email,
      subject: "Quote Request Received — Di-Max Transportation",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f0f9ff;border-radius:12px;">
          <div style="background:#127CE0;padding:24px;border-radius:8px;text-align:center;margin-bottom:24px;">
            <h1 style="color:white;margin:0;font-size:24px;">Quote Request Received!</h1>
          </div>
          <p style="color:#0A1F44;font-size:16px;">Hi <strong>${name}</strong>,</p>
          <p style="color:#475569;">We've received your quote request and will get back to you within 2 hours with a competitive estimate.</p>
          <div style="background:white;border-radius:8px;padding:20px;margin:20px 0;border-left:4px solid #127CE0;">
            <p style="margin:8px 0;color:#0A1F44;"><strong>🚛 Service:</strong> ${service}</p>
            <p style="margin:8px 0;color:#0A1F44;"><strong>📍 Pickup:</strong> ${pickup}</p>
            <p style="margin:8px 0;color:#0A1F44;"><strong>📍 Drop-off:</strong> ${dropoff}</p>
            <p style="margin:8px 0;color:#0A1F44;"><strong>📅 Move Date:</strong> ${formattedDate}</p>
            ${message ? `<p style="margin:8px 0;color:#0A1F44;"><strong>📝 Details:</strong> ${message}</p>` : ""}
          </div>
          <p style="color:#475569;">Questions? Reach us at <a href="mailto:info@dimaxtransportation.com" style="color:#127CE0;">info@dimaxtransportation.com</a> or call <strong>+1 (774) 625-3852</strong>.</p>
          <p style="color:#475569;margin-top:24px;">Thank you for choosing Di-Max Transportation!</p>
        </div>
      `,
    });

    // Notification email to business
    await transporter.sendMail({
      from: `"Di-Max Website" <${businessEmail}>`,
      to: businessEmail,
      subject: `New Quote Request — ${name} | ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <h2 style="color:#0A1F44;">New Quote Request</h2>
          <div style="background:#f0f9ff;border-radius:8px;padding:20px;border-left:4px solid #127CE0;">
            <p style="margin:8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin:8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin:8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin:8px 0;"><strong>Service:</strong> ${service}</p>
            <p style="margin:8px 0;"><strong>Pickup:</strong> ${pickup}</p>
            <p style="margin:8px 0;"><strong>Drop-off:</strong> ${dropoff}</p>
            <p style="margin:8px 0;"><strong>Move Date:</strong> ${formattedDate}</p>
            ${message ? `<p style="margin:8px 0;"><strong>Details:</strong> ${message}</p>` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote email error:", error);
    return NextResponse.json({ error: "Failed to send confirmation" }, { status: 500 });
  }
}
