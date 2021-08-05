import useApiRequest from "../hooks/useApiRequest";
import Error from "../components/Error/Error";
import Search from '../components/Search/Search'
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";

const SearchResults = () => {

    const { isLoading, error, pokemons, loadPokemons } = useApiRequest('https://pokeapi.co/api/v2/pokemon?limit=1118')
    const { term } = useParams();

    if(error) {
        return (<Error errorMessage={error} handleError={loadPokemons}/>)
    }

    return ( 
        <div className='search-results'>
            <Search/>
            <h2>Results for search query '{term}':</h2>
            { !term ? <p>Oops! Nothing found.</p> :
            <div className="card-list">
                {isLoading && <Loading/>}
                {pokemons && pokemons.filter((val) => {
                if (term === null) {
                    return val
                } else if (val.name.includes(term)) {
                    return val
                }
                    return false
                }).map(item => <Card itemURL ={item.url} key={item.url}/>)}
            </div>}
        </div>
    );
}
 
export default SearchResults;