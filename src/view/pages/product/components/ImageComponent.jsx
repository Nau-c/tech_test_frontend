import React from 'react'
import Image from 'next/image'


export const ImageComponent = ({ imgUrl, model }) => {
    if (!imgUrl) return null;

    return (
        <div className='w-full h-full pt-10 flex justify-center items-start hove:w-[500px] hover:h-[950px] transition-all'>
            <Image
                src={imgUrl}
                width={350}
                height={700}
                alt={model}
                className="object-contain mb-4 transition-transform duration-300 hover:scale-120"
            />
        </div>
    )
}
