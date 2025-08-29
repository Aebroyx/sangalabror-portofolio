import Link from "next/link"
import './page.css'

export default function About() {
    return(
        <>
            {/* Mobile */}
            <div id='aboutmobile' className="flex flex-col items-center justify-center w-full h-full pt-24 flex-1">
                <div className='flex flex-col justify-center items-center mx-6'>
                    <section>
                        <div className="mb-12">
                            <p className='text-primary'>
                                Hi, my name is
                            </p>
                            <h1 className='text-4xl font-bold text-white pt-4'>
                                Sangalabror Pujianto
                            </h1>
                            <h2 className='text-3xl font-bold text-primary pt-4'>
                                Fullstack Developer
                            </h2>
                            <br/>
                            <h3 className='text-white'>
                                I&apos;m a versatile Fullstack Developer skilled in building scalable applications and quickly adapting to diverse tech stacks. My expertise includes integrating complex business systems like SAP and ERP. Strong in analytical thinking and clear communication, I collaborate effectively across teams and thrive in dynamic environments.
                            </h3>
                        </div>
                        <div className="flex flex-col justfify-center items-center font-bold text-primary text-4xl gap-5 mb-28">
                            <div>
                                <Link href='/education' className="group transition duration-300">
                                    Education
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
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-primary"></span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Desktop */}
            <div id='aboutdesktop' className='flex flex-row w-full h-full flex-1 px-8 lg:px-16 xl:px-20 2xl:px-32'>
                <div className='flex-1 flex justify-center items-center pr-4 md:pr-6 lg:pr-8 xl:pr-12 2xl:pr-16'>
                    <section>
                        <p className='text-primary text-base md:text-sm lg:text-sm xl:text-sm 2xl:text-base'>Hi, my name is</p>
                        <h1 className='text-6xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white pt-4'>
                        Sangalabror Pujianto
                        </h1>
                        <h2 className='text-4xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary pt-4'>
                        Fullstack Developer
                        </h2>
                        <br/>
                        <h3 className='text-white text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base max-w-none md:max-w-lg lg:max-w-none xl:max-w-lg 2xl:max-w-none leading-relaxed'>
                            I&apos;m a motivated and versatile Fullstack Developer with a passion for crafting robust, scalable software solutions. My journey into technology began early, fueling my pursuit of a Computer Science degree and driving my eagerness to explore new tech stacks continuously. I&apos;m proficient in <span className="text-primary">JavaScript/TypeScript, ReactJS, Next.js, Express.js, Prisma, and MySQL</span> for web, and I thrive when transforming complex requirements into seamless, user-centric applications. With hands-on experience bridging technical execution with business objectives, especially in systems integrating SAP and ERP solutions, I bring both analytical insight and practical expertise to every project. Beyond coding, I excel in critical thinking, clear communication, and effective collaboration with both technical and non-technical stakeholders. Always curious and ready to adapt, I&apos;m excited to embrace new challenges and contribute meaningfully in dynamic environments
                        </h3>
                    </section>
                </div>
                <div id="selector" className="flex-1 flex justify-center items-center pl-4 md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-16">
                    <div className="flex flex-col font-bold text-primary text-4xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl gap-4 md:gap-3 lg:gap-3 xl:gap-4 2xl:gap-5 ml-16 md:ml-8 lg:ml-8 xl:ml-12 2xl:ml-16 debug-2xl">
                        <div>
                            <Link href='/education' className="group inline-block transition duration-300">
                                Certification & Education
                                <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-primary"></span>
                            </Link>
                        </div>
                        <div>
                            <Link href='/experience' className="group inline-block transition duration-300">
                                Experience
                                <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-primary"></span>
                            </Link>
                        </div>
                        <div>
                            <Link href='/projects' className="group inline-block transition duration-300">
                                Projects
                                <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-primary"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}