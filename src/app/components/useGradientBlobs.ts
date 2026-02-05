import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'

export const useGradientBlobs = (blobRefs: RefObject<HTMLDivElement>[]) => {
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

      // Generate random positions for organic movement
      const generateRandomPosition = () => ({
        x: gsap.utils.random(0, window.innerWidth - blobSize),
        y: gsap.utils.random(0, window.innerHeight - blobSize),
      })

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
