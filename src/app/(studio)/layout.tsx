import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Studio | Sangalabror Portfolio',
  description: 'Content management studio for Sangalabror Portfolio',
  robots: {
    index: false,
    follow: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  )
}
