"use client";
import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    useEffect(() => {
        const footer = document.querySelector('footer');
        const handleScroll = () => {
            if (window.scrollY > 100) {
                footer.style.bottom = '-100px'; // Adjust this value as needed
            } else {
                footer.style.bottom = '0';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <footer className="fixed bottom-0 left-0 w-full pb-12 mt-[-152px] transition-bottom duration-300">
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