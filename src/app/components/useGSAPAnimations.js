import { useEffect } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

export const useGSAPAnimations = (refs) => {
    useEffect(() => {
        // Register TextPlugin
        gsap.registerPlugin(TextPlugin)

        // Create timeline for smooth sequencing
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        // Animate the greeting text
        if (refs.greetingRef?.current) {
            tl.fromTo(refs.greetingRef.current, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5 }
            )
        }

        // Animate the name with a bouncy effect and metallic gradient
        if (refs.nameRef?.current) {
            // First animate the entrance
            tl.fromTo(refs.nameRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }
            )

            // Add floating animation to the name
            gsap.to(refs.nameRef.current, {
                y: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            })
        }

        // Animate the title (simple entrance)
        if (refs.titleRef?.current) {
            tl.fromTo(refs.titleRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.5 }
            )
        }

        // Animate the description with staggered reveal
        if (refs.descRef?.current) {
            tl.fromTo(refs.descRef.current.querySelectorAll("span"),
                { opacity: 0, y: 20 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.4, 
                    stagger: 0.05,
                    ease: "power2.out"
                }
            )
        }

        // Animate the navigation links with staggered reveal
        if (refs.linksRef?.current) {
            tl.fromTo(refs.linksRef.current.querySelectorAll("div"),
                { opacity: 0, x: 50, rotationY: 15 },
                { 
                    opacity: 1, 
                    x: 0, 
                    rotationY: 0, 
                    duration: 0.8, 
                    stagger: 0.15,
                    ease: "power2.out"
                }
            )
        }

        // Add hover animations for links
        gsap.utils.toArray(".nav-link").forEach(link => {
            link.addEventListener("mouseenter", () => {
                gsap.to(link, { 
                    scale: 1.05, 
                    duration: 0.3, 
                    ease: "power2.out" 
                })
            })
            
            link.addEventListener("mouseleave", () => {
                gsap.to(link, { 
                    scale: 1, 
                    duration: 0.3, 
                    ease: "power2.out" 
                })
            })
        })

        // Cleanup function - only kill specific animations, not all
        return () => {
            // Kill only the timeline animations, not all GSAP animations
            if (tl) {
                tl.kill()
            }
            // Kill floating animation specifically
            if (refs.nameRef?.current) {
                gsap.killTweensOf(refs.nameRef.current)
            }
        }
    }, [refs])
}
