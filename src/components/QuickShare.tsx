'use client'

import { Share2 } from "lucide-react"

interface QuickShareProps {
  title: string
  url: string
}

export default function QuickShare({ title, url }: QuickShareProps) {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const shareText = `${title} - por Miguel Casares`
    const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareText,
          url: fullUrl,
        })
      } catch {
        // Si el usuario cancela o hay error, copiar al portapapeles
        await copyToClipboard(fullUrl)
      }
    } else {
      await copyToClipboard(fullUrl)
    }
  }

  const copyToClipboard = async (urlToShare = url) => {
    const fullUrl = urlToShare.startsWith('http') ? urlToShare : `${window.location.origin}${urlToShare}`
    
    try {
      await navigator.clipboard.writeText(fullUrl)
      // Mostrar feedback visual
      const button = document.activeElement as HTMLButtonElement
      if (button) {
        const originalText = button.innerHTML
        button.innerHTML = '✓ Copiado!'
        setTimeout(() => {
          button.innerHTML = originalText
        }, 2000)
      }
    } catch {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = fullUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="p-2 text-gray-400 rounded-full"
      title="Compartir artículo"
    >
      <Share2 className="w-4 h-4" />
    </button>
  )
}
