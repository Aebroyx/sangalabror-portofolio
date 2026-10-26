import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'

export const useGradientBlobs = (blobRefs: RefObject<HTMLDivElement | null>[]) => {
  useEffect(() => {
    const timelines: gsap.core.Timeline[] = []

    // Animate each blob with random movements
    blobRefs.forEach((blobRef) => {
      if (!blobRef.current) return

      const blob = blobRef.current
      const blobSize = blob.offsetWidth

      // Create timeline for this blob
      const tl = gsap.timeline({
        repeat: -1,
        delay: gsap.utils.random(0, 2), // Shorter stagger delays
      })

      // Generate random positions with better distribution across screen
      const generateRandomPosition = () => {
        const maxX = window.innerWidth - blobSize
        const maxY = window.innerHeight - blobSize

        // 60% chance for edge/corner positions, 40% chance for anywhere
        if (Math.random() < 0.6) {
          // Bias toward edges and corners
          const edge = Math.floor(Math.random() * 4)
          switch (edge) {
            case 0: // Top edge
              return { x: gsap.utils.random(0, maxX), y: gsap.utils.random(0, maxY * 0.2) }
            case 1: // Bottom edge
              return { x: gsap.utils.random(0, maxX), y: gsap.utils.random(maxY * 0.8, maxY) }
            case 2: // Left edge
              return { x: gsap.utils.random(0, maxX * 0.2), y: gsap.utils.random(0, maxY) }
            case 3: // Right edge
              return { x: gsap.utils.random(maxX * 0.8, maxX), y: gsap.utils.random(0, maxY) }
          }
        }
        // Fully random position
        return {
          x: gsap.utils.random(0, maxX),
          y: gsap.utils.random(0, maxY),
        }
      }

      // Set initial random position
      const initialPos = generateRandomPosition()
      gsap.set(blob, {
        x: initialPos.x,
        y: initialPos.y,
      })

      // Create 4-5 keyframes with random positions
      const keyframeCount = Math.floor(gsap.utils.random(4, 5))
      for (let i = 0; i < keyframeCount; i++) {
        const pos = generateRandomPosition()
        tl.to(blob, {
          x: pos.x,
          y: pos.y,
          duration: gsap.utils.random(8, 15), // Faster animation
          ease: 'power1.inOut',
        })
      }

      timelines.push(tl)
    })

    // Cleanup function
    return () => {
      timelines.forEach((tl) => tl.kill())
    }
  }, [blobRefs])
}
