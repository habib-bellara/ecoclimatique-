import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ecoclimatic.fr"),
  title: "Ecoclimatic - Climatisation Écologique, Installation & Maintenance",
  description:
    "Ecoclimatic est votre spécialiste en climatisation écologique, pompes à chaleur, et solutions de chauffage durable. Services d'installation, maintenance et dépannage.",
  generator: "v0.dev",
  keywords: [
    "climatisation écologique",
    "pompe à chaleur",
    "installation climatisation",
    "maintenance climatisation",
    "chauffage durable",
    "Ecoclimatic",
    "rénovation énergétique",
  ],
  openGraph: {
    title: "Ecoclimatic - Climatisation Écologique, Installation & Maintenance",
    description: "Ecoclimatic est votre spécialiste en climatisation écologique, pompes à chaleur, et solutions de chauffage durable.",
    url: "https://ecoclimatic.fr",
    siteName: "Ecoclimatic",
    images: [
      {
        url: "https://ecoclimatic.fr/logo-ecoclimactic.jpg",
        width: 800,
        height: 600,
        alt: "Logo Ecoclimatic"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@ecoclimatic",
    title: "Ecoclimatic - Climatisation Écologique, Installation & Maintenance",
    description: "Ecoclimatic est votre spécialiste en climatisation écologique, pompes à chaleur, et solutions de chauffage durable.",
    images: ["https://ecoclimatic.fr/logo-ecoclimactic.jpg"]
  },
  alternates: {
    canonical: "https://ecoclimatic.fr/"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicodn.ico/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon.png" }
    ]
  }
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Ecoclimatic",
    "url": "https://ecoclimatic.fr",
    "logo": "https://ecoclimatic.fr/logo-ecoclimactic.jpg",
    "telephone": "06-50-66-86-00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 RUE DU LANDY",
      "addressLocality": "CLICHY LA GARENNE",
      "postalCode": "92110",
      "addressCountry": "FR"
    },
    "description": "Spécialiste en climatisation écologique, installation, maintenance et dépannage."
  }

  return (
    <html lang="fr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
