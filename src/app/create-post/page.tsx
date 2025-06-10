'use client'
import { useState } from "react";
import axios from "axios";
import { headers } from "next/headers";

type FormData = {
    title: string;
    body: string;
}

type ResponseData = {
    id: number;
    title: string;
    body: string;
}

export default function CreatePostPage() {
    const [formData, setFormData] = useState<FormData>({title: "", body: ""})

    const [responseData, setResponseData] = useState<ResponseData | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts", 
            formData, { headers: {"Content-Type" : "application/json"}})
        setResponseData(data)
    }

    return (
        <div className="flex justify-center items-center p-6">
            <div className="shadow-lg p-6 rounded">
                <h1 className="text-center font-bold text-2xl mb-5">
                    Criar Novo Post
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Título */}
                    <div>
                        <label className="block text-md font-medium">
                            Título:
                        </label>
                        <input 
                            className="w-full mt-1 border rounded px-3 py-2"
                            type="text"
                            name="title"
                            value={formData.title}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    {/* Conteúdo */}
                    <div>
                        <label className="block text-md font-medium">
                            Conteúdo:
                        </label>
                        <textarea
                            className="w-full mt-1 border rounded px-3 py-2"
                            name="body" 
                            rows={2}
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="bg-blue-600 text-white rounded mt-4 px-3 py-2
                    hover:bg-blue-700 cursor-pointer transition">
                        Publicar
                    </button>
                </form>
                {responseData && (
                    <div className="mt-6 border border-green-400 bg-green-200">
                        <p>Post criado com sucesso!</p>
                        <p>Id: {responseData.id}</p>
                        <p>Titulo: {responseData.title}</p>
                        <p>Conteudo: {responseData.body}</p>
                    </div>
                )}
            </div>
        </div>
    )
}