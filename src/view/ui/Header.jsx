import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="flex h-20 items-center justify-between p-4 bg-gray-800 text-white shadow-md">
            <Link href="/"><div>Logo</div></Link>
            <div>
                Icon: in store
            </div>

        </header>
    )
}
