import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ecoclimatique.netlify.app"),
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
    "@type": "Organization",
    "name": "Ecoclimatic",
    "url": "https://ecoclimatique.netlify.app",
    "logo": "https://ecoclimatique.netlify.app/logo-ecoclimactic.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "06-50-66-86-00",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 RUE DU LANDY",
      "addressLocality": "CLICHY LA GARENNE",
      "postalCode": "92110",
      "addressCountry": "FR"
    }
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
