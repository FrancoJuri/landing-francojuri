"use client"

import { Github, Linkedin, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const whatsappNumber = "+5493515501620";
const whatsappMessage = encodeURIComponent(
  "¡Hola! Me interesa desarrollar una web para mi negocio...",
)

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span className="text-primary">&lt;&nbsp;</span>
                <span className="text-white transition-colors">
                  Franco Juri
                </span>
                <span className="text-primary">&nbsp;/&gt;</span>
              </div>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                Desarrollo web y aplicaciones a medida. Hace 4 años creando soluciones a medida.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("proceso")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer"
                  >
                    Proceso
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("portafolio")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer"
                  >
                    Portafolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("contacto")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Sígueme</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/francojuri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="text-secondary-foreground group-hover:text-primary-foreground" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/francojuri.web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Instagram className="text-secondary-foreground group-hover:text-primary-foreground" size={20} />
                </a>
                <a
                  href="https://github.com/FrancoJuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Github className="text-secondary-foreground group-hover:text-primary-foreground" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-secondary-foreground/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
              <p>© {currentYear} Franco Juri. Todos los derechos reservados.</p>
              <div>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <MessageCircle className="mr-0" size={20} />Hablemos
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
