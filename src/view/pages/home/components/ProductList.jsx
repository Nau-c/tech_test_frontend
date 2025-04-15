'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { ProductItem } from './ProductItem.jsx'
import { useProductsContext } from '@/store/product.context.jsx'
import { ProductItemSkeleton } from './ProductList.skeleton.jsx'

export const ProductList = ({ searchQuery }) => {
    const { products, loading, error } = useProductsContext()
    const [filteredProducts, setFilteredProducts] = useState(products ?? [])


    const getFilteredProducts = useCallback(() => {
        if (!searchQuery) return products;

        return products?.filter(product => {
            const query = searchQuery.toLowerCase();
            const modelMatch = product.model.toLowerCase().includes(query);
            const brandMatch = product.brand.toLowerCase().includes(query);
            const priceMatch = product.price.toString().includes(query);

            return modelMatch || brandMatch || priceMatch;
        })
    }, [products, searchQuery])

    useEffect(() => {
        const filtered = getFilteredProducts();
        setFilteredProducts(filtered ?? []);
    }, [getFilteredProducts]);


    if (loading) return <span>Cargando productos...</span>
    if (error) return <span>Error: {error}</span>
    if (!products || products.length === 0) return <span>No hay productos disponibles</span>
    if (filteredProducts.length === 0) return <span>No hay productos disponibles</span>



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 h-[calc(100vh-14rem)] overflow-y-auto p-4">
            {loading
                ? Array.from({ length: 8 }).map((_, i) => <ProductItemSkeleton key={i} />)
                : filteredProducts?.map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        imgUrl={product.imgUrl}
                        brand={product.brand}
                        model={product.model}
                        price={product.price}
                    />
                ))
            }
        </div>
    )
}
