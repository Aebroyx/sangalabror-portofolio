'use client'

import { LinkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import NavButton from './NavButton'
import Logo from './Logo'

interface NavbarClientProps {
  cvUrl?: string
}

export default function NavbarClient({ cvUrl }: NavbarClientProps) {
  return (
    <>
      <nav className="sticky top-0 h-16 flex text-white pt-5">
        <Logo />
        <div className="flex-none flex flex-row items-center gap-2 sm:gap-3 pr-4 sm:pr-6">
          <NavButton
            href="/links"
            label="Links"
            icon={<LinkIcon className="w-4 h-4" />}
          />
          <NavButton
            href={cvUrl}
            label="Resume"
            icon={<ArrowDownTrayIcon className="w-4 h-4" />}
            external
            disabled={!cvUrl}
          />
        </div>
      </nav>
    </>
  )
}
