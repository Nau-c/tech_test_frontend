export const getProductsApi = async () => {
    const res = await fetch('https://itx-frontend-test.onrender.com/api/product')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export const getProductByIdApi = async (id) => {
    const res = await fetch(`https://itx-frontend-test.onrender.com/api/product/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}