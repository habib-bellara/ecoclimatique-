// Professional JavaScript for EcoClimatic Website

class EcoClimaticWebsite {
  constructor() {
    this.currentLanguage = "en"
    this.isScrolled = false
    this.activeSection = "home"
    this.portfolioItems = this.initializePortfolioItems()
    this.translations = this.initializeTranslations()

    this.init()
  }

  init() {
    this.setupEventListeners()
    this.setupScrollAnimations()
    this.setupIntersectionObserver()
    this.setupPortfolioModal()
    this.setupLanguageSwitcher()
    this.setupMobileMenu()
    this.setupContactForm()
    this.updateLanguage()
  }

  setupEventListeners() {
    // Scroll events with throttling
    let scrollTimeout
    window.addEventListener("scroll", () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
      scrollTimeout = setTimeout(() => {
        this.handleScroll()
      }, 10)
    })

    // Resize events
    window.addEventListener("resize", this.handleResize.bind(this))

    // Portfolio filter buttons
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", this.handlePortfolioFilter.bind(this))
    })

    // Portfolio items
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      item.addEventListener("click", this.openPortfolioModal.bind(this))
    })
  }

  handleScroll() {
    const scrollY = window.scrollY
    const header = document.getElementById("header")

    // Header scroll effect
    if (scrollY > 50 && !this.isScrolled) {
      this.isScrolled = true
      header.classList.add("scrolled")
    } else if (scrollY <= 50 && this.isScrolled) {
      this.isScrolled = false
      header.classList.remove("scrolled")
    }

    // Active section detection
    this.updateActiveSection()
  }

  updateActiveSection() {
    const sections = ["home", "about", "services", "portfolio", "benefits", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (this.activeSection !== section) {
            this.activeSection = section
            this.updateNavigationState()
          }
          break
        }
      }
    }
  }

  updateNavigationState() {
    // Update desktop navigation
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
      if (link.dataset.section === this.activeSection) {
        link.classList.add("active")
      }
    })

    // Update mobile navigation
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.classList.remove("active")
      if (link.dataset.section === this.activeSection) {
        link.classList.add("active")
      }
    })
  }

  setupScrollAnimations() {
    // Add smooth scroll behavior to navigation links
    document.querySelectorAll('[onclick*="scrollToSection"]').forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault()
        const sectionId = element.getAttribute("onclick").match(/'([^']+)'/)[1]
        this.scrollToSection(sectionId)
      })
    })
  }

  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = document.getElementById("header").offsetHeight
      const targetPosition = element.offsetTop - headerHeight - 20

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")

          // Add staggered animation for child elements
          const children = entry.target.querySelectorAll(
            ".service-card, .stat-card, .benefit-card, .testimonial-card, .portfolio-item",
          )
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.animationDelay = `${index * 0.1}s`
              child.classList.add("animate-on-scroll", "animated")
            }, index * 100)
          })
        }
      })
    }, observerOptions)

    // Observe sections for animations
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("animate-on-scroll")
      observer.observe(section)
    })
  }

  setupPortfolioModal() {
    const modal = document.getElementById("portfolio-modal")
    const closeBtn = document.getElementById("modal-close")
    const prevBtn = document.getElementById("modal-prev")
    const nextBtn = document.getElementById("modal-next")

    if (closeBtn) {
      closeBtn.addEventListener("click", this.closePortfolioModal.bind(this))
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", this.previousPortfolioItem.bind(this))
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", this.nextPortfolioItem.bind(this))
    }

    // Close modal on outside click
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          this.closePortfolioModal()
        }
      })
    }

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (modal && modal.style.display === "flex") {
        switch (e.key) {
          case "Escape":
            this.closePortfolioModal()
            break
          case "ArrowLeft":
            this.previousPortfolioItem()
            break
          case "ArrowRight":
            this.nextPortfolioItem()
            break
        }
      }
    })
  }

  openPortfolioModal(e) {
    const item = e.currentTarget
    const itemId = Number.parseInt(item.dataset.id)
    const portfolioData = this.portfolioItems.find((p) => p.id === itemId)

    if (portfolioData) {
      this.currentPortfolioItem = itemId
      this.updateModalContent(portfolioData)

      const modal = document.getElementById("portfolio-modal")
      if (modal) {
        modal.style.display = "flex"
        document.body.style.overflow = "hidden"

        // Animate modal in
        setTimeout(() => {
          modal.style.opacity = "1"
        }, 10)
      }
    }
  }

  closePortfolioModal() {
    const modal = document.getElementById("portfolio-modal")
    if (modal) {
      modal.style.opacity = "0"
      setTimeout(() => {
        modal.style.display = "none"
        document.body.style.overflow = ""
      }, 300)
    }
  }

  updateModalContent(item) {
    const elements = {
      image: document.getElementById("modal-image"),
      title: document.getElementById("modal-title"),
      location: document.getElementById("modal-location"),
      type: document.getElementById("modal-type"),
      description: document.getElementById("modal-description"),
      tags: document.getElementById("modal-tags"),
    }

    if (elements.image) elements.image.src = item.image
    if (elements.title) elements.title.textContent = this.t(item.titleKey)
    if (elements.location) elements.location.textContent = this.t(item.locationKey)
    if (elements.type) elements.type.textContent = this.t(item.typeKey)
    if (elements.description) elements.description.textContent = this.t(item.descriptionKey)

    if (elements.tags) {
      elements.tags.innerHTML = item.tags.map((tag) => `<span class="modal-tag">${tag}</span>`).join("")
    }
  }

  previousPortfolioItem() {
    const currentIndex = this.portfolioItems.findIndex((item) => item.id === this.currentPortfolioItem)
    const previousIndex = (currentIndex - 1 + this.portfolioItems.length) % this.portfolioItems.length
    this.currentPortfolioItem = this.portfolioItems[previousIndex].id
    this.updateModalContent(this.portfolioItems[previousIndex])
  }

  nextPortfolioItem() {
    const currentIndex = this.portfolioItems.findIndex((item) => item.id === this.currentPortfolioItem)
    const nextIndex = (currentIndex + 1) % this.portfolioItems.length
    this.currentPortfolioItem = this.portfolioItems[nextIndex].id
    this.updateModalContent(this.portfolioItems[nextIndex])
  }

  setupLanguageSwitcher() {
    const languageButtons = document.querySelectorAll("[data-lang]")
    languageButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const lang = e.currentTarget.dataset.lang
        this.setLanguage(lang)
      })
    })
  }

  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLanguage = lang
      this.updateLanguage()
      this.updateLanguageUI()
    }
  }

  updateLanguage() {
    document.querySelectorAll("[id]").forEach((element) => {
      const key = element.id.replace(/-/g, ".")
      const translation = this.t(key)
      if (translation && translation !== key) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translation
        } else {
          element.textContent = translation
        }
      }
    })
  }

  updateLanguageUI() {
    // Update language switcher display
    const currentLangDisplay = document.getElementById("current-language")
    if (currentLangDisplay) {
      currentLangDisplay.textContent = this.currentLanguage === "en" ? "English" : "Français"
    }

    // Update active language buttons
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.classList.remove("active")
      if (btn.dataset.lang === this.currentLanguage) {
        btn.classList.add("active")
      }
    })
  }

  setupMobileMenu() {
    const toggle = document.getElementById("mobile-menu-toggle")
    const menu = document.getElementById("mobile-menu")

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("active")
        document.body.style.overflow = menu.classList.contains("active") ? "hidden" : ""
      })
    }

    // Close mobile menu function
    window.closeMobileMenu = () => {
      if (menu) {
        menu.classList.remove("active")
        document.body.style.overflow = ""
      }
    }
  }

  setupContactForm() {
    const form = document.getElementById("contact-form")
    if (form) {
      form.addEventListener("submit", this.handleContactSubmit.bind(this))
    }
  }

  handleContactSubmit(e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    // Simple validation
    if (!data.firstName || !data.lastName || !data.email) {
      this.showNotification("Please fill in all required fields.", "error")
      return
    }

    // Simulate form submission
    this.showNotification("Thank you! We'll contact you soon.", "success")
    e.target.reset()
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.textContent = message

    // Style the notification
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "16px 24px",
      borderRadius: "8px",
      color: "white",
      fontWeight: "600",
      zIndex: "1000",
      transform: "translateX(100%)",
      transition: "transform 0.3s ease-in-out",
      backgroundColor: type === "success" ? "#16a34a" : type === "error" ? "#dc2626" : "#3b82f6",
    })

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 10)

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 5000)
  }

  handleResize() {
    // Handle responsive behavior
    const mobileMenu = document.getElementById("mobile-menu")
    if (window.innerWidth >= 768 && mobileMenu && mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    }
  }

  handlePortfolioFilter(e) {
    // Update active filter button
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"))
    e.currentTarget.classList.add("active")

    // Filter logic would go here for actual filtering
    // For now, we'll just show all items
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      item.style.display = "block"
    })
  }

  // Translation helper
  t(key) {
    const keys = key.split(".")
    let value = this.translations[this.currentLanguage]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  initializePortfolioItems() {
    return [
      {
        id: 1,
        image: "work-1.jpg",
        titleKey: "portfolio.item1.title",
        descriptionKey: "portfolio.item1.description",
        locationKey: "portfolio.item1.location",
        typeKey: "portfolio.item1.type",
        tags: ["Wall-Mounted", "Mini-Split", "Daikin", "Energy Star"],
      },
      {
        id: 2,
        image: "work-2.jpg",
        titleKey: "portfolio.item2.title",
        descriptionKey: "portfolio.item2.description",
        locationKey: "portfolio.item2.location",
        typeKey: "portfolio.item2.type",
        tags: ["Floor Console", "Space-Saving", "Dual-Function"],
      },
      {
        id: 3,
        image: "work-3.jpg",
        titleKey: "portfolio.item3.title",
        descriptionKey: "portfolio.item3.description",
        locationKey: "portfolio.item3.location",
        typeKey: "portfolio.item3.type",
        tags: ["Outdoor Unit", "Daikin", "Professional Mounting"],
      },
      {
        id: 4,
        image: "work-4.jpg",
        titleKey: "portfolio.item4.title",
        descriptionKey: "portfolio.item4.description",
        locationKey: "portfolio.item4.location",
        typeKey: "portfolio.item4.type",
        tags: ["Ceiling Mount", "Multi-Level", "Custom Installation"],
      },
      {
        id: 5,
        image: "work-5.jpg",
        titleKey: "portfolio.item5.title",
        descriptionKey: "portfolio.item5.description",
        locationKey: "portfolio.item5.location",
        typeKey: "portfolio.item5.type",
        tags: ["Exterior Work", "Line Set", "Professional Finish"],
      },
    ]
  }

  initializeTranslations() {
    return {
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
          title: "Pioneering the Future of",
          titleHighlight: "Sustainable Cooling",
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
          titleHighlight: "HVAC Ecosystem",
          description:
            "From cutting-edge installations to intelligent maintenance, we provide end-to-end sustainable climate solutions that exceed expectations.",
          learnMore: "Learn More",
        },
        portfolio: {
          badge: "Our Recent Work",
          title: "Explore Our",
          titleHighlight: "Installation Portfolio",
          description:
            "Browse through our recent projects showcasing our expertise in sustainable air conditioning solutions for homes and businesses.",
          filter: {
            all: "All Projects",
            residential: "Residential",
            commercial: "Commercial",
            wall: "Wall Units",
            floor: "Floor Units",
          },
          viewAll: "View All Projects",
          item1: {
            title: "Pompes à chaleur",
            description: "Energy-efficient wall-mounted mini-split installation in a modern apartment.",
            location: "Urban Residences, Downtown",
            type: "Residential",
          },
          item2: {
            title: "Climatisation",
            description:
              "Low-profile floor console unit providing optimal heating and cooling for spaces with limited wall area.",
            location: "Coastal Villas, Beachfront",
            type: "Residential",
          },
          item3: {
            title: "Outdoor Condenser Unit",
            description:
              "High-efficiency Daikin outdoor unit installation with proper clearance and mounting for optimal performance.",
            location: "Skyview Apartments, Midtown",
            type: "Multi-Family",
          },
          item4: {
            title: "Ceiling Cassette Installation",
            description:
              "Professional installation of a ceiling-mounted air conditioning system in a multi-level home.",
            location: "Highland Estates, North District",
            type: "Residential",
          },
          item5: {
            title: "Exterior Line Set Installation",
            description:
              "Clean, professional exterior line set installation with proper weatherproofing and aesthetic considerations.",
            location: "Sunnyvale Cottages, West End",
            type: "Residential",
          },
          modal: {
            projectType: "PROJECT TYPE",
            description: "DESCRIPTION",
            features: "FEATURES",
            request: "Request Similar Installation",
          },
        },
        benefits: {
          badge: "The EcoClimatic Advantage",
          title: "Why Industry Leaders",
          titleHighlight: "Choose Us",
          description:
            "Experience the perfect synergy of cutting-edge technology, environmental responsibility, and unmatched customer satisfaction.",
        },
        testimonials: {
          badge: "Customer Success Stories",
          title: "Trusted by",
          titleHighlight: "Thousands",
          description: "Discover why homeowners and businesses choose EcoClimatic for their sustainable cooling needs.",
          annualSavings: "Annual Savings:",
        },
        contact: {
          badge: "Get Started Today",
          title: "Ready to Transform Your Space?",
          description:
            "Join thousands of satisfied customers who've made the switch to sustainable cooling. Get your free consultation and discover how much you can save.",
          feature1: {
            title: "24/7 Emergency Service",
            description: "Round-the-clock support when you need it most",
          },
          feature2: {
            title: "Lifetime Warranty",
            description: "Comprehensive coverage on all installations",
          },
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
            title: "Get Your Free Energy Assessment",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email Address",
            phone: "Phone Number",
            address: "Property Address",
            message: "Tell us about your cooling needs and energy goals...",
            submit: "Schedule Free Consultation",
            privacy: "🔒 Your information is secure and will never be shared",
          },
        },
        footer: {
          description:
            "Leading the revolution in sustainable air conditioning with cutting-edge technology that protects both your comfort and our planet.",
          services: "Services",
          company: "Company",
          resources: "Resources",
          copyright: "© 2025 EcoClimatic. All rights reserved. | Privacy Policy | Terms of Service",
          certification: "Carbon Neutral Certified",
          partner: "ENERGY STAR Partner",
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
          badge: "Leader en Innovation Écologique",
          title1: "Respirez Mieux.",
          title2: "Vivez Plus Vert.",
          subtitle:
            "Révolutionner la climatisation avec une technologie durable de pointe qui offre un confort inégalé tout en protégeant notre planète pour les générations futures.",
          cta1: "Planifier une Consultation Gratuite",
          cta2: "Explorer nos Solutions",
        },
        stats: {
          customers: "Clients Satisfaits",
          experience: "Années d'Expérience",
          savings: "Économies d'Énergie",
          satisfaction: "Taux de Satisfaction",
        },
        about: {
          badge: "À Propos d'EcoClimatic",
          title: "Pionnier de l'Avenir de la",
          titleHighlight: "Climatisation Durable",
          description:
            "Depuis plus de 15 ans, EcoClimatic est à l'avant-garde de l'innovation durable en CVC. Nous n'installons pas seulement des systèmes de climatisation – nous créons des solutions climatiques complètes qui harmonisent confort, efficacité et gestion environnementale.",
          installations: "Installations Éco",
          installationsSubtext: "Résidentielles et commerciales",
          energySavings: "Économies d'Énergie",
          energySavingsSubtext: "Générées pour nos clients",
          certification1: "Certifié EPA",
          certification2: "Partenaire ENERGY STAR",
          certification3: "Certifié Bâtiment Vert",
          cta: "Découvrir Notre Mission",
        },
        services: {
          badge: "Nos Services Premium",
          title: "Écosystème",
          titleHighlight: "CVC Complet",
          description:
            "Des installations de pointe à la maintenance intelligente, nous fournissons des solutions climatiques durables de bout en bout qui dépassent les attentes.",
          learnMore: "En Savoir Plus",
        },
        portfolio: {
          badge: "Nos Réalisations Récentes",
          title: "Découvrez Notre",
          titleHighlight: "Portfolio d'Installations",
          description:
            "Parcourez nos projets récents démontrant notre expertise en solutions de climatisation durables pour maisons et entreprises.",
          filter: {
            all: "Tous les Projets",
            residential: "Résidentiel",
            commercial: "Commercial",
            wall: "Unités Murales",
            floor: "Unités au Sol",
          },
          viewAll: "Voir Tous les Projets",
          item1: {
            title: "Pompes à chaleur",
            description: "Installation mini-split murale écoénergétique dans un appartement moderne.",
            location: "Résidences Urbaines, Centre-ville",
            type: "Résidentiel",
          },
          item2: {
            title: "Climatisation",
            description:
              "Unité console au sol à profil bas offrant un chauffage et un refroidissement optimaux pour les espaces à surface murale limitée.",
            location: "Villas Côtières, Bord de Mer",
            type: "Résidentiel",
          },
          item3: {
            title: "Unité de Condensation Extérieure",
            description:
              "Installation d'unité extérieure Daikin à haute efficacité avec dégagement et montage appropriés pour des performances optimales.",
            location: "Appartements Skyview, Centre-ville",
            type: "Multi-Familial",
          },
          item4: {
            title: "Installation Cassette Plafond",
            description:
              "Installation professionnelle d'un système de climatisation monté au plafond dans une maison à plusieurs niveaux.",
            location: "Highland Estates, District Nord",
            type: "Résidentiel",
          },
          item5: {
            title: "Installation Ligne Extérieure",
            description:
              "Installation propre et professionnelle de lignes extérieures avec imperméabilisation appropriée et considérations esthétiques.",
            location: "Cottages Sunnyvale, West End",
            type: "Résidentiel",
          },
          modal: {
            projectType: "TYPE DE PROJET",
            description: "DESCRIPTION",
            features: "CARACTÉRISTIQUES",
            request: "Demander une Installation Similaire",
          },
        },
        benefits: {
          badge: "L'Avantage EcoClimatic",
          title: "Pourquoi les Leaders de l'Industrie",
          titleHighlight: "Nous Choisissent",
          description:
            "Expérimentez la synergie parfaite entre technologie de pointe, responsabilité environnementale et satisfaction client inégalée.",
        },
        testimonials: {
          badge: "Histoires de Réussite Clients",
          title: "Approuvé par",
          titleHighlight: "des Milliers",
          description:
            "Découvrez pourquoi les propriétaires et les entreprises choisissent EcoClimatic pour leurs besoins en climatisation durable.",
          annualSavings: "Économies Annuelles:",
        },
        contact: {
          badge: "Commencez Aujourd'hui",
          title: "Prêt à Transformer Votre Espace?",
          description:
            "Rejoignez des milliers de clients satisfaits qui ont fait le passage à la climatisation durable. Obtenez votre consultation gratuite et découvrez combien vous pouvez économiser.",
          feature1: {
            title: "Service d'Urgence 24/7",
            description: "Support à toute heure quand vous en avez le plus besoin",
          },
          feature2: {
            title: "Garantie à Vie",
            description: "Couverture complète sur toutes les installations",
          },
          phone: {
            title: "Appelez pour une assistance immédiate",
          },
          email: {
            title: "Envoyez-nous vos questions",
          },
          address: {
            title: "Visitez notre showroom",
          },
          form: {
            title: "Obtenez Votre Évaluation Énergétique Gratuite",
            firstName: "Prénom",
            lastName: "Nom",
            email: "Adresse Email",
            phone: "Numéro de Téléphone",
            address: "Adresse de la Propriété",
            message: "Parlez-nous de vos besoins en climatisation et de vos objectifs énergétiques...",
            submit: "Planifier une Consultation Gratuite",
            privacy: "🔒 Vos informations sont sécurisées et ne seront jamais partagées",
          },
        },
        footer: {
          description:
            "À la tête de la révolution en climatisation durable avec une technologie de pointe qui protège à la fois votre confort et notre planète.",
          services: "Services",
          company: "Entreprise",
          resources: "Ressources",
          copyright:
            "© 2025 EcoClimatic. Tous droits réservés. | Politique de Confidentialité | Conditions d'Utilisation",
          certification: "Certifié Neutre en Carbone",
          partner: "Partenaire ENERGY STAR",
        },
      },
    }
  }
}

// Global functions for backward compatibility
window.scrollToSection = (sectionId) => {
  if (window.ecoClimaticWebsite) {
    window.ecoClimaticWebsite.scrollToSection(sectionId)
  }
}

window.closeMobileMenu = () => {
  const menu = document.getElementById("mobile-menu")
  if (menu) {
    menu.classList.remove("active")
    document.body.style.overflow = ""
  }
}

// Initialize the website when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.ecoClimaticWebsite = new EcoClimaticWebsite()
})

// Performance optimization: Preload critical resources
window.addEventListener("load", () => {
  // Preload portfolio images
  const portfolioImages = ["work-1.jpg", "work-2.jpg", "work-3.jpg", "work-4.jpg", "work-5.jpg"]
  portfolioImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })
})
