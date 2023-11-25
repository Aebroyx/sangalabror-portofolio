import Link from "next/link"

export default function Navbar() {
    return(
        <>
            <nav className="sticky top-0 h-16 flex text-white pt-5 h-[64px] mb-[-64px]">
                <div className="flex-1 flex items-center pl-6">
                    <Link href={'/'} className="hover:text-primary">
                    <h1 className="text-xl hover:text-2xl">
                        {`{ name: 'SP' }`}
                    </h1>
                    </Link>
                </div>
                <div className="flex-none flex flex-row items-center gap-5 pr-6">
                    <button className="btn bg-black text-white hover:bg-primary">
                        <a href="/CV.pdf">Resume</a>
                    </button>
                </div>
            </nav>
        </>
    )
}