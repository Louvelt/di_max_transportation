import { NextRequest, NextResponse } from "next/server";
import { getTransporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, date, time, notes } = await req.json();

  if (!name || !email || !phone || !date || !time) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  try {
    const transporter = getTransporter();
    const businessEmail = process.env.SMTP_USER!;

    await transporter.sendMail({
      from: `"Di-Max Transportation" <${businessEmail}>`,
      to: email,
      subject: "Appointment Confirmed — Di-Max Transportation",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f0f9ff;">
          <div style="background:#127CE0;padding:24px;border-radius:8px;text-align:center;margin-bottom:24px;">
            <h1 style="color:white;margin:0;font-size:24px;">Appointment Confirmed!</h1>
          </div>
          <p style="color:#0A1F44;font-size:16px;">Hi <strong>${name}</strong>,</p>
          <p style="color:#475569;">Your appointment with Di-Max Transportation has been confirmed.</p>
          <div style="background:white;border-radius:8px;padding:20px;margin:20px 0;border-left:4px solid #127CE0;">
            <p style="margin:8px 0;color:#0A1F44;"><strong>📅 Date:</strong> ${formattedDate}</p>
            <p style="margin:8px 0;color:#0A1F44;"><strong>🕐 Time:</strong> ${time}</p>
            <p style="margin:8px 0;color:#0A1F44;"><strong>📞 Phone:</strong> ${phone}</p>
            ${notes ? `<p style="margin:8px 0;color:#0A1F44;"><strong>📝 Notes:</strong> ${notes}</p>` : ""}
          </div>
          <p style="color:#475569;">Need to reschedule? Call <strong>+1 (774) 625-3852</strong> or email <a href="mailto:info@dimaxtransportation.com" style="color:#127CE0;">info@dimaxtransportation.com</a></p>
          <p style="color:#475569;">Thank you for choosing Di-Max Transportation!</p>
          <div style="background:#0A1F44;padding:16px;border-radius:8px;text-align:center;margin-top:24px;">
            <p style="color:#7dd3fc;font-size:12px;margin:0;">© ${new Date().getFullYear()} Di-Max Transportation — Massachusetts, USA</p>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Di-Max Website" <${businessEmail}>`,
      to: businessEmail,
      subject: `New Appointment — ${name} | ${formattedDate} at ${time}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <h2 style="color:#0A1F44;">New Appointment Booking</h2>
          <div style="background:#f0f9ff;border-radius:8px;padding:20px;border-left:4px solid #127CE0;">
            <p style="margin:8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin:8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin:8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin:8px 0;"><strong>Date:</strong> ${formattedDate}</p>
            <p style="margin:8px 0;"><strong>Time:</strong> ${time}</p>
            ${notes ? `<p style="margin:8px 0;"><strong>Notes:</strong> ${notes}</p>` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Appointment email error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
