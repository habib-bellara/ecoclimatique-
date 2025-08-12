"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe, Menu, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll for styling parity with the home header
  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/a-propos" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.ourWork"), href: "/realisations" },
    { label: t("nav.benefits"), href: "/avantages" },
    { label: t("nav.contact"), href: "/contact" },
  ]

  const serviceSubItems = [
    { label: "Installation de Climatisation", href: "/installation" },
    { label: "Maintenance des Systèmes", href: "/maintenance" },
    { label: "Dépannage", href: "/depannage" },
    { label: "Solutions durables", href: "/solutions" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg py-3" : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src="/logo-ecoclimactic.jpg"
              alt="EcoClimatic Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover shadow-md ring-1 ring-green-200 group-hover:ring-green-400 transition-all duration-300"
            />
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900">EcoClimatic</div>
            <p className="text-xs text-gray-600">Sustainable Cooling Solutions</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            item.href === "/services" ? (
              <NavigationMenu key={item.href}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-1 p-3 md:w-[280px]">
                        {serviceSubItems.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full bg-green-500 transition-all duration-300" />
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 hover:bg-green-50"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline flex items-center gap-1">
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
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("fr")}
                className={`cursor-pointer ${language === "fr" ? "bg-green-50 text-green-600 font-medium" : ""}`}
              >
                Français
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex text-gray-600 hover:text-green-600 hover:bg-green-50"
            asChild
          >
            <a href="tel:0650668600">
              <Phone className="h-4 w-4 mr-2" />
              06 50 66 86 00
            </a>
          </Button>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <MobileMenu navItems={navItems} serviceSubItems={serviceSubItems} />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu({
  navItems,
  serviceSubItems,
}: {
  navItems: Array<{ label: string; href: string }>
  serviceSubItems: Array<{ label: string; href: string }>
}) {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col space-y-3 pt-8">
          {navItems.map((item) => (
            item.href === "/services" ? (
              <div key={item.href} className="space-y-2">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-green-600"
                >
                  {item.label}
                </Link>
                <div className="flex flex-col pl-4 space-y-2">
                  {serviceSubItems.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="text-sm text-gray-600 hover:text-green-600"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-left font-medium text-gray-700 hover:text-green-600"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
} 