'use client'
import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

export default function ButtonLike() {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const handleLike = () => {
    if (isLiked) return
    setIsLiked(true)

    setTimeout(() => {
      setIsLiked(false)
    }, 800)
  }

  return (
    <button
      className={`flex items-center p-4 w-[122px] shadow-md shadow-black/50 rounded-2xl hover:scale-105 
        transition-all ease-in-out duration-150 cursor-pointer justify-evenly 
        gap-2 border-purple-600 border-2 text-xl
        ${isLiked ? "bg-white text-purple-600" : "bg-purple-600 text-white"}`}
      onClick={() => {
        handleLike()
      }}
    >
      <span>{isLiked ? <FaHeart/> : <FaRegHeart/>}</span>
      <span>{isLiked ? "+1" : "Curtir"}</span>
    </button>
  )
}