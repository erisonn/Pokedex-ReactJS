import { useRef } from 'react';
import './Search.css'

const Search = ({ setSearchTerm }) => {

    const value = useRef(null)

    const handleClick = () => {
        setSearchTerm(value.current)
    }

    return ( 
        <div role="search" className='search'>
            <input aria-label="search term" placeholder='Search...' onChange={(event) => value.current = event.target.value}/>
            <button aria-label="search" onClick={() => handleClick()}>Search</button>
        </div>
    );
}
 
export default Search;