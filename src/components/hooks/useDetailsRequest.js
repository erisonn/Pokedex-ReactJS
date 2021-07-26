import { useState, useEffect } from "react"

const useDetailsRequest = url => {

    const [isLoading, setIsLoading] = useState(null)
    const [itemData, setItemData] = useState([])
    const [itemLink, setItemLink] = useState('')

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            return {
                'name': data.name.toUpperCase(),
                'img' : data.sprites.other['official-artwork'].front_default,
                'order': data.order,
                'types' : data.types,
                'weight': 'Weight: ' + data.weight,
                'height': 'Height: ' + data.height
            }
        })
        .then(data => {
            setItemData(data)
            setItemLink(`/pokemon/${data.order}`)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [url])

    return { itemData, itemLink, isLoading }
}
export default useDetailsRequest;