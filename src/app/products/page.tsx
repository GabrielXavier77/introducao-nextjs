'use client'

import { useState } from "react"

export default function Products() {
    const products = [
        {name: 'Camisa', price: 35, id: 1},
        {name: 'Borracha', price: 2.5, id: 2},
        {name: 'Fone', price: 20, id: 3}
    ]

    return (
        <div>
            <h2>Lista de Produtos:</h2>
            <ul>
                {
                    products.map((product) => (
                        <li>{product.name} R${product.price.toFixed(2)}</li>
                    ))
                }
            </ul>
        </div>
    )
}