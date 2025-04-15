// components/Breadcrumbs.js
import Link from 'next/link'

export const Breadcrumbs = ({ productName }) => {
    return (
        <nav className="text-lg text-gray-500 mb-4 w-full">
            <ol className="list-reset flex gap-2 items-center">
                <li>
                    <Link href="/" className="hover:text-hover-green font-medium">Inicio</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/" className="hover:text-hover-green font-medium">Productos</Link>
                </li>
                <li>/</li>
                <li className="text-gray-700">{productName || 'Cargando...'}</li>
            </ol>
        </nav>
    )
}
