"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">{"<Dev/>"}</div>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                Desarrollo web y aplicaciones que convierten. Full-stack developer comprometido con tu éxito.
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
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
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
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
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
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
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
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Github className="text-secondary-foreground group-hover:text-primary-foreground" size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="text-secondary-foreground group-hover:text-primary-foreground" size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Twitter className="text-secondary-foreground group-hover:text-primary-foreground" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-secondary-foreground/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
              <p>© {currentYear} Dev. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidad
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
