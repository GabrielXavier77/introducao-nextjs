'use client'

import { useState } from "react"

export default function ClientCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => {setCount(count => count + 1)}}>Incrementar</button>
        </div>
    )
}