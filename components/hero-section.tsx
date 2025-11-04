"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react"
import { useEffect, useState } from "react"


const whatsappNumber = "+5493515501620" // Reemplaza con tu número de WhatsApp
const whatsappMessage = encodeURIComponent(
  "¡Hola! Me interesa desarrollar una web para mi negocio...",
)

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-background animate-gradient" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-300"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float delay-500"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              {/* Badge with glow effect */}
              <div
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-2 border-primary/30 text-primary text-sm font-semibold ${mounted ? "animate-scale-in" : "opacity-0"}`}
              >
                <Sparkles size={18} className="animate-spin" style={{ animationDuration: "3s" }} />
                <span>Tu primer cliente por internet, en solo 21 días</span>
              </div>

              {/* Main headline with gradient */}
              <h1
                className={`text-5xl sm:text-6xl md:text-7xl font-bold leading-tight ${mounted ? "animate-slide-in-left" : "opacity-0"}`}
              >
                <span className="gradient-text">Vende con</span>
                <br />
                <span className="text-foreground">tu Web</span>
              </h1>

              {/* Subheadline */}
              <p
                className={`text-xl md:text-2xl text-muted-foreground leading-relaxed ${mounted ? "animate-slide-in-left delay-200" : "opacity-0"}`}
              >
                Desarrollo tu <span className="text-primary font-bold">web</span> para que en <span className="text-primary font-bold">21 días</span> empieces a atraer clientes reales por internet.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row items-start gap-4 ${mounted ? "animate-slide-in-left delay-300" : "opacity-0"}`}
              >
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg px-10 py-7 rounded-2xl group shadow-xl hover:shadow-2xl transition-all animate-glow"
                  >
                    Comenzar Ahora
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={22} />
                  </Button>
                </a>
                <Button
                  onClick={() => {
                    const element = document.getElementById("portafolio")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 rounded-2xl border-2 border-primary/30 hover:bg-primary/5 hover-lift"
                >
                  Ver Proyectos
                </Button>
              </div>

              {/* Feature pills */}
              <div className={`flex flex-wrap gap-3 pt-4 ${mounted ? "animate-slide-in-left delay-400" : "opacity-0"}`}>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                  <Zap size={16} className="text-primary" />
                  <span>Desarrollo Full-Stack</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                  <Rocket size={16} className="text-primary" />
                  <span>Entrega en 21 días</span>
                </div>
              </div>
            </div>

            {/* Right content - Stats cards */}
            <div className={`relative ${mounted ? "animate-slide-in-right delay-200" : "opacity-0"}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Card 1 - Shows +20 Projects on mobile, 100% Guarantee on desktop */}
                <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift">
                  {/* Mobile version - Projects */}
                  <div className="sm:hidden">
                    <div className="text-4xl sm:text-5xl font-bold gradient-text mb-1 sm:mb-2">+20</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Proyectos Terminados</div>
                  </div>
                  {/* Desktop version - Guarantee */}
                  <div className="hidden sm:block">
                    <div className="text-4xl sm:text-5xl font-bold gradient-text mb-1 sm:mb-2">100%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Garantía de Satisfacción</div>
                  </div>
                </div>

                {/* Card 2 - Different content on mobile vs desktop */}
                <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift sm:mt-12">
                  {/* Mobile version - Guarantee */}
                  <div className="sm:hidden">
                    <div className="text-3xl font-bold gradient-text mb-2">Garantía</div>
                    <div className="text-xs text-muted-foreground font-medium">Trabajo contigo hasta que consigas tu primer cliente con tu web!</div>
                  </div>
                  {/* Desktop version - 24/7 Support */}
                  <div className="hidden sm:block">
                    <div className="text-4xl sm:text-5xl font-bold gradient-text mb-1 sm:mb-2">24/7</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Soporte Continuo</div>
                  </div>
                </div>

                {/* Card 3 - Spanning - Hidden on mobile */}
                <div className="hidden sm:block sm:col-span-2 glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover-lift bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">Desarrollo Completo</div>
                      <div className="text-sm sm:text-base text-muted-foreground">Web • Mobile • PC</div>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Rocket className="text-primary" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-6 -right-6 glass rounded-2xl px-6 py-4 shadow-xl animate-float">
                <div className="text-2xl font-bold text-primary">+20</div>
                <div className="text-xs text-muted-foreground">Proyectos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
