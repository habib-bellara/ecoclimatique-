"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown, Phone } from "lucide-react"

// Copie l'objet translations depuis app/page.tsx (anglais + français)
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      ourWork: "Our Work",
      benefits: "Benefits",
      contact: "Contact",
      getQuote: "Get Quote",
    },
    footer: {
      description: "Leading the way in sustainable cooling technology. We create climate solutions that protect both your comfort and our planet.",
      services: "Services",
      company: "Company",
      resources: "Resources",
      copyright: "© 2024 EcoClimatic. All rights reserved. | Privacy Policy | Terms of Service",
      certification: "EPA Certified Partner",
      partner: "ENERGY STAR Approved",
    },
    solutions: {
      title: "Our EcoClimatic Solutions",
      intro: "Discover our innovative solutions for sustainable, economical, and eco-friendly comfort.",
      items: [
        { icon: "🌱", title: "Air-to-Air Heat Pumps", desc: "Efficient heating and cooling, low energy consumption." },
        { icon: "💧", title: "Reversible Air Conditioning", desc: "Year-round comfort, warm in winter, cool in summer, energy savings." },
        { icon: "🔋", title: "Hybrid Solar Solutions", desc: "Combine solar energy and air conditioning for an even greener home." },
        { icon: "🏠", title: "Smart Insulation & Ventilation", desc: "Optimize comfort and air quality while reducing your bills." },
      ],
      cta: "Request a personalized quote"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      ourWork: "Nos Réalisations",
      benefits: "Avantages",
      contact: "Contact",
      getQuote: "Obtenir un Devis",
    },
    footer: {
      description: "Leader dans la technologie de refroidissement durable. Nous créons des solutions climatiques qui protègent à la fois votre confort et notre planète.",
      services: "Services",
      company: "Entreprise",
      resources: "Ressources",
      copyright: "© 2024 EcoClimatic. Tous droits réservés. | Politique de Confidentialité | Conditions de Service",
      certification: "Partenaire Certifié EPA",
      partner: "Approuvé ENERGY STAR",
    },
    solutions: {
      title: "Nos Solutions Écoclimatiques",
      intro: "Découvrez nos solutions innovantes pour un confort durable, économique et respectueux de l'environnement.",
      items: [
        { icon: "🌱", title: "Pompes à chaleur air/air", desc: "Chauffage et climatisation efficaces, faible consommation d'énergie." },
        { icon: "💧", title: "Systèmes de climatisation réversible", desc: "Confort toute l'année, chaud l'hiver, frais l'été, tout en économisant l'énergie." },
        { icon: "🔋", title: "Solutions solaires hybrides", desc: "Associez énergie solaire et climatisation pour une maison encore plus verte." },
        { icon: "🏠", title: "Isolation & ventilation intelligente", desc: "Optimisez le confort et la qualité de l'air tout en réduisant vos factures." },
      ],
      cta: "Demander un devis personnalisé"
    }
  }
}

export default function SolutionsPage() {
  const [language, setLanguage] = useState<"en" | "fr">("fr")
  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]
    for (const k of keys) value = value?.[k]
    return value || key
  }

  return (
    <div>
      {/* Contenu spécifique aux solutions */}
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">{t("solutions.title")}</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">{t("solutions.intro")}</p>
          <ul className="space-y-6">
            {translations[language].solutions.items.map((item, idx) => (
              <li key={idx} className={`p-6 rounded-xl shadow flex flex-col md:flex-row md:items-center gap-4 ${["bg-green-100","bg-blue-100","bg-teal-100","bg-yellow-100"][idx]}`}>
                <img
                  src={`/images/img${idx + 1}.jpg`}
                  alt={item.title}
                  className="w-32 h-24 object-cover rounded-lg shadow-md mb-2 md:mb-0"
                />
                <span className={`text-2xl font-semibold ${["text-green-800","text-blue-800","text-teal-800","text-yellow-800"][idx]}`}>{item.icon} {item.title}</span>
                <span className="text-gray-600">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer identique */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/logo-ecoclimactic.jpg"
                  alt="EcoClimatic Logo"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-green-400"
                />
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                    EcoClimatic
                  </h3>
                  <p className="text-sm text-gray-400">Sustainable Cooling Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">{t("footer.description")}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">{t("footer.services")}</h4>
              <ul className="space-y-3 text-gray-300">
                <li>AC Installation</li>
                <li>System Maintenance</li>
                <li>Smart Thermostats</li>
                <li>Energy Consulting</li>
                <li>Emergency Repair</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">{t("footer.company")}</h4>
              <ul className="space-y-3 text-gray-300">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">{t("footer.resources")}</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Energy Calculator</li>
                <li>Maintenance Tips</li>
                <li>Warranty Info</li>
                <li>Support Center</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">{t("footer.copyright")}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {t("footer.certification")}
                </span>
                <span>|</span>
                <span>{t("footer.partner")}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}