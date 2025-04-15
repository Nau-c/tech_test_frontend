import React from 'react'

export const ModalAlert = ({ message, onClose }) => {
    return (
        <div className="fixed top-[6rem] right-[5rem] bg-white p-6 rounded-lg shadow-lg shadow-gray-300 max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800">{message}</h3>
            <button
                onClick={onClose}
                className="mt-4 w-full bg-primary-green text-white font-semibold py-2 px-4 rounded-full hover:bg-hover-green transition-colors"
            >
                Cerrar
            </button>
        </div>
    )
}
