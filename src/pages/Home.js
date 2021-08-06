import React, { useEffect, useState } from "react";
import useApiRequest from '../hooks/useApiRequest';
import CardList from "../components/CardList/CardList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Button from "../components/Button/Button";

const Home = () => {

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=105`)
    const { next, isLoading, error, pokemons, loadPokemons } = useApiRequest(url)

    useEffect(() => {
        document.title = 'Pokedéx'
    })

    const loadMore = () => {
        setUrl(next)
    }
   
    if(error) {
        return (<Error errorMessage={error} handleError={loadPokemons}/>)
    }

    return ( 
        <div className='Home'>
            {isLoading && <Loading/>}
            <CardList data={pokemons}/>
            {!next || isLoading === true? null : <Button buttonText={'Load more'} handleClick={loadMore} />}
        </div>
    );
}
 
export default Home;