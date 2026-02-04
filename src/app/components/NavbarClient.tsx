'use client'

import Link from 'next/link'
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
        <div className="flex-none flex flex-row items-center gap-3 pr-6">
          <NavButton href="/links" label="Links" />
          <NavButton href={cvUrl} label="Resume" external disabled={!cvUrl} />
        </div>
      </nav>
    </>
  )
}
