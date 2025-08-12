"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Wrench, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-9xl font-black text-gray-300">404</h1>
        <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
          Oups! La page que vous cherchez n'existe pas.
        </p>
        <p className="text-gray-600 mt-4 mb-8">
          Il semble que le lien soit rompu ou que la page ait été supprimée. Ne vous inquiétez pas, nous pouvons vous aider à retrouver votre chemin.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Home className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </Button>
          </Link>
          <Link href="/maintenance">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Wrench className="mr-2 h-5 w-5" />
              Demander une maintenance
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="ghost">
              <Phone className="mr-2 h-5 w-5" />
              Nous Contacter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 