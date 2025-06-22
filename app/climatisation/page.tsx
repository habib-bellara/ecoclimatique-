"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Building, Home, Calendar, Users, Square, Check, Leaf, Globe, Phone, ChevronDown, Menu } from "lucide-react"

interface FormData {
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

const DecorativeBg = () => (
  <>
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
  </>
)

export default function InstallationFormPage() {
  const [formData, setFormData] = useState<FormData>({
    propertyType: "",
    surfaceArea: "",
    roomCount: "",
    installationType: [],
    currentSystem: "",
    comments: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  })
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [language, setLanguage] = useState("fr")
  const router = useRouter()

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Climatisation", href: "/climatisation" },
    { name: "Maintenance", href: "/maintenance" },
    { name: "Dépannage", href: "/depannage" },
    { name: "Solutions", href: "/solutions" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const newInstallationType = prev.installationType.includes(value)
        ? prev.installationType.filter(item => item !== value)
        : [...prev.installationType, value]
      return { ...prev, installationType: newInstallationType }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch('/api/installation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true)
        setFormData({
          propertyType: "",
          surfaceArea: "",
          roomCount: "",
          installationType: [],
          currentSystem: "",
          comments: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
        })
      } else {
        setError(result.error || "Une erreur s'est produite. Veuillez réessayer.")
      }
    } catch (err) {
      setError("Une erreur de connexion s'est produite. Veuillez réessayer.")
    }

    setSending(false)
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
              06 50 66 86 00
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
                      <Button asChild className="lg:hidden">
                        <a href="tel:0650668600">
                          <Phone className="h-4 w-4 mr-2" />
                          Appeler
                        </a>
                      </Button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-0">
            <CardHeader className="text-center p-8">
              <div className="mx-auto bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full w-20 h-20 flex items-center justify-center -mt-20 shadow-lg">
                <Leaf className="text-white h-10 w-10" />
              </div>
              <CardTitle className="text-4xl font-extrabold text-gray-900 mt-6">
                Demande de Devis d'Installation
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                Remplissez ce formulaire pour obtenir une estimation personnalisée pour votre projet de climatisation.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Section 1: Informations sur la propriété */}
                <div className="space-y-6 border-b pb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <Home className="mr-3 text-green-600" />
                    Informations sur votre propriété
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="propertyType" className="font-medium text-gray-700">Type de propriété</Label>
                      <Select name="propertyType" onValueChange={(value) => handleSelectChange("propertyType", value)} value={formData.propertyType}>
                        <SelectTrigger className="w-full h-12 mt-2">
                          <SelectValue placeholder="Sélectionnez un type..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maison">Maison</SelectItem>
                          <SelectItem value="appartement">Appartement</SelectItem>
                          <SelectItem value="bureau">Bureau</SelectItem>
                          <SelectItem value="commerce">Local commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="surfaceArea" className="font-medium text-gray-700">Surface à climatiser (m²)</Label>
                      <Input id="surfaceArea" name="surfaceArea" type="number" placeholder="Ex: 50" value={formData.surfaceArea} onChange={handleInputChange} className="h-12 mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="roomCount" className="font-medium text-gray-700">Nombre de pièces à équiper</Label>
                    <Select name="roomCount" onValueChange={(value) => handleSelectChange("roomCount", value)} value={formData.roomCount}>
                      <SelectTrigger className="w-full h-12 mt-2">
                        <SelectValue placeholder="Sélectionnez un nombre..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 pièce</SelectItem>
                        <SelectItem value="2">2 pièces</SelectItem>
                        <SelectItem value="3">3 pièces</SelectItem>
                        <SelectItem value="4">4 pièces</SelectItem>
                        <SelectItem value="5+">5 pièces ou plus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Section 2: Type d'installation souhaitée */}
                <div className="space-y-6 border-b pb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <Check className="mr-3 text-green-600" />
                    Type d'installation souhaitée
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {["Mono-split", "Multi-split", "Gainable", "Pompe à chaleur"].map(type => (
                      <div
                        key={type}
                        className={`flex items-center space-x-3 p-4 rounded-lg cursor-pointer transition-all ${formData.installationType.includes(type) ? "bg-green-100 ring-2 ring-green-400" : "bg-gray-50 hover:bg-gray-100"
                          }`}
                        onClick={() => handleCheckboxChange(type)}
                      >
                        <Checkbox
                          id={type}
                          value={type}
                          checked={formData.installationType.includes(type)}
                        />
                        <Label htmlFor={type} className="font-medium text-gray-800 cursor-pointer">{type}</Label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="currentSystem" className="font-medium text-gray-700">Système de chauffage/climatisation actuel</Label>
                    <Input id="currentSystem" name="currentSystem" placeholder="Ex: Radiateurs électriques" value={formData.currentSystem} onChange={handleInputChange} className="h-12 mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="comments" className="font-medium text-gray-700">Commentaires ou besoins spécifiques</Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      placeholder="Indiquez ici toute information supplémentaire pertinente pour votre projet..."
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="mt-2"
                      rows={5}
                    />
                  </div>
                </div>

                {/* Section 3: Vos coordonnées */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <Users className="mr-3 text-green-600" />
                    Vos coordonnées
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input name="firstName" placeholder="Prénom" value={formData.firstName} onChange={handleInputChange} className="h-12" required />
                    <Input name="lastName" placeholder="Nom" value={formData.lastName} onChange={handleInputChange} className="h-12" required />
                  </div>
                  <Input type="email" name="email" placeholder="Adresse e-mail" value={formData.email} onChange={handleInputChange} className="h-12" required />
                  <Input type="tel" name="phone" placeholder="Numéro de téléphone" value={formData.phone} onChange={handleInputChange} className="h-12" required />
                  <Input name="address" placeholder="Adresse complète" value={formData.address} onChange={handleInputChange} className="h-12" required />
                </div>

                {/* Soumission */}
                <div className="text-center pt-6">
                  {success && (
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-center">
                      <p>✅ Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.</p>
                    </div>
                  )}
                  {error && (
                    <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6 text-center">
                      <p>❌ {error}</p>
                    </div>
                  )}
                  <Button type="submit" size="lg" className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-7" disabled={sending}>
                    {sending ? "Envoi en cours..." : "Obtenir mon devis gratuit"}
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Pour toute question, appelez-nous au{" "}
                    <a href="tel:0650668600" className="font-medium text-green-600 hover:underline">
                      06 50 66 86 00
                    </a>
                    .
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
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