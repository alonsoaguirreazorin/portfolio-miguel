'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = [
  {
    id: 1,
    title: "Dashboard de Análisis de Ventas",
    description: "Dashboard interactivo desarrollado en Power BI para el análisis integral de ventas de una empresa retail. El proyecto incluye visualizaciones dinámicas que permiten analizar tendencias de ventas por período, región y producto, métricas de rendimiento en tiempo real, y predicciones de ventas futuras basadas en datos históricos.",
    technologies: ["Power BI", "SQL", "Python", "Excel"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      objetivo: "Crear una solución de business intelligence que permita a los gerentes de ventas tomar decisiones informadas basadas en datos en tiempo real.",
      resultados: [
        "Reducción del 30% en el tiempo de generación de reportes",
        "Mejora del 25% en la precisión de predicciones de ventas",
        "Identificación de patrones de ventas que resultaron en un aumento del 15% en ingresos"
      ],
      duracion: "3 meses",
      equipo: "Business Analyst, Data Engineer, Stakeholders de Ventas"
    }
  },
  {
    id: 2,
    title: "Sistema de Gestión de Inventario",
    description: "Aplicación web completa desarrollada para la gestión optimizada de inventario con capacidades de predicción de demanda. El sistema integra algoritmos de machine learning para predecir la demanda futura y optimizar los niveles de stock, reduciendo costos de almacenamiento y evitando agotamientos de productos.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      objetivo: "Desarrollar un sistema inteligente de gestión de inventario que optimice los niveles de stock y reduzca costos operativos.",
      resultados: [
        "Reducción del 40% en costos de almacenamiento",
        "Disminución del 50% en agotamientos de productos",
        "Automatización del 80% de las tareas de reposición"
      ],
      duracion: "6 meses",
      equipo: "Full-stack Developer, Data Scientist, Supply Chain Manager"
    }
  },
  {
    id: 3,
    title: "Automatización de Reportes",
    description: "Sistema automatizado para la generación de reportes ejecutivos que integra múltiples fuentes de datos corporativas. La solución elimina el trabajo manual de recopilación y procesamiento de datos, generando reportes consistentes y actualizados automáticamente con una frecuencia configurable.",
    technologies: ["Python", "Pandas", "Matplotlib", "API Rest"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      objetivo: "Automatizar la generación de reportes ejecutivos para mejorar la eficiencia operativa y garantizar la consistencia de la información.",
      resultados: [
        "Ahorro de 20 horas semanales en generación manual de reportes",
        "Mejora del 95% en la consistencia de datos reportados",
        "Reducción del tiempo de entrega de reportes de 3 días a tiempo real"
      ],
      duracion: "4 meses",
      equipo: "Python Developer, Business Analyst, IT Infrastructure"
    }
  },
  {
    id: 4,
    title: "Análisis Predictivo de Clientes",
    description: "Modelo de machine learning desarrollado para predecir el comportamiento de clientes y optimizar estrategias de marketing. El sistema analiza patrones de compra, demografía y comportamiento para identificar clientes con alta probabilidad de conversión y personalizar las campañas de marketing.",
    technologies: ["Python", "Scikit-learn", "Tableau", "SQL"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      objetivo: "Desarrollar un modelo predictivo que permita personalizar estrategias de marketing y mejorar las tasas de conversión.",
      resultados: [
        "Incremento del 35% en tasas de conversión de campañas",
        "Reducción del 25% en costos de marketing por cliente adquirido",
        "Identificación del 90% de clientes de alto valor con precisión"
      ],
      duracion: "5 meses",
      equipo: "Data Scientist, Marketing Manager, Database Administrator"
    }
  },
  {
    id: 5,
    title: "Portal de Business Intelligence",
    description: "Portal centralizado de Business Intelligence desarrollado en Power BI con integración a Azure, diseñado para proporcionar dashboards personalizados para diferentes áreas de la empresa. La solución incluye métricas específicas para cada departamento y capacidades de drill-down para análisis detallados.",
    technologies: ["Power BI", "Azure", "SQL Server", "DAX"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      objetivo: "Crear un portal único de BI que centralice todas las métricas empresariales y facilite la toma de decisiones basada en datos.",
      resultados: [
        "Centralización de 15 dashboards departamentales",
        "Mejora del 50% en velocidad de acceso a métricas críticas",
        "Adopción del 95% por parte de gerentes y directores"
      ],
      duracion: "8 meses",
      equipo: "BI Developer, Cloud Architect, Department Heads"
    }
  },
  {
    id: 6,
    title: "Optimización de Procesos",
    description: "Proyecto integral de análisis y rediseño de procesos empresariales utilizando técnicas de process mining y metodologías Lean. El proyecto identificó cuellos de botella, eliminó actividades que no agregan valor y propuso mejoras operativas que resultaron en significativas eficiencias.",
    technologies: ["Process Mining", "Visio", "Excel", "R"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      objetivo: "Analizar y optimizar los procesos empresariales críticos para mejorar la eficiencia operativa y reducir costos.",
      resultados: [
        "Reducción del 45% en tiempo de procesamiento de órdenes",
        "Eliminación del 30% de actividades que no agregan valor",
        "Ahorro anual de $500,000 en costos operativos"
      ],
      duracion: "6 meses",
      equipo: "Process Analyst, Operations Manager, IT Support"
    }
  }
]

interface PageProps {
  params: {
    id: string
  }
}

export default function ProyectoPage({ params }: PageProps) {
  const projectId = parseInt(params.id)
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/proyectos" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              Volver a Proyectos
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Tecnologías Utilizadas</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <Badge key={index} className="bg-purple-600/20 border-purple-500/30 text-purple-300 px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Demo del Proyecto</h2>
            <div className="relative w-full h-0 pb-[56.25%] bg-black/20 rounded-lg overflow-hidden">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Objective */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Objetivo del Proyecto</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.details.objetivo}
                </p>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Información del Proyecto</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-purple-300 font-medium">Duración: </span>
                    <span className="text-gray-300">{project.details.duracion}</span>
                  </div>
                  <div>
                    <span className="text-purple-300 font-medium">Equipo: </span>
                    <span className="text-gray-300">{project.details.equipo}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-12">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Resultados Obtenidos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.details.resultados.map((resultado, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-4 rounded-lg border border-purple-500/20">
                    <p className="text-gray-300 text-center font-medium">
                      {resultado}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              <Link href="/proyectos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver Más Proyectos
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
              <Link href="/#contact">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contactar para Más Detalles
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
