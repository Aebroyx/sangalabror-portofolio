import { FaFileAlt } from "react-icons/fa";

export default function Sidenav2() {
    return(
        <>
            <div className="fixed bottom-0 right-0 pb-[338px] flex flex-col">
                    <a href="\CV - Sangalabror Pujianto.pdf" className="text-4xl text-violet-500 pb-16 pl-11">
                        <FaFileAlt />
                    </a>
                    <p className="text-violet-500 rotate-90">Download My CV</p>
            </div>
        </>
    )
}