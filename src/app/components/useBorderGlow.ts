import { useEffect, useState } from 'react'
import { BorderIntensity, CursorPosition } from '@/types/components'

// Large threshold so effect is visible even from center of screen
// The effect will be subtle when far, intense when close
const THRESHOLD = 600

export function useBorderGlow() {
  const [intensity, setIntensity] = useState<BorderIntensity>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  })

  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      return
    }

    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        setCursorPosition({ x: clientX, y: clientY })

        // Calculate distance from each edge
        const distanceTop = clientY
        const distanceRight = innerWidth - clientX
        const distanceBottom = innerHeight - clientY
        const distanceLeft = clientX

        // Calculate intensity for each border (0-1)
        // First clamp the ratio to 0-1, THEN square for smooth falloff
        const ratioTop = Math.max(0, 1 - (distanceTop / THRESHOLD))
        const ratioRight = Math.max(0, 1 - (distanceRight / THRESHOLD))
        const ratioBottom = Math.max(0, 1 - (distanceBottom / THRESHOLD))
        const ratioLeft = Math.max(0, 1 - (distanceLeft / THRESHOLD))

        // Square for exponential falloff (smoother effect)
        const intensityTop = ratioTop * ratioTop
        const intensityRight = ratioRight * ratioRight
        const intensityBottom = ratioBottom * ratioBottom
        const intensityLeft = ratioLeft * ratioLeft

        // Only update if there's a significant change (optimization)
        setIntensity(prev => {
          const hasSignificantChange =
            Math.abs(prev.top - intensityTop) > 0.05 ||
            Math.abs(prev.right - intensityRight) > 0.05 ||
            Math.abs(prev.bottom - intensityBottom) > 0.05 ||
            Math.abs(prev.left - intensityLeft) > 0.05

          if (!hasSignificantChange) {
            return prev
          }

          return {
            top: intensityTop,
            right: intensityRight,
            bottom: intensityBottom,
            left: intensityLeft,
          }
        })
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return { intensity, cursorPosition }
}
