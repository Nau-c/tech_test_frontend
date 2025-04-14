import { ProductPage } from "@/view/pages/product/Product.page"

export default async function Page({ params }) {
    const { id } = await params

    return (
        <main className="p-8 bg-white text-gray-900 h-[calc(100vh-5rem)] flex flex-col gap-6">
            <ProductPage id={id} />
        </main>
    )
}