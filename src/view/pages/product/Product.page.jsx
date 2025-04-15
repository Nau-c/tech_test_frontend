'use client'
import React from 'react';

import { useEffect, useState } from 'react'
import { ImageComponent } from './components/ImageComponent'
import { Description } from './components/Description'
import { Actions } from './components/Actions'
import { getProductByIdApi } from '@/services/api'
import Link from 'next/link'
import { IoIosArrowRoundBack } from "react-icons/io"
import { ActionsSkeleton, DescriptionSkeleton, ImageSkeleton } from './Product.skeleton'
import { ModalAlert } from '@/view/ui/ModalAlert'
import { Breadcrumbs } from '@/view/ui/BreadCramps'

export const ProductPage = ({ id }) => {
    const [productData, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)

    const [modalMessage, setModalMessage] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const getProductData = async (productId) => {
        setLoading(true)

        try {
            const cacheKey = `product-${productId}`
            const cachedData = localStorage.getItem(cacheKey)

            if (cachedData) {
                try {
                    const parsedProduct = JSON.parse(cachedData)

                    if (String(parsedProduct?.id) === String(productId)) {
                        console.log('Usando producto desde cache')
                        setProductData(parsedProduct)
                        setLoading(false)
                        return
                    } else {
                        console.warn('Producto en cache no coincide, eliminando...')
                        localStorage.removeItem(cacheKey)
                    }
                } catch (parseError) {
                    console.error("Error parseando cache, eliminando...")
                    localStorage.removeItem(cacheKey)
                }
            }

            const response = await getProductByIdApi(productId)

            if (response) {
                setProductData(response)
                localStorage.setItem(cacheKey, JSON.stringify(response))
            } else {
                console.error("No se encontró el producto")
                setModalMessage('No se encontró el producto')
                setIsModalOpen(true)
            }

        } catch (error) {
            console.error("Error al obtener el producto:", error)
            setModalMessage('Error al cargar el producto')
            setIsModalOpen(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductData(id)
    }, [id])

    const closeModal = () => {
        setIsModalOpen(false)
    }



    return (
        <div className="flex flex-col">
            <Breadcrumbs productName={productData?.model} />
            <div className="flex flex-col lg:flex-row xl:flex-row lg:p-10 xl:p-10 justify-center items-start gap-10 lg:mx-6 xl:mx-6">
                <Link href="/" className="flex justify-center sm:justify-end sm:items-end items-start gap-2 hover:text-hover-green mb-6">
                    <IoIosArrowRoundBack size={40} />
                    <span className="text-xl pt-2">Volver</span>
                </Link>

                <div className="w-full sm:w-full md:w-full lg:w-2/3 xl:w-1/3 lg:p-10 xl:p-10">
                    {loading ? <ImageSkeleton /> : <ImageComponent imgUrl={productData?.imgUrl} model={productData?.model} />}
                </div>

                <div className="w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3 flex flex-col gap-10 justify-center items-start p-10  relative sm:p-0 md:p-2  lg:pl-[10%] xl:pl-[10%] ">
                    {loading ? <DescriptionSkeleton /> : <Description productData={productData} />}
                    {loading ? <ActionsSkeleton /> : <Actions productId={id} />}
                </div>
            </div>

            {isModalOpen && <ModalAlert message={modalMessage} onClose={closeModal} />}

        </div>
    )
}
