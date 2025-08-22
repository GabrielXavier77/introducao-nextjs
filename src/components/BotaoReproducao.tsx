'use client'

import { useState } from "react"
import { FaPlay } from "react-icons/fa6"
import { FaPause } from "react-icons/fa"

export default function BotaoReproducao() {
  const [isPlayed, setIsPlayed] = useState<boolean>(false)

  return (
    <button
      className={`flex items-center justify-center w-[128px] p-4 shadow-md 
      shadow-black/50 rounded-2xl hover:scale-105 transition-all ease-in-out 
      duration-150 cursor-pointer gap-2 border-purple-600 border-2 text-xl
      ${isPlayed ? "bg-purple-600 text-white" : "text-purple-600"}`}
      onClick={() => setIsPlayed(!isPlayed)}
    >
      <span>{isPlayed ? "Pause" : "Play"}</span>
      <span>{isPlayed ? <FaPause/> : <FaPlay/>}</span>
    </button>
  )
}