"use client"

import { CheckCircle, Leaf } from "lucide-react"

export default function SolutionsPageClient() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 py-24 px-6">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-green-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent mb-4">
            Solutions de climatisation durables
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-teal-600 rounded-full mb-8" />

          <div className="space-y-6 text-lg leading-relaxed text-slate-800">
            <p>
              Au sein de notre entreprise de climatisation, nous sommes engagés dans une démarche écoresponsable. Nous proposons à nos clients des solutions de climatisation durables alliant performance, économie d’énergie et respect de l’environnement.
            </p>

            <p>
              Nous privilégions la mise en place de systèmes utilisant des technologies à faible impact écologique :
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-green-600 mt-1" /><span>Pompes à chaleur haute efficacité ;</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-green-600 mt-1" /><span>Climatiseurs réversibles</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-green-600 mt-1" /><span>Systèmes VRV / DRV</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="h-6 w-6 text-green-600 mt-1" /><span>Systèmes à eau glacée</span></li>
            </ul>

            <p>
              Nos solutions sont conçues pour optimiser la consommation énergétique. Grâce à une régulation intelligente et des équipements modulables, nous offrons une réduction de votre empreinte carbone et de vos coûts d’exploitation.
            </p>

            <p>
              De plus, nous accompagnons nos clients dans le choix de matériels certifiés et conformes aux normes environnementales en vigueur, tout en assurant un entretien régulier et rigoureux qui prolonge la durée de vie des installations.
            </p>

            <p>
              En choisissant nos solutions durables, vous investissez dans un confort thermique respectueux de la planète et pérenne.
            </p>

            <div className="h-px bg-gradient-to-r from-green-100 to-teal-100 my-8" />

            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
              <Leaf className="h-7 w-7 text-teal-600" /> Un confort thermique responsable et tourné vers l’avenir
            </h2>

            <p>
              L’intégration des solutions durables, participe à la transition énergétique en limitant les émissions de gaz à effet de serre et en favorisant l’utilisation de sources d’énergie renouvelables.
            </p>

            <p>
              Nos spécialistes en climatisation écologique vous accompagnent à chaque étape du projet, de l’audit énergétique à l’installation, en passant par le suivi et l’optimisation de votre système.
            </p>

            <p>
              Ainsi, vous bénéficiez non seulement d’un confort thermique optimal, mais aussi d’une installation climatisation responsable qui répond aux enjeux environnementaux actuels, tout en valorisant votre bien immobilier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 