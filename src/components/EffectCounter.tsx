"use client"
import { useEffect, useState } from "react"

export default function EffectCounter() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    document.title = `${count}`
  }, [count])

  return (
    <div className="w-1/4 p-4 border-2 border-purple-600 bg-purple-300 rounded-2xl">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="relative w-full flex justify-center items-center">
          <h1 className="font-bold text-2xl text-center -ml-8">Contador useEffect</h1>
          <button
            onClick={() => setCount(0)}
            className="absolute right-0 bg-red-600 text-white text-sm px-2 py-1 rounded-2xl cursor-pointer"
          >
            Resetar
          </button>
        </div>
        <p className="text-gray-700 text-lg">{count}</p>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-purple-600 text-white px-3 py-2 rounded-2xl cursor-pointer"
          >
            Incrementar
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="border-2 border-purple-600 text-purple-600 px-3 py-2 rounded-2xl cursor-pointer"
          >
            Decrementar
          </button>
        </div>
      </div>
    </div>
  )
}