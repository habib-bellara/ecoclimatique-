"use client"

import { Badge } from "@/components/ui/badge"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { ImageIcon } from "lucide-react"

export default function RealisationsPage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-green-50/30 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-4 py-2 font-medium">
            <ImageIcon className="h-4 w-4 mr-2" />
            Nos Travaux Récents
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Climatisation : quelques-unes de nos réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explorez notre portfolio pour voir comment nous avons transformé les projets de nos clients, témoignant de notre expertise en climatisation.
          </p>
        </div>

        <PortfolioGallery />
      </div>
    </section>
  )
}


