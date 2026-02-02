export type AnimationType = 'fadeIn' | 'slideUp' | 'slideLeft' | 'scaleIn'

export interface AnimationConfig {
  opacity?: number
  x?: number
  y?: number
  rotationY?: number
  duration?: number
  stagger?: number
  ease?: string
  delay?: number
}
