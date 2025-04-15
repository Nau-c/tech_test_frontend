import { useState } from 'react'
import { addProductToCartApi } from '@/services/api'
import { ModalAlert } from './ModalAlert'

const options = {
    colors: [
        { name: 'Blue', code: '1' },
        { name: 'White', code: '2' }
    ],
    storages: [
        { name: '16 GB', code: '1' },
        { name: '32 GB', code: '2' },
    ]

}

export const Actions = ({ productId }) => {
    const { colors = [], storages = [] } = options

    const [selectedColor, setSelectedColor] = useState(colors[0]?.code || '')
    const [selectedStorage, setSelectedStorage] = useState(storages[0]?.code || '')
    const [loading, setLoading] = useState(false)

    const [modalMessage, setModalMessage] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const updateCartCount = (count) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cartCount', count)
            const event = new Event('cartCountUpdated')
            window.dispatchEvent(event)
        }
    }

    const handleAddToCart = async () => {
        setLoading(true)
        try {
            const res = await addProductToCartApi(productId, selectedColor, selectedStorage)
            console.log('Respuesta del servidor:', res);

            if (res?.count != null) {
                updateCartCount(res.count)
            }

            setModalMessage('Producto añadido correctamente')
            setIsModalOpen(true)
        } catch (error) {
            console.error('Error al añadir el producto', error)
            setModalMessage('Error al añadir el producto')
            setIsModalOpen(true)
        } finally {
            setLoading(false)
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <section className="w-full bg-white p-0 sm:p-2 mx-4 sm:mx-0 sm:m-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Selecciona tus opciones</h3>

            <div className="w-fit flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 sm:gap-10  justify-center items-start">
                <div className="w-full">
                    <label className="block mb-2 font-medium">Almacenamiento</label>
                    <select
                        value={selectedStorage}
                        onChange={(e) => setSelectedStorage(e.target.value)}
                        className="w-72 sm:w-40 md:w-52 lg:w-52 xl:w-52 px-3 py-2 rounded border border-gray-300 outline-primary-green"
                    >
                        {storages.map((storage) => (
                            <option key={storage.code} value={storage.code}>
                                {storage.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full">
                    <label className="block mb-2 font-medium">Color</label>
                    <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="w-72 sm:w-40 md:w-52 lg:w-52 xl:w-52 px-3 py-2 rounded border border-gray-300 outline-primary-green"
                    >
                        {colors.map((color) => (
                            <option key={color.code} value={color.code}>
                                {color.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={handleAddToCart}
                disabled={loading}
                className="w-full sm:w-[28.5rem] mt-6 bg-primary-green text-white text-lg font-semibold py-3 px-4 rounded-full hover:bg-hover-green active:bg-primary-green transition-colors disabled:opacity-50"
            >
                {loading ? 'Añadiendo...' : 'Añadir a la cesta'}
            </button>

            {isModalOpen && <ModalAlert message={modalMessage} onClose={closeModal} />}
        </section>
    )
}
