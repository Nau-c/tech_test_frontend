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

export const addProductToCartApi = async (productId, selectedColor, selectedStorage) => {
    const res = await fetch('https://itx-frontend-test.onrender.com/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: productId,
            colorCode: selectedColor,
            storageCode: selectedStorage
        })
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    return data
}