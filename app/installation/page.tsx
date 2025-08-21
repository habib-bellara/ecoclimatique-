"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Leaf, Home, Snowflake, Wind, Droplets, Building2, FileText, Wrench } from "lucide-react"

const DecorativeBg = () => (
  <>
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
  </>
)

export default function InstallationPage() {
  const [formData, setFormData] = useState({
    installationType: "",
    surfaceArea: "",
    roomCount: "",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError("")
    setSuccess(false)
    try {
      const response = await fetch("/api/installation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (response.ok && result.success) {
        setSuccess(true)
        setFormData({
          installationType: "",
          surfaceArea: "",
          roomCount: "",
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
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 z-10">
          {/* Bloc d'information */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-0 mb-8">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                <Leaf className="h-7 w-7 text-green-600" />
                Installation climatisation à Paris et dans le Val-d'Oise
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">Étude, installation, mise en service et entretien</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p>
                  Notre entreprise climatisation accompagne les particuliers et les professionnels pour tous leurs besoins en climatisation et ventilation. Nos techniciens assurent l’installation climatisation, la mise en service et l’entretien de vos équipements avec savoir-faire et rigueur.
                </p>
                <p>
                  Forts de notre expérience, nous maîtrisons la pose de climatiseurs de toutes les marques (installation climatisation Daikin, installation climatisation Mitsubishi Electric...). Que vous soyez à Paris, dans le Val-d'Oise ou leurs limitrophes, faites appel à nos spécialistes climatisation !
                </p>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="h-5 w-5 text-teal-600" />
                    <h3 className="text-2xl font-semibold text-slate-900">Des professionnels de climatisation à votre disposition</h3>
                  </div>
                  <p>
                    Nous prenons en charge une large gamme de systèmes de climatisation destinés aussi bien aux particuliers qu’aux professionnels (climatisation résidentielle, climatisation bureau...). Parmi les équipements que nous installons et entretenons : climatiseurs réversibles, pompe à chaleur air/air, systèmes VRV/DRV, système à eau glacée, groupes frigorifiques industriels...
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Snowflake className="h-5 w-5 text-emerald-700" />
                    <h3 className="text-2xl font-semibold text-slate-900">Climatisation réversible</h3>
                  </div>
                  <p>
                    Compatible avec tous types de bâtiments, cette solution se compose d’une unité extérieure associée à une ou plusieurs unités intérieures. Ces dernières peuvent être installées au mur, intégrées dans le plafond ou présentées sous forme de cassettes, selon les contraintes et l’agencement des lieux. Qu’il s’agisse de constructions neuves, de rénovations ou de locaux professionnels, faites-nous confiance !
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Wind className="h-5 w-5 text-blue-700" />
                    <h3 className="text-2xl font-semibold text-slate-900">Pompe à chaleur air/air</h3>
                  </div>
                  <p>
                    Vous souhaitez équiper votre maison ou vos bureaux d’une pompe à chaleur ? Nos techniciens qualifiés interviennent à Paris et dans tout le Val-d’Oise (95). Nous effectuons une installation conforme aux normes en vigueur, réalisée avec soin et professionnalisme. Que ce soit pour un projet neuf ou une rénovation, nous assurons la pose de votre pompe à chaleur, tout en respectant votre budget et vos besoins.
                  </p>
                </div>

                <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="h-5 w-5 text-teal-700" />
                    <h3 className="text-2xl font-semibold text-slate-900">Systèmes VRV / DRV</h3>
                  </div>
                  <p>
                    Nos professionnels assurent l’installation de systèmes de climatisation VRV/DRV (Volume de Réfrigérant Variable / Débit de Réfrigérant Variable). Idéals pour les bâtiments de moyenne à grande taille (bureaux, hôtels, commerces ou immeubles collectifs), les solutions Ecoclimatic permettent de connecter plusieurs unités intérieures à une seule unité extérieure, offrant un confort optimal grâce à une régulation précise de la température dans chaque zone.
                  </p>
                  <p className="mt-3">
                    Économiques, modulables et performants, les systèmes VRV/DRV s’adaptent parfaitement aux besoins spécifiques de chaque espace, tout en garantissant une haute efficacité énergétique. De l’étude à la mise en service, nous vous accompagnons dans le respect des normes et des contraintes de votre bâtiment.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50/50 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplets className="h-5 w-5 text-cyan-700" />
                    <h3 className="text-2xl font-semibold text-slate-900">Systèmes à eau glacée</h3>
                  </div>
                  <p>
                    Nous proposons également l’installation de systèmes à eau glacée. Nous offrons une solution de climatisation centralisée adaptée aux bâtiments tertiaires, industriels ou de grande surface comme les hôpitaux et les centres commerciaux. Grâce à ces systèmes, vous bénéficiez d’une grande flexibilité d’utilisation et d’un excellent rendement énergétique.
                  </p>
                  <p className="mt-3">
                    Les systèmes à eau glacée sont idéals pour le rafraîchissement de plusieurs zones à la fois. Nos professionnels assurent une installation conforme, optimisée et adaptée aux exigences spécifiques de votre infrastructure.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Wrench className="h-5 w-5 text-slate-700" />
                    <h3 className="text-2xl font-semibold text-slate-900">Groupes frigorifiques industriels</h3>
                  </div>
                  <p>
                    Nos techniciens assurent l’installation de groupes frigorifiques industriels, particulièrement utilisés dans les secteurs de l’agroalimentaire, la logistique, la pharmacie ou encore de la production industrielle. Ces groupes assurent le maintien d’une température précise et constante, indispensable au bon fonctionnement de vos installations ou à la conservation de vos produits.
                  </p>
                  <p className="mt-3">
                    Nos artisans de climatisation prennent en charge l’étude de vos besoins, le dimensionnement du système, l’installation et la mise en service. Nous veillons également à respecter les normes de sécurité, d’hygiène et de performance énergétique en vigueur.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-200 bg-green-50/60 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="h-5 w-5 text-green-700" />
                    <h3 className="text-2xl font-semibold text-slate-900">Demandez un devis gratuit</h3>
                  </div>
                  <p>
                    Avec Ecoclimatic, profitez d’une solution fiable, durable et parfaitement adaptée à vos contraintes techniques.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-0">
            <CardHeader className="text-center p-8">
              <div className="mx-auto bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full w-20 h-20 flex items-center justify-center -mt-20 shadow-lg">
                <Leaf className="text-white h-10 w-10" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mt-4">
                Installation de Climatisation
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                Obtenez votre devis personnalisé pour une installation de climatisation écologique
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="installationType">Type d'installation souhaité</Label>
                    <Select
                      value={formData.installationType}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, installationType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type d'installation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="split">Climatisation Split</SelectItem>
                        <SelectItem value="multi-split">Climatisation Multi-Split</SelectItem>
                        <SelectItem value="cassette">Climatisation Cassette</SelectItem>
                        <SelectItem value="console">Climatisation Console</SelectItem>
                        <SelectItem value="gainable">Climatisation Gainable</SelectItem>
                        <SelectItem value="pompe-a-chaleur">Pompe à Chaleur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="surfaceArea">Surface à climatiser (m²)</Label>
                    <Input
                      id="surfaceArea"
                      name="surfaceArea"
                      type="number"
                      placeholder="Ex: 80"
                      value={formData.surfaceArea}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="roomCount">Nombre de pièces à équiper</Label>
                    <Input
                      id="roomCount"
                      name="roomCount"
                      type="number"
                      placeholder="Ex: 4"
                      value={formData.roomCount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentSystem">Système actuel</Label>
                    <Select
                      value={formData.currentSystem}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, currentSystem: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre système actuel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aucun">Aucun système</SelectItem>
                        <SelectItem value="ventilateur">Ventilateur</SelectItem>
                        <SelectItem value="climatisation-ancienne">Climatisation ancienne</SelectItem>
                        <SelectItem value="radiateurs">Radiateurs</SelectItem>
                        <SelectItem value="chauffage-central">Chauffage central</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comments">Commentaires ou besoins spécifiques</Label>
                  <Textarea
                    id="comments"
                    name="comments"
                    placeholder="Décrivez vos besoins spécifiques, contraintes techniques, etc."
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Vos coordonnées</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Votre nom"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="06 50 66 86 00"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="address">Adresse complète</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Votre adresse complète"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={sending}
                    className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {sending ? "Envoi en cours..." : "Obtenir mon devis gratuit"}
                  </Button>
                </div>
                {success && (
                  <div className="text-center text-green-600 bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold">Demande envoyée avec succès !</p>
                    <p>Nous vous contacterons dans les plus brefs délais.</p>
                  </div>
                )}
                {error && <p className="text-center text-red-600 mt-4">{error}</p>}
                <p className="text-center text-sm text-gray-500 mt-4">
                  🔒 Vos informations sont sécurisées et confidentielles.
                </p>
                <p className="text-sm text-gray-500">
                  Pour toute question, appelez-nous au{" "}
                  <a href="tel:0650668600" className="font-medium text-green-600 hover:underline">
                    06 50 66 86 00
                  </a>
                  .
                </p>
              </form>
            </CardContent>
          </Card>
      </main>
    </div>
  )
} 