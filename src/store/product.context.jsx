import { createContext, useContext } from 'react';

export const ProductsContext = createContext()

ProductsContext.displayName = 'ProductsContext'

export const useProductsContext = () => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error('useProductsContext debe usarse dentro de un <ProductsContextProvider>')
    }
    return context
}
