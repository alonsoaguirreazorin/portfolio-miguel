import { getBlogPost, getAllBlogPosts } from "@/lib/blogData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ShareButton from "@/components/ShareButton";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    return {
      title: "Artículo no encontrado - Miguel Casares",
      description: "El artículo que buscas no existe."
    };
  }

  return {
    title: `${post.title} - Miguel Casares`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: "Miguel Casares Moreno" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Miguel Casares Moreno"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Función simple para renderizar markdown básico
function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Headers
    if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="text-3xl font-bold mb-6 mt-8 first:mt-0">{line.substring(2)}</h1>);
    }
    else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold mb-4 mt-8 text-purple-300">{line.substring(3)}</h2>);
    }
    else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-bold mb-3 mt-6 text-purple-200">{line.substring(4)}</h3>);
    }
    // Tablas
    else if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const tableRows = [];
      let j = i;
      
      // Recoger todas las filas de la tabla
      while (j < lines.length && lines[j].trim().startsWith('|') && lines[j].trim().endsWith('|')) {
        tableRows.push(lines[j]);
        j++;
      }
      
      if (tableRows.length > 0) {
        // Saltar la línea de separación si existe
        const hasHeader = tableRows.length > 1 && tableRows[1].includes('---');
        const headerRow = tableRows[0];
        const dataRows = hasHeader ? tableRows.slice(2) : tableRows.slice(1);
        
        elements.push(
          <div key={i} className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-gray-600">
              <thead className="bg-gray-700/50">
                <tr>
                  {headerRow.split('|').slice(1, -1).map((cell, index) => (
                    <th key={index} className="border border-gray-600 px-4 py-2 text-left font-bold">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.split('|').slice(1, -1).map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-gray-600 px-4 py-2">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        i = j - 1; // Ajustar el índice
      }
    }
    // Párrafos vacíos
    else if (line.trim() === '') {
      elements.push(<div key={i} className="mb-2"></div>);
    }
    // Lista con guiones y negritas
    else if (line.startsWith('- **') && line.includes(':**')) {
      const parts = line.match(/^- \*\*(.*?):\*\* (.*)$/);
      if (parts) {
        elements.push(
          <div key={i} className="mb-2 ml-6">
            <span className="text-purple-300">• </span>
            <strong className="font-bold text-white">{parts[1]}:</strong> <span className="text-gray-100">{parts[2]}</span>
          </div>
        );
      }
    }
    // Lista simple
    else if (line.startsWith('- ')) {
      elements.push(
        <div key={i} className="mb-1 ml-6">
          <span className="text-purple-300">• </span>
          <span className="text-gray-100">{line.substring(2)}</span>
        </div>
      );
    }
    // Call to action especial
    else if (line.startsWith('👉')) {
      elements.push(
        <div key={i} className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 my-6">
          <p className="text-purple-200 font-medium">{line}</p>
        </div>
      );
    }
    // Texto con negritas
    else if (line.includes('**') && line.trim()) {
      const parts = line.split('**');
      elements.push(
        <p key={i} className="mb-4 leading-relaxed text-gray-100">
          {parts.map((part, partIndex) => 
            partIndex % 2 === 1 ? <strong key={partIndex} className="font-bold text-white">{part}</strong> : part
          )}
        </p>
      );
    }
    // Párrafo normal
    else if (line.trim()) {
      elements.push(<p key={i} className="mb-4 leading-relaxed text-gray-100">{line}</p>);
    }
    
    i++;
  }
  
  return elements;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    notFound();
  }

  // Generate Article Schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Miguel Casares Moreno',
      url: 'https://portfolio-miguel.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Miguel Casares Moreno',
    },
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.tags.join(', '),
    url: `https://portfolio-miguel.vercel.app/blog/${post.id}`,
    image: 'https://portfolio-miguel.vercel.app/miguelCasaresProfile.png',
    inLanguage: 'es-ES',
  };  // Obtener posts relacionados (misma categoría)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Back button */}
        <Link href="/blog">
          <Button className="mb-8 bg-white/10 hover:bg-purple-500/20 text-white border border-white/20 hover:border-purple-400/50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Button>
        </Link>

        {/* Article header */}
        <article>
          <header className="mb-12">
            {/* Metadata */}
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
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
              <ShareButton title={post.title} />
            </div>

            {/* Category */}
            <Badge variant="secondary" className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-sm px-3 py-1 bg-gray-700/50 rounded-full text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {renderMarkdown(post.content)}
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-bold mb-8">Artículos relacionados</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-colors cursor-pointer">
                    <Badge variant="secondary" className="mb-3 bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {relatedPost.category}
                    </Badge>
                    <h4 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h4>
                    <p className="text-sm text-gray-400 line-clamp-3">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call to action */}
        <section className="mt-16 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Te ha resultado útil este artículo?</h3>
          <p className="text-gray-300 mb-6">
            Si necesitas ayuda con la implementación de Power BI en tu empresa, puedo ayudarte.
          </p>
          <Link href="/#contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Contactar conmigo
            </Button>
          </Link>
        </section>
      </div>
    </div>
    </>
  );
}
