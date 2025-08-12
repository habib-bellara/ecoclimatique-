import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/logo-ecoclimactic.jpg"
                alt="Logo EcoClimatic"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-green-400"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  EcoClimatic
                </h3>
                <p className="text-sm text-gray-400">Solutions de refroidissement durables</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-sm">
              Leader dans la technologie de refroidissement durable. Nous créons des solutions climatiques qui
              protègent à la fois votre confort et notre planète.
              <br />
              <a href="/installation" className="text-green-400 underline hover:text-green-200">Installation</a> |
              <a href="/maintenance" className="text-green-400 underline hover:text-green-200">Maintenance</a> |
              <a href="/depannage" className="text-green-400 underline hover:text-green-200">Dépannage</a> |
              <a href="/solutions" className="text-green-400 underline hover:text-green-200">Solutions</a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Services</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "Installation de climatisation",
                "Maintenance du système",
                "Thermostats intelligents",
                "Conseil énergétique",
                "Dépannage d'urgence",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-green-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Entreprise</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {["À propos", "Notre mission", "Carrières", "Presse", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Ressources</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "Calculateur d'énergie",
                "Conseils de maintenance",
                "Infos garantie",
                "Centre d'assistance",
                "Contactez-nous",
              ].map((resource) => (
                <li key={resource}>
                  <a href="#" className="hover:text-green-400 transition-colors duration-200">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-xs md:text-sm">
              © 2025 EcoClimatic. Tous droits réservés. | Politique de Confidentialité | Conditions d'utilisation
            </p>
            <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Partenaire certifié EPA
              </span>
              <span>|</span>
              <span>Labellisé ENERGY STAR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 