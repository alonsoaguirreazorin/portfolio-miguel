import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts } from "@/lib/blogData";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import QuickShare from "@/components/QuickShare";

export const metadata: Metadata = {
  title: "Blog de Power BI y Analytics - Miguel Casares",
  description: "Artículos especializados sobre implementación, mejores prácticas y estrategias de Power BI para empresas. Consejos de un experto en Business Intelligence.",
  keywords: "Power BI, Business Intelligence, Analytics, Dashboards, Implementación, Consultoría",
  openGraph: {
    title: "Blog de Power BI y Analytics - Miguel Casares",
    description: "Artículos especializados sobre implementación, mejores prácticas y estrategias de Power BI para empresas.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  
  // Agrupar posts por categoría para mejor organización
  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl lg:text-5xl font-bold mt-8 mb-8 leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Artículos y Conocimientos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Artículos especializados sobre implementación, mejores prácticas y estrategias de Power BI para empresas.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="bg-white/5 border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge variant="secondary" className="w-fit mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                    {post.category}
                  </Badge>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-gray-300">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-medium">Leer artículo</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div>
                      <QuickShare 
                        title={post.title} 
                        url={`/blog/${post.id}`} 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Categories Filter (opcional para futuras mejoras) */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Categorías</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="text-white border-white/20 hover:border-purple-400/50 cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
