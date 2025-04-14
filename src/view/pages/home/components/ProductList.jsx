'use client'

import { useEffect, useMemo } from 'react'
import { ProductItem } from './ProductItem.jsx'
import { useProductsContext } from '@/store/product.context.jsx'

export const ProductList = ({ searchQuery }) => {
    const { products, loading, error } = useProductsContext()

    const filteredProducts = useMemo(() => {
        if (!searchQuery) return products;

        return products?.filter(product => {
            const query = searchQuery.toLowerCase();
            const modelMatch = product.model.toLowerCase().includes(query);
            const brandMatch = product.brand.toLowerCase().includes(query);
            const priceMatch = product.price.toString().includes(query);

            return modelMatch || brandMatch || priceMatch;
        })
    }, [searchQuery])


    if (loading) return <span>Cargando productos...</span>
    if (error) return <span>Error: {error}</span>
    if (!products || products.length === 0) return <span>No hay productos disponibles</span>


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[calc(100vh-12rem)] overflow-y-auto p-4">
            {filteredProducts && filteredProducts.map(product => (
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
