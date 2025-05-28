import Image from "next/image"

interface NavBarContents {
        names: string[],
        hrefs: string[]
    }

export default function NavBar(props: NavBarContents) {

    return (
        <nav className="bg-fuchsia-700 shadow-md">
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
                        {props.names.map((name, index) => (
                            <a className="text-lg font-medium hover:text-zinc-800 hover:underline" href={props.hrefs[index]} key={index}>{name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}