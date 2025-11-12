'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Phone, MapPin, Calendar, User, Code, Briefcase, GraduationCap, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <span className="text-white font-bold text-lg">MC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white group-hover:text-purple-300 transition-colors duration-300">Miguel Casares</span>
                <span className="text-xs text-gray-400 font-medium tracking-wide">Business Analyst & Data Analytics</span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Inicio</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">Sobre mí</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Experiencia</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Habilidades</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contacto</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-lg rounded-lg mt-2">
                <a 
                  href="#home" 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre mí
                </a>
                <a 
                  href="#projects" 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experiencia
                </a>
                <a 
                  href="#skills" 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Habilidades
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <User className="w-3 h-3 mr-1" />
                  Business Analyst & Data Analytics
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hola, soy{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Miguel Casares
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Especializado en análisis de datos y transformación de información en estrategias que impulsan la toma de decisiones empresariales.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  <Mail className="w-4 h-4 mr-2" />
                  miguelcasares01@gmail.com
                </Button>
                <Button variant="outline" size="lg" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                  <User className="w-4 h-4 mr-2" />
                  Ver LinkedIn
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/10">
                  <Image 
                    src="/miguelCasaresProfile.png" 
                    alt="Miguel Casares Profile" 
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              <User className="w-3 h-3 mr-1" />
              Sobre mí
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Transformando datos en decisiones estratégicas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profesional proactivo con formación en Administración de Empresas y especialización en Business Intelligence, apasionado por el análisis de datos y la transformación de información en estrategias que impulsen la toma de decisiones.
            </p>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Me destaco por mi dominio de herramientas como Power BI, Excel avanzado y otras soluciones de análisis, así como por mi capacidad para conectar la perspectiva técnica con las necesidades reales del negocio.
                  </p>
                  <br />
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Con una marcada orientación al cliente y un enfoque empático, disfruto trabajando con personas, comprendiendo sus objetivos y diseñando soluciones personalizadas que generen valor. Me motiva crear experiencias positivas a través de la analítica, combinando visión estratégica, pensamiento crítico y entusiasmo por los datos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Análisis de Datos</h3>
                <p className="text-gray-300">
                  Experto en Power BI, Excel avanzado y SQL para el análisis y visualización de datos empresariales complejos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Business Intelligence</h3>
                <p className="text-gray-300">
                  Implementación de soluciones BI usando Alteryx, Query y R Studio para la toma de decisiones estratégicas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Consultoría Financiera</h3>
                <p className="text-gray-300">
                  Análisis de procesos financieros y M&A en PwC, traduciendo necesidades de negocio en soluciones técnicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              <Briefcase className="w-3 h-3 mr-1" />
              Proyectos
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Experiencia Profesional
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proyectos destacados en análisis de datos, business intelligence y consultoría financiera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-blue-300" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Data for Deals - PwC Spain</h3>
                <p className="text-gray-300 text-sm">
                  Specialist II en M&A con análisis de procesos financieros y implementación de soluciones de Business Intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Power BI
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    Alteryx
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    SQL
                  </Badge>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                    <Calendar className="w-4 h-4 mr-2" />
                    Mayo 2024 - Actual
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-12 h-12 text-green-300" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Power BI Data Analyst - Bigrid</h3>
                <p className="text-gray-300 text-sm">
                  Análisis y visualización de datos de contadores eléctricos, desarrollo de dashboards interactivos para monitoreo de calidad.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Power BI
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    ETL
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    KPIs
                  </Badge>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                    <Calendar className="w-4 h-4 mr-2" />
                    Feb 2025 - Jun 2025
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-purple-300" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Asesor Financiero - Kiron Partner</h3>
                <p className="text-gray-300 text-sm">
                  Asesoramiento financiero hipotecario y gestión de cartera de clientes mediante CRM especializado.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    CRM
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Finanzas
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Consultoría
                  </Badge>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                    <Calendar className="w-4 h-4 mr-2" />
                    Abr 2024 - May 2024
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-12 h-12 text-orange-300" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Técnico Administrativo - Diputación Granada</h3>
                <p className="text-gray-300 text-sm">
                  Revisión de informes de subvenciones municipales y gestión de procesos administrativos mediante sede electrónica.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    CRM
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Administración
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    Gestión
                  </Badge>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                    <Calendar className="w-4 h-4 mr-2" />
                    Oct 2023 - Abr 2024
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <GraduationCap className="w-12 h-12 text-cyan-300" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Máster Business Intelligence</h3>
                <p className="text-gray-300 text-sm">
                  Universidad de la Rioja - Especialización en análisis estadístico, modelado de datos y metodologías ágiles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    R Studio
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    Power BI
                  </Badge>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                    <Calendar className="w-4 h-4 mr-2" />
                    Oct 2024 - Sep 2025
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-12 h-12 text-pink-300" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">Grado ADE - Universidad de Granada</h3>
                <p className="text-gray-300 text-sm">
                  Administración y Dirección de Empresas con base sólida en gestión empresarial y análisis financiero.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    Administración
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Finanzas
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Estrategia
                  </Badge>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                    <Calendar className="w-4 h-4 mr-2" />
                    Sep 2019 - May 2024
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              <Code className="w-3 h-3 mr-1" />
              Habilidades
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dominio de herramientas especializadas en análisis de datos, business intelligence y visualización.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Visualización</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Power BI</span>
                    <span>85%</span>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 w-full">Power BI - Dashboards</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Análisis</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Excel</span>
                    <span>100%</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Alteryx</span>
                    <span>90%</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 w-full">ETL & Query</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Programación</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>SQL</span>
                    <span>60%</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>R Studio</span>
                    <span>65%</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 w-full">Modelado Datos</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Herramientas</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Query</span>
                    <span>95%</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Knime</span>
                    <span>70%</span>
                  </div>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-full">Business Intelligence</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              <Mail className="w-3 h-3 mr-1" />
              Contacto
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Trabajemos juntos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">miguelcasares01@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Teléfono</h3>
                      <p className="text-gray-300">+34 673 45 04 27</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Ubicación</h3>
                      <p className="text-gray-300">Granada, Andalucía</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-semibold">Miguel Casares</span>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">© 2024 Todos los derechos reservados</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
