"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"

export default function AvantagesPage() {
  const items = [
    {
      icon: "🌿",
      title: "Technologie Verte Avancée",
      description:
        "Nos systèmes utilisent des fluides frigorigènes à faible impact et des composants recyclables pour un environnement plus sain.",
      metric: "100% Éco-conçus",
      color: "green",
    },
    {
      icon: "⚡",
      title: "Jusqu'à 60% d'Économies d'Énergie",
      description:
        "Grâce à l'inverter et à l'optimisation intelligente, réduisez vos factures tout en profitant d'un confort optimal.",
      metric: "60% d'Économies",
      color: "yellow",
    },
    {
      icon: "🏆",
      title: "Experts Certifiés & Service Premium",
      description:
        "Installation, maintenance et dépannage assurés par des techniciens certifiés, disponibles 24/7 pour votre tranquillité.",
      metric: "24/7 Assistance",
      color: "blue",
    },
    {
      icon: "🌍",
      title: "Engagement Climat & Communauté",
      description:
        "Chaque installation soutient des projets de reforestation et d'action climatique en France et dans le monde.",
      metric: "10 000+ Arbres Plantés",
      color: "teal",
    },
  ] as const

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
            <Zap className="h-4 w-4 mr-2" />
            Pourquoi Choisir EcoClimatic
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Avantages <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Inégalés</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez pourquoi nos solutions de refroidissement durable font la différence pour votre confort, vos économies et la planète.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((benefit, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 overflow-hidden relative"
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                <div className={`inline-flex px-4 py-2 rounded-full bg-${benefit.color}-100 text-${benefit.color}-800 text-sm font-semibold`}>
                  {benefit.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


