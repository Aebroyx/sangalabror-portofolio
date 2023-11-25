import Timeline from "../components/Timeline"

export default function Education() {
    return(
        <>
            <div className="flex h-screen">
                <div className="w-1/6">
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <section>
                        <Timeline />
                    </section>
                </div>
                <div className="w-1/6">
                </div>
            </div>
        </>
    )
}