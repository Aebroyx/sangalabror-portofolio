'use client'

import Link from 'next/link'
import { LinkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import NavButton from './NavButton'

interface NavbarClientProps {
  cvUrl?: string
}

export default function NavbarClient({ cvUrl }: NavbarClientProps) {
  return (
    <>
      <nav className="sticky top-0 h-16 flex text-white pt-5">
        <div className="flex-1 flex items-center pl-6">
          <Link href={'/'}>
            <h1 className="text-xl text-white hover:text-primary hover:scale-110 transition-transform duration-300">
              {`{ name: 'SP' }`}
            </h1>
          </Link>
        </div>
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
