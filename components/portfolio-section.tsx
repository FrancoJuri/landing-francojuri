import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
          
        </div>
      </div>
    </section>
  )
}
