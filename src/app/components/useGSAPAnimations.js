import { useEffect } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

export const useGSAPAnimations = (refs) => {
    useEffect(() => {
        // Register TextPlugin
        gsap.registerPlugin(TextPlugin)

        // Create timeline for smooth sequencing
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        // Check if this is the experience page (has accordionRef)
        if (refs.accordionRef?.current) {
            // Experience page animations
            if (refs.titleRef?.current) {
                tl.fromTo(refs.titleRef.current,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.6 }
                )
            }

            if (refs.accordionRef?.current) {
                // Animate accordion items from their initial hidden state to final position
                const accordionItems = refs.accordionRef.current.querySelectorAll('.collapse')
                tl.to(accordionItems,
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        stagger: 0.2,
                        ease: "power2.out"
                    }
                )
            }
        } else if (refs.timelineRef?.current) {
            // Education page animations
            if (refs.titleRef?.current) {
                tl.fromTo(refs.titleRef.current,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.6 }
                )
            }
            
            // Timeline animations - clean bottom to top entrance
            if (refs.timelineRef?.current) {
                const timelineItems = refs.timelineRef.current.querySelectorAll('li')
                
                // Animate timeline items from their initial hidden state to final position
                tl.to(timelineItems, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: "power2.out"
                })
            }
        } else if (refs.projectsListRef?.current) {
            // Projects page animations
            if (refs.titleRef?.current) {
                tl.fromTo(refs.titleRef.current,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.6 }
                )
            }

            if (refs.projectsListRef?.current) {
                // Animate project list items from their initial hidden state to final position
                const projectItems = refs.projectsListRef.current.querySelectorAll('li')
                tl.to(projectItems,
                    { 
                        opacity: 1, 
                        y: 0,
                        duration: 0.7, 
                        stagger: 0.15,
                        ease: "power2.out"
                    }
                )
            }
        } else {
            // About page animations (only navigation links)
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
        }

        // Cleanup function - only kill specific animations, not all
        return () => {
            // Kill only the timeline animations, not all GSAP animations
            if (tl) {
                tl.kill()
            }
        }
    }, []) // Empty dependency array ensures this only runs once
}
