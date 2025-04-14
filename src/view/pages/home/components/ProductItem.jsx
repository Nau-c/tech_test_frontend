'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SeeMoreBtn } from './SeeMoreBtn.jsx'

export const ProductItem = ({ id, imgUrl, brand, model, price }) => {
    return (
        <div className="relative w-full max-w-xs h-80 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 group transition-all">
            <Link href={`/product/${id}`} className="flex flex-col items-center p-4 relative z-10">
                <Image
                    src={imgUrl}
                    width={500}
                    height={500}
                    alt="Picture of the product"
                    className="w-full h-40 object-contain mb-4 transition-all"
                />
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {brand} {model}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        {price ? `$${price}` : 'Para confirmar'}
                    </p>
                </div>
                <SeeMoreBtn />
            </Link>
        </div>
    )
}
