'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Dashboard de Análisis de Ventas",
    description: "Dashboard interactivo para análisis de ventas con visualizaciones dinámicas y métricas en tiempo real.",
    technologies: ["Power BI", "SQL", "Python", "Excel"]
  },
  {
    id: 2,
    title: "Sistema de Gestión de Inventario",
    description: "Aplicación web para gestión de inventario con predicciones de demanda y optimización de stock.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"]
  },
  {
    id: 3,
    title: "Automatización de Reportes",
    description: "Sistema automatizado para generación de reportes ejecutivos con integración de múltiples fuentes de datos.",
    technologies: ["Python", "Pandas", "Matplotlib", "API Rest"]
  },
  {
    id: 4,
    title: "Análisis Predictivo de Clientes",
    description: "Modelo de machine learning para predecir comportamiento de clientes y optimizar estrategias de marketing.",
    technologies: ["Python", "Scikit-learn", "Tableau", "SQL"]
  },
  {
    id: 5,
    title: "Portal de Business Intelligence",
    description: "Portal centralizado de BI con dashboards personalizados para diferentes áreas de la empresa.",
    technologies: ["Power BI", "Azure", "SQL Server", "DAX"]
  },
  {
    id: 6,
    title: "Optimización de Procesos",
    description: "Análisis y rediseño de procesos empresariales con implementación de mejoras operativas.",
    technologies: ["Process Mining", "Visio", "Excel", "R"]
  }
]

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Main Content */}
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Mis Proyectos
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                  Una colección de proyectos que demuestran mi experiencia en análisis de datos, business intelligence y automatización de procesos.
                </p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                  <Link href={`/proyectos/${project.id}`}>
                    <CardContent className="p-0">
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-t-lg overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Code className="h-16 w-16 text-purple-300 opacity-50" />
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-white/10 text-gray-300 text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="bg-white/10 text-gray-300 text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* View Project */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Ver proyecto</span>
                          <ExternalLink className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
