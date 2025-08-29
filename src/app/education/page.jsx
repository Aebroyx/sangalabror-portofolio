"use client"
import { useRef } from "react"
import Timeline from "../components/Timeline"
import { useGSAPAnimations } from "../components/useGSAPAnimations"

export default function Education() {
    // Refs for GSAP animations
    const titleRef = useRef(null);
    const timelineRef = useRef(null);

    // Use the custom hook for GSAP animations
    useGSAPAnimations({ titleRef, timelineRef });

    return(
        <>
            <div className="flex flex-col items-center justify-center w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32">
                <div className="flex-1 flex justify-center items-center">
                    <section>
                        <h1 className="text-3xl text-white font-bold pb-5 text-center lg:text-left" ref={titleRef}>
                            Certification & Education
                        </h1>
                        <div ref={timelineRef}>
                            <Timeline />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}