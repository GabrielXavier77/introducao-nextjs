import Image from "next/image";

export type ImageCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  category: "Livro" | "Filme" | "Jogo";
};

export default function ImageCard({
  title,
  description,
  imageUrl,
  category,
}: ImageCardProps) {
  const handleCategory = () => {
    if (category === "Livro") {
      return (
        <h1 className="font-bold text-xl mb-4">
          <span className="mr-8">{title}</span><span className="text-gray-500">Livro 📖</span>
        </h1>
      )
    } else if (category === "Filme") {
      return (
        <h1 className="font-bold text-xl mb-4">
          <span className="mr-8">{title}</span><span className="text-gray-500">Filme🎥</span>
        </h1>
      )
    } else {
      return (
        <h1 className="font-bold text-xl mb-4">
          <span className="mr-8">{title}</span><span className="text-gray-500">Jogo 🎮</span>
        </h1>
      )
    }
  }

  return (
    <div className="flex flex-col p-4 bg-gray-100 border-2 border-purple-600 rounded-xl w-md min-h-45">

      <div className="flex w-full justify-center items-center mb-4">
        <Image
          src={imageUrl}
          alt={title}
          width={115}
          height={10}
        />
      </div>

      <div>
        {handleCategory()}
        <p className="text-gray-800">{description}</p>
      </div>

    </div>
  )
}
