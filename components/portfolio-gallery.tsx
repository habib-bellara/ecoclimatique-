"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerClose } from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useMobile } from "@/components/ui/use-mobile"

interface PortfolioItem {
  id: number
  image: string
  titleKey: string
  descriptionKey: string
  locationKey: string
  typeKey: string
  tags: string[]
}

export function PortfolioGallery() {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null)
  const { t } = useLanguage()
  const isMobile = useMobile()

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: "/images/img1.jpg",
      titleKey: "portfolio.item1.title",
      descriptionKey: "portfolio.item1.description",
      locationKey: "portfolio.item1.location",
      typeKey: "portfolio.item1.type",
      tags: ["Wall-Mounted", "Mini-Split", "Daikin", "Energy Star"],
    },
    {
      id: 2,
      image: "/images/img2.jpg",
      titleKey: "portfolio.item2.title",
      descriptionKey: "portfolio.item2.description",
      locationKey: "portfolio.item2.location",
      typeKey: "portfolio.item2.type",
      tags: ["Floor Console", "Space-Saving", "Dual-Function"],
    },
    {
      id: 3,
      image: "/images/img3.jpg",
      titleKey: "portfolio.item3.title",
      descriptionKey: "portfolio.item3.description",
      locationKey: "portfolio.item3.location",
      typeKey: "portfolio.item3.type",
      tags: ["Outdoor Unit", "Daikin", "Professional Mounting"],
    },
    {
      id: 4,
      image: "/images/img4.jpg",
      titleKey: "portfolio.item4.title",
      descriptionKey: "portfolio.item4.description",
      locationKey: "portfolio.item4.location",
      typeKey: "portfolio.item4.type",
      tags: ["Ceiling Mount", "Multi-Level", "Custom Installation"],
    },
    {
      id: 5,
      image: "/images/img5.jpg",
      titleKey: "portfolio.item5.title",
      descriptionKey: "portfolio.item5.description",
      locationKey: "portfolio.item5.location",
      typeKey: "portfolio.item5.type",
      tags: ["Exterior Work", "Line Set", "Professional Finish"],
    },
  ]

  const handleOpenImage = (item: PortfolioItem) => {
    setSelectedImage(item)
    setOpen(true)
  }

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = portfolioItems.findIndex((item) => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % portfolioItems.length
    setSelectedImage(portfolioItems[nextIndex])
  }

  const handlePrevious = () => {
    if (!selectedImage) return
    const currentIndex = portfolioItems.findIndex((item) => item.id === selectedImage.id)
    const previousIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length
    setSelectedImage(portfolioItems[previousIndex])
  }

  const PortfolioModalContent = () => (
    <>
      {selectedImage && (
        <div className="flex flex-col md:flex-row h-full">
          <div className="relative w-full md:w-2/3 bg-black">
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={t(selectedImage.titleKey)}
              className="w-full h-auto object-contain"
            />
            <div className="absolute top-2 right-2 flex gap-2 z-50">
                <Button size="icon" variant="ghost" className="text-white hover:bg-black/20" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
              <Button
                size="icon"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/40 border-white/30"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/40 border-white/30"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900">{t(selectedImage.titleKey)}</h2>
            <p className="text-sm text-gray-500 mt-1">{t(selectedImage.locationKey)}</p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">{t("portfolio.modal.projectType")}</h3>
                <p className="text-base font-medium text-gray-900">{t(selectedImage.typeKey)}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">{t("portfolio.modal.description")}</h3>
                <p className="text-base text-gray-700">{t(selectedImage.descriptionKey)}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">{t("portfolio.modal.features")}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedImage.tags.map((tag, index) => (
                    <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white">
                {t("portfolio.modal.request")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white"
            onClick={() => handleOpenImage(item)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={t(item.titleKey)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{t(item.locationKey)}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {t(item.typeKey)}
                </Badge>
                {item.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {tag}
                  </Badge>
                ))}
                {item.tags.length > 2 && (
                  <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                    +{item.tags.length - 2}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isMobile ? (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent className="bg-white p-0 border-0">
                <PortfolioModalContent />
            </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white/95 backdrop-blur-md border-0">
            <PortfolioModalContent />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
