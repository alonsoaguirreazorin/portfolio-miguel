'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0deg,rgba(120,119,198,0.1)_90deg,transparent_180deg,rgba(120,119,198,0.1)_270deg,transparent_360deg)] animate-spin" style={{animationDuration: '60s'}}></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
            <Mail className="w-3 h-3 mr-1" />
            Contacto
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
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
  )
}
