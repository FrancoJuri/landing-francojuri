"use client"

import { Card } from "@/components/ui/card"
import { Phone, Code, TrendingUp, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Llamada de Descubrimiento",
    description:
      "Conversamos sobre tu negocio, objetivos y visión. Entiendo exactamente qué necesitas para vender más.",
    features: ["Análisis de mercado", "Definición de objetivos", "Propuesta personalizada"],
  },
  {
    icon: Code,
    number: "02",
    title: "Desarrollo de tu Web",
    description:
      "Creo tu web o aplicación con las últimas tecnologías. Diseño moderno, rápido y optimizado para conversiones.",
    features: ["Diseño responsive", "Optimización SEO", "Integración de pagos"],
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Estrategia Publicitaria",
    description: "Planeamos juntos cómo atraer clientes. Te acompaño hasta conseguir tu primera venta garantizada.",
    features: ["Plan de marketing", "Análisis de métricas", "Soporte continuo"],
  },
]

export function ProcessSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards sequentially
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="proceso" className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-50/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance mb-4">
                Proceso Simple,{" "}
                <span className="gradient-text relative">
                  Resultados Reales
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
                    <path d="M2 6C100 2 200 2 298 6" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="oklch(0.68 0.19 45)" />
                        <stop offset="100%" stopColor="oklch(0.75 0.15 55)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Tres pasos para transformar tu negocio y empezar a vender online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <Card className="relative p-8 bg-card hover:shadow-2xl transition-all duration-500 group border-2 hover:border-primary/50 rounded-3xl overflow-hidden hover-lift">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step number badge */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      {step.number}
                    </div>

                    {/* Icon with animated background */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="text-primary" size={32} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-balance group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-balance">{step.description}</p>

                    {/* Features list */}
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Floating number indicator */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg z-20">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <div className="inline-block glass rounded-3xl px-10 py-6 shadow-xl border-2 border-primary/20 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                <span className="text-lg font-bold text-foreground">
                  Garantía: Trabajo contigo hasta tu primera venta
                </span>
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
