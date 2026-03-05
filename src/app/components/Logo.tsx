'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

const LOGO_PATHS = [
  'M0,219.43v36.57h36.57v-36.57H0ZM36.57,109.71v36.57h182.85v-36.57H36.57ZM36.57,256v36.57h182.85v-36.57H36.57Z',
  'M219.43,0v36.57H36.57v73.14H0V36.57C0,16.37,16.37,0,36.57,0h182.85Z',
  'M438.85,109.71v36.57h36.57v-36.57h-36.57ZM475.43,73.14v36.57h36.57v-36.57h-36.57Z',
  'M475.43,36.57v36.57h-36.57v-36.57h-147.28V0h147.28v.07s0-.07,0-.07c20.19,0,36.57,16.37,36.57,36.57Z',
]

const LOGO_POLYGON =
  '438.85 146.29 438.85 182.85 256 182.85 256 256 219.43 256 219.43 146.29 256 146.29 256 73.14 219.43 73.14 219.43 36.57 292.57 36.57 292.57 146.29 438.85 146.29'

const GRADIENT_IMG = '/purple-gradient.png'

export default function Logo() {
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
    <div ref={logoRef} className="flex-1 flex items-center pl-8 sm:pl-10">
      <Link href="/" className="logo-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 292.57"
          aria-label="SP Logo"
          className="h-8 w-auto"
        >
          <defs>
            <pattern
              id="logo-gradient"
              patternUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <image
                href={GRADIENT_IMG}
                width="512"
                height="293"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>

          {/* Gradient-filled layer (visible by default) */}
          <g className="logo-layer-gradient">
            {LOGO_PATHS.map((d, i) => (
              <path key={i} d={d} fill="url(#logo-gradient)" />
            ))}
            <polygon points={LOGO_POLYGON} fill="url(#logo-gradient)" />
          </g>

          {/* Dark-filled layer (visible on hover) */}
          <g className="logo-layer-dark">
            {LOGO_PATHS.map((d, i) => (
              <path key={i} d={d} fill="#cecafb" />
            ))}
            <polygon points={LOGO_POLYGON} fill="#cecafb" />
          </g>
        </svg>
      </Link>
    </div>
  )
}
