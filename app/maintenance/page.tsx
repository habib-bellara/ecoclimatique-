"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Wrench, Calendar, Users, Info } from "lucide-react"

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
        <div className="max-w-4xl mx-auto">
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
        </div>
      </main>

    </div>
  )
} 