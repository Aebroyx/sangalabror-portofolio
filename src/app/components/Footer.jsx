import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return(
        <>
            <footer className="pb-12 mt-[-152px]">
                <div className="flex justify-center items-center gap-8">
                    <a href="https://www.linkedin.com/in/sangalabrorpujianto/" className="text-4xl text-primary hover:scale-150 transform transition-transform duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Aebroyx" className="text-4xl text-primary hover:scale-150 transform transition-transform duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/abrorpujianto/" className="text-4xl text-primary hover:scale-150 transform transition-transform duration-300">
                        <FaInstagram />
                    </a>
                </div>
                <div className="hidden lg:block">
                    <p className="flex justify-center items-center text-sm text-white gap-1 mt-12 opacity-25">
                        personally lightly designed in <span className="text-primary">Figma</span> and coded in <span className="text-primary">Visual Studio Code.</span> Built with <span className="text-primary">Next.js</span> and <span className="text-primary">tailwindcss</span>, deployed with <span className="text-primary">Vercel.</span>
                    </p>
                </div>
            </footer>
        </>
    )
}