'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { LinkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap'
import NavButton from './NavButton'

interface NavbarClientProps {
  cvUrl?: string
}

export default function NavbarClient({ cvUrl }: NavbarClientProps) {
  const logoRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!logoRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { y: -10, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
        }
      )
    }, logoRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <nav className="sticky top-0 h-16 flex text-white pt-5">
        <div
          ref={logoRef}
          className="flex-1 flex items-center pl-8 sm:pl-10"
        >
          <Link href="/" className="group inline-flex">
            <span className="inline-flex text-white group-hover:text-primary transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 292.57"
                aria-label="SP Logo"
                className="h-8 w-auto group-hover:scale-110 transition-transform duration-300"
              >
                <g>
                  <path
                    d="M0,219.43v36.57h36.57v-36.57H0ZM36.57,109.71v36.57h182.85v-36.57H36.57ZM36.57,256v36.57h182.85v-36.57H36.57Z"
                    fill="currentColor"
                  />
                  <path
                    d="M219.43,0v36.57H36.57v73.14H0V36.57C0,16.37,16.37,0,36.57,0h182.85Z"
                    fill="currentColor"
                  />
                  <path
                    d="M438.85,109.71v36.57h36.57v-36.57h-36.57ZM475.43,73.14v36.57h36.57v-36.57h-36.57Z"
                    fill="currentColor"
                  />
                  <path
                    d="M475.43,36.57v36.57h-36.57v-36.57h-147.28V0h147.28v.07s0-.07,0-.07c20.19,0,36.57,16.37,36.57,36.57Z"
                    fill="currentColor"
                  />
                  <polygon
                    points="438.85 146.29 438.85 182.85 256 182.85 256 256 219.43 256 219.43 146.29 256 146.29 256 73.14 219.43 73.14 219.43 36.57 292.57 36.57 292.57 146.29 438.85 146.29"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </span>
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
