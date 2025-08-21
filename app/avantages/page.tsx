"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star } from "lucide-react"

export default function AvantagesPage() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nos avantages</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Nos solutions de climatisation durable font la différence pour votre confort, vos économies et la planète.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-slate-300">
          <div className="p-4 border-b md:border-b-0 md:border-r border-slate-300 text-center font-medium">20 ans d'expérience</div>
          <div className="p-4 border-b md:border-b-0 md:border-r border-slate-300 text-center font-medium">Installations écologiques</div>
          <div className="p-4 border-b md:border-b-0 border-slate-300 text-center font-medium">Rapidité d'intervention</div>
          <div className="p-4 md:border-r border-slate-300 text-center font-medium">Tous types de projets</div>
          <div className="p-4 md:border-r border-slate-300 text-center font-medium">Climatisation économique</div>
          <div className="p-4 text-center font-medium">Zone d’intervention élargie</div>
        </div>

        <section className="py-16">
          <div className="text-left mb-8">
            <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
              <Users className="h-4 w-4 mr-2" /> Ils ont recommandé Ecoclimatic
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Propriétaire & Militante Écologique",
                company: "Communauté Green Living",
                content:
                  "EcoClimatic n'a pas seulement installé un système de climatisation – ils ont transformé notre maison en un havre écologique. Nos factures d'énergie ont baissé de 45% et nous contribuons à une planète plus propre !",
                rating: 5,
                savings: "1 200 €/an",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZ6x2BniiDSHp8E-EqtujRUZHwwwI8Lzpsg&s",
              },
              {
                name: "Michael Chen",
                role: "Responsable des Installations",
                company: "TechCorp Industries",
                content:
                  "Le système de contrôle climatique intelligent a révolutionné notre environnement de bureau. Le confort des employés a augmenté, les coûts énergétiques ont diminué, et nous avons obtenu la certification LEED grâce à EcoClimatic.",
                rating: 5,
                savings: "15 000 €/an",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9iCPaE9qBhPV4ShXxJUZCALn6QbB4trXvQ&s",
              },
              {
                name: "Lisa Rodriguez",
                role: "Promotrice Immobilière",
                company: "Sustainable Homes LLC",
                content:
                  "En tant que promotrice axée sur le bâtiment vert, EcoClimatic est notre partenaire CVC exclusif. Leur expertise en technologie durable est inégalée dans le secteur.",
                rating: 5,
                savings: "50 000 €/projet",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0mlVqHTzbC4PabJZjJOuZGf44Sti4DUkTA&s",
              },
            ].map((testimonial, idx) => (
              <Card
                key={idx}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-green-200"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-green-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}


