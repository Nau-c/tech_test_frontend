import { useEffect, useState } from 'react'

const ONE_HOUR = 1000 * 60 * 60

export function useCachedFetch(dataType, apiFunction, expiration = ONE_HOUR) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!apiFunction || !dataType) return

        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const cached = localStorage.getItem(dataType)

                if (cached) {
                    const parsed = JSON.parse(cached)
                    const isExpired = Date.now() - parsed.timestamp > expiration

                    if (!isExpired) {
                        setData(parsed.data)
                        setLoading(false)
                        return
                    } else {
                        localStorage.removeItem(dataType)
                    }
                }

                const res = await apiFunction()

                localStorage.setItem(
                    dataType,
                    JSON.stringify({ data: res, timestamp: Date.now() })
                )

                setData(res)
            } catch (err) {
                setError(err.message || 'Error inesperado')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [dataType, apiFunction, expiration])

    return { data, loading, error }
}
