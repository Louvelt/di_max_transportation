const SITE_URL = "https://dimaxtransportation.com";
const LOGO_URL = `${SITE_URL}/logo.png`;
const PHONE = "+1 (774) 625-3852";
const EMAIL = "info@dimaxtransportation.com";

export function emailTemplate(title: string, body: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f0f9ff;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f9ff;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Logo header -->
          <tr>
            <td style="background:#0A1F44;padding:24px 32px;text-align:center;">
              <img src="${LOGO_URL}" alt="Di-Max Transportation" height="48" style="height:48px;width:auto;display:inline-block;" />
            </td>
          </tr>

          <!-- Title banner (CSS only, no image) -->
          <tr>
            <td style="background:linear-gradient(135deg,#127CE0 0%,#0A1F44 100%);padding:36px 32px;text-align:center;">
              <h1 style="color:white;margin:0;font-size:26px;font-weight:bold;letter-spacing:0.5px;">${title}</h1>
              <p style="color:#C2F8CB;margin:8px 0 0;font-size:14px;">Di-Max Transportation — Massachusetts, USA</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${body}
            </td>
          </tr>

          <!-- Contact bar -->
          <tr>
            <td style="background:#127CE0;padding:20px 32px;text-align:center;">
              <p style="margin:0;color:white;font-size:14px;">
                📞 <strong>${PHONE}</strong>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="mailto:${EMAIL}" style="color:#C2F8CB;text-decoration:none;">✉️ ${EMAIL}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0A1F44;padding:16px 32px;text-align:center;">
              <p style="color:#7dd3fc;font-size:12px;margin:0;">
                © ${new Date().getFullYear()} Di-Max Transportation. All rights reserved.
                &nbsp;|&nbsp;
                <a href="${SITE_URL}/privacy" style="color:#7dd3fc;text-decoration:none;">Privacy Policy</a>
                &nbsp;|&nbsp;
                <a href="${SITE_URL}/terms" style="color:#7dd3fc;text-decoration:none;">Terms of Service</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
