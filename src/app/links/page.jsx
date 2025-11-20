import Link from "next/link"

export default function Links() {
    const socialLinks = [
        {
            name: "Portfolio Website",
            url: "https://sangalabror.aebroyx.dev/about",
            icon: "🌐",
            color: "hover:bg-primary"
        },
        {
            name: "GitHub",
            url: "https://github.com/aebroyx",
            icon: "🐙",
            color: "hover:bg-lime-500"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/sangalabrorpujianto/",
            icon: "💼",
            color: "hover:bg-blue-600"
        },
        {
            name: "Twitch",
            url: "https://twitch.tv/aebroyx",
            icon: "🎥",
            color: "hover:bg-purple-600"
        },
        // {
        //     name: "Twitter/X",
        //     url: "https://twitter.com/aebroyx",
        //     icon: "🐦",
        //     color: "hover:bg-black"
        // },
        {
            name: "Instagram",
            url: "https://instagram.com/abrorpujianto",
            icon: "📸",
            color: "hover:bg-gradient-to-r from-purple-500 to-pink-500"
        },
        {
            name: "Resume/CV",
            url: "/CV.pdf",
            icon: "📄",
            color: "hover:bg-primary"
        }
    ]

    return (
        <>
            <div className="fixed inset-0 w-full h-[100dvh] overflow-y-auto overflow-x-hidden">
                <div className="min-h-full w-full flex flex-col items-center justify-center py-12 px-4 md:px-12 lg:px-24 xl:px-32">
                    <section className="w-full max-w-md">
                        {/* Profile Section */}
                        <div className="text-center mb-8">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
                                SP
                            </div>
                            <h1 className="text-3xl text-white font-bold mb-2">Sangalabror Pujianto</h1>
                            <p className="text-gray-300 text-lg mb-4">Full Stack Developer</p>
                            <p className="text-gray-400 text-sm max-w-sm mx-auto">
                                Passionate about creating innovative web solutions and building amazing user experiences
                            </p>
                        </div>

                        {/* Links Section */}
                        <div className="space-y-3">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target={link.url.startsWith('http') || link.url.startsWith('mailto:') ? "_blank" : "_self"}
                                    rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                                    className={`block w-full p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-center font-medium transition-all duration-300 hover:scale-105 ${link.color} hover:border-white/40`}
                                >
                                    <span className="text-xl mr-3">{link.icon}</span>
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-8 text-gray-400 text-sm">
                            <p>Thanks for visiting! ✨</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
