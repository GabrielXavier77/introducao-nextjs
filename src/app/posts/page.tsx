'use client'
import { useState, useEffect } from "react"

type Post = {
    id: number;
    title: string;
    body: string;
}

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([])
    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const data = await res.json()
            setPosts(data)
        }
        fetchPosts()
    }, [])

    return (
        <div className="flex flex-wrap justify-center items-center bg-fuchsia-500 h-screen">
            <h1 className="self-start text-3xl w-full font-bold mb-6 mt-6 text-center">
                Últimos Posts
            </h1>

            {posts.map((post, index) => (
                <div className="flex flex-wrap w-3/4 border-2 border-gray-200 rounded-md p-4 mb-6 shadow-md" key={index}>
                    <h2 className="w-full font-semibold text-xl mb-3">{post.title}</h2>
                    <p className="w-3/4">{post.body}</p>
                </div>
            ))}
        </div>
    )
}