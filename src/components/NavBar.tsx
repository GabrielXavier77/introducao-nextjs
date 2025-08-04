import Image from "next/image"

interface NavBarContents {
        links: {
            label: string,
            href: string
        }[]
    }

export default function NavBar({links}: NavBarContents) {

    return (
        <nav className="w-full bg-fuchsia-700 shadow-md">
            <div className="px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex justify-center items-center">
                            <Image
                                src="/nextjs-logo.svg"
                                alt="next-logo"
                                width={40}
                                height={40}
                                className=""
                            />
                            <span className="ml-3">NextApp</span>
                        </div>
                    <div className="space-x-7">
                        {links.map((link, index) => (
                            <a className="text-xl font-medium hover:text-zinc-800 hover:underline" href={link.href} key={index}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}