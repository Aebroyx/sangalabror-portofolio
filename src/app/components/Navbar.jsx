import Link from "next/link"

export default function Navbar() {
    return(
        <>
            <nav className="sticky top-0 h-16 flex text-white pt-5">
                <div className="flex-1 flex items-center pl-6">
                    <Link href={'/'}>
                        <h1 className="text-xl text-white hover:text-primary hover:scale-110 transition-transform duration-300">
                            {`{ name: 'SP' }`}
                        </h1>
                    </Link>
                </div>
                <div className="flex-none flex flex-row items-center gap-5 pr-6">
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn bg-black text-white hover:bg-primary">
                        Resume
                    </button>
                </a>
                </div>
            </nav>
        </>
    )
}