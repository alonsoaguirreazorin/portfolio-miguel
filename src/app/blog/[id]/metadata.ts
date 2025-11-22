import { getBlogPost } from "@/lib/blogData";
import type { Metadata } from "next";

interface GenerateMetadataProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
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
