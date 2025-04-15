'use client'
import { useEffect, useState } from 'react'
import { ImageComponent } from './components/ImageComponent'
import { Description } from './components/Description'
import { Actions } from './components/Actions'
import { getProductByIdApi } from '@/services/api'
import Link from 'next/link'
import { IoIosArrowRoundBack } from "react-icons/io"
import { ActionsSkeleton, DescriptionSkeleton, ImageSkeleton } from './Product.skeleton'

export const ProductPage = ({ id }) => {
    const [productData, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)

    const getProductData = async (id) => {
        setLoading(true)
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
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductData(id)
    }, [id])



    return (
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row justify-center gap-10 h-[calc(100vh-5rem)]">
            <Link href="/" className="flex justify-center items-start gap-2 hover:text-hover-green mb-6 sm:mb-0">
                <IoIosArrowRoundBack size={40} />
                <span className="text-xl pt-2">Volver</span>
            </Link>

            <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/4 p-10 flex flex-col">
                {loading ? <ImageSkeleton /> : <ImageComponent imgUrl={productData?.imgUrl} model={productData?.model} />}
            </div>

            <div className="w-full sm:w-2/4 lg:w-2/4 xl:w-2/4 flex flex-col gap-10 items-center p-10 relative">
                {loading ? <DescriptionSkeleton /> : <Description productData={productData} />}
                {loading ? <ActionsSkeleton /> : <Actions productId={id} />}
            </div>
        </div>
    )
}
