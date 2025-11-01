import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce de Moda",
    description: "Tienda online completa con pasarela de pagos y gestión de inventario",
    image: "/modern-fashion-ecommerce.png",
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "#",
  },
  {
    title: "App de Reservas",
    description: "Sistema de reservas para restaurante con panel administrativo",
    image: "/restaurant-booking-app-interface.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Landing Page SaaS",
    description: "Página de aterrizaje optimizada para conversión de software B2B",
    image: "/modern-saas-landing-page.jpg",
    tags: ["Next.js", "Framer Motion", "SEO"],
    link: "#",
  },
  {
    title: "Dashboard Analítico",
    description: "Panel de control con visualización de datos en tiempo real",
    image: "/analytics-dashboard.png",
    tags: ["React", "Chart.js", "API"],
    link: "#",
  },
  {
    title: "App Móvil Fitness",
    description: "Aplicación móvil para seguimiento de entrenamientos y nutrición",
    image: "/fitness-app-interface.png",
    tags: ["React Native", "Firebase", "UI/UX"],
    link: "#",
  },
  {
    title: "Plataforma Educativa",
    description: "Sistema de gestión de cursos online con pagos y certificados",
    image: "/online-learning-platform.png",
    tags: ["Next.js", "Supabase", "Video"],
    link: "#",
  },
]

export function PortfolioSection() {
  return (
    <section id="portafolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              Proyectos que <span className="text-primary">Generan Resultados</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Cada proyecto diseñado para convertir visitantes en clientes
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a
                    href={project.link}
                    className="absolute top-4 right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-balance">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-balance">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
