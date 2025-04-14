import React from 'react'

export const Description = ({ productData }) => {
    if (!productData) return null;

    const {
        brand,
        model,
        price,
        cpu,
        ram,
        os,
        displayResolution,
        displaySize,
        battery,
        primaryCamera,
        secondaryCmera,
        dimentions,
        weight
    } = productData;

    const formatArray = (value) => Array.isArray(value) ? value.join(', ') : value || 'No disponible'

    return (
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Especificaciones del producto</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-700 text-sm sm:text-base">

                <div>
                    <dt className="font-semibold">Marca</dt>
                    <dd>{brand || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Modelo</dt>
                    <dd>{model || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Precio</dt>
                    <dd>{price ? `$${price}` : 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">CPU</dt>
                    <dd>{cpu || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">RAM</dt>
                    <dd>{ram || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Sistema Operativo</dt>
                    <dd>{os || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Resolución de Pantalla</dt>
                    <dd>{displaySize || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Tamaño de Pantalla</dt>
                    <dd>{displayResolution || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Batería</dt>
                    <dd>{battery || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Cámara Principal</dt>
                    <dd>{formatArray(primaryCamera)}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Cámara Frontal</dt>
                    <dd>{secondaryCmera || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Dimensiones</dt>
                    <dd>{dimentions || 'No disponible'}</dd>
                </div>

                <div>
                    <dt className="font-semibold">Peso</dt>
                    <dd>{weight || 'No disponible'}</dd>
                </div>

            </dl>
        </section>
    )
}
