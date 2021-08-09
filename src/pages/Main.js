import React, { useEffect } from "react";
import useApiRequest from '../hooks/useApiRequest';
import CardList from "../components/CardList/CardList";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import { useParams, NavLink } from "react-router-dom";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Main = () => {

    const { searchQuery } = useParams()
    const url = searchQuery ? 'https://pokeapi.co/api/v2/pokemon?limit=1118':'https://pokeapi.co/api/v2/pokemon?limit=56'
    const { next, isLoading, error, pokemons, loadPokemons, isMounted } = useApiRequest(url)
    const [isBottom, setIsBottom] = useInfiniteScroll(next, () => loadPokemons(isMounted, next));
    
    useEffect(() => {
        document.title = 'Pokedéx'

        setIsBottom(false)
    }, [isBottom, setIsBottom])

    if(error) {
        return (<Error errorMessage={error} handleError={() => loadPokemons(isMounted, url)}/>)
    }

    return ( 
        <div className='Home'>
            {isLoading && <Loading />}
            {searchQuery && 
            <div className='search-results'>
                <div className='search-title'>
                    <NavLink to='/'><img src="https://img.icons8.com/color/48/000000/cancel--v1.png" alt='Close'/></NavLink>
                    <h2>Results for search query '{searchQuery}'</h2>
                </div>
            </div>}
            <CardList data={pokemons}/>
        </div>
    );
}
 
export default Main;