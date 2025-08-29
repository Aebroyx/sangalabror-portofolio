"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Timeline() {
    const timelineRef = useRef(null)

    useEffect(() => {
        // Create a simple timeline animation
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

        // Animate the timeline items with simple effects
        if (timelineRef.current) {
            const items = timelineRef.current.querySelectorAll('li')

            // Initial state - hide everything
            gsap.set(items, { 
                opacity: 0, 
                y: 50
            })

            // Animate timeline items with simple slide-up effect
            tl.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            })

            // Add simple hover effects
            items.forEach((item) => {
                item.addEventListener("mouseenter", () => {
                    gsap.to(item, {
                        scale: 1.02,
                        duration: 0.2,
                        ease: "power2.out"
                    })
                })
                
                item.addEventListener("mouseleave", () => {
                    gsap.to(item, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.out"
                    })
                })
            })
        }

        // Cleanup
        return () => {
            if (tl) tl.kill()
        }
    }, [])

    return(
        <>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical" ref={timelineRef}>
                <li>
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 text-white">
                    <time className="font-mono italic text-white">2018</time>
                    <div className="text-lg text-primary">Mentari Intercultural School Bintaro</div>
                    International Baccalaureate Diploma Program Class of 2018
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-end mb-10 text-white">
                    <time className="font-mono italic text-white">2023</time>
                    <div className="text-lg text-primary">Universitas Gadjah Mada</div>
                    International Undergraduate Program (IUP) | Computer Science
                    <br />
                    Academic Thesis: THE DEVELOPMENT OF FACE RECOGNITION SYSTEM IN COMPUTER VISION USING DEEP
                    LEARNING: DEEP SIAMESE NETWORKS METHOD
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 text-white">
                    <time className="font-mono italic text-white">2024</time>
                    <div className="text-lg text-primary">Purwadhika</div>
                    Purwadhika Diploma and Certificate for Fullstack Development
                    </div>
                </li>
            </ul>
            <br />
        </>
    )
}