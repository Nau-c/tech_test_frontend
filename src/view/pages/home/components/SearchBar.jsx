'use client';

import { useState } from 'react';

export const SearchBar = ({ onSearch, placeholder = "Buscar..." }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <div className="flex flex-row justify-between items-center">
            <h2 className="text-gray-700 text-lg font-semibold mb-2">Lista de productos</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </form>
        </div>
    );
};

