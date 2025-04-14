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

            setModalMessage('Producto añadido correctamente ✅')
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
        <section className="w-full max-w-md bg-gray-100 p-6 rounded-xl shadow-md mt-6 space-y-4 ">
            <h3 className="text-xl font-semibold text-gray-800">Selecciona tus opciones</h3>

            <div>
                <label className="block mb-1 font-medium">Almacenamiento</label>
                <select
                    value={selectedStorage}
                    onChange={(e) => setSelectedStorage(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-gray-300"
                >
                    {storages.map((storage) => (
                        <option key={storage.code} value={storage.code}>
                            {storage.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block mb-1 font-medium">Color</label>
                <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-gray-300"
                >
                    {colors.map((color) => (
                        <option key={color.code} value={color.code}>
                            {color.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Botón de acción */}
            <button
                onClick={handleAddToCart}
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
                {loading ? 'Añadiendo...' : 'Añadir a la cesta'}
            </button>
            {isModalOpen && <ModalAlert message={modalMessage} onClose={closeModal} />}
        </section>
    )
}
