import { StaticImageData } from 'next/image'
import { RefObject } from 'react'

export type AnimationType = 'fadeIn' | 'slideUp' | 'slideLeft' | 'scaleIn'

export interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  animationType?: AnimationType
  delay?: number
  duration?: number
  [key: string]: any
}

export interface ModalViewImageProps {
  open: boolean
  setOpen: (open: boolean) => void
  imageSrc: StaticImageData | string | null
}

export interface GSAPAnimationRefs {
  titleRef?: RefObject<HTMLDivElement | HTMLHeadingElement | null>
  linksRef?: RefObject<HTMLDivElement | null>
  accordionRef?: RefObject<HTMLDivElement | null>
  timelineRef?: RefObject<HTMLUListElement | HTMLDivElement | null>
  projectsListRef?: RefObject<HTMLDivElement | null>
  aboutRef?: RefObject<HTMLDivElement | null>
  accordionItemsRef?: RefObject<HTMLDivElement | null>
}

export interface BorderIntensity {
  top: number
  right: number
  bottom: number
  left: number
}

export interface CursorPosition {
  x: number
  y: number
}

export interface BorderGlowProps {
  children: React.ReactNode
}

export interface BlobConfig {
  id: number
  color: string
  initialX: number
  initialY: number
  size: number
}

export interface GradientBlobsProps {
  blobCount?: number
}
