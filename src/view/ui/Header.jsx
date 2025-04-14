'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SlBasket } from 'react-icons/sl'

export const Header = () => {
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const update = () => {
            const count = localStorage.getItem('cartCount') || 0
            setCartCount(parseInt(count))
        }

        update()
        window.addEventListener('cartCountUpdated', update)
        return () => window.removeEventListener('cartCountUpdated', update)
    }, [localStorage])

    return (
        <header className="flex h-24 items-center justify-between p-4 px-10 bg-white text-white">
            <Link href="/">
                <span className="text-4xl font-bold text-primary-green px-5">ACER</span>

            </Link>
            <div className='flex items-center gap-4 hover:cursor-pointer border-1 border-primary-green px-6 py-3 rounded-full hover:bg-primary-green text-primary-green hover:text-white'>
                <span><SlBasket size={30} /></span>
                <span className="bg-white text-custom-black rounded-full px-3 py-1 text-lg font-bold">{cartCount}</span>
            </div>

        </header>
    )
}
