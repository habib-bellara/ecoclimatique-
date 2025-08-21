"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { User, Wrench, AlertTriangle, CheckCircle, Clock, FileText } from "lucide-react"

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
      {/* Contenu principal uniquement, la navigation et le footer proviennent du layout global */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 z-10">
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-0 mb-8">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-extrabold text-gray-900">Dépannage et réparation</CardTitle>
            <CardDescription className="text-gray-600 mt-2">Interventions rapides en Île-de-France</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Dépannage climatisation urgent</h2>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Votre climatiseur est en panne ? Besoin d’un dépannage climatisation urgent ? Faites appels à nos techniciens ! Nous assurons des interventions rapides dans les plus brefs délais pour une réparation climatiseur résidentiel et professionnel.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Nos dépanneurs interviennent en urgence dans tout le Val-d’Oise et à Paris pour assurer la réparation immédiate et efficace de vos climatiseurs en panne ou défectueux.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="h-5 w-5 text-teal-600" />
                  <h3 className="text-2xl font-semibold text-slate-900">Réparation de toutes les pannes</h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Votre climatiseur ne souffle plus d’air frais, émet un bruit inhabituel, refuse de démarrer ou s’arrête sans raison ?
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  En cas de panne, il est essentiel de faire appel à une entreprise climatisation professionnelle pour effectuer un diagnostic précis et assurer la réparation rapide de votre installation.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Pour tout type de panne, nous sommes capables d’offrir des solutions rapides, efficaces et sur mesure.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="text-2xl font-semibold text-slate-900">Dépannage 24/7</h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Veillant à satisfaire tous nos clients, nous mettons à leur disposition un service de dépannage tous les jours de la semaine.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Nos techniciens sont disponibles jour et nuit pour intervenir sur site et réparer toutes les pannes affectant votre système de climatisation.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Demandez un devis détaillé et gratuit avant toute intervention ! Les coûts varient d’un professionnel à un autre.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-2xl font-semibold text-slate-900">Réparation toutes marques</h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Chez Ecoclimatic, nous intervenons pour le dépannage de systèmes de climatisation, quelle que soit leur marque ou leur modèle.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Nos techniciens qualifiés possèdent l’expertise nécessaire pour diagnostiquer et réparer efficacement tout type de panne.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Nous travaillons avec les plus grandes marques du marché (Daikin, Mitsubishi, Toshiba, Panasonic, LG...) et utilisons des pièces détachées fiables pour garantir la durabilité de vos équipements.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Notre mission est de remettre votre climatisation en service dans les plus brefs délais, avec un haut niveau de fiabilité et de sécurité.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="h-5 w-5 text-slate-600" />
                  <h3 className="text-2xl font-semibold text-slate-900">Demandez un devis gratuit</h3>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Vous avez un projet de réparation ou de dépannage de climatisation ? Ecoclimatic vous propose un devis gratuit et sans engagement, adapté à vos besoins et à votre budget.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Nos experts étudient votre demande avec attention afin de vous fournir une solution personnalisée, claire et transparente.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mt-3">
                  Appelez-nous dès maintenant pour bénéficier de notre expertise et obtenir une estimation rapide de vos travaux en climatisation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
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
      </main>
    </div>
  )
}