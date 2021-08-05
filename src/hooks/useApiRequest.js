import { useState, useEffect } from "react"

const useApiRequest = url => {

    const [next, setNext] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])

    const abortController = new AbortController()
    let isCancelled = false

    const loadPokemons = () => {
        if(error) {
            setError(null)
            setIsLoading(true)
        }
        fetch(url, { signal: AbortController.signal })
        .then(response => response.json())
        .then(PokemonData => {
            if(!isCancelled) {
                setNext(PokemonData.next)
                if (PokemonData.previous === null) {
                    setPokemons(PokemonData.results)
                } else {
                    setPokemons([...pokemons, ...PokemonData.results])
                } 
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
        setIsLoading(true)
        loadPokemons()
        return () => {
            abortController.abort()
            isCancelled = true
        }
    }, [url])

    return { next, isLoading, error, pokemons, loadPokemons }

}

export default useApiRequest;