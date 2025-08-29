import Timeline from "../components/Timeline"

export default function Education() {
    return(
        <>
            <div className="flex flex-col items-center justify-center w-full h-full flex-1 px-4 md:px-12 lg:px-24 xl:px-32">
                <div className="flex-1 flex justify-center items-center">
                    <section>
                        <h1 className="text-3xl text-white font-bold pb-5 text-center lg:text-left">
                            Certification & Education
                        </h1>
                        <Timeline />
                    </section>
                </div>
            </div>
        </>
    )
}