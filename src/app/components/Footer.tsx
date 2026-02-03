import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return(
        <footer className="fixed bottom-0 left-0 w-full pb-3 md:pb-6 transition-bottom duration-300">
            <div className="flex justify-center items-center gap-6 sm:gap-8 h-full">
                <a href="https://www.linkedin.com/in/sangalabrorpujianto/" className="text-xl md:text-2xl 2xl:text-3xl text-primary hover:scale-125 transform transition-transform duration-300">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Aebroyx" className="text-xl md:text-2xl 2xl:text-3xl text-primary hover:scale-125 transform transition-transform duration-300">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/abrorpujianto/" className="text-xl md:text-2xl 2xl:text-3xl text-primary hover:scale-125 transform transition-transform duration-300">
                    <FaInstagram />
                </a>
            </div>
            <div className="hidden sm:block footer-description">
                <p className="flex justify-center items-center text-xs xl:text-sm 2xl:text-base text-white gap-1 mt-3 xl:mt-4 2xl:mt-6 opacity-25">
                    personally lightly designed in <span className="text-primary">Figma</span> and coded in <span className="text-primary">Visual Studio Code.</span> Built with <span className="text-primary">Next.js</span> and <span className="text-primary">tailwindcss</span>, deployed with <span className="text-primary">Vercel.</span>
                </p>
            </div>
        </footer>
    )
}