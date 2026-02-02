'use client'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function FooterWrapper() {
  const pathname = usePathname()
  const showFooter: boolean = pathname !== '/links'

  if (!showFooter) {
    return null
  }

  return <Footer />
}
