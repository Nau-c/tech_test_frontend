'use client'
import React from 'react'
import { SearchBar } from './components/SearchBar.jsx'
import { ProductList } from './components/ProductList.jsx'

export const HomePage = () => {
    return (
        <div className="flex flex-col gap-6">
            <SearchBar onSearch={() => console.log('hi')} />
            <ProductList />
        </div>
    )
}

