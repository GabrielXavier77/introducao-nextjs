'use client'
import { useState, useEffect } from "react"
import Image from "next/image"

type Dog = {
    message: string;
}

export default function DogsPage() {
    const [dog, setDog] = useState<Dog>({message: ""})

    const fetchDog = async () => {
            const res = await fetch('https://dog.ceo/api/breeds/image/random')
            const newDog = await res.json()
            setDog({message: newDog.message})
        }

    useEffect(() => {
        fetchDog()
    }, [])

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-50">
            <div className="text-center">
                <h1 className="font-bold text-xl mb-10">Random Dog🐶</h1>
                {dog.message ? (<Image
                    src={dog.message}
                    alt="random-dog"
                    width={250}
                    height={250}
                    unoptimized
                    className="rounded-md shadow-2xl"
                />) : (<p>Carregando imagem...</p>)}
                <button onClick={fetchDog} className="mt-10 bg-blue-600 p-2 rounded-md text-white hover:cursor-pointer hover:shadow-md transition duration-300">Buscar outro cachorro</button>
            </div>
        </div>
    )
}