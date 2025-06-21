"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { PortfolioGallery } from "@/components/portfolio-gallery"
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
  Calendar,
  ImageIcon,
  ChevronDown,
  Menu,
} from "lucide-react"

export default function EcoClimaticWebsite() {
  const [language, setLanguage] = useState("fr")
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()

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
          "For over 15 years, EcoClimatic has been at the forefront of sustainable HVAC innovation. We don't just install air conditioning systems – we create comprehensive climate solutions that harmonize comfort, efficiency, and environmental stewardship.",
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
          "Depuis plus de 15 ans, EcoClimatic est le spécialiste de la climatisation écologique en France. Nous ne faisons pas qu'installer des systèmes : nous concevons des solutions globales de climatisation respectueuses de l'environnement, alliant confort, économies d'énergie et innovation. Faites confiance à EcoClimatic pour un air sain, une planète préservée et des performances énergétiques optimales, aussi bien pour les particuliers que pour les professionnels.",
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
      portfolio: {
        badge: "Nos Réalisations",
        title: "Projets",
        titleHighlight: "en Vedette",
        description: "Découvrez nos dernières installations de refroidissement durable et voyez comment nous faisons la différence.",
        viewAll: "Voir tous les projets",
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
        description: "Économisez considérablement sur vos factures d'énergie avec nos systèmes à haute efficacité.",
        metric: "40% d'Économies",
      },
      benefit3: {
        title: "Qualité Supérieure",
        description: "Équipement de pointe avec garanties prolongées et fiabilité.",
        metric: "15+ Ans",
      },
      benefit4: {
        title: "Impact Mondial",
        description: "Rejoignez des milliers de clients qui ont un impact environnemental positif.",
        metric: "2,500+ Foyers",
      },
      testimonials: {
        badge: "Témoignages Clients",
        title: "Ce Que Disent",
        titleHighlight: "Nos Clients",
        description: "Expériences réelles de clients satisfaits qui ont choisi des solutions de refroidissement durables.",
      },
      contact: {
        badge: "Commencez Aujourd'hui",
        title: "Prêt à Passer au Vert ?",
        description:
          "Discutons de vos besoins en refroidissement durable et créons une solution personnalisée qui vous fera économiser de l'argent tout en protégeant l'environnement.",
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
          lastName: "Nom",
          email: "Adresse e-mail",
          phone: "Numéro de téléphone",
          address: "Adresse de la propriété",
          message: "Parlez-nous de vos besoins en climatisation...",
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

  const t = (key: string) => {
    const keys = key.split(".")
    let langObj: any = translations[language as keyof typeof translations]
    for (const k of keys) {
      if (langObj) {
        langObj = langObj[k]
      } else {
        return key
      }
    }
    return langObj || key
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = ["home", "about", "services", "portfolio", "benefits", "contact"]
      const currentSection = sections.find(id => {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError("")
    setSuccess(false)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, address, message }),
      })
      const result = await response.json()
      if (result.success) {
        setSuccess(true)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setAddress("")
        setMessage("")
      } else {
        setError(result.error || "An error occurred.")
      }
    } catch (err) {
      setError("A connection error occurred.")
    }
    setSending(false)
  }

  const testimonials = [
    {
      name: "Jean Dupont",
      location: "Paris, France",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "EcoClimatic a transformé notre maison. Le nouveau système est silencieux, efficace et nos factures d'énergie ont considérablement baissé. Service client exceptionnel !",
      rating: 5,
    },
    {
      name: "Marie Leclerc",
      location: "Lyon, France",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "L'installation a été rapide et professionnelle. L'équipe a été très compétente et a répondu à toutes nos questions. Nous sommes ravis de notre investissement durable.",
      rating: 5,
    },
    {
      name: "Thomas Dubois",
      location: "Marseille, France",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      text: "J'étais sceptique au début, mais la différence est incroyable. Un confort optimal toute l'année et un impact réduit sur l'environnement. Je recommande vivement.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src="/logo-ecoclimactic.jpg"
              alt="EcoClimatic Logo"
              className="h-12 w-12 rounded-full object-cover transition-all duration-300"
            />
            <h1
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              EcoClimatic
            </h1>
          </div>
          <nav className="hidden lg:flex space-x-8">
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
                className={`transition-colors duration-300 font-medium relative group py-2 ${
                  isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-300"
                } ${activeSection === item.id ? (isScrolled ? "text-green-600" : "text-green-300") : ""}`}
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
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => scrollToSection("contact")}
              className={`hidden lg:flex transition-all duration-300 ${
                isScrolled
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 text-white"
              }`}
            >
              {t("nav.getQuote")}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 hover:bg-white/20 ${
                    isScrolled ? "text-gray-600 hover:text-green-600" : "text-white hover:text-white"
                  }`}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`transition-colors duration-300 hover:bg-white/20 ${
                      isScrolled ? "text-gray-600 hover:text-green-600" : "text-white hover:text-white"
                    }`}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gray-900 text-white border-l-gray-800">
                  <div className="flex flex-col space-y-6 pt-12">
                    {[
                      { name: t("nav.home"), id: "home" },
                      { name: t("nav.about"), id: "about" },
                      { name: t("nav.services"), id: "services" },
                      { name: t("nav.ourWork"), id: "portfolio" },
                      { name: t("nav.benefits"), id: "benefits" },
                      { name: t("nav.contact"), id: "contact" },
                      { name: t("nav.getQuote"), id: "contact" },
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id)
                        }}
                        className="text-2xl font-semibold text-left hover:text-green-400 transition-colors duration-300"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/ecoclimactic-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <Badge className="mb-6 bg-white/20 text-white px-4 py-2 font-medium backdrop-blur-sm border border-white/30">
            <Leaf className="h-4 w-4 mr-2" />
            {t("hero.badge")}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            {t("hero.title1")} <br />
            <span className="bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">{t("hero.subtitle")}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-lg px-8 py-6"
              onClick={() => scrollToSection("contact")}
            >
              {t("hero.cta1")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg px-8 py-6"
              onClick={() => router.push("/solutions")}
            >
              {t("hero.cta2")}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1,500+", label: t("stats.customers"), icon: <Users /> },
              { value: "15+", label: t("stats.experience"), icon: <Award /> },
              { value: "30%", label: t("stats.savings"), icon: <TrendingUp /> },
              { value: "98%", label: t("stats.satisfaction"), icon: <Star /> },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-4xl text-green-600 mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 font-medium">
              <Leaf className="h-4 w-4 mr-2" />
              {t("about.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t("about.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("about.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">{t("about.description")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-green-600">5,000+</h3>
                <p className="font-semibold text-gray-800 mt-1">{t("about.installations")}</p>
                <p className="text-sm text-gray-500">{t("about.installationsSubtext")}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-green-600">~40%</h3>
                <p className="font-semibold text-gray-800 mt-1">{t("about.energySavings")}</p>
                <p className="text-sm text-gray-500">{t("about.energySavingsSubtext")}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Badge variant="secondary" className="text-base py-2 px-4">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> {t("about.certification1")}
              </Badge>
              <Badge variant="secondary" className="text-base py-2 px-4">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> {t("about.certification2")}
              </Badge>
              <Badge variant="secondary" className="text-base py-2 px-4">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" /> {t("about.certification3")}
              </Badge>
            </div>
          </div>
          <div className="relative h-96 lg:h-auto">
            <img
              src="/ecoclimactic-about.png"
              alt="EcoClimatic team member installing an AC unit"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 font-medium">
              <Wrench className="h-4 w-4 mr-2" />
              {t("services.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              {t("services.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("services.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">{t("services.description")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Snowflake className="h-8 w-8 text-blue-500" />,
                title: t("service1.title"),
                description: t("service1.description"),
                features: [t("service1.feature1"), t("service1.feature2"), t("service1.feature3")],
                link: "/climatisation",
              },
              {
                icon: <Wrench className="h-8 w-8 text-green-500" />,
                title: t("service2.title"),
                description: t("service2.description"),
                features: [t("service2.feature1"), t("service2.feature2"), t("service2.feature3")],
                link: "/maintenance",
              },
            ].map(service => (
              <Card
                key={service.title}
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-gray-100 rounded-lg">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2 text-gray-700">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-green-600 font-bold mt-6 flex items-center gap-2"
                        onClick={() => router.push(service.link)}
                      >
                        {t("services.learnMore")} <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 font-medium">
              <ImageIcon className="h-4 w-4 mr-2" />
              {t("portfolio.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              {t("portfolio.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("portfolio.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">{t("portfolio.description")}</p>
          </div>
          <PortfolioGallery />
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 font-medium">
              <Zap className="h-4 w-4 mr-2" />
              {t("benefits.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              {t("benefits.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("benefits.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">{t("benefits.description")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌿",
                title: t("benefit1.title"),
                description: t("benefit1.description"),
                metric: t("benefit1.metric"),
              },
              {
                icon: "⚡️",
                title: t("benefit2.title"),
                description: t("benefit2.description"),
                metric: t("benefit2.metric"),
              },
              {
                icon: "🏆",
                title: t("benefit3.title"),
                description: t("benefit3.description"),
                metric: t("benefit3.metric"),
              },
              {
                icon: "🌍",
                title: t("benefit4.title"),
                description: t("benefit4.description"),
                metric: t("benefit4.metric"),
              },
            ].map(benefit => (
              <Card key={benefit.title} className="text-center p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
                <p className="text-green-600 font-bold text-2xl mt-4">{benefit.metric}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 font-medium">
              <Star className="h-4 w-4 mr-2" />
              {t("testimonials.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              {t("testimonials.title")}{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {t("testimonials.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">{t("testimonials.description")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <Card key={testimonial.name} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white px-4 py-2 font-medium">
              <Phone className="h-4 w-4 mr-2" />
              {t("contact.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">{t("contact.title")}</h2>
            <p className="text-lg text-green-100">{t("contact.description")}</p>
            <div className="space-y-4">
              <a
                href="tel:+33784789910"
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="h-6 w-6" />
                <div>
                  <div className="font-semibold">(+33) 7 84 78 99 10</div>
                  <div className="text-sm text-green-100">{t("contact.phone.title")}</div>
                </div>
              </a>
              <a
                href="mailto:ecoclimatique0@gmail.com"
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="h-6 w-6" />
                <div>
                  <div className="font-semibold">ecoclimatique0@gmail.com</div>
                  <div className="text-sm text-green-100">{t("contact.email.title")}</div>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=France,Paris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <MapPin className="h-6 w-6" />
                <div>
                  <div className="font-semibold">France, Paris</div>
                  <div className="text-sm text-green-100">{t("contact.address.title")}</div>
                </div>
              </a>
            </div>
          </div>
          <Card className="bg-white/95 backdrop-blur-sm text-gray-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">{t("contact.form.title")}</h3>
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={t("contact.form.firstName")}
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                  />
                  <Input
                    placeholder={t("contact.form.lastName")}
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                  />
                </div>
                <Input
                  type="email"
                  placeholder={t("contact.form.email")}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <Input
                  placeholder={t("contact.form.phone")}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
                <Input
                  placeholder={t("contact.form.address")}
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  required
                />
                <Textarea
                  placeholder={t("contact.form.message")}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white"
                  disabled={sending}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {sending ? "Envoi..." : t("contact.form.submit")}
                </Button>
                {success && <p className="text-center text-green-600">Message sent successfully!</p>}
                {error && <p className="text-center text-red-600">{error}</p>}
                <p className="text-center text-xs text-gray-500">{t("contact.form.privacy")}</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/logo-ecoclimactic.jpg"
                alt="EcoClimatic Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold">EcoClimatic</h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-green-400">{t("footer.services")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  AC Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  System Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Smart Thermostats
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Energy Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Emergency Repair
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-green-400">{t("footer.company")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-green-400">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Energy Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Maintenance Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Warranty Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1 text-green-500" /> {t("footer.certification")}
            </span>
            <span>|</span>
            <span>{t("footer.partner")}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
