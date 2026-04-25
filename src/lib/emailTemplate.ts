const SITE_URL = "https://dimaxtransportation.com";
const LOGO_URL = `${SITE_URL}/logo.png`;
const BANNER_URL = `${SITE_URL}/banner_web.webp`;
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
            <td style="background:#0A1F44;padding:20px 32px;text-align:center;">
              <img src="${LOGO_URL}" alt="Di-Max Transportation" height="48" style="height:48px;width:auto;display:inline-block;" />
            </td>
          </tr>

          <!-- Banner -->
          <tr>
            <td style="padding:0;position:relative;">
              <img src="${BANNER_URL}" alt="Di-Max Transportation" width="600" style="width:100%;max-width:600px;display:block;height:180px;object-fit:cover;" />
              <div style="position:absolute;inset:0;background:rgba(10,31,68,0.55);display:flex;align-items:center;justify-content:center;">
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" style="position:absolute;top:0;left:0;height:100%;">
                <tr>
                  <td align="center" valign="middle">
                    <div style="background:rgba(18,124,224,0.85);display:inline-block;padding:12px 28px;border-radius:8px;">
                      <span style="color:white;font-size:22px;font-weight:bold;letter-spacing:1px;">${title}</span>
                    </div>
                  </td>
                </tr>
              </table>
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
            <td style="background:#127CE0;padding:20px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <span style="color:white;font-size:14px;font-weight:bold;">📞 ${PHONE}</span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="mailto:${EMAIL}" style="color:#C2F8CB;font-size:14px;text-decoration:none;">✉️ ${EMAIL}</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span style="color:white;font-size:14px;">🌐 Massachusetts, USA</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0A1F44;padding:16px 32px;text-align:center;">
              <p style="color:#7dd3fc;font-size:12px;margin:0;">
                © ${new Date().getFullYear()} Di-Max Transportation. All rights reserved.
                &nbsp;|&nbsp;
                <a href="${SITE_URL}/privacy" style="color:#7dd3fc;">Privacy Policy</a>
                &nbsp;|&nbsp;
                <a href="${SITE_URL}/terms" style="color:#7dd3fc;">Terms of Service</a>
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
