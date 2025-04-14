'use client'

import React from 'react'
import { ProductItem } from './ProductItem.jsx'
import { getProductsApi } from '@/services/api.js'
import { useCachedFetch } from '@/hook/useCachedFetch.js'

export const ProductList = () => {
    const { data: products, loading, error } = useCachedFetch('products', getProductsApi)

    if (loading) return <span>Cargando productos...</span>
    if (error) return <span>Error: {error}</span>
    if (!products || products.length === 0) return <span>No hay productos disponibles</span>


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    imgUrl={product.imgUrl}
                    brand={product.brand}
                    model={product.model}
                    price={product.price}
                />
            ))}
        </div>
    )
}
