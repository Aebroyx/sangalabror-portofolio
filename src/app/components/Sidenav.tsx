import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function Sidenav() {
    return(
        <>
            <div className="fixed bottom-0 pl-10 pb-72 grid grid-rows-3 gap-5">
                    <a href="https://www.linkedin.com/in/sangalabrorpujianto/" className="text-4xl text-violet-500">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Aebroyx" className="text-4xl text-violet-500">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/abrorpujianto/" className="text-4xl text-violet-500">
                        <FaInstagram />
                    </a>
            </div>
        </>
    )
}