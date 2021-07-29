import { useState, useEffect } from "react"
import capitalizeFirstLetter from '../utils/helpers'

const useDetailsRequest = url => {

    const [isLoading, setIsLoading] = useState(true)
    const [itemData, setItemData] = useState([])
    const [itemLink, setItemLink] = useState('')
    const [error, setError] = useState(null)
  
    const loadDetails = () => {
        if(error) {
            setError(null)
            setIsLoading(true)
        }
        fetch(url)
        .then(response => response.json())
        .then(data => {
            return {
                'name': capitalizeFirstLetter(data.name),
                'img' : data.sprites.other['official-artwork'].front_default,
                'id': data.id,
                'types' : data.types,
                'weight': 'Weight: ' + data.weight/10 + ' kg',
                'height': 'Height: ' + data.height/10 + ' m',
                'ability': 'Ability: ' + capitalizeFirstLetter(data.abilities[0].ability.name)
            }
        })
        .then(data => {
            setItemData(data)
            setItemLink(`/pokemon/${data.id}`)
        })
        .catch(error => {
            console.log(error)
            setError('Error on load.')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
    useEffect(() => {
        loadDetails()
    }, [url])

    return { itemData, itemLink, isLoading, error, loadDetails }
}
export default useDetailsRequest;