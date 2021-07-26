import React, { useEffect, useState } from "react";
import useApiRequest from '../components/hooks/useApiRequest'
import List from "../components/List/List";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Button from "../components/Button/Button";

const Home = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
    const {next, isLoading, error, pokemons, loadPokemons } = useApiRequest(url)
   
    const loadMore = () => {
        setUrl(next)
    }

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