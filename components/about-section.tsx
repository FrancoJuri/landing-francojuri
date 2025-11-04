"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Target, TrendingUp, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="pb-20 pt-15 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,53,0.08),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-sm px-4 py-2 border-primary/30 text-primary">
              ¿Quién soy?
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              Te cuento un poco <span className="gradient-text">sobre mi</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Image Column - Más pequeña */}
            <div className="relative order-1">
              <div className="relative w-full max-w-[280px] mx-auto lg:sticky lg:top-24">
                {/* Decorative elements */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl opacity-80 animate-pulse" />
                
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  <img
                    src="/profile-picture.jpg"
                    alt="Franco Juri"
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 shadow-xl border-2 border-primary/20 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-primary" size={16} />
                    <span className="font-bold text-sm">Desarrollador de Software</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="order-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-balance">
                  Hola, soy Franco Juri 👋
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-balance">
                    Desde los <span className="text-foreground font-semibold">13 años</span> que programo casi todos los días. 
                    Lo que comenzó como un hobby se transformó en mi profesión, y durante 
                    los últimos <span className="text-foreground font-semibold">4 años</span> he estado ayudando a negocios creando webs para que vendan sus servicios o creando sistemas de gestión interna para optimizar sus procesos.
                  </p>
                  <p className="text-balance">
                    Hoy, programar una web no es suficiente para hacer crecer un negocio. 
                    Por eso también estudié marketing digital, especializándome en campañas de Meta Ads. 
                    Armé una estrategia que combina <span className="text-foreground font-semibold">desarrollo web + publicidad en Meta</span> para 
                    que tu sitio se convierta en tu{" "}
                    <span className="text-primary font-semibold">principal canal de ventas</span>.
                  </p>
                </div>
              </div>

              {/* Skills/Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Code2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Desarrollo Full-Stack</h4>
                    <p className="text-sm text-muted-foreground">Tecnologías modernas y escalables</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enfoque en Conversión</h4>
                    <p className="text-sm text-muted-foreground">Diseño orientado a ventas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border-2 border-primary/10 hover:border-primary/30 transition-colors sm:col-span-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Estrategia Publicitaria Completa</h4>
                    <p className="text-sm text-muted-foreground">
                      Acompaño tu negocio hasta conseguir tus primeros clientes a través de tu web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

