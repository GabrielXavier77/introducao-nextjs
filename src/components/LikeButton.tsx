"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLiked = () => {
    setIsLiked(true);
    setTimeout(() => {
      setIsLiked(false);
    }, 800);
  };

  return (
    <div className="relative flex justify-center items-center gap-4">
      <button
        onClick={() => {
          if (isLiked) return
          handleLiked();
          setLikes(likes + 1);
        }}
      >
        <Heart
          size={28}
          className={`${
            isLiked ? "fill-red-500" : ""
          } cursor-pointer transition-all duration-500 ease-out text-red-500`}
        />
      </button>
      <span className="text-gray-800">{likes}</span>
      {isLiked && (
        <span className="absolute top-1.5 left-0.75 text-xs text-white rounded-full px-1 select-none">
          +1
        </span>
      )}
    </div>
  );
}
