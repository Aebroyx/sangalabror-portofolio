"use client"

import ProjectsList from "../components/ProjectsList"
import { useRef } from "react"
import { useGSAPAnimations } from '../components/useGSAPAnimations'

// export const metadata = {
//   title: 'Projects',
//   description: 'Explore my portfolio of web development projects, mobile applications, and UI/UX designs. See my work in React, Next.js, and modern web technologies.',
//   openGraph: {
//     title: 'Projects - Sangalabror Pujianto',
//     description: 'Explore my portfolio of web development projects, mobile applications, and UI/UX designs. See my work in React, Next.js, and modern web technologies.',
//   },
// }

export default function Projects() {
    // Refs for GSAP animations
    const titleRef = useRef<HTMLHeadingElement>(null);
    const projectsListRef = useRef<HTMLDivElement>(null);
    
    // Use the custom hook for GSAP animations
    useGSAPAnimations({ titleRef, projectsListRef });
    
    return(
        <>
            <div className="flex flex-col items-center justify-center w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32">
                <div className="flex-grow flex justify-center items-center w-full">
                    <section className="w-full">
                        <h1 className="text-4xl text-white font-bold pb-5 mb-8 text-center" ref={titleRef}>
                            Projects
                        </h1>
                        <div className="flex items-center justify-center" ref={projectsListRef}>
                            <ProjectsList />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}