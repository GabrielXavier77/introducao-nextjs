"use client";

import { useState } from "react";
import Image from "next/image";

export default function Lamp() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`flex flex-col gap-4 justify-center items-center w-1/2 p-4 border-2 border-purple-600 rounded-2xl transition-colors duration-300
    ${isOn ? "bg-gray-100" : "bg-gray-800"}`}
    >
      <div className="w-[164px] h-[164px] relative">
        <Image
          src={isOn ? "/lampOn.png" : "/lampOff.png"}
          alt="lamp"
          fill
          className="object-cover w-[164px] h-[164px]"
        />
      </div>

      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-20 h-9 p-2 rounded-full transition-colors duration-300 border-2 border-purple-600 cursor-pointer
          ${isOn ? "bg-purple-600" : "bg-gray-200"}`}
      >
        <span
          className={`absolute top-0.5 left-1 w-7 h-7 rounded-full shadow-md transform transition-transform duration-300
          ${isOn ? "translate-x-[42px] bg-white" : "translate-x-0 bg-purple-600"}`}
        />
        <span className={`absolute top-2 text-sm font-bold ${
          isOn ? "left-2 text-white" : "right-2 text-purple-600"
        }`}>
          {isOn ? "ON" : "OFF"}
        </span>
      </button>
    </div>
  );
}
