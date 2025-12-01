import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos - Miguel Casares | Power BI & Business Intelligence",
  description: "Portfolio de proyectos de Business Intelligence y análisis de datos. Dashboards desarrollados con Power BI, SQL y herramientas de ETL. Casos de estudio de Northwind Traders, Adventure Works e Imperial Brands.",
  keywords: ["Proyectos Power BI", "Dashboard Business Intelligence", "Northwind Traders", "Adventure Works", "Imperial Brands", "ETL", "SQL", "Data Analytics", "Casos de estudio BI"],
  openGraph: {
    title: "Proyectos - Miguel Casares | Power BI & Business Intelligence",
    description: "Portfolio de proyectos de Business Intelligence y análisis de datos desarrollados por Miguel Casares.",
    images: ['/img/proyecto-northwindTraders.png'],
  },
};

const projects = [
  {
    id: 1,
    title: "Northwind Traders – Operational Performance Dashboard",
    description: "Dashboard analítico desarrollado a partir del dataset ficticio Northwind Traders, con el objetivo de evaluar el rendimiento operativo de la empresa y demostrar procesos completos de ETL, modelado y visualización en Power BI.",
    technologies: ["Power BI", "SQL", "KNIME", "DAX", "ETL"],
    image: "/img/proyecto-northwindTraders.png"
  },
  {
    id: 2,
    title: "Adventure Works – Corporate Analytics Dashboard",
    description: "Dashboard corporativo creado a partir del dataset estándar Adventure Works. Su objetivo es ofrecer una visión integral del rendimiento empresarial, abarcando ventas, clientes, productos y operaciones.",
    technologies: ["Power BI", "Power Query", "SQL", "KPIs", "Business Intelligence"],
    image: "/img/proyecto-AdventureWorks.png"
  },
  {
    id: 3,
    title: "Imperial Brands – Altadis: Sistema Integral de Business Intelligence",
    description: "Sistema de BI desarrollado como Trabajo Final de Máster (UNIR), diseñado para la compañía Altadis (Imperial Brands). El objetivo es construir un entorno integral de analítica que abarque la cadena logística, ventas y predicción de roturas.",
    technologies: ["R", "RStudio", "Power BI", "Data Warehouse", "Clustering", "Predicción"],
    image: "/img/proyecto-ImperialBrands.png"
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
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
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
