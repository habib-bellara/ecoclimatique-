import nodemailer from "nodemailer";

console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD);
console.log("TEST_VAR:", process.env.TEST_VAR);

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ecoclimatique0@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: "ecoclimatique0@gmail.com",
    to: "ecoclimatique0@gmail.com",
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