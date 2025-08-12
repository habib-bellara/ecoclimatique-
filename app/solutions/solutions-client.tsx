"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Leaf, Zap, Shield, Wrench } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const DecorativeBg = () => (
  <>
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100/40 rounded-full blur-3xl z-0" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl z-0" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
  </>
)

export default function SolutionsPageClient() {
  const router = useRouter()
  const { language } = useLanguage()

  const translations = {
    fr: {
      title: "EcoClimatic : L'Avenir de la Climatisation Durable",
      subtitle: "Votre partenaire de confiance pour des solutions de climatisation écologiques, performantes et économiques.",
      missionTitle: "Notre Mission : Confort, Économie et Écologie",
      missionText: "Chez EcoClimatic, nous sommes convaincus qu'il est possible de concilier confort thermique et respect de l'environnement. Notre mission est de fournir des systèmes de climatisation innovants qui non seulement améliorent votre quotidien, mais contribuent également à la préservation de notre planète. Nous nous engageons à offrir des solutions durables qui réduisent votre empreinte carbone et allègent vos factures d'énergie.",
      expertiseTitle: "Notre Expertise à Votre Service",
      expertiseText: "Forts de plus de 20 ans d'expérience, nos techniciens certifiés sont des experts en matière de climatisation réversible, de pompes à chaleur et de systèmes de ventilation. Nous maîtrisons les dernières technologies pour vous garantir une installation impeccable, une maintenance préventive rigoureuse et des dépannages rapides et efficaces.",
      cta: "Découvrez nos solutions d'installation",
      ctaMaintenance: "Planifiez votre maintenance",
    },
    en: {
      title: "EcoClimatic: The Future of Sustainable Air Conditioning",
      subtitle: "Your trusted partner for ecological, efficient, and economical air conditioning solutions.",
      missionTitle: "Our Mission: Comfort, Savings, and Ecology",
      missionText: "At EcoClimatic, we believe it's possible to reconcile thermal comfort with respect for the environment. Our mission is to provide innovative air conditioning systems that not only improve your daily life but also contribute to the preservation of our planet. We are committed to offering sustainable solutions that reduce your carbon footprint and lower your energy bills.",
      expertiseTitle: "Our Expertise at Your Service",
      expertiseText: "With over 20 years of experience, our certified technicians are experts in reversible air conditioning, heat pumps, and ventilation systems. We master the latest technologies to ensure a flawless installation, rigorous preventive maintenance, and fast, effective repairs.",
      cta: "Discover our installation solutions",
      ctaMaintenance: "Schedule your maintenance",
    },
  }

  const t = (key: keyof typeof translations.fr) => translations[language][key]

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 overflow-clip">
      <DecorativeBg />
      {/* Contenu principal uniquement, la navigation et le footer proviennent du layout global */}
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-700 mb-10">{t("subtitle")}</p>
          </div>

          <div className="space-y-12">
            <div className="p-8 bg-green-50 rounded-2xl shadow-inner">
              <h2 className="text-3xl font-bold text-green-800 mb-4 flex items-center"><Leaf className="mr-3" /> {t("missionTitle")}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t("missionText")}</p>
            </div>

            <div className="p-8 bg-blue-50 rounded-2xl shadow-inner">
              <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center"><Shield className="mr-3" /> {t("expertiseTitle")}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t("expertiseText")}</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => router.push('/climatisation')}>
              <Zap className="mr-2 h-5 w-5" /> {t("cta")}
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700" onClick={() => router.push('/maintenance')}>
              <Wrench className="mr-2 h-5 w-5" /> {t("ctaMaintenance")}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 