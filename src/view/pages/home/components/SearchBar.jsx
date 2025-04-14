'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from '@/hook/useDebounce.js';

export const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 1000);

    // Llama a onSearch cuando el valor haya sido "debounced"
    useEffect(() => {
        onSearch(debouncedValue.trim().toLowerCase());
    }, [debouncedValue, onSearch]);

    return (
        <div className="flex flex-row justify-between items-center">
            <h2 className="text-gray-700 text-lg font-semibold mb-2">Lista de productos</h2>
            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Buscar..."
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </form>
        </div>
    );
};

