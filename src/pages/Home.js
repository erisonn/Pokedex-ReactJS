import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Button from "../components/Button/Button";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])
    const [offSet, setOffSet] = useState(0)

    const loadPokemons = () => {
        if(error) {
            setError(null)
            setIsLoading(true)
        }
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offSet}`)
        .then(response => response.json())
        .then(PokemonData => {
            if(offSet === 0) {
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

    const loadMore = () => {
        setOffSet(offSet + 20)
    }

    useEffect(() => {
        setIsLoading(true)

        loadPokemons()
    }, [offSet])


    if(error) {
        return (<Error errorMessage={error} handleError={loadPokemons}/>)
    }

    return ( 
        <div className='Home'>
            {isLoading && <Loading/>}
            <List data={pokemons}/>
            {isLoading || <Button buttonText={'Load more.'} handleClick={loadMore} />}
        </div>
    );
}
 
export default Home;