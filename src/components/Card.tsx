import Image from "next/image"

interface CardContent {
    image: {
        src: string,
        alt: string
    },
    title: string,
    subTitle: string
}

export default function Card({image, title, subTitle}: CardContent) {
    return (
        <div className="m-5 bg-gray-300 w-md h-45 p-5 border border-gray-400 rounded-2xl hover:shadow-md transition duration-300">
            <Image
                src={image.src}
                alt={image.alt}
                width={50}
                height={50}
                className="mb-3"
            />
            <h2 className="font-bold">{title}</h2>
            <h3 className="text-gray-500">{subTitle}</h3>
        </div>
    )
}