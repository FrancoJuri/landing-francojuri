import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const projects = [
  {
    title: "Palmerus - Periódico Digital de La Palma",
    description: "Web de noticias para un periódico local de La Palma, España.",
    image: "/palmerus-es.webp",
    tags: ["Wordpress", "Elementor", "SEO"],
    link: "#",
  },
  {
    title: "DocuLegal - Sistema de IA para abogados",
    description: "Analizador de documentos legales con IA para abogados.",
    image: "/legaldoc.webp",
    tags: ["React", "Node.js", "PostgreSQL", "AI"],
    link: "#",
  },
  {
    title: "Fontan Balestra & Asociados - Estudio Jurídico",
    description: "Diseño web completo para un estudio jurídico",
    image: "/fontan-balestra.webp",
    tags: ["React", "UI/UX", "SEO"],
    link: "#",
  },
  {
    title: "Apartamentos La Palma - Alquileres",
    description: "Web de alquileres de apartamentos en La Palma, España.",
    image: "/apartamentoslapalma.webp",
    tags: ["Wordpress", "Elementor", "SEO"],
    link: "#",
  },
  {
    title: "Emiumi App - Prestamos de Vasos Reutilizables",
    description: "Sistema de red de prestamo y devolucion de vasos reutilizables",
    image: "/emiumi-app.webp",
    tags: ["React", "Firebase", "UI/UX"],
    link: "#",
  },
  {
    title: "IAL finanzas - Broker",
    description: "Web para empresa de inversiones financieras",
    image: "/ialfinanzas.webp",
    tags: ["Wordpress", "Elementor", "SEO"],
    link: "#",
  },
]

const whatsappNumber = "+5493515501620";
const whatsappMessage = encodeURIComponent(
  "¡Hola! Me interesa desarrollar una web para mi negocio...",
)

export function PortfolioSection() {
  return (
    <section id="portafolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              Mis Proyectos <span className="text-primary">Terminados</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Algunos de mis trabajos, adaptados a las necesidades de cada cliente.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative h-80 md:h-[420px] overflow-hidden rounded-none border-0 py-0 p-0 shadow-none bg-transparent"
              >
                {/* Background Image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dim/gradient overlay */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Text overlay */}
                <div className="absolute inset-x-6 bottom-6 space-y-3 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold text-balance">{project.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl text-balance">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-white/10 text-white border-white/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-14 text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-balance">
              ¿Querés ver <span className="text-primary">más proyectos?</span>
            </h3>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Contáctame por WhatsApp
                <MessageCircle size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
