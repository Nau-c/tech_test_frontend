'use client'
import { useEffect, useState } from 'react'
import { ImageComponent } from './components/ImageComponent'
import { Description } from './components/Description'
import { Actions } from './components/Actions'
import { getProductByIdApi } from '@/services/api'
import Link from 'next/link'
import { IoIosArrowRoundBack } from "react-icons/io"

export const ProductPage = ({ id }) => {
    const [productData, setProductData] = useState(null)

    const getProductData = async (id) => {
        try {
            const response = await getProductByIdApi(id)
            if (response) {
                setProductData(response)
            } else {
                console.error("No product data found")
            }

        } catch (error) {
            console.error("Error fetching product data:", error);
            return null;
        }
    }

    useEffect(() => {
        getProductData(id)
    }, [id])

    console.log("Product data:", productData);


    return (
        <div className='flex justify-center gap-10 h-[calc(100vh-5rem)] '>
            <Link href="/" className="flex justify-center items-start gap-2 hover:font-bold ">
                <IoIosArrowRoundBack size={40} />
                <span className="text-xl pt-2">Volver</span>
            </Link>
            <div className="w-1/4 h-2/3 p-10 flex flex-col"><ImageComponent imgUrl={productData?.imgUrl} model={productData?.model} /></div>
            <div className="w-2/4 flex flex-col gap-10 items-center p-10 relative">
                <Description productData={productData} />
                <Actions productId={id} />
            </div>
        </div>

    )
}
