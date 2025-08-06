"use client";

import { useState } from "react";

interface CounterProps {
  initial: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState<number>(props.initial);

  return (
    <div className="w-1/4 p-4 border-2 border-purple-600 bg-gray-100 rounded-2xl">
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="relative w-full flex justify-center items-center">
          <h1 className="font-bold text-2xl text-center">Contador</h1>
          <button
            onClick={() => setCount(props.initial)}
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
  );
}
