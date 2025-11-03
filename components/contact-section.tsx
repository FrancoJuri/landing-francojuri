"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Mail, Calendar } from "lucide-react"

export function ContactSection() {
  const whatsappNumber = "+5493515501620" // Reemplaza con tu número de WhatsApp
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me interesa desarrollar una web para mi negocio...",
  )

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              ¿Listo para vender <span className="text-primary">con tu web?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Conversemos sobre tu proyecto. Sin compromiso, sin costos ocultos.
            </p>
          </div>

          {/* Contact Card */}
          <Card className="p-8 md:p-12 bg-card border-2">
            <div className="space-y-8">
              {/* Main CTA */}
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full">
                  <MessageCircle className="text-primary" size={40} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Hablemos por WhatsApp</h3>
                  <p className="text-muted-foreground text-balance">
                    Respondo en minutos. Cuéntame sobre tu negocio y cómo puedo ayudarte.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
                >
                  <MessageCircle className="mr-2" size={20} />
                  Contactar por WhatsApp
                </Button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">O también puedes</span>
                </div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-muted/50 border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-muted-foreground">hola@francojuri.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-muted/50 border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-primary" size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">Agendar Llamada</h4>
                      <p className="text-sm text-muted-foreground">Disponible Lunes-Sabado</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">{"<12hs"}</div>
                    <div className="text-xs text-muted-foreground">Tiempo de Respuesta</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">21 dias</div>
                    <div className="text-xs text-muted-foreground">para vender con tu web</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">Gratis</div>
                    <div className="text-xs text-muted-foreground">Primera Consulta</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
