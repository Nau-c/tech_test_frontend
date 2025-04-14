import Link from 'next/link'
import React from 'react'
import { SlBasket } from 'react-icons/sl'

export const Header = () => {
    return (
        <header className="flex h-20 items-center justify-between p-4 px-10 bg-gray-800 text-white shadow-md">
            <Link href="/"><span className="text-2xl font-bold hover:text-lime-700">ACER</span></Link>
            <div className='flex items-center gap-4 hover:cursor-pointer'>
                <SlBasket size={30} />
                <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">0</span>
            </div>

        </header>
    )
}
