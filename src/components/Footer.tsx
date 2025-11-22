'use client'

import { Button } from "@/components/ui/button"
import { Calendar, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 relative">
              <Image
                src="/logo.svg"
                alt="Miguel Casares Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-white">Miguel Casares Moreno</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">© {currentYear} Todos los derechos reservados</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/miguelcasares/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Miguel Casares"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400"
              asChild
            >
              <a 
                href="mailto:miguelcasares01@gmail.com" 
                aria-label="Enviar email a Miguel Casares"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
