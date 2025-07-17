import Carousel from "../components/Carousel"
import Image from "next/image"
import ProjectsList from "../components/ProjectsList"

export default function Projects() {
    
    return(
        <>
            <div className="flex flex-col items-center justify-center w-full h-full flex-1">
                <div className="w-1/12">
                </div>
                <div className="flex-grow flex justify-center items-center">
                    <section className="w-full">
                        <h1 className="text-3xl text-white font-bold pb-5 mb-8">
                            My Projects
                        </h1>
                        <div className="flex items-center justify-center">
                            <ProjectsList />
                        </div>
                    </section>
                </div>
                <div className="w-1/12">
                </div>
            </div>
        </>
    )
}