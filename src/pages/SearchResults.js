import useApiRequest from "../hooks/useApiRequest";
import Error from "../components/Error/Error";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import { NavLink, useParams } from "react-router-dom";

const SearchResults = () => {

    const { isLoading, error, pokemons, loadPokemons } = useApiRequest('https://pokeapi.co/api/v2/pokemon?limit=1118')
    const { term } = useParams();

    if(error) {
        return (<Error errorMessage={error} handleError={loadPokemons}/>)
    }

    return ( 
        <div className='search-results'>
            <div className='search-title'>
                <NavLink to='/'>x</NavLink>
                <h2>Results for search query '{term}'</h2>
            </div>
            { !term ? <p>Oops! Nothing found.</p> : 
            <div className="card-list">
                {isLoading && <Loading/>}
                {pokemons && pokemons.filter(pokemon => {
                if (!term) {
                    return pokemon
                } else if (pokemon.name.toLowerCase().includes(term)) {
                    return pokemon
                }
                    return false
                }).map(item => <Card itemIMG ={item.img} itemName={item.name} itemLink={item.link} key={item.id}/>)}
            </div>
            }
        </div>
    );
}
 
export default SearchResults;