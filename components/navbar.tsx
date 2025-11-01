"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {"<Dev/>"}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Comenzar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("proceso")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Comenzar Ahora
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
