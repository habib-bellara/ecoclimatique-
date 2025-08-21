"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Wrench, Calendar, Users, Info, FileText, Sparkles, ShieldCheck, Thermometer, Wallet, CheckCircle } from "lucide-react"

interface MaintenanceFormData {
  systemType: string
  systemAge: string
  lastMaintenance: string
  problemDescription: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
}

const DecorativeBg = () => (
  <>
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
  </>
)

export default function MaintenancePage() {
  const [formData, setFormData] = useState<MaintenanceFormData>({
    systemType: "",
    systemAge: "",
    lastMaintenance: "",
    problemDescription: "",
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/maintenance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSuccess(true)
        setFormData({
          systemType: "",
          systemAge: "",
          lastMaintenance: "",
          problemDescription: "",
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
          {/* Bloc d'information - Entretien climatisation */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-0 mb-8">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                <Wrench className="h-7 w-7 text-blue-600" />
                Entretien climatisation en IDF
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">Maintenance, nettoyage et optimisation de vos climatiseurs</CardDescription>
            </CardHeader>
            <CardContent className="p-8 text-slate-700 text-lg leading-relaxed space-y-6">
              <p>
                Un système de climatisation est déjà installé dans votre logement, votre entreprise ou votre bureau ? Vous êtes à la recherche d’un prestataire fiable et expérimenté pour en assurer l’entretien régulier ? Ecoclimatic vous propose un service complet de maintenance et de nettoyage de vos climatiseurs.
              </p>
              <p>
                Notre but est de préserver leur bon fonctionnement, de prolonger leur durée de vie et de garantir une performance énergétique optimale.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-slate-900">Contrat d’entretien annuel</h3>
                </div>
                <p>
                  Disposer d’un contrat d’entretien annuel pour votre système de climatisation est indispensable afin de garantir conformité et sérénité. Ecoclimatic, basé à Paris (75) et dans le Val-d’Oise (95), propose des contrats de maintenance personnalisés, adaptés aux besoins spécifiques de chaque installation.
                </p>
                <p className="mt-3">
                  Un entretien régulier réalisé par nos artisans climatisation qualifiés contribue à prolonger la durée de vie de vos équipements et à maintenir leur performance optimale. Nous utilisons exclusivement des matériaux de qualité supérieure pour assurer un fonctionnement fiable et durable.
                </p>
                <p className="mt-3">Nous vous offrons des solutions de maintenance sur mesure, pensées pour répondre à vos priorités.</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 border rounded-lg overflow-hidden text-center text-base">
                  <div className="p-5 border-b md:border-b-0 md:border-r flex items-center justify-center gap-2"><Thermometer className="h-4 w-4 text-slate-700" /> Confort thermique</div>
                  <div className="p-5 border-b md:border-b-0 md:border-r flex flex-col items-center justify-center gap-1">
                    <div className="flex items-center gap-2"><Wallet className="h-4 w-4 text-slate-700" /> Maîtrise des coûts</div>
                    <div className="text-slate-700">d’exploitation</div>
                  </div>
                  <div className="p-5 flex items-center justify-center gap-2"><ShieldCheck className="h-4 w-4 text-slate-700" /> Fiabilité</div>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-5 w-5 text-emerald-700" />
                  <h3 className="text-2xl font-semibold text-slate-900">Nettoyage climatisation et optimisation des performances</h3>
                </div>
                <p>
                  Une maintenance régulière de votre système de climatisation est essentielle pour garantir son bon fonctionnement, sa longévité et son efficacité énergétique. Nous assurons le nettoyage complet de vos équipements (filtres, unités intérieures, unités extérieures et conduits) afin d’éliminer poussières, bactéries et moisissures.
                </p>
                <p className="mt-3">
                  Ce nettoyage approfondi améliore la qualité de l’air intérieur, réduit la consommation d’énergie et évite les pannes prématurées. En complément, nos techniciens procèdent à des réglages et vérifications techniques pour optimiser les performances de votre installation, vous assurant ainsi un confort optimal en toutes saisons.
                </p>
              </div>

              <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="h-5 w-5 text-teal-700" />
                  <h3 className="text-2xl font-semibold text-slate-900">Maintenance préventive de votre système</h3>
                </div>
                <p>
                  Faites appel à nos professionnels de climatisation pour la maintenance préventive de vos équipements. Cette intervention vous permet d’assurer le bon fonctionnement et la longévité de votre système.
                </p>
                <p className="mt-3">Au cours de l’intervention :</p>
                <ul className="mt-2 space-y-2 text-slate-800">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-teal-700 mt-1" /> Nous vérifions l’état général de vos équipements.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-teal-700 mt-1" /> Nous contrôlons les niveaux de fluides, les connexions électriques, les performances thermiques.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-teal-700 mt-1" /> Nous assurons le bon état des composants.</li>
                </ul>
                <p className="mt-3">
                  Cette approche proactive vous permet de maintenir une performance optimale, de réduire vos dépenses énergétiques et d’éviter les interruptions de service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Formulaire de maintenance */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-0">
            <CardHeader className="text-center p-8">
              <div className="mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-full w-20 h-20 flex items-center justify-center -mt-20 shadow-lg">
                <Wrench className="text-white h-10 w-10" />
              </div>
              <CardTitle className="text-4xl font-extrabold text-gray-900 mt-6">
                Demande de Maintenance
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                Remplissez ce formulaire pour planifier une intervention de maintenance pour votre système.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-6 border-b pb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <Info className="mr-3 text-blue-600" />
                    Informations sur votre système
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="systemType" className="font-medium text-gray-700">Type de système</Label>
                      <Select
                        name="systemType"
                        onValueChange={value => handleSelectChange("systemType", value)}
                        value={formData.systemType}
                      >
                        <SelectTrigger className="w-full h-12 mt-2">
                          <SelectValue placeholder="Sélectionnez un type..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mono-split">Climatiseur Mono-split</SelectItem>
                          <SelectItem value="multi-split">Climatiseur Multi-split</SelectItem>
                          <SelectItem value="gainable">Climatiseur Gainable</SelectItem>
                          <SelectItem value="pompe-a-chaleur">Pompe à chaleur</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="systemAge" className="font-medium text-gray-700">Âge du système (années)</Label>
                      <Input
                        id="systemAge"
                        name="systemAge"
                        type="number"
                        placeholder="Ex: 5"
                        className="mt-2 h-12"
                        value={formData.systemAge}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastMaintenance" className="font-medium text-gray-700">Date de la dernière maintenance</Label>
                    <Input
                      id="lastMaintenance"
                      name="lastMaintenance"
                      type="date"
                      className="mt-2 h-12"
                      value={formData.lastMaintenance}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-6 border-b pb-10">
                   <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <Wrench className="mr-3 text-blue-600" />
                    Description du problème
                  </h3>
                  <Textarea
                    name="problemDescription"
                    placeholder="Décrivez le problème que vous rencontrez ou le service de maintenance souhaité..."
                    rows={6}
                    value={formData.problemDescription}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <Users className="mr-3 text-blue-600" />
                    Vos coordonnées
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input name="firstName" placeholder="Prénom" className="h-12" value={formData.firstName} onChange={handleInputChange} required />
                    <Input name="lastName" placeholder="Nom" className="h-12" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                  <Input name="email" type="email" placeholder="Adresse e-mail" className="h-12" value={formData.email} onChange={handleInputChange} required />
                  <Input name="phone" placeholder="Numéro de téléphone" className="h-12" value={formData.phone} onChange={handleInputChange} required />
                  <Input name="address" placeholder="Adresse complète" className="h-12" value={formData.address} onChange={handleInputChange} required />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    disabled={sending}
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    {sending ? "Envoi en cours..." : "Planifier la maintenance"}
                  </Button>
                  {success && (
                    <p className="text-center text-blue-700 font-semibold mt-4">
                      Merci ! Votre demande de maintenance a été envoyée. Nous vous contacterons bientôt.
                    </p>
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
                </div>
              </form>
            </CardContent>
          </Card>
      </main>

    </div>
  )
} 