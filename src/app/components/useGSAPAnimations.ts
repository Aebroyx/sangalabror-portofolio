import { useEffect } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { GSAPAnimationRefs } from '@/types'

export const useGSAPAnimations = (refs: GSAPAnimationRefs): void => {
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
                    { opacity: 0, y: -30 },
                    { opacity: 1, y: 0, duration: 0.5 }
                )
            }

            // Timeline animations - animate inner content + connector lines
            // separately so the spine "draws" itself instead of sitting there.
            const timelineEl = refs.timelineRef.current
            const icons = timelineEl.querySelectorAll<HTMLElement>('.timeline-anim-icon')
            const contents = timelineEl.querySelectorAll<HTMLElement>('.timeline-anim-content')
            const lines = timelineEl.querySelectorAll<HTMLElement>('.timeline-anim-line')

            // Pin initial state explicitly so GSAP has it cached before tweening.
            if (icons.length) {
                gsap.set(icons, {
                    opacity: 0,
                    scale: 0.6,
                    transformOrigin: 'center center',
                    force3D: true,
                })
            }
            if (contents.length) {
                gsap.set(contents, { opacity: 0, y: 24, force3D: true })
            }
            if (lines.length) {
                gsap.set(lines, {
                    opacity: 0,
                    scaleY: 0,
                    transformOrigin: 'top center',
                    force3D: true,
                })
            }

            if (icons.length) {
                tl.to(icons, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.45,
                    stagger: 0.12,
                    ease: 'power3.out',
                    clearProps: 'willChange',
                }, '-=0.2')
            }

            if (lines.length) {
                tl.to(lines, {
                    opacity: 1,
                    scaleY: 1,
                    duration: 0.4,
                    stagger: 0.12,
                    ease: 'power2.out',
                    clearProps: 'willChange,transform',
                }, '<+=0.08')
            }

            if (contents.length) {
                tl.to(contents, {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.12,
                    ease: 'power3.out',
                    clearProps: 'willChange,transform',
                }, '<-=0.03')
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
            gsap.utils.toArray<HTMLElement>(".nav-link").forEach((link: HTMLElement) => {
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
    }, [refs]) // Include refs in dependency array
}
