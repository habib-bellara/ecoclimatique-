"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Snowflake, Wrench, ShieldAlert, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()
  const services = [
    {
      icon: <Snowflake className="h-10 w-10" />,
      title: "Installation de Climatisation",
      description:
        "Installation professionnelle de systèmes de refroidissement écoénergétiques avec intégration de technologie intelligente.",
      color: "blue",
      features: ["Thermostats Intelligents", "Écoénergétique", "Installation Professionnelle"],
      href: "/installation",
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Maintenance des Systèmes",
      description:
        "Programmes de maintenance complets pour assurer des performances optimales et une longévité.",
      color: "green",
      features: ["Inspections Régulières", "Optimisation des Performances", "Support 24/7"],
      href: "/maintenance",
    },
    {
      icon: <ShieldAlert className="h-10 w-10" />,
      title: "Dépannage",
      description: "Intervention rapide et efficace pour résoudre tous vos problèmes.",
      color: "amber",
      features: ["Diagnostic Précis", "Réparation Toutes Marques", "Service d'Urgence"],
      href: "/depannage",
    },
  ] as const

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
            <Wrench className="h-4 w-4 mr-2" />
            Nos Services Premium
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Solutions <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Climatiques Complètes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            De la conception à l'installation, nous livrons des solutions de refroidissement durables qui dépassent les
            attentes tout en protégeant notre environnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden relative"
            >
              <CardContent className="p-8 relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-${service.color}-100 mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <div className={`text-${service.color}-600`}>{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center text-sm text-gray-500">
                      <Wrench className="h-4 w-4 text-green-500 mr-2" />
                      {f}
                    </div>
                  ))}
                </div>
                <Button
                  variant="link"
                  className="text-green-600 font-bold text-lg mt-4 flex items-center gap-2 hover:underline"
                  onClick={() => router.push(service.href)}
                >
                  En Savoir Plus <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


