import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Loading from "../components/Loading";

const Home = () => {

    const [isLoading, setIsLoading] = useState(null)
    const [pokemons, setPokemons] = useState([])

    const loadPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(PokemonData => {
            setPokemons(PokemonData.results)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        setIsLoading(true)

        loadPokemons()
    }, [])

    return ( 
        <React.Fragment>
            {isLoading && <Loading/>}
            <List data={pokemons}/>
        </React.Fragment>
    );
}
 
export default Home;