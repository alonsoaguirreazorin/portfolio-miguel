import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, User, Code, Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Miguel Casares - Business Analyst & Data Analytics Specialist en Granada",
  description: "Portfolio profesional de Miguel Casares, especialista en Power BI, análisis de datos y Business Intelligence en Granada. Experiencia en dashboards, KPIs y transformación digital empresarial.",
  keywords: ["Miguel Casares Granada", "Power BI Granada", "Business Analyst Granada", "Data Analytics Granada", "Business Intelligence Granada", "Consultor datos Granada", "Dashboard Power BI", "KPIs empresariales"],
  openGraph: {
    title: "Miguel Casares - Business Analyst & Data Analytics Specialist",
    description: "Portfolio profesional de Miguel Casares, especialista en Power BI, análisis de datos y Business Intelligence en Granada.",
    images: ['/miguelCasaresProfile.jpg'],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-slate-900/80"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          
          {/* Minimal floating elements */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400/20 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
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
                <a href="mailto:miguelcasares01@gmail.com" aria-label="Enviar email a Miguel Casares">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <Mail className="w-4 h-4 mr-2" />
                    miguelcasares01@gmail.com
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/miguelcasares/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir perfil de LinkedIn de Miguel Casares"
                >
                  <Button variant="outline" size="lg" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                    <User className="w-4 h-4 mr-2" />
                    Ver LinkedIn
                  </Button>
                </a>
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
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-blue-800/30">
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
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
              <div className="aspect-video bg-white rounded-t-lg relative overflow-hidden">
                <Image
                  src="/img/pwc.webp" 
                  alt="PwC Logo"
                  fill
                  className="object-contain"
                />
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
              <div className="aspect-video bg-white rounded-t-lg relative overflow-hidden">
                <Image
                  src="/img/bigrid.webp" 
                  alt="Bigrid Logo"
                  fill
                  className="object-cover"
                />
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
              <div className="aspect-video bg-white rounded-t-lg relative overflow-hidden">
                <Image
                  src="/img/kiron.webp" 
                  alt="Kiron Partner Logo"
                  fill
                  className="object-contain"
                />
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
              <div className="aspect-video bg-white rounded-t-lg relative overflow-hidden">
                <Image
                  src="/img/diputacion.webp" 
                  alt="Diputación Granada Logo"
                  fill
                  className="object-contain"
                />
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
              <div className="aspect-video bg-white rounded-t-lg relative overflow-hidden">
                <Image
                  src="/img/universidadlarioja.webp" 
                  alt="Universidad de la Rioja Logo"
                  fill
                  className="object-contain"
                />
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
              <div className="aspect-video bg-white rounded-t-lg relative overflow-hidden">
                <Image
                  src="/img/ugr.webp" 
                  alt="Universidad de Granada Logo"
                  fill
                  className="object-cover"
                />
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

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-blue-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
              <GraduationCap className="w-3 h-3 mr-1" />
              Blog de Power BI
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Artículos y <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Conocimientos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comparto mi experiencia en Power BI, análisis de datos y mejores prácticas para implementaciones exitosas en empresas.
            </p>
          </div>
          
          <div className="text-center">
            <Card className="bg-white/5 border-white/10 hover:border-purple-400/50 transition-all duration-300 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Últimos Artículos sobre Power BI
                </h3>
                <p className="text-gray-300 mb-6">
                  Descubre consejos prácticos, estrategias de implementación y mejores prácticas para maximizar el valor de Power BI en tu organización.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                    Implementación
                  </Badge>
                  <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                    Costes
                  </Badge>
                  <Badge variant="outline" className="border-green-400/30 text-green-300">
                    Mejores prácticas
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400/30 text-yellow-300">
                    Automatización
                  </Badge>
                </div>
                <a href="/blog">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Ver todos los artículos
                  </Button>
                </a>
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
              <CardContent className="p-6 text-center space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Visualización</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Power BI</span>
                      <span>85%</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 w-full">Power BI - Dashboards</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 text-center space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
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
                      <span>Power Pivot</span>
                      <span>95%</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Paquete Office</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 w-full">Análisis & Reporting</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 text-center space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
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
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 w-full">Modelado Datos</Badge>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10">
              <CardContent className="p-6 text-center space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">ETL</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Alteryx</span>
                      <span>90%</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Query</span>
                      <span>95%</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Knime</span>
                      <span>70%</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-full">Extracción y Transformación</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
