"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Snowflake,
  Wrench,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Users,
  TrendingUp,
  Zap,
  Heart,
  Wind,
  Thermometer,
  Calendar,
  ImageIcon,
  ChevronDown,
  Menu,
} from "lucide-react"
import { useState, useEffect } from "react"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Translations object
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      ourWork: "Our Work",
      benefits: "Benefits",
      contact: "Contact",
      getQuote: "Get Quote",
    },
    hero: {
      badge: "Leading Eco-Friendly Innovation",
      title1: "Breathe Better.",
      title2: "Live Greener.",
      subtitle:
        "Revolutionizing air conditioning with cutting-edge sustainable technology that delivers unmatched comfort while protecting our planet for future generations.",
      cta1: "Schedule Free Consultation",
      cta2: "Explore Solutions",
    },
    stats: {
      customers: "Happy Customers",
      experience: "Years Experience",
      savings: "Energy Savings",
      satisfaction: "Satisfaction Rate",
    },
    about: {
      badge: "About EcoClimatic",
      title: "Pioneering the Future",
      titleHighlight: "of Sustainable Cooling",
      description:
        "For over 20 years, EcoClimatic has been at the forefront of sustainable HVAC innovation. We don't just install air conditioning systems – we create comprehensive climate solutions that harmonize comfort, efficiency, and environmental stewardship.",
      installations: "Eco Installations",
      installationsSubtext: "Across residential & commercial",
      energySavings: "Energy Savings",
      energySavingsSubtext: "Generated for our clients",
      certification1: "EPA Certified",
      certification2: "ENERGY STAR Partner",
      certification3: "Green Building Certified",
      cta: "Discover Our Mission",
    },
    services: {
      badge: "Our Premium Services",
      title: "Complete",
      titleHighlight: "Climate Solutions",
      description:
        "From design to installation, we deliver sustainable cooling solutions that exceed expectations while protecting our environment.",
      learnMore: "Learn More",
    },
    service1: {
      title: "AC Installation",
      description: "Professional installation of energy-efficient cooling systems with smart technology integration.",
      feature1: "Smart Thermostats",
      feature2: "Energy Efficient",
      feature3: "Professional Setup",
    },
    service2: {
      title: "System Maintenance",
      description: "Comprehensive maintenance programs to ensure optimal performance and longevity.",
      feature1: "Regular Inspections",
      feature2: "Performance Optimization",
      feature3: "24/7 Support",
    },
    service3: {
      title: "Smart Controls",
      description: "Advanced climate control systems with AI-powered optimization and remote monitoring.",
      feature1: "AI Optimization",
      feature2: "Remote Control",
      feature3: "Energy Analytics",
    },
    service4: {
      title: "Green Solutions",
      description: "Eco-friendly cooling alternatives that reduce carbon footprint and energy consumption.",
      feature1: "Carbon Neutral",
      feature2: "Renewable Energy",
      feature3: "Eco Certification",
    },
    portfolio: {
      badge: "Our Recent Work",
      title: "Featured",
      titleHighlight: "Projects",
      description: "Explore our latest sustainable cooling installations and see how we're making a difference.",
      viewAll: "View All Projects",
    },
    benefits: {
      badge: "Why Choose EcoClimatic",
      title: "Unmatched",
      titleHighlight: "Benefits",
      description:
        "Experience the advantages of choosing sustainable cooling solutions that benefit both you and the environment.",
    },
    benefit1: {
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint with our sustainable cooling technologies.",
      metric: "80% Less CO₂",
    },
    benefit2: {
      title: "Energy Efficient",
      description: "Save significantly on energy bills with our high-efficiency systems.",
      metric: "40% Savings",
    },
    benefit3: {
      title: "Premium Quality",
      description: "Industry-leading equipment with extended warranties and reliability.",
      metric: "15+ Years",
    },
    benefit4: {
      title: "Global Impact",
      description: "Join thousands of customers making a positive environmental impact.",
      metric: "2,500+ Homes",
    },
    testimonials: {
      badge: "Customer Stories",
      title: "What Our",
      titleHighlight: "Customers Say",
      description: "Real experiences from satisfied customers who chose sustainable cooling solutions.",
    },
    contact: {
      badge: "Get Started Today",
      title: "Ready to Go Green?",
      description:
        "Let's discuss your sustainable cooling needs and create a customized solution that saves money while protecting the environment.",
      phone: {
        title: "Call for immediate assistance",
      },
      email: {
        title: "Email us your questions",
      },
      address: {
        title: "Visit our showroom",
      },
      form: {
        title: "Get Your Free Quote",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        address: "Property Address",
        message: "Tell us about your cooling needs...",
        submit: "Schedule Free Consultation",
        privacy: "🔒 Your information is secure and confidential",
      },
    },
    footer: {
      description:
        "Leading the way in sustainable cooling technology. We create climate solutions that protect both your comfort and our planet.",
      services: "Services",
      company: "Company",
      resources: "Resources",
      copyright: "© 2025 EcoClimatic. All rights reserved. | Privacy Policy | Terms of Service",
      certification: "EPA Certified Partner",
      partner: "ENERGY STAR Approved",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      ourWork: "Nos Réalisations",
      benefits: "Avantages",
      contact: "Contact",
      getQuote: "Obtenir un Devis",
    },
    hero: {
      badge: "Leader de l'Innovation Écologique",
      title1: "Respirez Mieux.",
      title2: "Vivez Plus Vert.",
      subtitle:
        "Révolutionner la climatisation avec une technologie durable de pointe qui offre un confort inégalé tout en protégeant notre planète pour les générations futures.",
      cta1: "Consultation Gratuite",
      cta2: "Découvrir les Solutions",
    },
    stats: {
      customers: "Clients Satisfaits",
      experience: "Années d'Expérience",
      savings: "Économies d'Énergie",
      satisfaction: "Taux de Satisfaction",
    },
    about: {
      badge: "À Propos d'EcoClimatic",
      title: "Pionnier de l'Avenir",
      titleHighlight: "de la Climatisation Écologique et Durable",
      description:
        "Depuis 20 ans, EcoClimatic est le spécialiste de la climatisation écologique en France. Nous ne faisons pas qu'installer des systèmes : nous concevons des solutions globales de climatisation respectueuses de l'environnement, alliant confort, économies d'énergie et innovation. Faites confiance à EcoClimatic pour un air sain, une planète préservée et des performances énergétiques optimales, aussi bien pour les particuliers que pour les professionnels.",
      installations: "Installations Écologiques",
      installationsSubtext: "Résidentiel et commercial",
      energySavings: "Économies d'Énergie",
      energySavingsSubtext: "Générées pour nos clients",
      certification1: "Certifié EPA",
      certification2: "Partenaire ENERGY STAR",
      certification3: "Certifié Bâtiment Vert",
      cta: "Découvrir Notre Mission",
    },
    services: {
      badge: "Nos Services Premium",
      title: "Solutions",
      titleHighlight: "Climatiques Complètes",
      description:
        "De la conception à l'installation, nous livrons des solutions de refroidissement durables qui dépassent les attentes tout en protégeant notre environnement.",
      learnMore: "En Savoir Plus",
    },
    service1: {
      title: "Installation de Climatisation",
      description:
        "Installation professionnelle de systèmes de refroidissement écoénergétiques avec intégration de technologie intelligente.",
      feature1: "Thermostats Intelligents",
      feature2: "Écoénergétique",
      feature3: "Installation Professionnelle",
    },
    service2: {
      title: "Maintenance des Systèmes",
      description: "Programmes de maintenance complets pour assurer des performances optimales et une longévité.",
      feature1: "Inspections Régulières",
      feature2: "Optimisation des Performances",
      feature3: "Support 24/7",
    },
    service3: {
      title: "Smart Controls",
      description: "Advanced climate control systems with AI-powered optimization and remote monitoring.",
      feature1: "AI Optimization",
      feature2: "Remote Control",
      feature3: "Energy Analytics",
    },
    service4: {
      title: "Green Solutions",
      description: "Eco-friendly cooling alternatives that reduce carbon footprint and energy consumption.",
      feature1: "Carbon Neutral",
      feature2: "Renewable Energy",
      feature3: "Eco Certification",
    },
    portfolio: {
      badge: "Nos Travaux Récents",
      title: "Projets",
      titleHighlight: "En Vedette",
      description:
        "Explorez nos dernières installations de refroidissement durables et voyez comment nous faisons la différence.",
      viewAll: "Voir Tous les Projets",
    },
    benefits: {
      badge: "Pourquoi Choisir EcoClimatic",
      title: "Avantages",
      titleHighlight: "Inégalés",
      description:
        "Découvrez les avantages de choisir des solutions de refroidissement durables qui profitent à la fois à vous et à l'environnement.",
    },
    benefit1: {
      title: "Écologique",
      description: "Réduisez votre empreinte carbone avec nos technologies de refroidissement durables.",
      metric: "80% Moins de CO₂",
    },
    benefit2: {
      title: "Écoénergétique",
      description: "Économisez considérablement sur les factures d'énergie avec nos systèmes haute efficacité.",
      metric: "40% d'Économies",
    },
    benefit3: {
      title: "Qualité Premium",
      description: "Équipement de pointe de l'industrie avec garanties étendues et fiabilité.",
      metric: "15+ Années",
    },
    benefit4: {
      title: "Impact Global",
      description: "Rejoignez des milliers de clients qui ont un impact environnemental positif.",
      metric: "2 500+ Maisons",
    },
    testimonials: {
      badge: "Témoignages Clients",
      title: "Ce Que Disent",
      titleHighlight: "Nos Clients",
      description:
        "Expériences réelles de clients satisfaits qui ont choisi des solutions de refroidissement durables.",
    },
    contact: {
      badge: "Commencez Aujourd'hui",
      title: "Prêt à Devenir Vert ?",
      description:
        "Discutons de vos besoins de refroidissement durable et créons une solution personnalisée qui économise de l'argent tout en protégeant l'environnement.",
      phone: {
        title: "Appelez pour une assistance immédiate",
      },
      email: {
        title: "Envoyez-nous vos questions par email",
      },
      address: {
        title: "Visitez notre salle d'exposition",
      },
      form: {
        title: "Obtenez Votre Devis Gratuit",
        firstName: "Prénom",
        lastName: "Nom de Famille",
        email: "Adresse Email",
        phone: "Numéro de Téléphone",
        address: "Adresse de la Propriété",
        message: "Parlez-nous de vos besoins de refroidissement...",
        submit: "Planifier une Consultation Gratuite",
        privacy: "🔒 Vos informations sont sécurisées et confidentielles",
      },
    },
    footer: {
      description:
        "Leader dans la technologie de refroidissement durable. Nous créons des solutions climatiques qui protègent à la fois votre confort et notre planète.",
      services: "Services",
      company: "Entreprise",
      resources: "Ressources",
      copyright: "© 2025 EcoClimatic. Tous droits réservés. | Politique de Confidentialité | Conditions de Service",
      certification: "Partenaire Certifié EPA",
      partner: "Approuvé ENERGY STAR",
    },
  },
}

export default function EcoClimaticWebsite() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [language, setLanguage] = useState("fr")
  const router = useRouter()

  // États pour le formulaire de contact
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Translation function
  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language as keyof typeof translations]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "portfolio", "benefits", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, address, message }),
      });
      if (res.ok) {
        setSuccess(true);
        setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setAddress(""); setMessage("");
      } else {
        const data = await res.json();
        setError(data.error || "Erreur lors de l'envoi du message.");
      }
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'envoi du message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-green-100">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg py-3" : "bg-white/80 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="relative">
              <img
                src="/logo-ecoclimactic.jpg"
                alt="EcoClimatic Logo"
                className="h-12 w-12 rounded-full object-cover shadow-md ring-1 ring-green-200 group-hover:ring-green-400 transition-all duration-300"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">EcoClimatic</div>
              <p className="text-xs text-gray-600">Sustainable Cooling Solutions</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {[
              { name: t("nav.home"), id: "home" },
              { name: t("nav.about"), id: "about" },
              { name: t("nav.services"), id: "services" },
              { name: t("nav.ourWork"), id: "portfolio" },
              { name: t("nav.benefits"), id: "benefits" },
              { name: t("nav.contact"), id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group py-2 ${
                  activeSection === item.id ? "text-green-600" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selector integrated in navbar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600 hover:bg-green-50"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden md:inline flex items-center gap-1">
                    <span>{language === "en" ? "" : ""}</span>
                    {language === "en" ? "English" : "Français"}
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer ${language === "en" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                >
                  <span className="mr-3"></span> English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("fr")}
                  className={`cursor-pointer ${language === "fr" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                >
                  <span className="mr-3"></span> Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-gray-600 hover:text-green-600 hover:bg-green-50"
            >
              <Phone className="h-4 w-4 mr-2" />
              06 50 66 86 00
            </Button>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col space-y-4 pt-8">
                    {[
                      { name: t("nav.home"), id: "home" },
                      { name: t("nav.about"), id: "about" },
                      { name: t("nav.services"), id: "services" },
                      { name: t("nav.ourWork"), id: "portfolio" },
                      { name: t("nav.benefits"), id: "benefits" },
                      { name: t("nav.contact"), id: "contact" },
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-lg text-left font-medium text-gray-700 hover:text-green-600"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-green-100/80 backdrop-blur-sm text-green-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm border border-green-200/50 mb-8">
              <Leaf className="h-4 w-4 mr-2" />🌱 {t("hero.badge")}
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black leading-tight mb-4">
                <span
                  className="block text-green-500"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 8rem)",
                    fontWeight: "900",
                    letterSpacing: "-0.02em",
                  }}
                >
                  climatisation écologique
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Bienvenue sur ecoclimatique, le site dédié à la climatisation respectueuse de l'environnement. Découvrez nos solutions écoclimatiques innovantes pour un confort durable et une planète préservée.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                onClick={() => scrollToSection('contact')}
              >
                <Calendar className="mr-3 h-5 w-5" />
                {t("hero.cta1")}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center"
                onClick={() => (window.location.href = "/solutions")}
              >
                <Wind className="mr-3 h-5 w-5" />
                {t("hero.cta2")}
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Users className="h-8 w-8 text-green-600" />,
                  number: "2,500+",
                  text: t("stats.customers"),
                  bgColor: "bg-white/70",
                },
                {
                  icon: <Award className="h-8 w-8 text-blue-600" />,
                  number: "15+",
                  text: t("stats.experience"),
                  bgColor: "bg-white/70",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-teal-600" />,
                  number: "40%",
                  text: t("stats.savings"),
                  bgColor: "bg-white/70",
                },
                {
                  icon: <Shield className="h-8 w-8 text-purple-600" />,
                  number: "100%",
                  text: t("stats.satisfaction"),
                  bgColor: "bg-white/70",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`${stat.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div className="flex items-center justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center bg-green-100/80 backdrop-blur-sm text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-green-200/50 mb-8">
                  <Globe className="h-4 w-4 mr-2" />
                  {t("about.badge")}
                </div>

                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                  Pionnier de l'Avenir
                  <br />
                  <span className="text-green-600">de la Climatisation Écologique et Durable</span>
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">{t("about.description")}</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl border border-green-200 shadow-lg">
                  <div className="text-4xl font-black text-green-700 mb-2">2,500+</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{t("about.installations")}</div>
                  <div className="text-sm text-gray-600">{t("about.installationsSubtext")}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl border border-blue-200 shadow-lg">
                  <div className="text-4xl font-black text-blue-700 mb-2">$2.5M+</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{t("about.energySavings")}</div>
                  <div className="text-sm text-gray-600">{t("about.energySavingsSubtext")}</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t("about.certification1")}
                </div>
                <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t("about.certification2")}
                </div>
                <div className="flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-200">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t("about.certification3")}
                </div>
              </div>

              {/* CTA Button */}
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                <Heart className="mr-3 h-5 w-5" />
                {t("about.cta")}
              </Button>
            </div>

            {/* Right side - Image with overlay */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 rounded-3xl transform rotate-2 opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-400 to-green-500 rounded-3xl transform -rotate-1 opacity-10"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <img
                    src="https://envirinfos.net/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-23-at-12.54.54-PM.jpeg"
                    alt="EcoClimatic Sustainable Technology"
                    className="h-full w-full object-cover rounded-3xl"
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

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
              <Wrench className="h-4 w-4 mr-2" />
              {t("services.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t("services.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("services.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("services.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:max-w-5xl mx-auto">
            {[
              {
                icon: <Snowflake className="h-10 w-10" />,
                title: t("service1.title"),
                description: t("service1.description"),
                color: "blue",
                features: [t("service1.feature1"), t("service1.feature2"), t("service1.feature3")],
              },
              {
                icon: <Wrench className="h-10 w-10" />,
                title: t("service2.title"),
                description: t("service2.description"),
                color: "green",
                features: [t("service2.feature1"), t("service2.feature2"), t("service2.feature3")],
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden relative"
              >
                <CardContent className="p-8 relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-${service.color}-100 mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <div className={`text-${service.color}-600`}>{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="link"
                    className="text-green-600 font-bold text-lg mt-4 flex items-center gap-2 hover:underline"
                    onClick={() => {
                      if (service.title.includes('Maintenance')) router.push('/maintenance');
                      else if (service.title.includes('Contrôles')) router.push('/controles');
                      else if (service.title.includes('Solutions Vertes')) router.push('/solutions-vertes');
                      else router.push('/climatisation');
                    }}
                  >
                    {t("services.learnMore")} <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-24 px-6 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
              <ImageIcon className="h-4 w-4 mr-2" />
              {t("portfolio.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t("portfolio.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("portfolio.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("portfolio.description")}</p>
          </div>

          <PortfolioGallery />

        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
              <Zap className="h-4 w-4 mr-2" />
              {t("benefits.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t("benefits.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("benefits.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("benefits.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌿",
                title: t("benefit1.title"),
                description: t("benefit1.description"),
                metric: t("benefit1.metric"),
                color: "green",
              },
              {
                icon: "⚡",
                title: t("benefit2.title"),
                description: t("benefit2.description"),
                metric: t("benefit2.metric"),
                color: "yellow",
              },
              {
                icon: "🏆",
                title: t("benefit3.title"),
                description: t("benefit3.description"),
                metric: t("benefit3.metric"),
                color: "blue",
              },
              {
                icon: "🌍",
                title: t("benefit4.title"),
                description: t("benefit4.description"),
                metric: t("benefit4.metric"),
                color: "teal",
              },
            ].map((benefit, idx) => (
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
                  <div
                    className={`inline-flex px-4 py-2 rounded-full bg-${benefit.color}-100 text-${benefit.color}-800 text-sm font-semibold`}
                  >
                    {benefit.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-50/30 to-teal-50/30 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
              <Users className="h-4 w-4 mr-2" />
              {t("testimonials.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t("testimonials.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("testimonials.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("testimonials.description")}</p>
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
                    <div className="text-sm text-gray-600">Annual Savings</div>
                    <div className="text-lg font-bold text-green-600">{testimonial.savings}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white relative overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-white/20 text-white px-4 py-2 font-medium">
                  <Phone className="h-4 w-4 mr-2" />
                  {t("contact.badge")}
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{t("contact.title")}</h2>
                <p className="text-xl mb-8 text-green-100 leading-relaxed">{t("contact.description")}</p>
              </div>

              <div className="space-y-6">
                <a href="tel:0650668600">
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <Phone className="h-6 w-6 text-green-200" />
                    <div>
                      <div className="text-lg font-semibold">06 50 66 86 00</div>
                      <div className="text-sm text-green-100">{t("contact.phone.title")}</div>
                    </div>
                  </div>
                </a>
                <a href="mailto:contact@ecoclimatic.com">
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <Mail className="h-6 w-6 text-blue-200" />
                    <div>
                      <div className="text-lg font-semibold">contact@ecoclimatic.com</div>
                      <div className="text-sm text-blue-100">{t("contact.email.title")}</div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=42+RUE+DU+LANDY+CLICHY+LA+GARENNE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <MapPin className="h-6 w-6 text-teal-200" />
                    <div>
                      <div className="text-lg font-semibold">42 RUE DU LANDY CLICHY LA GARENNE</div>
                      <div className="text-sm text-teal-100">{t("contact.address.title")}</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("contact.form.title")}</h3>
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder={t("contact.form.firstName")}
                      className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                    />
                    <Input
                      placeholder={t("contact.form.lastName")}
                      className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <Input
                    placeholder={t("contact.form.email")}
                    type="email"
                    className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    placeholder={t("contact.form.phone")}
                    className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                  />
                  <Input
                    placeholder={t("contact.form.address")}
                    className="border-gray-200 focus:border-green-500 focus:ring-green-500 h-12"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder={t("contact.form.message")}
                    rows={4}
                    className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    disabled={sending}
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    {sending ? "Envoi..." : t("contact.form.submit")}
                  </Button>
                  {success && <p className="text-center text-green-600">Message envoyé avec succès !</p>}
                  {error && <p className="text-center text-red-600">{error}</p>}
                  <p className="text-center text-sm text-gray-500">{t("contact.form.privacy")}</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/logo-ecoclimactic.jpg"
                  alt="EcoClimatic Logo"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-green-400"
                />
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                    EcoClimatic
                  </h3>
                  <p className="text-sm text-gray-400">Sustainable Cooling Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">{t("footer.description")}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">{t("footer.services")}</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  { name: "AC Installation", href: "/climatisation" },
                  { name: "System Maintenance", href: "/maintenance" },
                  { name: "Smart Thermostats", href: "/solutions" },
                  { name: "Energy Consulting", href: "/solutions" },
                  { name: "Emergency Repair", href: "/contact" },
                ].map(service => (
                  <li key={service.name}>
                    <a href={service.href} className="hover:text-green-400 transition-colors duration-200">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">{t("footer.company")}</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  { name: "About Us", href: "/solutions" },
                  { name: "Our Mission", href: "/solutions" },
                  { name: "Careers", href: "/contact" },
                  { name: "Press", href: "/contact" },
                  { name: "Blog", href: "/solutions" },
                ].map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-green-400 transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400">{t("footer.resources")}</h4>
              <ul className="space-y-3 text-gray-300">
                {[
                  { name: "Energy Calculator", href: "/solutions" },
                  { name: "Maintenance Tips", href: "/maintenance" },
                  { name: "Warranty Info", href: "/contact" },
                  { name: "Support Center", href: "/contact" },
                  { name: "Contact Us", href: "/contact" },
                ].map(resource => (
                  <li key={resource.name}>
                    <a href={resource.href} className="hover:text-green-400 transition-colors duration-200">
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">{t("footer.copyright")}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {t("footer.certification")}
                </span>
                <span>|</span>
                <span>{t("footer.partner")}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
