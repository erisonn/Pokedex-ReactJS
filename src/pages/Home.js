import React, { useState } from "react";
import useApiRequest from '../hooks/useApiRequest';
import CardList from "../components/CardList/CardList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Button from "../components/Button/Button";
import Search from "../components/Search/Search";

const Home = () => {

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=153`)
    const {next, isLoading, error, pokemons, loadPokemons, searchTerm, setSearchTerm } = useApiRequest(url)

    const loadMore = () => {
        setUrl(next)
    }

    if(error) {
        return (<Error errorMessage={error} handleError={loadPokemons}/>)
    }

    return ( 
        <div className='Home'>
            {isLoading && <Loading/>}
            {isLoading || <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setUrl={setUrl}/>}
            <CardList data={pokemons} searchTerm={searchTerm}/>
            {next && <Button buttonText={'Load more.'} handleClick={loadMore} />}
        </div>
    );
}
 
export default Home;