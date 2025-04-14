export default async function Page({ params }) {
    const { slug } = await params
    const productData = await getProductDataApi(slug)

    return (
        // <ProductPage data={productData} />
        <div>Wip</div>
    )
}