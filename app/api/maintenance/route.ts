import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface MaintenanceRequestBody {
  systemType: string;
  systemAge: string;
  problemDescription: string;
  lastMaintenance: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export async function POST(req: Request) {
  try {
    const data: MaintenanceRequestBody = await req.json();

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
      subject: 'Nouvelle demande de maintenance',
      html: `
        <h1>Nouvelle demande de maintenance</h1>
        <h2>Coordonnées du client :</h2>
        <ul>
          <li><strong>Prénom :</strong> ${data.firstName}</li>
          <li><strong>Nom :</strong> ${data.lastName}</li>
          <li><strong>Email :</strong> ${data.email}</li>
          <li><strong>Téléphone :</strong> ${data.phone}</li>
          <li><strong>Adresse :</strong> ${data.address}</li>
        </ul>
        <h2>Informations sur le système :</h2>
        <ul>
          <li><strong>Type de système :</strong> ${data.systemType}</li>
          <li><strong>Âge du système (années) :</strong> ${data.systemAge}</li>
          <li><strong>Dernière maintenance :</strong> ${data.lastMaintenance}</li>
        </ul>
        <h2>Description du problème :</h2>
        <p>${data.problemDescription}</p>
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