import { useState, useEffect, useCallback , useRef } from "react"
import { useParams } from "react-router-dom"
import capitalizeFirstLetter from "../utils/helpers"

// CORRIGIR PAGINAÇÃO

const useApiRequest = url => {

    const { searchQuery } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])

    const [next, setNext] = useState(null)

    const abortController =  new AbortController()
    const isMounted = useRef(null)

    const loadPokemons = useCallback((isMounted, url) => {
        setIsLoading(true)
        if(error) {
            setError(null)
        }
        fetch(url, { signal: AbortController.signal })
        .then(response => response.json())
        .then(dataSet => {
            if(isMounted) {
                setNext(dataSet.next)
            }
            Promise.all(dataSet.results.filter(pokemon => {
                if(!searchQuery) {
                    return pokemon
                } else if (pokemon.name.includes(searchQuery)) {
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
                if(isMounted) {
                    if(!dataSet.previous) {
                        setPokemons(data)
                    } else {
                        setPokemons([...pokemons, ...data])
                    }
                }
            })
        })
        .catch(error => {
            if(isMounted) {
                console.log(error)
                setError('Error on load.')
            }
        })
        .finally(() => {
            if(isMounted) {
                setIsLoading(false)       
            }
        })
    }, [error, pokemons, searchQuery])

    useEffect(() => {
        isMounted.current = true
        setIsLoading(true)
        loadPokemons(isMounted, url)
        return () => {
            abortController.abort()
            isMounted.current = false
        }
    }, [searchQuery, url])

    return { next, isLoading, error, pokemons, loadPokemons, isMounted }

}

export default useApiRequest;