"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Calendar } from "lucide-react"

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSuccess(false)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, address, message }),
      })
      if (res.ok) {
        setSuccess(true)
        setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setAddress(""); setMessage("")
      } else {
        const data = await res.json()
        setError(data.error || "Erreur lors de l'envoi du message.")
      }
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'envoi du message.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <Badge className="mb-6 bg-white/20 text-white px-4 py-2 font-medium">
                <Phone className="h-4 w-4 mr-2" />
                Commencez Aujourd'hui
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Prêt à Devenir Vert ?</h2>
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Discutons de vos besoins de refroidissement durable et créons une solution personnalisée qui économise de l'argent tout en protégeant l'environnement.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:0650668600">
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Phone className="h-6 w-6 text-green-200" />
                  <div>
                    <div className="text-lg font-semibold">06 50 66 86 00</div>
                    <div className="text-sm text-green-100">Appelez pour une assistance immédiate</div>
                  </div>
                </div>
              </a>
              <a href="mailto:contact@ecoclimatic.com">
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Mail className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="text-lg font-semibold">contact@ecoclimatic.com</div>
                    <div className="text-sm text-blue-100">Envoyez-nous vos questions par email</div>
                  </div>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=42+RUE+DU+LANDY+CLICHY+LA+GARENNE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <MapPin className="h-6 w-6 text-teal-200" />
                  <div>
                    <div className="text-lg font-semibold">42 RUE DU LANDY CLICHY LA GARENNE</div>
                    <div className="text-sm text-teal-100">Visitez notre salle d'exposition</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Obtenez Votre Devis Gratuit</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Prénom" className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                  <Input placeholder="Nom de Famille" className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12" value={lastName} onChange={e => setLastName(e.target.value)} required />
                </div>
                <Input placeholder="Adresse Email" type="email" className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12" value={email} onChange={e => setEmail(e.target.value)} required />
                <Input placeholder="Numéro de Téléphone" className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12" value={phone} onChange={e => setPhone(e.target.value)} required />
                <Input placeholder="Adresse de la Propriété" className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12" value={address} onChange={e => setAddress(e.target.value)} required />
                <Textarea placeholder="Parlez-nous de vos besoins de refroidissement..." rows={4} className="border-gray-200 focus:border-green-500 focus:ring-green-500" value={message} onChange={e => setMessage(e.target.value)} required />
                <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" disabled={sending}>
                  <Calendar className="mr-3 h-5 w-5" />
                  {sending ? "Envoi..." : "Planifier une Consultation Gratuite"}
                </Button>
                {success && <p className="text-center text-green-600">Message envoyé avec succès !</p>}
                {error && <p className="text-center text-red-600">{error}</p>}
                <p className="text-center text-sm text-gray-500">🔒 Vos informations sont sécurisées et confidentielles</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


