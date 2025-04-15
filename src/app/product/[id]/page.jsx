import { ProductPage } from "@/view/pages/product/Product.page"

export default async function Page({ params }) {
    const { id } = await params

    return (
        <main className="p-8 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-white text-gray-900 h-[calc(100vh-6rem)] overflow-y-auto flex flex-col gap-6 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            <ProductPage id={id} />
        </main>
    )
}