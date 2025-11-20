'use client'

import { use } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = [
  {
    id: 1,
    title: "Northwind Traders – Operational Performance Dashboard",
    description: "Dashboard analítico desarrollado a partir del dataset ficticio Northwind Traders, con el objetivo de evaluar el rendimiento operativo de la empresa y demostrar procesos completos de ETL, modelado y visualización en Power BI.",
    technologies: ["Power BI", "SQL", "KNIME", "DAX", "ETL"],
    videoUrl: "/videos/Proyecto-NortwindTraders.mp4",
    details: {
      objetivo: "Demostrar procesos completos de ETL, modelado y visualización en Power BI a partir del dataset Northwind Traders para evaluar el rendimiento operativo empresarial.",
      proceso: [
        "Obtención de los datos en formato CSV/SQL desde repositorios públicos",
        "Limpieza y transformación mediante un flujo ETL construido en SQL y KNIME",
        "Modelado dimensional en Power BI con tablas de Clientes, Empleados, Pedidos y Productos",
        "Creación de relaciones y medidas DAX orientadas al análisis operativo"
      ],
      contenido: [
        "Clientes: distribución geográfica, principales cuentas y volumen de pedidos",
        "Empleados: organigrama, roles y rendimiento general",
        "Pedidos: evolución temporal, eficiencia y patrones de demanda",
        "Productos: catálogo, categorías, precios y análisis de ventas"
      ],
      valor: "Transformar datos dispersos en indicadores clave que permiten comprender la actividad operativa, reforzando habilidades de ingeniería de datos, modelado y reporting profesional.",
      duracion: "2 meses",
      categoria: "Business Intelligence & Analytics"
    }
  },
  {
    id: 2,
    title: "Adventure Works – Corporate Analytics Dashboard",
    description: "Dashboard corporativo creado a partir del dataset estándar Adventure Works. Su objetivo es ofrecer una visión integral del rendimiento empresarial, abarcando ventas, clientes, productos y operaciones.",
    technologies: ["Power BI", "Power Query", "SQL", "KPIs", "Business Intelligence"],
    videoUrl: "/videos/Proyecto-AdventuresWork.mp4",
    details: {
      objetivo: "Ofrecer una visión integral del rendimiento empresarial mediante un dashboard corporativo que abarque ventas, clientes, productos y operaciones.",
      proceso: [
        "Integración de tablas relacionadas con ventas, territorio, productos, inventario y clientes",
        "Limpieza y estandarización del dato mediante Power Query y SQL",
        "Construcción de un modelo analítico con dimensiones geográficas, comerciales y productivas",
        "Implementación de KPIs y paneles comparativos para análisis de rendimiento"
      ],
      contenido: [
        "Ventas: tendencias por región, periodo, canal y categoría",
        "Clientes: segmentación, comportamiento de compra y fidelidad",
        "Productos: rentabilidad, rotación, disponibilidad e inventario",
        "Operaciones: eficiencia productiva y análisis de la cadena logística"
      ],
      valor: "Permite evaluar la empresa desde una perspectiva 360º, ofreciendo métricas estratégicas para la toma de decisiones y demostrando experiencia en modelos complejos y escalables de BI.",
      duracion: "3 meses",
      categoria: "Corporate Business Intelligence"
    }
  },
  {
    id: 3,
    title: "Imperial Brands – Altadis: Sistema Integral de Business Intelligence",
    description: "Sistema de BI desarrollado como Trabajo Final de Máster (UNIR), diseñado para la compañía Altadis (Imperial Brands). El objetivo es construir un entorno integral de analítica que abarque la cadena logística, ventas y predicción de roturas.",
    technologies: ["R", "RStudio", "Power BI", "Data Warehouse", "Clustering", "Predicción"],
    videoUrl: "/videos/Proyecto-ImperialBrands.mp4",
    details: {
      objetivo: "Construir un sistema completo de Business Intelligence para Altadis (Imperial Brands), desde el dato bruto hasta la toma de decisiones, integrando ingeniería de datos, analítica y visualización profesional.",
      proceso: [
        "Integración y calidad del dato (R / RStudio): Unificación de 7+ fuentes, limpieza, estandarización y detección de anomalías",
        "Data Warehouse: Construcción de un modelo en estrella con hechos de Ventas, Envíos, Rutas y Roturas de Stock",
        "Power BI Reporting: Modelado semántico, medidas avanzadas, mapas, análisis temporales y paneles ejecutivos",
        "Analítica avanzada: Segmentación por clustering y predicción orientada a anticipar roturas de stock"
      ],
      contenido: [
        "Ventas: KPIs comerciales, evolución y análisis por distribuidor",
        "Logística: eficiencia de rutas, tiempos de entrega y costes",
        "Predicción: probabilidad de quiebres de stock y patrones críticos",
        "Segmentación: clusters de clientes/distribuidores basados en comportamiento",
        "Storytelling visual: mapas, tendencias y paneles estratégicos"
      ],
      valor: "Demuestra la capacidad de construir un sistema completo de Business Intelligence, desde el dato bruto hasta la toma de decisiones, integrando ingeniería de datos, analítica y visualización profesional.",
      duracion: "6 meses",
      categoria: "Trabajo Final de Máster - Sistema Integral BI"
    }
  }
]

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProyectoPage({ params }: PageProps) {
  const { id } = use(params)
  const projectId = parseInt(id)
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
                    <span className="text-purple-300 font-medium">Categoría: </span>
                    <span className="text-gray-300">{project.details.categoria}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <div className="space-y-8 mb-12">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Objetivo del Proyecto</h3>
                <p className="text-gray-300 leading-relaxed">{project.details.objetivo}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Proceso de Desarrollo</h3>
                <div className="space-y-3">
                  {project.details.proceso.map((paso, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                        <span className="text-blue-400 text-sm font-medium">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{paso}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Contenido Desarrollado</h3>
                <div className="space-y-2">
                  {project.details.contenido.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Valor Aportado</h3>
                <p className="text-gray-300 leading-relaxed">{project.details.valor}</p>
              </CardContent>
            </Card>
          </div>

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
