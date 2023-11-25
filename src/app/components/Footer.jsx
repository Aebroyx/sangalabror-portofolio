import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return(
        <>
            <footer className="pb-12 mt-[-120px]">
                <div className="flex justify-center items-center gap-5">
                    <a href="https://www.linkedin.com/in/sangalabrorpujianto/" className="text-4xl text-primary">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Aebroyx" className="text-4xl text-primary">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/abrorpujianto/" className="text-4xl text-primary">
                        <FaInstagram />
                    </a>
                </div>
            </footer>
        </>
    )
}