import { useState, useEffect } from "react"
import capitalizeFirstLetter from '../utils/helpers'

const useDetailsRequest = url => {

    const [isLoading, setIsLoading] = useState(true)
    const [itemData, setItemData] = useState([])
    const [itemLink, setItemLink] = useState('')
    const [error, setError] = useState(null)

    const abortController = new AbortController()
    let isCancelled = false
  
    const loadDetails = () => {
        if(error) {
            setError(null)
            setIsLoading(true)
        }
        fetch(url, { signal: AbortController.signal })
        .then(response => response.json())
        .then(data => {
            return {
                'name': capitalizeFirstLetter(data.name),
                'img' : data.sprites.other['official-artwork'].front_default,
                'id': data.id,
                'types' : data.types,
                'weight': 'Weight: ' + data.weight/10 + ' kg',
                'height': 'Height: ' + data.height/10 + ' m',
                'ability': 'Ability: ' + capitalizeFirstLetter(data.abilities[0].ability.name),
                'stats': data.stats
            }
        })
        .then(data => {
            if(!isCancelled) {
                setItemData(data)
                setItemLink(`/pokemon/${data.id}`)
            } 
        })
        .catch(error => {
            if(!isCancelled) {
                console.log(error)
                setError('Error on load.')
            }
        })
        .finally(() => {
            if(!isCancelled) {
                setIsLoading(false)
            }
        })
    }
    useEffect(() => {
        loadDetails()

        return () => {
            abortController.abort();
            isCancelled = true
        }
    }, [url])

    return { itemData, itemLink, isLoading, error, loadDetails }
}
export default useDetailsRequest;