"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  User,
  Home,
  Wrench,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Globe,
  ChevronDown,
  Menu,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const DecorativeBg = () => (
    <>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
    </>
  )

export default function DepannageClient() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    issueType: "",
    issueDescription: "",
  })
  const [status, setStatus] = useState({ loading: false, error: "", success: "" })
  const [language, setLanguage] = useState("fr")
  const router = useRouter()

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Installation", href: "/installation" },
    { name: "Maintenance", href: "/maintenance" },
    { name: "Dépannage", href: "/depannage" },
    { name: "Solutions", href: "/solutions" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, issueType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, error: "", success: "" })

    try {
      const res = await fetch("/api/depannage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus({ loading: false, success: "Votre demande de dépannage a été envoyée avec succès !", error: "" })
        setFormData({ name: "", address: "", phone: "", email: "", issueType: "", issueDescription: "" })
      } else {
        const data = await res.json()
        setStatus({ loading: false, error: data.error || "Une erreur est survenue.", success: "" })
      }
    } catch (error) {
      setStatus({ loading: false, error: "Impossible de contacter le serveur.", success: "" })
    }
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
              <p className="text-xs text-gray-600">Solutions de Dépannage Rapide</p>
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
                  <span className="hidden md:inline">
                    {language === "en" ? "English" : "Français"}
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={`cursor-pointer ${language === "en" ? "bg-green-50 text-green-600 font-medium" : ""}`}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")} className={`cursor-pointer ${language === "fr" ? "bg-green-50 text-green-600 font-medium" : ""}`}>
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
              06 50 66 86 00
            </Button>
            <div className="lg:hidden">
              {(() => {
                const [open, setOpen] = useState(false);
                return (
                  <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <nav className="flex flex-col space-y-4 pt-8">
                          {navLinks.map(link => (
                            <button
                              key={link.name}
                              className="text-lg text-left font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
                              onClick={() => {
                                router.push(link.href);
                                setOpen(false);
                              }}
                            >
                              {link.name}
                            </button>
                          ))}
                        </nav>
                    </SheetContent>
                  </Sheet>
                );
              })()}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-0">
            <CardHeader className="text-center p-8">
              <div className="mx-auto bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-full w-20 h-20 flex items-center justify-center -mt-20 shadow-lg">
                <Wrench className="text-white h-10 w-10" />
              </div>
              <CardTitle className="text-4xl font-extrabold text-gray-900 mt-6">
                Demande de Dépannage Urgent
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                Une urgence ? Remplissez le formulaire et nous intervenons dans les meilleurs délais.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Section 1: Coordonnées */}
                <div className="space-y-6 border-b pb-10">
                    <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                        <User className="mr-3 text-green-600" />
                        Vos Coordonnées
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="name" className="font-medium text-gray-700">Nom Complet</Label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="ex. Jean Dupont" required className="mt-2 h-12"/>
                        </div>
                        <div>
                            <Label htmlFor="phone" className="font-medium text-gray-700">Téléphone</Label>
                            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="ex. 0612345678" required className="mt-2 h-12"/>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="email" className="font-medium text-gray-700">Adresse Email</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="ex. jean.dupont@email.com" required className="mt-2 h-12"/>
                    </div>
                    <div>
                        <Label htmlFor="address" className="font-medium text-gray-700">Adresse d'intervention</Label>
                        <Input id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="ex. 42 Rue du Landy, Clichy" required className="mt-2 h-12"/>
                    </div>
                </div>

                {/* Section 2: Détails du problème */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                        <AlertTriangle className="mr-3 text-green-600" />
                        Description de l'Urgence
                    </h3>
                    <div>
                        <Label htmlFor="issueType" className="font-medium text-gray-700">Type de problème</Label>
                        <Select name="issueType" onValueChange={handleSelectChange} value={formData.issueType}>
                        <SelectTrigger id="issueType" className="h-12 mt-2">
                            <SelectValue placeholder="Sélectionnez le type de panne" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pas_de_froid">Mon climatiseur ne fait plus de froid</SelectItem>
                            <SelectItem value="pas_de_chaud">Mon climatiseur ne fait plus de chaud</SelectItem>
                            <SelectItem value="fuite">Fuite d'eau</SelectItem>
                            <SelectItem value="bruit">Bruit anormal</SelectItem>
                            <SelectItem value="ne_demarre_pas">Ne démarre pas</SelectItem>
                            <SelectItem value="autre">Autre (précisez ci-dessous)</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="issueDescription" className="font-medium text-gray-700">Description détaillée</Label>
                        <Textarea id="issueDescription" name="issueDescription" value={formData.issueDescription} onChange={handleInputChange} placeholder="Décrivez le plus précisément possible le problème rencontré..." rows={5} required className="mt-2"/>
                    </div>
                </div>

                <div className="pt-6">
                    <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" disabled={status.loading}>
                    {status.loading ? "Envoi en cours..." : "Envoyer ma Demande d'Urgence"}
                    </Button>
                </div>

                {status.success && (
                    <Alert variant="default" className="mt-6 bg-green-100 border-green-300 text-green-800">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <AlertDescription>{status.success}</AlertDescription>
                    </Alert>
                )}
                {status.error && (
                    <Alert variant="destructive" className="mt-6">
                        <AlertTriangle className="h-5 w-5" />
                        <AlertDescription>{status.error}</AlertDescription>
                    </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/logo-ecoclimactic.jpg"
                  alt="Logo EcoClimatic"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-green-400"
                />
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                    EcoClimatic
                  </h3>
                  <p className="text-sm text-gray-400">Solutions de refroidissement durables</p>
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
                {["Installation de climatisation", "Maintenance du système", "Thermostats intelligents", "Conseil énergétique", "Dépannage d'urgence"].map(
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
                {["À propos", "Notre mission", "Carrières", "Presse", "Blog"].map(item => (
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
                {["Calculateur d'énergie", "Conseils de maintenance", "Infos garantie", "Centre d'assistance", "Contactez-nous"].map(
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
                © 2025 EcoClimatic. Tous droits réservés. | Politique de Confidentialité | Conditions d'utilisation
              </p>
              <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Partenaire certifié EPA
                </span>
                <span>|</span>
                <span>Labellisé ENERGY STAR</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}