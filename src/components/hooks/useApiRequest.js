import { useState, useEffect } from "react"

const useApiRequest = url => {

    const [isLoading, setIsLoading] = useState(null)
    const [itemData, setItemData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            return {
                'name': data.name.toUpperCase(),
                'img' : data.sprites.front_default
            }
        })
        .then(data => {
            setItemData(data)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [url])

    return { itemData, isLoading }
}
export default useApiRequest;