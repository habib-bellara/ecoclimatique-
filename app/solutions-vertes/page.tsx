"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Globe, Phone, ChevronDown, Menu } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const DecorativeBg = () => (
  <>
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
  </>
)

export default function SolutionsVertesPage() {
  const [language, setLanguage] = useState("fr")
  const router = useRouter()
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Climatisation", href: "/climatisation" },
    { name: "Maintenance", href: "/maintenance" },
    { name: "Contrôles", href: "/controles" },
    { name: "Solutions Vertes", href: "/solutions-vertes" },
  ];
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 overflow-clip">
      <DecorativeBg />
      <header className="bg-white/95 backdrop-blur-xl shadow-lg py-4 sticky top-0 z-20">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => router.push("/") }>
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
            {navLinks.map((link) => (
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
                    <span>{language === "en" ? "" : ""}</span>
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
                  <span className="mr-3"></span> English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("fr")}
                  className={`cursor-pointer ${language === "fr" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                >
                  <span className="mr-3"></span> Français
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
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    className="text-lg text-left font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
                                    onClick={() => router.push(link.href)}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-5xl mx-auto bg-white/95 rounded-3xl shadow-2xl p-6 md:p-14 w-full transition-all duration-300 hover:shadow-3xl hover:scale-[1.01]">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 mb-4 text-center drop-shadow-lg">
            Solutions Vertes
          </h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-full mb-8" />
          <p className="mb-6 text-lg text-gray-700 text-center">
            Découvrez nos solutions de refroidissement écologiques : climatisation à faible impact carbone, énergies renouvelables et certifications écologiques. Protégez la planète tout en profitant d'un confort optimal.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-6 justify-center items-center">
            <div className="overflow-hidden rounded-2xl w-full md:w-1/2 group">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEi3QKgS24Gl8vPGAVcQNN3bftjAg-FFOrksKelIWvFouWfzQSoD2WNN5B6Yb9QWe780&usqp=CAU" alt="Solutions Vertes" className="rounded-2xl object-cover w-full h-[28rem] group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><b>Neutre en carbone</b> : réduisez votre empreinte écologique</li>
            <li><b>Énergie renouvelable</b> : intégrez des solutions solaires ou géothermiques</li>
            <li><b>Certification écologique</b> : bénéficiez de labels reconnus</li>
          </ul>
          <div className="text-center mt-8">
            <button type="button" className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M2 12h20M12 2v20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              Demander une solution verte
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-8 md:py-16 relative overflow-hidden px-4">
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
                Leader dans la technologie de refroidissement durable. Nous créons des solutions climatiques qui protègent à la fois votre confort et notre planète.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">Services</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                {["AC Installation", "System Maintenance", "Smart Thermostats", "Energy Consulting", "Emergency Repair"].map((service) => (
                  <li key={service}>
                    <a href="#" className="hover:text-green-400 transition-colors duration-200">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">Entreprise</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                {["About Us", "Our Mission", "Careers", "Press", "Blog"].map((item) => (
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
                  (resource) => (
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
              <p className="text-gray-400 text-center md:text-left text-xs md:text-sm">© 2025 EcoClimatic. Tous droits réservés. | Politique de Confidentialité | Conditions de Service</p>
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