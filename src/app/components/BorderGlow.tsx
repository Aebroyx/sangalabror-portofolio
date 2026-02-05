'use client'

import { useEffect, useRef } from 'react'
import { useBorderGlow } from './useBorderGlow'
import { BorderGlowProps } from '@/types/components'
import styles from './BorderGlow.module.css'
import gsap from 'gsap'

export default function BorderGlow({ children }: BorderGlowProps) {
  const topBorderRef = useRef<HTMLDivElement>(null)
  const rightBorderRef = useRef<HTMLDivElement>(null)
  const bottomBorderRef = useRef<HTMLDivElement>(null)
  const leftBorderRef = useRef<HTMLDivElement>(null)

  const { intensity, cursorPosition } = useBorderGlow()

  // Update cursor position CSS variables for the beam effect
  useEffect(() => {
    if (typeof window === 'undefined') return

    const topBorder = topBorderRef.current
    const rightBorder = rightBorderRef.current
    const bottomBorder = bottomBorderRef.current
    const leftBorder = leftBorderRef.current

    if (!topBorder || !rightBorder || !bottomBorder || !leftBorder) return

    const { innerWidth, innerHeight } = window

    // Calculate cursor position as percentage for gradient positioning
    const xPercent = `${(cursorPosition.x / innerWidth) * 100}%`
    const yPercent = `${(cursorPosition.y / innerHeight) * 100}%`

    // Update CSS variables for beam position
    topBorder.style.setProperty('--cursor-x', xPercent)
    bottomBorder.style.setProperty('--cursor-x', xPercent)
    rightBorder.style.setProperty('--cursor-y', yPercent)
    leftBorder.style.setProperty('--cursor-y', yPercent)
  }, [cursorPosition])

  // Animate opacity based on intensity
  useEffect(() => {
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      return
    }

    const topBorder = topBorderRef.current
    const rightBorder = rightBorderRef.current
    const bottomBorder = bottomBorderRef.current
    const leftBorder = leftBorderRef.current

    if (!topBorder || !rightBorder || !bottomBorder || !leftBorder) {
      return
    }

    // Minimum opacity so there's always a visible glow even from center
    const minOpacity = 0.5
    const maxOpacity = 1

    // Scale opacity: minOpacity when far, maxOpacity when close
    const topOpacity = minOpacity + (intensity.top * (maxOpacity - minOpacity))
    const rightOpacity = minOpacity + (intensity.right * (maxOpacity - minOpacity))
    const bottomOpacity = minOpacity + (intensity.bottom * (maxOpacity - minOpacity))
    const leftOpacity = minOpacity + (intensity.left * (maxOpacity - minOpacity))

    gsap.to(topBorder, {
      opacity: topOpacity,
      duration: 0.2,
      ease: 'power2.out',
    })

    gsap.to(rightBorder, {
      opacity: rightOpacity,
      duration: 0.2,
      ease: 'power2.out',
    })

    gsap.to(bottomBorder, {
      opacity: bottomOpacity,
      duration: 0.2,
      ease: 'power2.out',
    })

    gsap.to(leftBorder, {
      opacity: leftOpacity,
      duration: 0.2,
      ease: 'power2.out',
    })
  }, [intensity])

  // Disable on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return <>{children}</>
  }

  return (
    <>
      <div
        ref={topBorderRef}
        className={`fixed top-0 left-0 right-0 h-[2px] pointer-events-none ${styles.borderTop}`}
        style={{ zIndex: 9999, opacity: 0.5 }}
      />
      <div
        ref={rightBorderRef}
        className={`fixed top-0 right-0 bottom-0 w-[2px] pointer-events-none ${styles.borderRight}`}
        style={{ zIndex: 9999, opacity: 0.5 }}
      />
      <div
        ref={bottomBorderRef}
        className={`fixed bottom-0 left-0 right-0 h-[2px] pointer-events-none ${styles.borderBottom}`}
        style={{ zIndex: 9999, opacity: 0.5 }}
      />
      <div
        ref={leftBorderRef}
        className={`fixed top-0 left-0 bottom-0 w-[2px] pointer-events-none ${styles.borderLeft}`}
        style={{ zIndex: 9999, opacity: 0.5 }}
      />
      {children}
    </>
  )
}
