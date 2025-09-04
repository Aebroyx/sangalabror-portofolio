'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DeviceRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Function to detect if device is mobile
    const isMobile = () => {
      // Check for mobile user agent
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
      
      // Check for touch capability (mobile devices typically have touch)
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      // Check screen width (mobile devices typically have smaller screens)
      const isSmallScreen = window.innerWidth <= 768
      
      return mobileRegex.test(userAgent) || (hasTouch && isSmallScreen)
    }

    // Only redirect if we're on the home page (root path)
    if (window.location.pathname === '/') {
      if (isMobile()) {
        // Redirect mobile users to /links
        router.replace('/links')
      }
      // Desktop users stay on the current page (which shows About)
    }
  }, [router])

  // This component doesn't render anything
  return null
}
