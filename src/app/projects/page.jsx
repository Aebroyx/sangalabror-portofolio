import Carousel from "../components/Carousel"

export default function Projects() {
    return(
        <>
            <div className="flex h-screen">
                <div className="w-1/6">
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <section>
                        <Carousel />
                    </section>
                </div>
                <div className="w-1/6">
                </div>
            </div>
        </>
    )
}