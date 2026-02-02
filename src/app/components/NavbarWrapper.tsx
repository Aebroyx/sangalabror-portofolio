'use client'
import { usePathname } from 'next/navigation'
import NavbarClient from './NavbarClient'

interface NavbarWrapperProps {
  cvUrl?: string
}

export default function NavbarWrapper({ cvUrl }: NavbarWrapperProps) {
  const pathname = usePathname()
  const showNavbar: boolean = pathname !== '/links'

  if (!showNavbar) {
    return null
  }

  return <NavbarClient cvUrl={cvUrl} />
}
