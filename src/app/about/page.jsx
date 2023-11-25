import Link from "next/link"

export default function About() {
    return(
        <>
            <div className='flex h-screen'>
                <div className='w-1/12'>
                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <section id='about'>
                        <p className='text-primary'>Hi, my name is</p>
                        <h1 className='text-7xl font-bold text-white pt-4'>
                        Sangalabror Pujianto
                        </h1>
                        <h2 className='text-5xl font-bold text-primary pt-4'>
                        Fullstack Developer
                        </h2>
                        <br/>
                        <h3 className='text-white'>
                        A motivated individual who aspires to be a Software Developer that specializes in full stack software
                        development. I consider myself to be versatile and can adapt and overcome different challenges. Efficiently skilled
                        in problem solving. Has worked around technologies at an early age which lead to my pursuit of my Computer
                        Science degree.
                        </h3>
                    </section>
                </div>
                <div className="hidden lg:flex-1 flex justify-center items-center">
                    <div className="flex flex-col font-bold text-primary text-5xl gap-5 ml-32">
                        <div>
                            <Link href='/education' className="group transition duration-300">
                                Ceritfication & Education
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary"></span>
                            </Link>
                        </div>
                        <div>
                            <Link href='/experience' className="group transition duration-300">
                                Experience
                                <span className="block max-w-0 group-hover:max-w-[265px] transition-all duration-500 h-1 bg-primary"></span>
                            </Link>
                        </div>
                        <div>
                            <Link href='/projects' className="group transition duration-300">
                                Projects
                                <span className="block max-w-0 group-hover:max-w-[200px] transition-all duration-500 h-1 bg-primary"></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-1/12'>
                </div>
            </div>
        </>
    )
}