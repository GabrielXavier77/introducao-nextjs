import Image from "next/image";

interface CardContent {
  title: string;
  subTitle: string;
  date: string;
}

export default function Comment({ title, subTitle, date }: CardContent) {
  return (
    <div className="bg-gray-50 w-md h-45 p-5 border-2 border-purple-600 rounded-2xl hover:shadow-md transition duration-300">
      <h2 className="font-bold text-xl mb-4 flex justify-between">
        {title} <span className="text-gray-500 text-base">{date}</span>
      </h2>
      <h3 className="text-gray-700 text-lg">{subTitle}</h3>
    </div>
  );
}
