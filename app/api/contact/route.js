import nodemailer from "nodemailer";
export const runtime = "nodejs";

export async function POST(req) {
  const data = await req.json();

  const smtpUser = process.env.SMTP_USER || 'ecoclimatique0@gmail.com'
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD
  const smtpFrom = process.env.SMTP_FROM || smtpUser
  const smtpTo = process.env.SMTP_TO || smtpUser

  if (!smtpUser || !smtpPass) {
    return new Response(JSON.stringify({ success: false, error: 'SMTP credentials not configured' }), { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass
    },
  });

  const mailOptions = {
    from: smtpFrom,
    to: smtpTo,
    subject: "Nouveau message du formulaire de contact",
    text: `\nPrénom: ${data.firstName}\nNom: ${data.lastName}\nEmail: ${data.email}\nTéléphone: ${data.phone}\nAdresse: ${data.address}\nMessage: ${data.message}\n`
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
} 