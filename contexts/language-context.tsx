"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.ourWork": "Our Work",
    "nav.benefits": "Benefits",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",

    // Hero Section
    "hero.badge": "Leading Eco-Friendly Innovation",
    "hero.title1": "Breathe Better.",
    "hero.title2": "Live Greener.",
    "hero.subtitle":
      "Revolutionizing air conditioning with cutting-edge sustainable technology that delivers unmatched comfort while protecting our planet for future generations.",
    "hero.cta1": "Schedule Free Consultation",
    "hero.cta2": "Explore Solutions",

    // Stats
    "stats.customers": "Happy Customers",
    "stats.experience": "Years Experience",
    "stats.savings": "Energy Savings",
    "stats.satisfaction": "Satisfaction Rate",

    // About Section
    "about.badge": "About EcoClimatic",
    "about.title": "Pioneering the Future of",
    "about.titleHighlight": "Sustainable Cooling",
    "about.description":
      "For over 15 years, EcoClimatic has been at the forefront of sustainable HVAC innovation. We don't just install air conditioning systems – we create comprehensive climate solutions that harmonize comfort, efficiency, and environmental stewardship.",
    "about.installations": "Eco Installations",
    "about.installationsSubtext": "Across residential & commercial",
    "about.energySavings": "Energy Savings",
    "about.energySavingsSubtext": "Generated for our clients",
    "about.certification1": "EPA Certified",
    "about.certification2": "ENERGY STAR Partner",
    "about.certification3": "Green Building Certified",
    "about.cta": "Discover Our Mission",

    // Services Section
    "services.badge": "Our Premium Services",
    "services.title": "Complete",
    "services.titleHighlight": "Climate Solutions",
    "services.description":
      "From design to installation, we deliver sustainable cooling solutions that exceed expectations while protecting our environment.",

    // Service Items
    "service1.title": "AC Installation",
    "service1.description":
      "Professional installation of energy-efficient cooling systems with smart technology integration.",
    "service1.feature1": "Smart Thermostats",
    "service1.feature2": "Energy Efficient",
    "service1.feature3": "Professional Setup",

    "service2.title": "System Maintenance",
    "service2.description": "Comprehensive maintenance programs to ensure optimal performance and longevity.",
    "service2.feature1": "Regular Inspections",
    "service2.feature2": "Performance Optimization",
    "service2.feature3": "24/7 Support",

    "service3.title": "Smart Controls",
    "service3.description": "Advanced climate control systems with AI-powered optimization and remote monitoring.",
    "service3.feature1": "AI Optimization",
    "service3.feature2": "Remote Control",
    "service3.feature3": "Energy Analytics",

    "service4.title": "Green Solutions",
    "service4.description": "Eco-friendly cooling alternatives that reduce carbon footprint and energy consumption.",
    "service4.feature1": "Carbon Neutral",
    "service4.feature2": "Renewable Energy",
    "service4.feature3": "Eco Certification",

    "services.learnMore": "Learn More",

    // Portfolio Section
    "portfolio.badge": "Our Recent Work",
    "portfolio.title": "Featured",
    "portfolio.titleHighlight": "Projects",
    "portfolio.description":
      "Explore our latest sustainable cooling installations and see how we're making a difference.",
    "portfolio.filter.all": "All Projects",
    "portfolio.filter.residential": "Residential",
    "portfolio.filter.commercial": "Commercial",
    "portfolio.filter.wall": "Wall Units",
    "portfolio.filter.floor": "Floor Units",
    "portfolio.viewAll": "View All Projects",

    // Portfolio Items
    "portfolio.item1.title": "Daikin Wall-Mounted System",
    "portfolio.item1.description": "Energy-efficient wall-mounted mini-split installation in a modern apartment.",
    "portfolio.item1.location": "Urban Residences, Downtown",
    "portfolio.item1.type": "Residential",

    "portfolio.item2.title": "Floor Console Installation",
    "portfolio.item2.description":
      "Low-profile floor console unit providing optimal heating and cooling for spaces with limited wall area.",
    "portfolio.item2.location": "Coastal Villas, Beachfront",
    "portfolio.item2.type": "Residential",

    "portfolio.item3.title": "Outdoor Condenser Unit",
    "portfolio.item3.description":
      "High-efficiency Daikin outdoor unit installation with proper clearance and mounting for optimal performance.",
    "portfolio.item3.location": "Skyview Apartments, Midtown",
    "portfolio.item3.type": "Multi-Family",

    "portfolio.item4.title": "Ceiling Cassette Installation",
    "portfolio.item4.description":
      "Professional installation of a ceiling-mounted air conditioning system in a multi-level home.",
    "portfolio.item4.location": "Highland Estates, North District",
    "portfolio.item4.type": "Residential",

    "portfolio.item5.title": "Exterior Line Set Installation",
    "portfolio.item5.description":
      "Clean, professional exterior line set installation with proper weatherproofing and aesthetic considerations.",
    "portfolio.item5.location": "Sunnyvale Cottages, West End",
    "portfolio.item5.type": "Residential",

    "portfolio.modal.projectType": "PROJECT TYPE",
    "portfolio.modal.description": "DESCRIPTION",
    "portfolio.modal.features": "FEATURES",
    "portfolio.modal.request": "Request Similar Installation",

    // Benefits Section
    "benefits.badge": "Why Choose EcoClimatic",
    "benefits.title": "Unmatched",
    "benefits.titleHighlight": "Benefits",
    "benefits.description":
      "Experience the advantages of choosing sustainable cooling solutions that benefit both you and the environment.",

    // Benefit Items
    "benefit1.title": "Eco-Friendly",
    "benefit1.description": "Reduce your carbon footprint with our sustainable cooling technologies.",
    "benefit1.metric": "80% Less CO₂",

    "benefit2.title": "Energy Efficient",
    "benefit2.description": "Save significantly on energy bills with our high-efficiency systems.",
    "benefit2.metric": "40% Savings",

    "benefit3.title": "Premium Quality",
    "benefit3.description": "Industry-leading equipment with extended warranties and reliability.",
    "benefit3.metric": "15+ Years",

    "benefit4.title": "Global Impact",
    "benefit4.description": "Join thousands of customers making a positive environmental impact.",
    "benefit4.metric": "2,500+ Homes",

    // Testimonials Section
    "testimonials.badge": "Customer Stories",
    "testimonials.title": "What Our",
    "testimonials.titleHighlight": "Customers Say",
    "testimonials.description": "Real experiences from satisfied customers who chose sustainable cooling solutions.",
    "testimonials.annualSavings": "Annual Savings:",

    // Contact Section
    "contact.badge": "Get Started Today",
    "contact.title": "Ready to Go Green?",
    "contact.description":
      "Let's discuss your sustainable cooling needs and create a customized solution that saves money while protecting the environment.",
    "contact.feature1.title": "24/7 Emergency Service",
    "contact.feature1.description": "Round-the-clock support when you need it most",
    "contact.feature2.title": "Lifetime Warranty",
    "contact.feature2.description": "Comprehensive coverage on all installations",
    "contact.phone.title": "Call for immediate assistance",
    "contact.email.title": "Contactez-nous par email",
    "contact.address.title": "Visit our showroom",
    "contact.form.title": "Get Your Free Quote",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.address": "Property Address",
    "contact.form.message": "Tell us about your cooling needs...",
    "contact.form.submit": "Schedule Free Consultation",
    "contact.form.privacy": "🔒 Your information is secure and confidential",

    // Footer
    "footer.description":
      "Leading the revolution in sustainable air conditioning with cutting-edge technology that protects both your comfort and our planet.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.copyright": "© 2025 EcoClimatic. All rights reserved. | Privacy Policy | Terms of Service",
    "footer.certification": "Carbon Neutral Certified",
    "footer.partner": "ENERGY STAR Partner",

    // Language Switcher
    "language.en": "English",
    "language.fr": "Français",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.services": "Services",
    "nav.ourWork": "Nos Réalisations",
    "nav.benefits": "Avantages",
    "nav.contact": "Contact",
    "nav.getQuote": "Obtenir un Devis",

    // Hero Section
    "hero.badge": "Leader en Innovation Écologique",
    "hero.title1": "Respirez Mieux.",
    "hero.title2": "Vivez Plus Vert.",
    "hero.subtitle":
      "Révolutionner la climatisation avec une technologie durable de pointe qui offre un confort inégalé tout en protégeant notre planète pour les générations futures.",
    "hero.cta1": "Planifier une Consultation Gratuite",
    "hero.cta2": "Explorer nos Solutions",

    // Stats
    "stats.customers": "Clients Satisfaits",
    "stats.experience": "Années d'Expérience",
    "stats.savings": "Économies d'Énergie",
    "stats.satisfaction": "Taux de Satisfaction",

    // About Section
    "about.badge": "À Propos d'EcoClimatic",
    "about.title": "Pionnier de l'Avenir de la",
    "about.titleHighlight": "Climatisation Durable",
    "about.description":
      "Depuis plus de 15 ans, EcoClimatic est à l'avant-garde de l'innovation durable en CVC. Nous n'installons pas seulement des systèmes de climatisation – nous créons des solutions climatiques complètes qui harmonisent confort, efficacité et gestion environnementale.",
    "about.installations": "Installations Éco",
    "about.installationsSubtext": "Résidentielles et commerciales",
    "about.energySavings": "Économies d'Énergie",
    "about.energySavingsSubtext": "Générées pour nos clients",
    "about.certification1": "Certifié EPA",
    "about.certification2": "Partenaire ENERGY STAR",
    "about.certification3": "Certifié Bâtiment Vert",
    "about.cta": "Découvrir Notre Mission",

    // Services Section
    "services.badge": "Nos Services Premium",
    "services.title": "Solutions",
    "services.titleHighlight": "Climatiques Complètes",
    "services.description":
      "De la conception à l'installation, nous livrons des solutions de refroidissement durables qui dépassent les attentes tout en protégeant notre environnement.",

    // Service Items
    "service1.title": "Installation Climatisation",
    "service1.description":
      "Installation professionnelle de systèmes de refroidissement écoénergétiques avec intégration de technologie intelligente.",
    "service1.feature1": "Thermostats Intelligents",
    "service1.feature2": "Écoénergétique",
    "service1.feature3": "Installation Professionnelle",

    "service2.title": "Maintenance Système",
    "service2.description":
      "Programmes de maintenance complets pour assurer des performances optimales et la longévité.",
    "service2.feature1": "Inspections Régulières",
    "service2.feature2": "Optimisation Performance",
    "service2.feature3": "Support 24/7",

    "service3.title": "Contrôles Intelligents",
    "service3.description":
      "Systèmes de contrôle climatique avancés avec optimisation alimentée par IA et surveillance à distance.",
    "service3.feature1": "Optimisation IA",
    "service3.feature2": "Contrôle à Distance",
    "service3.feature3": "Analyse Énergétique",

    "service4.title": "Solutions Vertes",
    "service4.description":
      "Alternatives de refroidissement écologiques qui réduisent l'empreinte carbone et la consommation d'énergie.",
    "service4.feature1": "Neutre en Carbone",
    "service4.feature2": "Énergie Renouvelable",
    "service4.feature3": "Certification Éco",

    "services.learnMore": "En Savoir Plus",

    // Portfolio Section
    "portfolio.badge": "Nos Réalisations Récentes",
    "portfolio.title": "Projets",
    "portfolio.titleHighlight": "En Vedette",
    "portfolio.description":
      "Explorez nos dernières installations de refroidissement durable et voyez comment nous faisons la différence.",
    "portfolio.filter.all": "Tous les Projets",
    "portfolio.filter.residential": "Résidentiel",
    "portfolio.filter.commercial": "Commercial",
    "portfolio.filter.wall": "Unités Murales",
    "portfolio.filter.floor": "Unités au Sol",
    "portfolio.viewAll": "Voir Tous les Projets",

    // Portfolio Items
    "portfolio.item1.title": "Système Mural Daikin",
    "portfolio.item1.description": "Installation mini-split murale écoénergétique dans un appartement moderne.",
    "portfolio.item1.location": "Résidences Urbaines, Centre-ville",
    "portfolio.item1.type": "Résidentiel",

    "portfolio.item2.title": "Installation Console au Sol",
    "portfolio.item2.description":
      "Unité console au sol à profil bas offrant un chauffage et un refroidissement optimaux pour les espaces à surface murale limitée.",
    "portfolio.item2.location": "Villas Côtières, Bord de Mer",
    "portfolio.item2.type": "Résidentiel",

    "portfolio.item3.title": "Unité de Condensation Extérieure",
    "portfolio.item3.description":
      "Installation d'unité extérieure Daikin à haute efficacité avec dégagement et montage appropriés pour des performances optimales.",
    "portfolio.item3.location": "Appartements Skyview, Centre-ville",
    "portfolio.item3.type": "Multi-Familial",

    "portfolio.item4.title": "Installation Cassette Plafond",
    "portfolio.item4.description":
      "Installation professionnelle d'un système de climatisation monté au plafond dans une maison à plusieurs niveaux.",
    "portfolio.item4.location": "Highland Estates, District Nord",
    "portfolio.item4.type": "Résidentiel",

    "portfolio.item5.title": "Installation Ligne Extérieure",
    "portfolio.item5.description":
      "Installation propre et professionnelle de lignes extérieures avec imperméabilisation appropriée et considérations esthétiques.",
    "portfolio.item5.location": "Cottages Sunnyvale, West End",
    "portfolio.item5.type": "Résidentiel",

    "portfolio.modal.projectType": "TYPE DE PROJET",
    "portfolio.modal.description": "DESCRIPTION",
    "portfolio.modal.features": "CARACTÉRISTIQUES",
    "portfolio.modal.request": "Demander une Installation Similaire",

    // Benefits Section
    "benefits.badge": "Pourquoi Choisir EcoClimatic",
    "benefits.title": "Avantages",
    "benefits.titleHighlight": "Inégalés",
    "benefits.description":
      "Découvrez les avantages de choisir des solutions de refroidissement durables qui profitent à la fois à vous et à l'environnement.",

    // Benefit Items
    "benefit1.title": "Écologique",
    "benefit1.description": "Réduisez votre empreinte carbone avec nos technologies de refroidissement durables.",
    "benefit1.metric": "80% Moins CO₂",

    "benefit2.title": "Écoénergétique",
    "benefit2.description":
      "Économisez considérablement sur les factures d'énergie avec nos systèmes haute efficacité.",
    "benefit2.metric": "40% d'Économies",

    "benefit3.title": "Qualité Premium",
    "benefit3.description": "Équipement leader de l'industrie avec garanties étendues et fiabilité.",
    "benefit3.metric": "15+ Années",

    "benefit4.title": "Impact Global",
    "benefit4.description": "Rejoignez des milliers de clients ayant un impact environnemental positif.",
    "benefit4.metric": "2,500+ Maisons",

    // Testimonials Section
    "testimonials.badge": "Histoires de Clients",
    "testimonials.title": "Ce Que Disent Nos",
    "testimonials.titleHighlight": "Clients",
    "testimonials.description":
      "Expériences réelles de clients satisfaits qui ont choisi des solutions de refroidissement durables.",
    "testimonials.annualSavings": "Économies Annuelles:",

    // Contact Section
    "contact.badge": "Commencez Aujourd'hui",
    "contact.title": "Prêt à Devenir Vert?",
    "contact.description":
      "Discutons de vos besoins en refroidissement durable et créons une solution personnalisée qui économise de l'argent tout en protégeant l'environnement.",
    "contact.feature1.title": "Service d'Urgence 24/7",
    "contact.feature1.description": "Support à toute heure quand vous en avez le plus besoin",
    "contact.feature2.title": "Garantie à Vie",
    "contact.feature2.description": "Couverture complète sur toutes les installations",
    "contact.phone.title": "Appelez pour une assistance immédiate",
    "contact.email.title": "Contactez-nous par email",
    "contact.address.title": "Visitez notre showroom",
    "contact.form.title": "Obtenez Votre Devis Gratuit",
    "contact.form.firstName": "Prénom",
    "contact.form.lastName": "Nom",
    "contact.form.email": "Adresse Email",
    "contact.form.phone": "Numéro de Téléphone",
    "contact.form.address": "Adresse de la Propriété",
    "contact.form.message": "Parlez-nous de vos besoins en climatisation...",
    "contact.form.submit": "Planifier une Consultation Gratuite",
    "contact.form.privacy": "🔒 Vos informations sont sécurisées et confidentielles",

    // Footer
    "footer.description":
      "À la tête de la révolution en climatisation durable avec une technologie de pointe qui protège à la fois votre confort et notre planète.",
    "footer.services": "Services",
    "footer.company": "Entreprise",
    "footer.resources": "Ressources",
    "footer.copyright":
      "© 2025 EcoClimatic. Tous droits réservés. | Politique de Confidentialité | Conditions d'Utilisation",
    "footer.certification": "Certifié Neutre en Carbone",
    "footer.partner": "Partenaire ENERGY STAR",

    // Language Switcher
    "language.en": "English",
    "language.fr": "Français",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
