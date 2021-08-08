import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import capitalizeFirstLetter from "../utils/helpers"

const useApiRequest = url => {

    const [next, setNext] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])

    const { term } = useParams()

    const abortController = new AbortController()
    const previous = useRef(null)

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
            Promise.all(dataSet.results.filter(pokemon => {
                if(!term) {
                    return pokemon
                } else if (pokemon.name.includes(term)) {
                    return pokemon
                }
                return false
            }).map(pokemon => 
                fetch(pokemon.url)
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
                    if(!previous.current) {
                        setPokemons(data)
                        previous.current = true
                    } else {
                        setPokemons([...pokemons, ...data])
                    }
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
        return () => {
            abortController.abort()
            isCancelled = true
        }
    }, [url])

    return { next, isLoading, error, pokemons, loadPokemons }

}

export default useApiRequest;