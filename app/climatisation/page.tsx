"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Globe, Phone, ChevronDown, Menu, Mail, MapPin } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const DecorativeBg = () => (
  <>
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
  </>
)

export default function ClimatisationPage() {
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
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      <DecorativeBg />
      {/* Header */}
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
            Installateur Climatisation dans le Val-d'Oise 95
          </h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-full mb-8" />
          <p className="mb-6 text-lg text-gray-700">
            Installée à Eaubonne près de Cergy Pontoise 95, la société ecoclimatique intervient auprès de particuliers et professionnels de la région Ile-de-France, des Hauts-de-Seine (92) et du Val-d'Oise (95) pour réaliser vos travaux de climatisation, ventilation et extracteurs d'air. Nos installateurs expérimentés maîtrisent l'installation, la pose et la maintenance des systèmes de climatisation. ecoclimatique : le pro de la Clim à Eaubonne et ses alentours
          </p>
          <p className="mb-6 text-gray-700">
            Pour assurer une climatisation efficace et optimale d'une pièce, plusieurs facteurs doivent être pris en compte, tels que le volume de la pièce, son usage, la circulation et le renouvellement de l'air, ainsi que son orientation par rapport au soleil.
          </p>
          <div className="flex items-center gap-3 mb-4 mt-8">
            <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg> Nos produits</span>
            <span className="h-0.5 flex-1 bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 rounded-full" />
          </div>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><b>Climatisation réversible (Mono-split ou Multi-split)</b> : Adaptée à tous types de bâtiments, qu'ils soient neufs ou anciens, ainsi qu'à des espaces professionnels, cette solution intègre une unité extérieure et une ou plusieurs unités intérieures qui peuvent être murales, encastrées au plafond ou sous forme de cassettes.</li>
            <li className="mb-2"><b>Climatisation gainable</b> : Parfaite pour ceux qui recherchent un maximum de confort et de discrétion, la climatisation gainable convient aussi bien aux constructions neuves qu'aux rénovations. Ce système nécessite un espace sous le plafond pour son installation et permet de climatiser discrètement plusieurs pièces à la fois.</li>
          </ul>
          <p className="mb-6 text-gray-700">
            Nous intervenons sur différents systèmes de climatisation pour les particuliers et les professionnels (bureaux, entreprises, entrepôts) : climatiseur réversible, à split, gainable, mural, systèmes de climatiseurs DVR ou VRV, CTA (centrale de traitement d'air)...
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="overflow-hidden rounded-2xl w-full md:w-1/2 group">
              <Image src="/A (1).jpg" alt="Climatisation 1" width={1200} height={448} className="rounded-2xl object-cover w-full h-[28rem] group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-2xl w-full md:w-1/2 group">
              <Image src="/A (2).jpg" alt="Climatisation 2" width={1200} height={448} className="rounded-2xl object-cover w-full h-[28rem] group-hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <p className="mb-6 text-gray-700">
            Contactez-nous pour un devis gratuit personnalisé ! Suite à votre appel, nous procéderons à l'installation de votre climatisation dans le Val-d'Oise (95), dans les Hauts-de-Seine 92 (Asnières-sur-Seine, Colombes...) et Ile-de-France interviendra chez vous (au sein de votre habitation ou dans vos locaux professionnels) pour établir un bilan thermique afin de vous proposer le système de climatisation qui répondra parfaitement à vos besoins.
          </p>
          <p className="mb-6 text-gray-700">
            Ensuite, nous procéderons à l'installation de votre système de climatisation, qu'il soit standard ou réversible et nous fournirons également toutes les explications nécessaires sur le fonctionnement de votre nouvel équipement, adaptées à vos besoins spécifiques.
          </p>
          <div className="flex items-center gap-3 mb-4 mt-8">
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/></svg> Installation et pose de climatisation réversible Val-d'Oise 95</span>
            <span className="h-0.5 flex-1 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 rounded-full" />
          </div>
          <p className="mb-6 text-gray-700">
            Vous envisagez d'installer un système de climatisation dans votre domicile ou vos bureaux ? Vous recherchez une solution de climatisation efficace pour votre magasin ? Ou peut-être souhaitez-vous remplacer votre ancien système par un modèle de climatisation réversible plus moderne ?
          </p>
          <p className="mb-6 text-gray-700">
            En neuf ou en rénovation, dans votre maison ou dans vos bureaux professionnels, chez les particuliers ou les entreprises, nos techniciens interviennent pour rafraîchir votre environnement de vie ou de travail.
          </p>
          <h2 className="text-2xl font-bold text-green-600 mb-4">Les solutions de chauffage et climatisation ecoclimatique c'est :</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Un seul appareil pour assurer le chauffage et la climatisation de votre habitation ou bureau</li>
            <li>Des économies d'énergie tout au long de l'année grâce aux énergies renouvelables présentes dans l'air.</li>
            <li>Un intérieur assaini et déshumidifié</li>
          </ul>
          <p className="mb-6 text-gray-700">
            Demandez un devis à nos techniciens pour vos installations de climatisation et pompe à chaleur. ecoclimatique vous propose l'installation, la pose, l'entretien de climatisation 95, la réparation, le dépannage et la maintenance de vos climatisations réversibles et pompes à chaleur dans tout le Val-d'Oise 95 et l'Ile-de-France.
          </p>
          <p className="mb-6 text-gray-700">
            Pour réfrigérer ou réchauffer votre local commercial, votre entrepôt, votre bureau, votre maison ou votre appartement, nos experts CVC vous garantissent un service de qualité.
          </p>
          <div className="text-center mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M2 12h20M12 2v20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                  Contactez nos experts de la climatisation 
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white rounded-2xl shadow-2xl">
                  <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-900 text-center">Contactez-nous</DialogTitle>
                      <DialogDescription className="text-center text-gray-600 pt-2">
                          Nos informations de contact pour toute demande ou devis.
                      </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-6 py-6">
                      <div className="flex items-center gap-4">
                          <div className="p-3 bg-green-100 rounded-full">
                              <Phone className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                              <h3 className="font-semibold text-gray-800">Téléphone</h3>
                              <a href="tel:+33784789910" className="text-gray-600 hover:text-green-600 transition-colors">+33 7 84 78 99 10</a>
                          </div>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-100 rounded-full">
                              <Mail className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                              <h3 className="font-semibold text-gray-800">Email</h3>
                              <a href="mailto:ecoclimatique0@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">ecoclimatique0@gmail.com</a>
                          </div>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="p-3 bg-teal-100 rounded-full">
                              <MapPin className="h-6 w-6 text-teal-600" />
                          </div>
                          <div>
                              <h3 className="font-semibold text-gray-800">Adresse</h3>
                              <p className="text-gray-600">France, Paris</p>
                          </div>
                      </div>
                  </div>
                  <DialogFooter>
                      <DialogClose asChild>
                          <Button type="button" variant="ghost">Fermer</Button>
                      </DialogClose>
                  </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
      {/* Footer */}
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