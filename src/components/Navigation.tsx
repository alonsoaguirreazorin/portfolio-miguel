'use client'

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (page: string) => {
    if (page === 'proyectos') {
      return pathname.startsWith('/proyectos')
    }
    if (page === 'blog') {
      return pathname.startsWith('/blog')
    }
    if (page === 'home' && pathname === '/') {
      return true
    }
    return false
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <Image src="/logo.svg" alt="Miguel Casares Logo" width={50} height={50} />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white group-hover:text-purple-300 transition-colors duration-300">Miguel Casares Moreno</span>
              <span className="text-xs text-gray-400 font-medium tracking-wide">Business Analyst & Data Analytics</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#home" 
              className={`transition-colors ${isActive('home') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Inicio
            </Link>
            <Link 
              href="/#about" 
              className={`transition-colors ${isActive('about') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Sobre mí
            </Link>
            <Link 
              href="/proyectos" 
              className={`transition-colors ${isActive('proyectos') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Proyectos
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors ${isActive('blog') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Blog
            </Link>
            <Link 
              href="/#skills" 
              className={`transition-colors ${isActive('skills') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Habilidades
            </Link>
            <Link 
              href="/#contact" 
              className={`transition-colors ${isActive('contact') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/#home" 
                className={`block px-3 py-2 transition-colors ${isActive('home') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/#about" 
                className={`block px-3 py-2 transition-colors ${isActive('about') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre mí
              </Link>
              <Link 
                href="/proyectos" 
                className={`block px-3 py-2 transition-colors ${isActive('proyectos') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link 
                href="/blog" 
                className={`block px-3 py-2 transition-colors ${isActive('blog') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/#skills" 
                className={`block px-3 py-2 transition-colors ${isActive('skills') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Habilidades
              </Link>
              <Link 
                href="/#contact" 
                className={`block px-3 py-2 transition-colors ${isActive('contact') ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
