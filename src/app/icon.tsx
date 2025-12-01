export default function icon() {
  return new Response(
    `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="16" fill="#6366f1"/>
      <text x="16" y="20" font-family="system-ui" font-size="18" font-weight="bold" text-anchor="middle" fill="white">MC</text>
    </svg>`,
    {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    }
  )
}
