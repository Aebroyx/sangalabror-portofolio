import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return(
        <>
            <footer className="pb-12 mt-[-152px]">
                <div className="flex justify-center items-center gap-8">
                    <a href="https://www.linkedin.com/in/sangalabrorpujianto/" className="text-4xl text-primary hover:text-6xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Aebroyx" className="text-4xl text-primary hover:text-6xl">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/abrorpujianto/" className="text-4xl text-primary hover:text-6xl">
                        <FaInstagram />
                    </a>
                </div>
                <div className="hidden lg:block">
                    <p className="flex justify-center items-center text-sm text-white gap-1 mt-12 opacity-25">
                        personally lightly designed in <p className="text-primary">Figma</p> and coded in <p className="text-primary">Visual Studio Code.</p> Built with <p className="text-primary">Next.js</p> and <p className="text-primary">tailwindcss</p>, deployed with <p className="text-primary">Vercel.</p>
                    </p>
                </div>
            </footer>
        </>
    )
}