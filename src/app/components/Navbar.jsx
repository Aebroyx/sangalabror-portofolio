export default function Navbar() {
    return(
        <>
            <nav className="h-16 flex bg-violet-500 text-white">
                <div className="flex-1 flex items-center pl-6">
                    <h1 className="text-xl">
                        Sangalabror Pujianto
                    </h1>
                </div>
                <div className="flex-none flex flex-row items-center gap-5 pr-6">
                    <h1>
                        About
                    </h1>
                    <h1>
                        Experience
                    </h1>
                    <h1>
                        Certification & Education
                    </h1>
                    <h1>
                        Contact Me
                    </h1>
                </div>
            </nav>
        </>
    )
}