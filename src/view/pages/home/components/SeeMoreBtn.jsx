import React from 'react'

export const SeeMoreBtn = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <div className="bg-white px-4 py-2 rounded-full shadow flex items-center gap-2 text-gray-700 hover:bg-gray-100">

                <span className="text-sm font-medium">Ver más</span>
            </div>
        </div>
    )
}
