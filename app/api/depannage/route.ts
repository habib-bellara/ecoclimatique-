import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, address, phone, email, issueType, issueDescription } = await req.json();

  if (!name || !address || !phone || !email || !issueType || !issueDescription) {
    return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'ecoclimatique0@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: 'ecoclimatique0@gmail.com',
    to: 'ecoclimatique0@gmail.com',
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
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 });
  }
} 