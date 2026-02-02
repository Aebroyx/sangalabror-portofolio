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
