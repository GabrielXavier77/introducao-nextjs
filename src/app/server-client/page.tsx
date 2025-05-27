'use client'

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle"

export default function ServerClient() {
    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])    

    return (
        <div>
            <h2>Data e Hora</h2>
            <p>{dateTime.toLocaleString()}</p>
            <ThemeToggle/>
        </div>


    )
}