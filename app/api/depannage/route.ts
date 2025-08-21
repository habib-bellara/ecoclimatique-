import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { name, address, phone, email, issueType, issueDescription } = await req.json();

  if (!name || !address || !phone || !email || !issueType || !issueDescription) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER || 'ecoclimatique0@gmail.com'
  const gmailAppPass = process.env.GMAIL_APP_PASSWORD
  const smtpPassEnv = process.env.SMTP_PASS
  const smtpPass = gmailAppPass || smtpPassEnv
  const smtpFrom = process.env.SMTP_FROM || smtpUser
  const smtpTo = process.env.SMTP_TO || smtpUser

  if (!smtpUser || !smtpPass) {
    return NextResponse.json({ success: false, error: `SMTP credentials not configured (SMTP_USER=${Boolean(smtpUser)}, SMTP_PASS=${Boolean(smtpPassEnv)}, GMAIL_APP_PASSWORD=${Boolean(gmailAppPass)})` }, { status: 500 })
  }

  // Try secure SMTPS (465) first, then fallback to STARTTLS (587)
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.verify();
  } catch (e: any) {
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: { user: smtpUser, pass: smtpPass },
    });
    try {
      await transporter.verify();
    } catch (e2: any) {
      return NextResponse.json({ success: false, error: `SMTP connection failed: ${e2?.message || String(e2)}` }, { status: 500 })
    }
  }

  const mailOptions = {
    from: smtpFrom,
    to: smtpTo,
    subject: "Nouvelle Demande de Dépannage Urgent",
    html: `
      <h1>Nouvelle Demande de Dépannage</h1>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Adresse:</strong> ${address}</p>
      <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr>
      <h2>Détails du Problème</h2>
      <p><strong>Type de problème:</strong> ${issueType}</p>
      <p><strong>Description:</strong></p>
      <p>${issueDescription.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error: any) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json({ error: `Erreur lors de l'envoi de l'email: ${error?.message || String(error)}` }, { status: 500 });
  }
} 