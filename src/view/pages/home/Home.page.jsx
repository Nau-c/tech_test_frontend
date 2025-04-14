'use client'
import { useState } from 'react'
import { SearchBar } from './components/SearchBar.jsx'
import { ProductList } from './components/ProductList.jsx'

export const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState(null);

    return (
        <div className="flex flex-col gap-6">
            <SearchBar onSearch={setSearchQuery} />
            <ProductList searchQuery={searchQuery} />
        </div>
    )
}

