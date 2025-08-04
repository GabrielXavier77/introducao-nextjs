import Image from "next/image";

type ImageCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ImageCard({
  title,
  description,
  imageUrl,
}: ImageCardProps) {
  return (
    <div className="flex flex-col p-4 bg-gray-100 border-2 border-purple-600 rounded-xl w-1/2 min-h-60">

      <div className="flex w-full justify-center items-center mb-4">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover w-20 h-20"
          width={10}
          height={10}
        />
      </div>

      <div>
        <h1 className="font-bold text-xl mb-4">{title}</h1>
        <p className="text-gray-800">{description}</p>
      </div>

    </div>
  )
}
