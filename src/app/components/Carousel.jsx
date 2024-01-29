import Image from "next/image"
export default function Carousel() {
    return(
        <>
            <h1 className="text-3xl text-white font-bold pb-5">
                My Projects
            </h1>

            <h2 className="text-2xl text-primary font-bold pb-5">
                Autosave Website
            </h2>
            <h3 className="text-xl text-white pb-5">
                Desktop
            </h3>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <Image height={300} width={300} src="/autosaveD1.png" alt="autosaveD1" className="object-contain h-48 w-full"/>
                </div> 
                <div className="carousel-item">
                    <Image height={300} width={300} src="/autosaveD2.png" alt="autosaveD2" className="object-contain h-48 w-full"/>
                </div> 
                <div className="carousel-item">
                    <Image height={300} width={300} src="/autosaveD3.png" alt="autosaveD3" className="object-contain h-48 w-full"/>
                </div> 
                <div className="carousel-item">
                    <Image height={300} width={300} src="/autosaveD4.png" alt="autosaveD4" className="object-contain h-48 w-full"/>
                </div> 
            </div>
            <h3 className="text-xl text-white pb-5 pt-5">
                Mobile
            </h3>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <Image height={300} width={300} src="/autosaveM1.png" alt="autosaveM1" className="object-contain h-48 w-full"/>
                </div> 
                <div className="carousel-item">
                    <Image height={300} width={300} src="/autosaveM2.png" alt="autosaveM2" className="object-contain h-48 w-full"/>
                </div> 
                <div className="carousel-item">
                    <Image height={300} width={300} src="/autosaveM3.png" alt="autosaveM3" className="object-contain h-48 w-full"/>
                </div> 
                <div className="carousel-item">
                    <Image height={300} width={300} src="/autosaveM4.png" alt="autosaveM4" className="object-contain h-48 w-full"/>
                </div> 
            </div>
        </>
    )
}