import { useState, useEffect } from "react"

const useApiRequest = url => {

    const [next, setNext] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])

    const loadPokemons = () => {
        if(error) {
            setError(null)
            setIsLoading(true)
        }
        fetch(url)
        .then(response => response.json())
        .then(PokemonData => {
            setNext(PokemonData.next)
            if (PokemonData.previous === null) {
                setPokemons(PokemonData.results)
            } else {
                setPokemons([...pokemons, ...PokemonData.results])
            }
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
        setIsLoading(true)

        loadPokemons()
    }, [url])

    return {next, isLoading, error, pokemons, loadPokemons }

}

export default useApiRequest;