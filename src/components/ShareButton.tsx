'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Check, Twitter, Linkedin, Mail } from "lucide-react"

interface ShareButtonProps {
  title: string
  url?: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Obtener la URL actual si no se proporciona
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const shareText = `${title} - por Miguel Casares`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = shareUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(twitterUrl, '_blank', 'width=550,height=420')
  }

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(linkedinUrl, '_blank', 'width=550,height=420')
  }

  const shareViaEmail = () => {
    const emailSubject = encodeURIComponent(shareText)
    const emailBody = encodeURIComponent(`Te comparto este artículo interesante sobre Power BI:\n\n${shareUrl}`)
    const emailUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`
    window.open(emailUrl)
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareText,
          url: shareUrl,
        })
      } catch {
        // Si el usuario cancela o hay error, mostrar opciones manuales
        setIsOpen(true)
      }
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        className="ml-auto text-gray-300" 
        onClick={handleNativeShare}
      >
        <Share2 className="w-4 h-4 mr-1" />
        Compartir
      </Button>

      {isOpen && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu de compartir */}
          <div className="absolute right-0 top-full mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-4 min-w-[250px] z-50">
            <h4 className="text-white font-medium mb-3">Compartir artículo</h4>
            
            <div className="space-y-2">
              {/* Copiar URL */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 mr-2" />
                )}
                {copied ? 'Copiado!' : 'Copiar enlace'}
              </Button>

              {/* Compartir en Twitter */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={shareOnTwitter}
              >
                <Twitter className="w-4 h-4 mr-2" />
                Compartir en Twitter
              </Button>

              {/* Compartir en LinkedIn */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={shareOnLinkedIn}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Compartir en LinkedIn
              </Button>

              {/* Compartir por email */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={shareViaEmail}
              >
                <Mail className="w-4 h-4 mr-2" />
                Compartir por email
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
