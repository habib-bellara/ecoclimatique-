"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Snowflake, Wrench, ShieldAlert, ArrowRight, Check } from "lucide-react"
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
        {/* Bloc d'intro - Service climatisation Île-de-France */}
        <div className="max-w-5xl mx-auto text-slate-800 mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Service climatisation Île-de-France</h1>
          <p className="text-lg leading-relaxed mb-4">
            Ecoclimatic propose un service climatisation en Île-de-France, adaptés à tous types de besoins. Qu'il s'agisse de résidences, de bureaux ou d'industries, nous offrons des solutions sur mesure.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Grâce à notre expertise et à notre savoir-faire, nous assurons l'installation, la maintenance et le dépannage de vos systèmes de climatisation.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Nous garantissons des solutions énergétiquement efficaces et durables.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Que vous soyez particulier ou professionnel, nous vous accompagnons pour créer un environnement agréable et confortable, quelle que soit la saison.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-sky-800 mb-6">Climatisation écologique : Nos prestations</h2>
          <p className="text-lg leading-relaxed mb-4">
            Vous voulez bénéficier d’une solution de climatisation respectueuse de l’environnement, alliant performance et efficacité énergétique ?
          </p>
          <p className="text-lg leading-relaxed mb-4">
            En utilisant des technologies modernes (pompes à chaleur, systèmes de climatisation réversibles...), nous vous aidons à réduire votre empreinte carbone tout en maintenant un confort thermique optimal.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Nos prestations incluent l’installation, la maintenance et l’optimisation de vos équipements, en privilégiant des solutions durables et éco-responsables.
          </p>

          {/* Grid 2x2 des prestations en H3 */}
          <div className="mb-10 border rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
              <Link href="/installation" className="p-6 text-center block hover:bg-slate-50 focus:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold underline">Installation de climatisation</h3>
              </Link>
              <Link href="/maintenance" className="p-6 text-center block hover:bg-slate-50 focus:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold underline">Maintenance et entretien</h3>
              </Link>
              <Link href="/depannage" className="p-6 text-center block hover:bg-slate-50 focus:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold underline">Dépannage et réparation</h3>
              </Link>
              <Link href="/solutions" className="p-6 text-center block hover:bg-slate-50 focus:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold underline">Solutions durables</h3>
              </Link>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-sky-800 mb-6">Pourquoi opter pour une climatisation écologique ?</h2>
          <div className="pl-2 md:pl-8 mb-6">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-600 mt-1" /> Réduction des îlots de chaleur urbaine</li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-600 mt-1" /> Diminution des émissions de gaz à effet de serre</li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-600 mt-1" /> Économie d'énergie jusqu'à 60%</li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-600 mt-1" /> Meilleure qualité de l'air intérieur</li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-green-600 mt-1" /> Systèmes silencieux et solutions durables</li>
            </ul>
          </div>
          <p className="text-lg">
            Pour une installation de climatisation écologique et réversible, <Link href="/contact" className="text-green-700 font-semibold underline">contactez-nous</Link> !
          </p>
        </div>
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


