"use client"

import { Button } from "@/components/ui/button"
import { Globe, CheckCircle, Heart } from "lucide-react"

export default function AProposPage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-green-100/80 backdrop-blur-sm text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-green-200/50 mb-8">
                <Globe className="h-4 w-4 mr-2" />
                À Propos d'EcoClimatic
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                Pionnier de l'Avenir
                <br />
                <span className="text-green-600">de la Climatisation Écologique et Durable</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                Avec plus de 20 ans d'expérience en climatisation et froid, j'interviens sur tous types de systèmes de
                climatisation pour particuliers, entreprises et collectivités. Mon expertise couvre l'installation de
                climatisation réversible, la maintenance préventive et corrective, ainsi que le dépannage rapide des
                équipements.
                <br />
                <br />
                Je suis spécialisé dans les technologies à détente directe, VRV/DRV, groupes froids industriels, pompes à
                chaleur air/air et systèmes à eau glacée. J'interviens sur les plus grandes marques du marché : Daikin,
                Mitsubishi Electric, Toshiba, Gree, Trane, CIAT, Carrier et bien d'autres.
                <br />
                <br />
                Mon engagement : fournir des solutions de climatisation sur mesure, optimisées pour le confort thermique,
                la performance énergétique et la durabilité des installations.
                <br />
                <br />
                Zones d'intervention : Île-de-France, Paris, Val-d'Oise et départements limitrophes.
                <br />
                Domaines : climatisation résidentielle, climatisation tertiaire, climatisation industrielle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl border border-green-200 shadow-lg">
                  <div className="text-4xl font-black text-green-700 mb-2">2,500+</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">Installations Écologiques</div>
                  <div className="text-sm text-gray-600">Résidentiel et commercial</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl border border-blue-200 shadow-lg">
                  <div className="text-4xl font-black text-blue-700 mb-2">$2.5M+</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">Économies d'Énergie</div>
                  <div className="text-sm text-gray-600">Générées pour nos clients</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Certifié EPA
                </div>
                <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Partenaire ENERGY STAR
                </div>
                <div className="flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-200">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Certifié Bâtiment Vert
                </div>
              </div>

              <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Heart className="mr-3 h-5 w-5" />
                Découvrir Notre Mission
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 rounded-3xl transform rotate-2 opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-400 to-green-500 rounded-3xl transform -rotate-1 opacity-10"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ minHeight: '480px', height: '100%' }}>
                <img
                  src="https://envirinfos.net/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-23-at-12.54.54-PM.jpeg"
                  alt="EcoClimatic Sustainable Technology"
                  className="h-full w-full object-cover rounded-3xl"
                  style={{ minHeight: '480px', height: '100%' }}
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">Live Environmental Impact Monitor</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Reducing CO₂ emissions in real-time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


