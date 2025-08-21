import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface InstallationRequestBody {
  propertyType: string;
  surfaceArea: string;
  roomCount: string;
  installationType: string[];
  currentSystem: string;
  comments: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export async function POST(req: Request) {
  try {
    const data: InstallationRequestBody = await req.json();

    const smtpUser = process.env.SMTP_USER || 'ecoclimatique0@gmail.com'
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD
    const smtpFrom = process.env.SMTP_FROM || smtpUser
    const smtpTo = process.env.SMTP_TO || smtpUser

    if (!smtpUser || !smtpPass) {
      return NextResponse.json({ success: false, error: 'SMTP credentials not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpFrom,
      to: smtpTo,
      subject: 'Nouvelle demande de devis d\'installation',
      html: `
        <h1>Nouvelle demande de devis d'installation</h1>
        <h2>Coordonnées du client :</h2>
        <ul>
          <li><strong>Prénom :</strong> ${data.firstName}</li>
          <li><strong>Nom :</strong> ${data.lastName}</li>
          <li><strong>Email :</strong> ${data.email}</li>
          <li><strong>Téléphone :</strong> ${data.phone}</li>
          <li><strong>Adresse :</strong> ${data.address}</li>
        </ul>
        <h2>Informations sur la propriété :</h2>
        <ul>
          <li><strong>Type de propriété :</strong> ${data.propertyType}</li>
          <li><strong>Superficie (m²) :</strong> ${data.surfaceArea}</li>
          <li><strong>Nombre de pièces à équiper :</strong> ${data.roomCount}</li>
        </ul>
        <h2>Détails de l'installation :</h2>
        <ul>
          <li><strong>Type d'installation souhaité :</strong> ${data.installationType}</li>
          <li><strong>Système actuel :</strong> ${data.currentSystem}</li>
        </ul>
        <h2>Commentaires :</h2>
        <p>${data.comments}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    if (error instanceof Error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 500 });
  }
} 