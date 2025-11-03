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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3">
      <div
        className={`mx-auto max-w-7xl rounded-xl border border-border/30 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-background/50 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-4 sm:px-6">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary">&lt;&nbsp;</span>
              <span className="text-foreground group-hover:text-primary transition-colors">Franco Juri</span>
              <span className="text-primary">&nbsp;/&gt;</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer cursor-pointer"
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
          <div className="md:hidden py-3 px-4 sm:px-6 space-y-3 border-t border-border/30">
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
