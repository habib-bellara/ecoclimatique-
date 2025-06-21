"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Globe, Phone, ChevronDown, Menu, Leaf, Zap, Shield, Wrench } from "lucide-react"

const DecorativeBg = () => (
  <>
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
  </>
)

export default function SolutionsPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const router = useRouter()

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Climatisation", href: "/climatisation" },
    { name: "Maintenance", href: "/maintenance" },
    { name: "Solutions", href: "/solutions" },
  ]

  const translations = {
    fr: {
      title: "EcoClimatic : L'Avenir de la Climatisation Durable",
      subtitle: "Votre partenaire de confiance pour des solutions de climatisation écologiques, performantes et économiques.",
      missionTitle: "Notre Mission : Confort, Économie et Écologie",
      missionText: "Chez EcoClimatic, nous sommes convaincus qu'il est possible de concilier confort thermique et respect de l'environnement. Notre mission est de fournir des systèmes de climatisation innovants qui non seulement améliorent votre quotidien, mais contribuent également à la préservation de notre planète. Nous nous engageons à offrir des solutions durables qui réduisent votre empreinte carbone et allègent vos factures d'énergie.",
      expertiseTitle: "Notre Expertise à Votre Service",
      expertiseText: "Forts de plus de 15 ans d'expérience, nos techniciens certifiés sont des experts en matière de climatisation réversible, de pompes à chaleur et de systèmes de ventilation. Nous maîtrisons les dernières technologies pour vous garantir une installation impeccable, une maintenance préventive rigoureuse et des dépannages rapides et efficaces.",
      cta: "Découvrez nos solutions d'installation",
      ctaMaintenance: "Planifiez votre maintenance",
    },
    en: {
      title: "EcoClimatic: The Future of Sustainable Air Conditioning",
      subtitle: "Your trusted partner for ecological, efficient, and economical air conditioning solutions.",
      missionTitle: "Our Mission: Comfort, Savings, and Ecology",
      missionText: "At EcoClimatic, we believe it's possible to reconcile thermal comfort with respect for the environment. Our mission is to provide innovative air conditioning systems that not only improve your daily life but also contribute to the preservation of our planet. We are committed to offering sustainable solutions that reduce your carbon footprint and lower your energy bills.",
      expertiseTitle: "Our Expertise at Your Service",
      expertiseText: "With over 15 years of experience, our certified technicians are experts in reversible air conditioning, heat pumps, and ventilation systems. We master the latest technologies to ensure a flawless installation, rigorous preventive maintenance, and fast, effective repairs.",
      cta: "Discover our installation solutions",
      ctaMaintenance: "Schedule your maintenance",
    },
  }

  const t = (key: keyof typeof translations.fr) => {
    return translations[language][key]
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 overflow-clip">
      <DecorativeBg />
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl shadow-lg py-4 sticky top-0 z-20">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => router.push("/")}>
            <div className="relative">
              <img
                src="/logo-ecoclimactic.jpg"
                alt="EcoClimatic Logo"
                className="h-12 w-12 rounded-full object-cover shadow-md ring-1 ring-green-200 group-hover:ring-green-400 transition-all duration-300"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EcoClimatic</h1>
              <p className="text-xs text-gray-600">Sustainable Cooling Solutions</p>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-4">
            {navLinks.map(link => (
              <button
                key={link.name}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group py-2 px-2"
                onClick={() => router.push(link.href)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 w-0 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600 hover:bg-green-50"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden md:inline flex items-center gap-1">
                    {language === "en" ? "English" : "Français"}
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer ${language === "en" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("fr")}
                  className={`cursor-pointer ${language === "fr" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                >
                  Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-gray-600 hover:text-green-600 hover:bg-green-50"
            >
              <Phone className="h-4 w-4 mr-2" />
              +33 7 84 78 99 10
            </Button>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Ouvrir le menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="pt-8">
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map(link => (
                        <button
                          key={link.name}
                          className="text-lg text-left font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
                          onClick={() => router.push(link.href)}
                        >
                          {link.name}
                        </button>
                      ))}
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => window.open("tel:+33784789910", "_self")}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Appeler
                      </Button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-700 mb-10">{t("subtitle")}</p>
          </div>

          <div className="space-y-12">
            <div className="p-8 bg-green-50 rounded-2xl shadow-inner">
              <h2 className="text-3xl font-bold text-green-800 mb-4 flex items-center"><Leaf className="mr-3" /> {t("missionTitle")}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t("missionText")}</p>
            </div>

            <div className="p-8 bg-blue-50 rounded-2xl shadow-inner">
              <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center"><Shield className="mr-3" /> {t("expertiseTitle")}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t("expertiseText")}</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => router.push('/climatisation')}>
              <Zap className="mr-2 h-5 w-5" /> {t("cta")}
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700" onClick={() => router.push('/maintenance')}>
              <Wrench className="mr-2 h-5 w-5" /> {t("ctaMaintenance")}
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-16 relative overflow-hidden px-4 z-10">
        <div className="container mx-auto px-0 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
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
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-sm">
                Leader dans la technologie de refroidissement durable. Nous créons des solutions climatiques qui
                protègent à la fois votre confort et notre planète.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">Services</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                {["AC Installation", "System Maintenance", "Smart Thermostats", "Energy Consulting", "Emergency Repair"].map(
                  service => (
                    <li key={service}>
                      <a href="#" className="hover:text-green-400 transition-colors duration-200">
                        {service}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">Entreprise</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                {["About Us", "Our Mission", "Careers", "Press", "Blog"].map(item => (
                  <li key={item}>
                    <a href="#" className="hover:text-green-400 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">Ressources</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                {["Energy Calculator", "Maintenance Tips", "Warranty Info", "Support Center", "Contact Us"].map(
                  resource => (
                    <li key={resource}>
                      <a href="#" className="hover:text-green-400 transition-colors duration-200">
                        {resource}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left text-xs md:text-sm">
                © 2025 EcoClimatic. Tous droits réservés. | Politique de Confidentialité | Conditions de Service
              </p>
              <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Partenaire Certifié EPA
                </span>
                <span>|</span>
                <span>Approuvé ENERGY STAR</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}