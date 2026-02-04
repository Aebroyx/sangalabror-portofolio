'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface NavButtonProps {
  href?: string
  label: string
  external?: boolean
  disabled?: boolean
  icon?: React.ReactNode
}

export default function NavButton({ href, label, external = false, disabled = false, icon }: NavButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!buttonRef.current || !iconRef.current || disabled) return

    const button = buttonRef.current
    const iconElement = iconRef.current

    const handleMouseEnter = () => {
      // Animate icon based on button type
      if (label === 'Links') {
        // Rotate and scale animation for link icon
        gsap.to(iconElement, {
          rotation: 360,
          scale: 1.2,
          duration: 0.5,
          ease: 'back.out(1.7)'
        })
      } else if (label === 'Resume') {
        // Bounce down animation for download icon
        gsap.to(iconElement, {
          y: 4,
          duration: 0.3,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1
        })
      }
    }

    const handleMouseLeave = () => {
      // Reset icon animation
      gsap.to(iconElement, {
        rotation: 0,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [disabled, label])

  const buttonClass = disabled
    ? `btn bg-gradient-to-l from-neutral-800 to-black text-white opacity-50 cursor-not-allowed border border-neutral-800 sm:min-w-[124px]`
    : `btn bg-gradient-to-l from-neutral-800 to-black text-white hover:bg-primary border border-neutral-700 hover:border-primary transition-all duration-200 sm:min-w-[124px]`

  const buttonContent = (
    <button ref={buttonRef} className={buttonClass} disabled={disabled}>
      <span className="flex items-center gap-2">
        {icon && <span ref={iconRef} className="inline-block">{icon}</span>}
        <span>{label}</span>
      </span>
    </button>
  )

  if (disabled || !href) {
    return buttonContent
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    )
  }

  return (
    <Link href={href}>
      {buttonContent}
    </Link>
  )
}
