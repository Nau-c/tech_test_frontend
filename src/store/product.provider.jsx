'use client';
import React from 'react';


import { useEffect } from 'react';
import { useCachedFetch } from '@/hook/useCachedFetch.js';
import { getProductsApi } from '@/services/api';
import { ProductsContext } from '@/store/product.context';

export const ProductsContextProvider = ({ children }) => {
    const { data: products, loading, error } = useCachedFetch('products', getProductsApi);

    useEffect(() => {
        if (error) {
            console.error('Error al cargar los productos:', error);
        }
    }, [error]);

    const value = {
        products,
        loading,
        error,
    }

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}