"use client"

import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star } from "lucide-react"

export default function AProposPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 py-24 px-6">
      <div className="relative z-10 w-full">
            <div>
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-green-200/60 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm mb-8">
            À propos d'Ecoclimatic
              </div>

          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent leading-tight mb-3 relative after:content-[''] after:block after:mt-3 after:h-1 after:w-24 after:bg-gradient-to-r after:from-green-600 after:to-teal-600 after:rounded-full">
            Installateur climatisation Paris, Val-d'Oise et leurs limitrophes
          </h1>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Vous avez besoin d’un installeur climatisation ? Faites appel à Ecoclimatic !
            </p>
            <p>
              Notre entreprise climatisation vous propose des services de pose climatiseur et pompe à chaleur.
            </p>
            <p>
              Nous intervenons sur des projets de toutes les tailles que ce soit auprès des clients ou en sous-traitance.
            </p>
            <p>
              Que vous soyez un particulier ou un professionnel, nos spécialistes climatisation répondent à tous vos besoins.
            </p>
                </div>
                
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4 relative after:content-[''] after:block after:mt-2 after:h-1 after:w-16 after:bg-green-500 after:rounded-full">
            Faites appel à nos spécialistes climatisation !
          </h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <span className="text-slate-700 text-lg leading-relaxed">
                Spécialisés en climatisation réversible, nous disposons d'une expertise pointue en matière de pose et dépannage de climatiseurs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <span className="text-slate-700 text-lg leading-relaxed">
                Nos spécialistes climatisation vous conseillent sur les équipements les plus performants du marché. Nous vous garantissons ainsi une performance énergétique optimale et une longévité accrue.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <span className="text-slate-700 text-lg leading-relaxed">
                Nous assurons l'installation et l'entretien de vos systèmes de climatisation, dans le respect des normes en vigueur.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <span className="text-slate-700 text-lg leading-relaxed">
                Nous proposons des solutions sur mesure, adaptées à vos besoins et à votre budget.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <span className="text-slate-700 text-lg leading-relaxed">
                Notre clientèle nous accorde sa fidélité, faisant appel à nos services pour l'entretien de leurs installations chaque année.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
              <span className="text-slate-700 text-lg leading-relaxed">
                Notre service après-vente assure un suivi personnalisé et réactif.
              </span>
            </li>
          </ul>

          <div className="mt-10 space-y-6 text-lg text-slate-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 relative after:content-[''] after:block after:mt-2 after:h-1 after:w-16 after:bg-green-500 after:rounded-full">Différents types d’intervention</h2>
            <p>
              Notre entreprise propose des solutions de climatisation adaptées à tous types de besoins, qu'il s'agisse de climatisation résidentielle, tertiaire ou industrielle.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Climatisation résidentielle</h3>
            <p>
              Pour tout besoin en climatisation résidentielle, nous vous proposons des installons qui garantissent un confort optimal à la maison.
            </p>
            <p>
              Nos solutions permettent de réguler la température tout au long de l'année, tout en respectant l'esthétique de votre logement et en minimisant votre consommation d'énergie.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Climatisation tertiaire</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">Climatisation résidentielle</h3>
                <p>Pour tout besoin en climatisation résidentielle, nous vous proposons des installons qui garantissent un confort optimal à la maison.</p>
                <p className="mt-2">Nos solutions permettent de réguler la température tout au long de l'année, tout en respectant l'esthétique de votre logement et en minimisant votre consommation d'énergie.</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">Climatisation tertiaire</h3>
                <p>Notre entreprise climatisation propose des systèmes adaptés aux bureaux, commerces ou bâtiments professionnels.</p>
                <p className="mt-2">Nos installations sont conçues pour offrir un confort thermique efficace et une qualité d’air optimale. Nous tenons compte des exigences spécifiques de votre environnement de travail.</p>
                <p className="mt-2">Avec Ecoclimatic, bénéficiez d'équipements fiables, silencieux et économes, pour créer un environnement agréable et productif.</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">Climatisation industrielle</h3>
                <p>Nous mettons en place des systèmes de climatisation robustes et performants pour répondre aux exigences strictes des environnements industriels.</p>
                <p className="mt-2">Que ce soit pour des ateliers, des entrepôts ou des zones de production, nous vous proposons des installations adaptées.</p>
                <p className="mt-2">Nous assurons l’optimisation des coûts de fonctionnement ainsi qu’une longue durée de vie de vos équipements.</p>
              </div>
            </div>
          </div>

          {/* Nos avantages */}
          <section className="pt-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 relative after:content-[''] after:block after:mt-2 after:h-1 after:w-16 after:bg-green-500 after:rounded-full">Nos avantages</h2>
            <p className="text-center text-lg text-slate-700 max-w-4xl mx-auto mb-10">
              Nos solutions de climatisation durable font la différence pour votre confort, vos économies et la planète.
            </p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-slate-300">
              <div className="p-4 border-b md:border-b-0 md:border-r border-slate-300 text-center font-medium">20 ans d'expérience</div>
              <div className="p-4 border-b md:border-b-0 md:border-r border-slate-300 text-center font-medium">Installations écologiques</div>
              <div className="p-4 border-b md:border-b-0 border-slate-300 text-center font-medium">Rapidité d'intervention</div>
              <div className="p-4 md:border-r border-slate-300 text-center font-medium">Tous types de projets</div>
              <div className="p-4 md:border-r border-slate-300 text-center font-medium">Climatisation économique</div>
              <div className="p-4 text-center font-medium">Zone d’intervention élargie</div>
            </div>
          </section>

          {/* Testimonials imported from home */}
          <section className="py-24 px-6 bg-gradient-to-br from-green-50/30 to-teal-50/30 relative overflow-hidden mt-16">
            <div className="relative z-10">
              <div className="text-left mb-10">
                <Badge className="mb-4 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
                  <Users className="h-4 w-4 mr-2" />
                  Ils ont recommandé Ecoclimatic
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
                      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-3 border border-green-100">
                        <div className="text-sm text-gray-600">Économies annuelles</div>
                        <div className="text-lg font-bold text-green-600">{testimonial.savings}</div>
                </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </section>
  )
}


