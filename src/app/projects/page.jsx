import ProjectsList from "../components/ProjectsList"

export default function Projects() {
    
    return(
        <>
            <div className="flex flex-col items-center justify-center w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32">
                <div className="flex-grow flex justify-center items-center w-full">
                    <section className="w-full">
                        <h1 className="text-4xl text-white font-bold pb-5 mb-8 text-center">
                            Projects
                        </h1>
                        <div className="flex items-center justify-center">
                            <ProjectsList />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}