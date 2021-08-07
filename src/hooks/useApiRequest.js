import { useState, useEffect } from "react"
import capitalizeFirstLetter from "../utils/helpers"

const useApiRequest = url => {

    const [next, setNext] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])

    const abortController = new AbortController()

    const loadPokemons = (isCancelled) => {
        if(error) {
            setError(null)
            setIsLoading(true)
        }
        fetch(url, { signal: AbortController.signal })
        .then(response => response.json())
        .then(dataSet => {
            if(!isCancelled) {
                setNext(dataSet.next)
            }
            Promise.all(dataSet.results.map(result => 
                fetch(result.url)
                .then(response => response.json())
                .then(data => {
                    return {
                        'link': '/pokemon/' + data.id ,
                        'name': capitalizeFirstLetter(data.name),
                        'img' : data.sprites.other['official-artwork'].front_default,
                        'id': data.id
                    }
                })
            ))
            .then(data => {
                if(!isCancelled) {
                    setPokemons([...pokemons, ...data])
                }
            })
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
        let isCancelled = false
        setIsLoading(true)
        loadPokemons(isCancelled)
        console.log('Render')
        return () => {
            abortController.abort()
            isCancelled = true
        }
    }, [url])

    return { next, isLoading, error, pokemons, loadPokemons }

}

export default useApiRequest;